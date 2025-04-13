# AdRocket - Next.js

A modern Next.js application that generates ad copy and banner previews using AI insights.

## Features

- Clean, responsive UI built with React and Tailwind CSS
- Form validation and error handling
- Loading states and animations
- Mock API integration (ready for real API implementation)
- Server-side rendering for better SEO
- Error boundaries for resilient user experience

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm (v9+)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd adrocket

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The application will be available at http://localhost:3000.

### Production Build

```bash
# Build for production
npm run build

# Start the production server
npm start
```

## Project Structure

```
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js App Router pages
│   ├── components/     # React components
│   │   ├── common/     # Shared components
│   │   └── ...         # Feature-specific components
│   └── utils/          # Utility functions
├── .github/            # GitHub workflows
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── next.config.mjs     # Next.js configuration
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

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS

## License

ISC 