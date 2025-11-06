# AGENTS.md - SporkServices Project Guidelines

## Build/Lint/Test Commands
- **Build**: No build process required - static HTML/CSS/JS files
- **Lint**: No linting configured
- **Test**: No testing framework - manual testing only
- **Deploy**: Automatic via GitHub Actions (.github/workflows/deploy.yml)

## Code Style Guidelines

### HTML
- Use semantic HTML5 elements with proper meta tags, Open Graph, and JSON-LD structured data
- Add accessibility attributes (aria-label, alt, title) and proper DOCTYPE
- Indent with 4 spaces, lowercase attributes/elements
- Preserve JSON-LD blocks - correct placeholder values instead of removing

### CSS
- Use CSS custom properties for theming, BEM-like naming (.service-card, .hero)
- Flexbox/grid layouts, mobile-first responsive design with rem/em units
- Minimal animations/transitions, logical property grouping

### JavaScript
- ES6+ syntax (const/let, arrow functions), addEventListener for DOM interactions
- Descriptive variable names, small focused functions, form validation
- Minimal DOM manipulation, prevent default on form submissions

### General
- Vanilla web technologies only - no frameworks or external dependencies
- File naming: lowercase with hyphens, imperative commit messages
- Prioritize accessibility, SEO, and cross-browser compatibility
