# Jathukulan's Portfolio Website

## Overview

This is a premium portfolio website for Jathukulan Sivanathan, a Full-Stack Developer. The project showcases a sophisticated dark minimalist design inspired by modern developer portfolios like Linear and Vercel. Built with React/TypeScript and featuring advanced animations, custom interactive components, and a comprehensive case study structure for project presentations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
**Technology Stack**: React with TypeScript, Vite for build tooling, and Tailwind CSS for styling with a custom design system. The application uses a component-based architecture with reusable UI components following shadcn/ui patterns.

**Animation Strategy**: Hybrid approach combining GSAP for complex scroll animations and CSS animations for lightweight microinteractions. Includes accessibility considerations with `prefers-reduced-motion` support throughout.

**Design System**: 
- Dark-first color palette with portfolio-specific colors (navy, slate, cyan accents)
- Inter font for body text, Poppins for headings
- Consistent 8px grid spacing system
- Custom magnetic interaction effects and smooth cursor animations

**Component Structure**:
- Interactive components: Custom cursor, magnetic buttons, preloader with SVG animations
- Page sections: Hero with typing animation, about, tech stack, project grid, experience, contact
- Case study pages with detailed project breakdowns
- Responsive navigation with scroll-triggered backdrop blur

### Backend Architecture
**Server Setup**: Express.js server with TypeScript, configured for both development and production environments. The server handles static file serving and API routes with structured error handling.

**Session Management**: Uses connect-pg-simple for PostgreSQL-based session storage, indicating support for user authentication flows.

**Development Workflow**: Hot reload in development with Vite integration, production builds with esbuild for server bundling.

### Data Storage Solutions
**Database**: PostgreSQL with Drizzle ORM for type-safe database operations. Current schema includes user management with unique usernames and password fields.

**Database Configuration**: Uses Neon Database serverless PostgreSQL with connection pooling. Migration system in place with drizzle-kit for schema management.

**Data Models**: Zod schemas for runtime validation integrated with Drizzle for full-stack type safety.

### Authentication and Authorization
**User System**: Basic user schema with username/password authentication setup. Password hashing and session management infrastructure in place but authentication routes not yet implemented.

**Security**: Uses secure session cookies with PostgreSQL storage for session persistence.

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive headless component library for accessible UI primitives (dialogs, tooltips, forms, etc.)
- **Tailwind CSS**: Utility-first CSS framework with custom configuration for portfolio color palette
- **class-variance-authority**: Type-safe variant management for component styling
- **Lucide React**: Icon library for consistent iconography

### Animation and Interactions
- **GSAP**: Professional animation library for complex scroll-triggered animations and magnetic effects
- **Embla Carousel**: Lightweight carousel component for project showcases

### Development and Build Tools
- **Vite**: Fast development server and build tool with React plugin
- **TypeScript**: Full-stack type safety with strict configuration
- **ESBuild**: Fast JavaScript bundler for production server builds
- **PostCSS**: CSS processing with Tailwind CSS integration

### Database and Backend
- **Neon Database**: Serverless PostgreSQL database service
- **Drizzle ORM**: Type-safe database toolkit with Zod integration
- **Express.js**: Web framework with JSON and URL-encoded body parsing

### Forms and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Hookform Resolvers**: Integration layer for external validation libraries
- **Zod**: Runtime type validation for forms and API responses

### State Management and Data Fetching
- **TanStack React Query**: Server state management with caching and background updates
- **React Router (Wouter)**: Lightweight client-side routing solution

### Portfolio-Specific Features
- **Google Fonts**: Inter and Poppins fonts loaded via CDN
- **Custom Cursor**: Hardware-accelerated cursor tracking with interaction states
- **Preloader**: SVG-based initial loading animation with "JK" branding
- **Case Studies**: Detailed project showcase pages with metrics, process documentation, and impact analysis