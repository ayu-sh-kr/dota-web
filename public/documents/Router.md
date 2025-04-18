# Dota Navigation Router

A lightweight TypeScript router for web applications that leverages the Navigation API for seamless client-side routing.

## Features

- Modern routing with the Navigation API
- Configurable route matching and rendering
- Support for nested routes and child components
- Custom error handling
- Metadata-driven component registration
- History management with back/forward navigation

## Installation

```bash
npm install @ayu-sh-kr/dota-router
# or
pnpm add @ayu-sh-kr/dota-router
# or
yarn add @ayu-sh-kr/dota-router
```

## Basic Usage

```typescript
import { DomNavigationRouter, RouteConfig } from '@ayu-sh-kr/dota-router';
import { HomePage, AboutPage, NotFoundPage } from './components';

// Define your routes
const routes: RouteConfig[] = [
  { 
    path: '/', 
    component: HomePage,
    default: true
  },
  { 
    path: '/about', 
    component: AboutPage
  }
];

// Create and initialize router
const router = new DomNavigationRouter({
  routes,
  errorRoute: {
    path: '/error',
    component: NotFoundPage
  }
});
```

## Navigation

Navigate between pages using the static route method:

```typescript
// Navigate to a path
DomNavigationRouter.route('/about');

// Navigate with options
DomNavigationRouter.route('/products', {
  category: 'electronics',
  sort: 'price'
});
```

## Advanced Routing

### Custom Render Functions

```typescript
const routes = [
  {
    path: '/dashboard',
    component: DashboardComponent,
    render: (path) => {
      // Custom rendering logic
      document.querySelector('#app-root').innerHTML = '<dashboard-view></dashboard-view>';
      // Initialize other resources
    }
  }
];
```

### Nested Routes

```typescript
const routes = [
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: '/users',
        component: UsersComponent
      },
      {
        path: '/settings',
        component: SettingsComponent
      }
    ]
  }
];
```

## Error Handling

The router automatically redirects to the error route when a path is not found:

```typescript
// This will redirect to the error route if '/unknown' is not defined
DomNavigationRouter.route('/unknown');
```

## Utilities

The library provides utility functions for navigation:

```typescript
import { RouterUtils } from '@ayu-sh-kr/dota-router';

// Get the previous path
const previousPath = RouterUtils.getPreviousPath();

// Get the current path
const currentPath = RouterUtils.getCurrentPath();
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Run tests (`npm test`)
4. Commit your changes using [Changesets](https://github.com/changesets/changesets)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.