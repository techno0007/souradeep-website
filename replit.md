# Make Your Wedding Canvas - Wedding Photography Portfolio

## Overview

Make Your Wedding Canvas is a premium wedding photography portfolio website built as a single-page application. The application showcases photography services including weddings, pre-wedding shoots, baby rice ceremonies, birthdays, and custom album design. The site emphasizes elegant visual presentation with an image-first approach, featuring smooth scrolling navigation between sections, animated hero text slider, and a comprehensive gallery of work.

The application is designed with a focus on user experience, featuring a clean, professional aesthetic inspired by premium photography portfolio sites. It includes sections for about, services, featured portfolio, gallery, testimonials, and contact forms, all accessible through smooth-scroll navigation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript using Vite as the build tool and development server.

**Routing**: Wouter for lightweight client-side routing. Currently implements a single home route with a 404 fallback page.

**UI Component Library**: Shadcn/ui components with Radix UI primitives. The application uses a comprehensive set of pre-built components including buttons, cards, forms, dialogs, and navigation elements. Components are styled using Tailwind CSS with custom design tokens.

**State Management**: React Query (@tanstack/react-query) for server state management. The application uses a custom query client configured with specific defaults including disabled refetching and infinite stale time.

**Styling Approach**: Tailwind CSS with custom design system defined in configuration. The design follows a "New York" style variant from Shadcn. Typography uses Playfair Display (serif) for headings and Lato (sans-serif) for body text. The color system is based on HSL values with CSS variables for theming, supporting light mode by default.

**Design Philosophy**: Image-supremacy with generous whitespace, elegant typography hierarchy, and breathing room to let photography shine. The layout follows a mobile-first responsive approach with breakpoints for tablet and desktop.

**Component Structure**: Section-based components (HeroSection, AboutSection, ServicesSection, etc.) that compose into a single Home page. Each section is self-contained and handles its own layout and interactions.

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**API Structure**: RESTful API design with routes prefixed under `/api`. The routes module uses a factory pattern that returns an HTTP server instance. Currently implements minimal routes as the application is primarily frontend-focused.

**Storage Layer**: Abstracted storage interface (`IStorage`) with an in-memory implementation (`MemStorage`). The interface defines CRUD operations for users (getUser, getUserByUsername, createUser). This abstraction allows for easy swapping to persistent storage solutions.

**Development Server**: Custom Vite middleware integration for hot module replacement in development. The server intercepts requests, handles API routes, and proxies other requests to Vite's dev server.

**Request Logging**: Custom middleware that logs API requests with method, path, status code, duration, and response payload (truncated to 80 characters).

### Database & Schema

**ORM**: Drizzle ORM configured for PostgreSQL dialect.

**Schema Definition**: Single users table with UUID primary key (using PostgreSQL's `gen_random_uuid()`), username (unique), and password fields. Schema validation uses Zod through drizzle-zod integration.

**Migration Strategy**: Drizzle Kit configured to output migrations to `./migrations` directory. The application uses environment variable `DATABASE_URL` for database connection.

**Current State**: Database schema is defined but storage implementation is in-memory. The architecture is prepared for PostgreSQL but currently uses a memory-based mock storage for development.

### Asset Management

**Static Assets**: Images stored in `attached_assets/generated_images/` directory. The application uses Vite's asset handling with alias `@assets` for imports.

**Image Strategy**: Pre-generated placeholder images for photographer portrait, wedding scenes, services, gallery items, and testimonials. Images are imported directly into components as modules.

### Form Handling

**Form Library**: React Hook Form with Zod resolvers for validation.

**Contact Form**: Client-side form in ContactSection component with name, email, phone, and message fields. Currently submits with console logging and user alert (no backend persistence).

## External Dependencies

### Third-Party Libraries

**UI Components**: Radix UI (@radix-ui/*) - Headless accessible component primitives for dialog, dropdown, navigation, toast, and 20+ other interactive elements.

**Styling**: 
- Tailwind CSS with PostCSS for processing
- class-variance-authority for variant-based component styling
- clsx and tailwind-merge for className utilities

**Date Handling**: date-fns for date manipulation and formatting.

**Icons**: Lucide React for general icons, react-icons for social media icons (Pinterest).

**Carousel**: Embla Carousel React for image slideshows.

**Command Palette**: cmdk for command menu interface.

### Database & API

**Database Driver**: @neondatabase/serverless for PostgreSQL connections (configured but not actively used).

**ORM**: Drizzle ORM with drizzle-zod for schema validation.

**Session Management**: connect-pg-simple for PostgreSQL-backed session storage (configured but not implemented).

### Development Tools

**Build Tools**: 
- Vite for development server and production builds
- esbuild for server-side bundling
- tsx for TypeScript execution in development

**Replit Integration**: 
- @replit/vite-plugin-runtime-error-modal for error overlay
- @replit/vite-plugin-cartographer for code navigation
- @replit/vite-plugin-dev-banner for development indicators

**Type Safety**: TypeScript with strict mode enabled, path aliases configured for `@/` (client), `@shared/` (shared), and `@assets/` (assets).

### Potential Integrations

**Email Service**: Contact form currently logs submissions - would benefit from integration with SendGrid, Mailgun, or similar email service.

**Image Hosting**: Current implementation uses local images - could integrate with Cloudinary or AWS S3 for production image management.

**Analytics**: No analytics currently implemented - could add Google Analytics or privacy-focused alternatives.

**CMS**: Static content currently - could integrate Contentful or similar headless CMS for dynamic content management.