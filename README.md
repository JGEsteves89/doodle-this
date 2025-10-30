# React TypeScript Tailwind ESLint Prettier Boilerplate

A modern, production-ready React boilerplate with TypeScript, Tailwind CSS, ESLint, and Prettier pre-configured for optimal development experience.

## 🚀 Recent Updates

- **React 19.1.1**: Upgraded to the latest React version with improved performance
- **Tailwind CSS v4**: Updated to Tailwind CSS v4 with new PostCSS architecture
- **Modern React 18+ Rendering**: Migrated from `ReactDOM.render` to `createRoot` API
- **Enhanced Development Tools**: Updated ESLint, Prettier, and TypeScript configurations
- **Bun Support**: Added Bun lock file for faster package management
- **Pre-commit Hooks**: Automatic code formatting and linting before commits

## 🛠️ Tech Stack

- **React 19.1.1** - Latest React with concurrent features
- **TypeScript 5.8.3** - Static type checking
- **Tailwind CSS 4.1.11** - Utility-first CSS framework with new architecture
- **Vite 4.5.14** - Fast build tool and development server
- **ESLint 8.57.1** - Code linting with TypeScript support
- **Prettier 3.6.2** - Code formatting with Tailwind plugin
- **Pre-commit** - Git hooks for code quality

## 📦 Package Manager Support

This project supports multiple package managers:

- **npm** (default)
- **Bun** (lock file included for faster installs)

## 🏃‍♂️ Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd react-ts-tailwind-eslint-prettier
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   bun install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Preview production build
- `npm run lint` - Run ESLint and Prettier
- `npm run lint:fix` - Fix ESLint issues
- `npm run lint:format` - Format code with Prettier
- `npm run type-check` - Run TypeScript compiler check

## 🎨 Tailwind CSS v4 Features

This boilerplate uses the latest Tailwind CSS v4 with:

- New PostCSS architecture (`@tailwindcss/postcss`)
- Simplified import system (`@import 'tailwindcss'`)
- Enhanced base layer with consistent border colors
- Automatic configuration detection

## 🔧 Code Quality Tools

- **ESLint**: Configured with TypeScript, React, and accessibility rules
- **Prettier**: Code formatting with Tailwind class sorting
- **Pre-commit**: Automatic linting and formatting before commits
- **TypeScript**: Strict type checking configuration

## 📁 Project Structure

```
├── src/
│   ├── App.tsx          # Main App component
│   ├── main.tsx         # Entry point with React 18+ createRoot
│   ├── index.css        # Global styles with Tailwind v4
│   └── vite-env.d.ts    # Vite type definitions
├── public/
├── .eslintrc.js         # ESLint configuration
├── .prettierrc.js       # Prettier configuration
├── postcss.config.js    # PostCSS with Tailwind v4
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies and scripts
```

## 🚀 Performance Optimizations

- React 19 with improved concurrent features
- Vite for fast HMR and optimized builds
- Modern React rendering with `createRoot`
- Tailwind CSS v4 for smaller bundle sizes
- TypeScript for better development experience and error catching

## 📄 License

MIT License
