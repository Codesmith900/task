import React, { useState, useMemo } from 'react';
import { Search, Filter, ChevronDown, ChevronUp, Settings, Eye, EyeOff, Calendar, User, Code } from 'lucide-react';

const FeatureFlagList = () => {
  // Sample feature flags data
  const [featureFlags] = useState([
    {
      id: 1,
      name: 'video_compression_v2',
      displayName: 'Video Compression V2',
      description: 'Enhanced video compression algorithm with improved quality',
      enabled: true,
      environment: 'production',
      createdBy: 'john.doe',
      createdAt: '2024-09-15',
      lastModified: '2024-09-18',
      type: 'release',
      tags: ['performance', 'video'],
      rolloutPercentage: 85
    },
    {
      id: 2,
      name: 'adaptive_bitrate',
      displayName: 'Adaptive Bitrate Streaming',
      description: 'Dynamically adjust video quality based on network conditions',
      enabled: false,
      environment: 'staging',
      createdBy: 'jane.smith',
      createdAt: '2024-09-10',
      lastModified: '2024-09-17',
      type: 'experiment',
      tags: ['streaming', 'performance'],
      rolloutPercentage: 25
    },
    {
      id: 3,
      name: 'h265_encoding',
      displayName: 'H.265 Encoding Support',
      description: 'Enable H.265/HEVC encoding for better compression',
      enabled: true,
      environment: 'production',
      createdBy: 'mike.wilson',
      createdAt: '2024-09-05',
      lastModified: '2024-09-16',
      type: 'feature',
      tags: ['codec', 'compression'],
      rolloutPercentage: 100
    },
    {
      id: 4,
      name: 'gpu_acceleration',
      displayName: 'GPU Acceleration',
      description: 'Use GPU for hardware-accelerated video encoding',
      enabled: true,
      environment: 'production',
      createdBy: 'sarah.johnson',
      createdAt: '2024-08-28',
      lastModified: '2024-09-12',
      type: 'performance',
      tags: ['gpu', 'acceleration'],
      rolloutPercentage: 60
    },
    {
      id: 5,
      name: 'realtime_preview',
      displayName: 'Real-time Preview',
      description: 'Show real-time preview during video processing',
      enabled: false,
      environment: 'development',
      createdBy: 'alex.brown',
      createdAt: '2024-09-01',
      lastModified: '2024-09-14',
      type: 'ui',
      tags: ['preview', 'ui'],
      rolloutPercentage: 10
    },
    {
      id: 6,
      name: 'batch_processing',
      displayName: 'Batch Processing',
      description: 'Process multiple videos simultaneously',
      enabled: true,
      environment: 'production',
      createdBy: 'chris.davis',
      createdAt: '2024-08-20',
      lastModified: '2024-09-10',
      type: 'feature',
      tags: ['batch', 'processing'],
      rolloutPercentage: 75
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterEnvironment, setFilterEnvironment] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  // Get unique values for filters
  const environments = [...new Set(featureFlags.map(flag => flag.environment))];
  const types = [...new Set(featureFlags.map(flag => flag.type))];

  // Filtered and sorted data
  const filteredAndSortedFlags = useMemo(() => {
    let filtered = featureFlags.filter(flag => {
      const matchesSearch = 
        flag.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        flag.displayName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        flag.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        flag.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesEnvironment = filterEnvironment === 'all' || flag.environment === filterEnvironment;
      const matchesType = filterType === 'all' || flag.type === filterType;
      const matchesStatus = filterStatus === 'all' || 
        (filterStatus === 'enabled' && flag.enabled) ||
        (filterStatus === 'disabled' && !flag.enabled);

      return matchesSearch && matchesEnvironment && matchesType && matchesStatus;
    });

    // Sort the filtered results
    filtered.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      
      if (sortBy === 'enabled') {
        aValue = a.enabled ? 1 : 0;
        bValue = b.enabled ? 1 : 0;
      }
      
      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }
      
      if (sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

    return filtered;
  }, [featureFlags, searchTerm, sortBy, sortOrder, filterEnvironment, filterType, filterStatus]);

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const getSortIcon = (field) => {
    if (sortBy !== field) return null;
    return sortOrder === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />;
  };

  const getStatusBadge = (enabled) => (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
      enabled 
        ? 'bg-green-100 text-green-800 border border-green-200' 
        : 'bg-red-100 text-red-800 border border-red-200'
    }`}>
      {enabled ? <Eye className="w-3 h-3 mr-1" /> : <EyeOff className="w-3 h-3 mr-1" />}
      {enabled ? 'Enabled' : 'Disabled'}
    </span>
  );

  const getEnvironmentBadge = (environment) => {
    const colors = {
      production: 'bg-blue-100 text-blue-800 border-blue-200',
      staging: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      development: 'bg-purple-100 text-purple-800 border-purple-200'
    };
    
    return (
      <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium border ${colors[environment] || 'bg-gray-100 text-gray-800 border-gray-200'}`}>
        {environment.charAt(0).toUpperCase() + environment.slice(1)}
      </span>
    );
  };

  const getTypeBadge = (type) => (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 border border-indigo-200">
      <Code className="w-3 h-3 mr-1" />
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Feature Flags</h1>
          <p className="text-gray-600">Manage and monitor feature flags across environments</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search flags, descriptions, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Environment Filter */}
            <select
              value={filterEnvironment}
              onChange={(e) => setFilterEnvironment(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Environments</option>
              {environments.map(env => (
                <option key={env} value={env}>{env.charAt(0).toUpperCase() + env.slice(1)}</option>
              ))}
            </select>

            {/* Type Filter */}
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              {types.map(type => (
                <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
              ))}
            </select>

            {/* Status Filter */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="enabled">Enabled</option>
              <option value="disabled">Disabled</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Showing {filteredAndSortedFlags.length} of {featureFlags.length} feature flags
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('name')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Flag Name</span>
                      {getSortIcon('name')}
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('enabled')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Status</span>
                      {getSortIcon('enabled')}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('environment')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Environment</span>
                      {getSortIcon('environment')}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('type')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Type</span>
                      {getSortIcon('type')}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('rolloutPercentage')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Rollout</span>
                      {getSortIcon('rolloutPercentage')}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('lastModified')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Last Modified</span>
                      {getSortIcon('lastModified')}
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAndSortedFlags.map((flag) => (
                  <tr key={flag.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{flag.displayName}</div>
                        <div className="text-sm text-gray-500 font-mono">{flag.name}</div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {flag.tags.map(tag => (
                            <span key={tag} className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs">
                        {flag.description}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(flag.enabled)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getEnvironmentBadge(flag.environment)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getTypeBadge(flag.type)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${flag.rolloutPercentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-900">{flag.rolloutPercentage}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1 text-gray-400" />
                        {flag.lastModified}
                      </div>
                      <div className="flex items-center mt-1">
                        <User className="w-4 h-4 mr-1 text-gray-400" />
                        <span className="text-xs text-gray-500">{flag.createdBy}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                        Edit
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <Settings className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredAndSortedFlags.length === 0 && (
          <div className="text-center py-12">
            <Filter className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No feature flags found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search terms or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureFlagList;