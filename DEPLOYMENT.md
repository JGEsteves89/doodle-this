# Deployment Guide for Doodle This

This project is configured to deploy to GitHub Pages with automatic versioning.

## Available Scripts

- `npm run build` - Build the project for production
- `npm run deploy` - Deploy to GitHub Pages (requires build first)
- `npm run publish:patch` - Build, bump patch version, tag, push, and deploy
- `npm run publish:minor` - Build, bump minor version, tag, push, and deploy  
- `npm run publish:major` - Build, bump major version, tag, push, and deploy

## Deployment Process

### For Patch Updates (recommended for most updates)
```bash
npm run publish:patch
```

This command will:
1. Build the project
2. Increment the patch version (e.g., 1.0.0 → 1.0.1)
3. Create a git commit with the version bump
4. Create a git tag with the new version
5. Push changes and tags to the repository
6. Deploy the built files to GitHub Pages

### For Minor Updates (new features)
```bash
npm run publish:minor
```

### For Major Updates (breaking changes)
```bash
npm run publish:major
```

## Configuration

- **Base URL**: `/doodle-this/` (configured in vite.config.ts)
- **Homepage**: `https://JGEsteves89.github.io/doodle-this` (configured in package.json)
- **Build Output**: `dist/` directory
- **GitHub Pages Branch**: `gh-pages` (managed automatically by gh-pages package)

## Notes

- The `.nojekyll` file in the public directory prevents GitHub from processing the site with Jekyll
- Each publish command automatically creates a git tag matching the version number
- The site will be available at: https://JGEsteves89.github.io/doodle-this
