# task

# Feature Flag List View

A modern React application for managing and monitoring feature flags with advanced filtering, sorting, and real-time updates.

<img width="1920" height="1080" alt="Screenshot (3)" src="https://github.com/user-attachments/assets/31654607-8b9c-4360-9b9a-7d555c2d65f4" />
<img width="1920" height="1080" alt="Screenshot (4)" src="https://github.com/user-attachments/assets/e9365b23-f522-4d24-a294-f2b8ff65294c" />
<img width="1920" height="1080" alt="Screenshot (5)" src="https://github.com/user-attachments/assets/d8d31347-f1cc-4dd9-b7b0-fb29f19b2fd4" />
<img width="1920" height="1080" alt="Screenshot (6)" src="https://github.com/user-attachments/assets/c2dfdee7-a35a-415d-9bb0-aebe42f0e079" />

## Features

- **Smart Search** - Search across flag names, descriptions, and tags
- **Advanced Filtering** - Filter by environment, type, and status
- **Dynamic Sorting** - Sort by any column with visual indicators
- **Responsive Design** - Works seamlessly on all devices
- **Real-time Updates** - Live filtering without page refresh
- **Modern UI** - Clean interface with status badges and progress bars

## Quick Start

### Prerequisites
- **Node.js** 16+ - [Download here](https://nodejs.org/)

### Installation

1. **Clone and setup**
   ```bash
   git clone https://github.com/Codesmith900/feature-flag-list-view.git
   cd feature-flag-list-view
   ```

2. **Install dependencies**
   ```bash
   npm install
   npm install lucide-react
   npm install -D tailwindcss@^3.4.0 postcss autoprefixer
   npx tailwindcss init -p
   ```

3. **Configure Tailwind** - Update `tailwind.config.js`:
   ```javascript
   module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: { extend: {} },
     plugins: [],
   }
   ```

4. **Add Tailwind to CSS** - Replace `src/index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. **Start development server**
   ```bash
   npm start
   ```

Visit `http://localhost:3000` 

## Alternative Setup (Vite)

For faster development experience:

```bash
npm create vite@latest feature-flag-app -- --template react
cd feature-flag-app
npm install lucide-react
npm install -D tailwindcss@^3.4.0 postcss autoprefixer
npx tailwindcss init -p
# Follow configuration steps 3-4 above
npm run dev
```

## Tech Stack

- **Frontend**: React 18+
- **Styling**: Tailwind CSS 3.4+
- **Icons**: Lucide React
- **Build Tool**: Create React App 

## Usage

The application includes sample feature flags for video compression algorithms. Key functionality:

- **Search**: Type in the search bar to filter flags
- **Sort**: Click column headers to sort data
- **Filter**: Use dropdown filters for environment, type, and status
- **View Details**: Each flag shows rollout percentage, tags, and metadata

## Deployment

### Netlify (Drag & Drop)
```bash
npm run build
# Drag 'build' folder to netlify.com/drop
```

### Vercel
```bash
npm run build
npx vercel --prod
```

## Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit Pull Request

---

<div align="center">
  <strong>Built for better feature flag management</strong>
  <br>
  <a href="#-quick-start">Get Started</a> •
  <a href="#-features">Features</a> •
  <a href="#-contributing">Contributing</a>
</div>
