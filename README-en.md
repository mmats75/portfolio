# Portfolio Website

![GitHub](https://img.shields.io/github/license/mmats75/portfolio) ![GitHub last commit](https://img.shields.io/github/last-commit/mmats75/portfolio)

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

### Features

- 🌐 Multi-language support (Japanese/English)
- 📱 Fully responsive design
<!-- - 🎨 Modern UI with smooth animations
- 🚀 Fast loading with Vite-->
- 🎯 Type-safe with TypeScript
- 🎨 Styled with Tailwind CSS

### Live Website

Visit the site at: https://mmats75.github.io/portfolio/en

### Tech Stack

- React
- TypeScript
- Tailwind CSS
- React Router
- Vite

### Getting Started

#### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

#### Installation

1. Clone the repository

```bash
git clone https://github.com/mmats75/portfolio.git
cd portfolio
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

The site will be available at `http://localhost:5173/portfolio/`

### Deployment to Github Pages

1. Update `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})
```

2. Deploy:

```bash
npm run deploy
```

### License

This project is licensed under the MIT License.

### Acknowledgments

- Design inspired by [https://rohitk06.vercel.app/](https://rohitk06.vercel.app/)
