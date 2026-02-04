# AURUM Estates - 360 Home View

## Overview

AURUM Estates is a luxury real estate showcase application featuring 360-degree virtual property tours. The application presents high-end properties with immersive panoramic viewers, an interactive estate finder quiz, and site map visualizations. Built as a full-stack TypeScript application with a React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with HMR support
- **Routing**: React Router DOM for client-side navigation
- **State Management**: TanStack React Query for server state
- **3D Rendering**: React Three Fiber with Drei helpers for panoramic 360° views
- **Styling**: Tailwind CSS with CSS variables for theming (dark luxury gold theme)
- **UI Components**: shadcn/ui component library (New York style) built on Radix UI primitives

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful routes prefixed with `/api`
- **Development**: Vite dev server middleware for HMR
- **Production**: Static file serving from built assets

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Validation**: Zod schemas via drizzle-zod
- **Current Storage**: In-memory storage implementation (MemStorage class) with interface ready for database migration
- **Database Config**: PostgreSQL connection via DATABASE_URL environment variable

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/   # React components including UI primitives
│   │   ├── pages/        # Route page components
│   │   ├── lib/          # Utilities and data (properties.ts)
│   │   └── hooks/        # Custom React hooks
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data storage interface
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared code between client/server
│   └── schema.ts     # Database schema definitions
└── migrations/       # Drizzle database migrations
```

### Key Design Patterns
- **Monorepo Structure**: Client, server, and shared code in single repository
- **Path Aliases**: `@/` for client source, `@shared/` for shared code
- **Component Architecture**: Atomic design with shadcn/ui primitives
- **Type Safety**: End-to-end TypeScript with shared schema types

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via Drizzle)
- **connect-pg-simple**: Session storage for PostgreSQL

### UI Framework
- **Radix UI**: Full suite of accessible primitives (dialog, dropdown, tabs, etc.)
- **Tailwind CSS**: Utility-first styling with custom theme configuration
- **Lucide React**: Icon library

### 3D/Visualization
- **Three.js**: 3D rendering engine
- **React Three Fiber**: React renderer for Three.js
- **@react-three/drei**: Helper components for React Three Fiber

### Build & Development
- **Vite**: Frontend build tool and dev server
- **esbuild**: Server bundling for production
- **tsx**: TypeScript execution for development

### Utilities
- **date-fns**: Date manipulation
- **clsx/tailwind-merge**: Class name utilities
- **zod**: Runtime type validation
- **sonner**: Toast notifications