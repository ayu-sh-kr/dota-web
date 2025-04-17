import 'reflect-metadata';
import {BlogPage, ChatPage, DocPage, HomePage} from "@dota/pages";
import {AppComponent} from "@dota/app.component.ts";

export const routes = {
  '/': HomePage,
  '/docs': DocPage,
  '/blogs': BlogPage,
  '/chat': ChatPage
} as { [key: string]: Object }

export type Route<T> = {
  path: string,
  component: T | (new (...args: any[]) => T),
  default?: boolean,
  children?: Route<T>[],
  navigate?: (path: string) => void,
}

export const routesConfig: Route<Object>[] = [
  {
    path: '/',
    component: HomePage,
    default: true,
  },

  {
    path: '/docs',
    component: DocPage,
    children: [
      {
        path: '/Getting-Started.md',
        component: DocPage,
      },

      {
        path: '/Guides.md',
        component: DocPage,
      },

      {
        path: '/Component-Definition.md',
        component: DocPage,
      },

      {
        path: '/Component-Registration.md',
        component: DocPage,
      },

      {
        path: '/Property-Binding.md',
        component: DocPage,
      },

      {
        path: '/Event-Binding.md',
        component: DocPage,
      },

      {
        path: '/Event-Emitter.md',
        component: DocPage,
      },

      {
        path: '/Core.md',
        component: DocPage,
      },

      {
        path: '/Reactivity.md',
        component: DocPage,
      },

      {
        path: '/Decorators.md',
        component: DocPage,
      },
    ],
    navigate: (path: string) => {
      if (path.includes('/docs')) {
        // Render the docs page with the specified document
        document.querySelector<AppComponent>('app-root')!.innerHTML = `<doc-page></doc-page>`;
        return;
      }
    }
  },

  {
    path: '/blogs',
    component: BlogPage
  },

  {
    path: '/chat',
    component: ChatPage
  }
];