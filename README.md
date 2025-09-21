# Feature Flag List View

A modern React application for managing and monitoring feature flags with advanced filtering, sorting, and real-time updates.
<img width="1920" height="1080" alt="Screenshot (3)" src="https://github.com/user-attachments/assets/4e8b6c25-dc8d-49d7-b560-38c15e91011e" />
<img width="1920" height="1080" alt="Screenshot (4)" src="https://github.com/user-attachments/assets/d7ab2ac0-35ef-4615-ab29-827732c3c7e6" />
<img width="1920" height="1080" alt="Screenshot (5)" src="https://github.com/user-attachments/assets/e32e8560-c236-4a51-8c45-c7ea8b26c8da" />
<img width="1920" height="1080" alt="Screenshot (6)" src="https://github.com/user-attachments/assets/11fec2b8-bb8b-4c82-88ee-9485282b643c" />

## Features

- **Smart Search** - Search across flag names, descriptions and tags
- **Advanced Filtering** - Filter by environment, type and status
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
- **Build Tool**: Create React App / Vite

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
### website :
```bash
https://68cebe5370eee658bbcba3eb--magical-hummingbird-2c39e4.netlify.app/
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
