# Ad Generator

A modern React application that generates ad copy and banner previews using AI insights.

## Features

- Clean, responsive UI built with React and Tailwind CSS
- Form validation and error handling
- Loading states and animations
- Mock API integration (ready for real API implementation)
- Code splitting and lazy loading for performance
- Error boundaries for resilient user experience

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm (v6+)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ad-generator

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The application will be available at http://localhost:5173.

### Production Build

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

## Project Structure

```
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   │   ├── AdGenerator.jsx     # Main component
│   │   └── LazyBannerPreview.jsx  # Lazy-loaded component
│   ├── index.css       # Global styles and Tailwind imports
│   └── main.jsx        # Application entry point
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── postcss.config.js   # PostCSS configuration
```

## Deployment to GitHub

### Deploying to Github Repository

To deploy this project to the specified GitHub repository:

```bash
# Initialize git if not already initialized
git init

# Add all files to git
git add .

# Commit your changes
git commit -m "Initial commit"

# Add the remote repository
git remote add origin https://github.com/natalyineu/blinkly3.git

# Push to GitHub
git push -u origin main
```

If you need to force push (use with caution):

```bash
git push -f origin main
```

## Technologies Used

- React 18
- Tailwind CSS
- Vite
- ESLint

## License

ISC 