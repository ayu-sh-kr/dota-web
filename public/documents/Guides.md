`Dota Core` provides various functionalities to assist developers in multiple aspect of
web development. This document serves as a guide to help you understand how to use these functionalities effectively.


## 1. Introduction
`Dota Core` is a powerful framework that simplifies the process of building web applications. 
It provides a set of tools and libraries that help developers create robust and scalable applications with ease.

With `Dota Core`, you can write reusable web components that can be used across multiple frameworks and projects
in your organization or you can setup a new web app with vite and use the provided components create a new web app.

## 2. Configuration
`Dota Core` itself don't need a configuration file but requires a setup environment to work with.
It uses vite as a build tool and you can use vite to create a new web app with `Dota Core` components.

In a nut shell, you will need to create a new vanilla vite app and install `Dota Core` as a dependency.
```bash
npm create vite@latest my-vite-app --template vanilla
cd my-vite-app
npm install @ayu-sh-kr/dota-core
```

## 4. Tailwind Setup
Modern web applications rely heavily on `Tailwind CSS` for styling and we make sure that
`Dota Core` is compatible with `Tailwind CSS` and you can use it with `Dota Core` components.

To use `Tailwind CSS` with `Dota Core`, you need to install `Tailwind CSS` and configure it in your project.
For this you can simply follow the official documentation of `Tailwind CSS` to install it in your project. As per the latest
release `Tailwind CSS` provides a `vite` plugin to install it in your project.

### 4.1 Install Tailwind CSS
```bash
npm install tailwindcss @tailwindcss/vite
```

### 4.2 Configure Vite for Tailwind CSS
In your `vite.config.js` file, add the `@tailwindcss/vite` plugin to the `plugins` array:
```typescript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

### 4.3 Import Tailwind CSS in your project
Add an @import to your CSS file that imports Tailwind CSS.
```css
@import "tailwindcss";
```

### 4.4 Start your Vite server
Now you can start your Vite server and see the changes in your project.
```bash
npm run dev
```

## 5. Update tsconfig.json
`Dota Core` relies on decorators for writing web components and by default they are disabled in `tsconfig.json`.
To enable decorators, you need to update your `tsconfig.json` file to include the following options:
```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

> With above changes you are ready to use `Dota Core` in your project. Apart from above and based on your requirements you might
> need to set a routing mechanism for your project.


Read more about `Dota Core` and how to use it in your project in the following sections.
- [Components Definition](Component-Definition.md)
- [Component Registration](Component-Registration.md)





