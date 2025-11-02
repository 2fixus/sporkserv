# AGENTS.md - SporkServices Project Guidelines

## Build/Lint/Test Commands
- **Build**: No build process required - static HTML/CSS/JS files
- **Lint**: No linting configured
- **Test**: No testing framework - manual testing only
- **Deploy**: Automatic via GitHub Actions (.github/workflows/deploy.yml)

## Code Style Guidelines

### HTML
- Use semantic HTML5 elements
- Include proper meta tags, Open Graph, and structured data (JSON-LD)
- **Important**: If you find placeholder information in the JSON-LD structured data, do not remove the block. Instead, correct the placeholder values with accurate information. Removing this block will negatively impact SEO.
- Add accessibility attributes (aria-label, alt, title)
- Use lowercase for attributes and elements
- Indent with 4 spaces
- Include favicon and proper DOCTYPE

### CSS
- Use CSS custom properties (variables) for theming
- Follow BEM-like naming conventions (e.g., .service-card, .hero)
- Use flexbox/grid for layouts
- Include responsive design with mobile-first media queries
- Add transitions and animations sparingly
- Use rem/em for scalable units
- Group related properties logically

### JavaScript
- Use modern ES6+ syntax (const/let, arrow functions)
- AddEventListener for DOM interactions
- Keep functions small and focused
- Use descriptive variable names
- Handle form submissions and prevent defaults
- Minimal DOM manipulation

### General
- No frameworks or build tools - vanilla web technologies
- Commit messages: imperative mood, concise
- File naming: lowercase, hyphens for multi-word
- No external dependencies
- Prioritize accessibility and SEO