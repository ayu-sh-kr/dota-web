import 'reflect-metadata';
import {BlogPage, ChatPage, DocPage, ErrorPage, HomePage} from "@dota/pages";
import {AppComponent} from "@dota/app.component.ts";
import {BaseElement} from "@ayu-sh-kr/dota-core/dist";
import {RouteConfig} from "@ayu-sh-kr/dota-router";

export const routes = {
  '/': HomePage,
  '/docs': DocPage,
  '/blogs': BlogPage,
  '/chat': ChatPage
} as { [key: string]: Object }

export type Route<T extends HTMLElement> = {
  path: string,
  component: T | (new (...args: any[]) => T),
  default?: boolean,
  children?: Route<T>[],
  navigate?: (path: string) => void,
}

export const routesConfig: RouteConfig<BaseElement>[] = [
  {
    path: '/',
    component: HomePage,
    default: true,
  },

  {
    path: '/docs',
    component: DocPage,
    render: (path: string) => {
      if (path.includes('/docs')) {
        // Render the docs page with the specified document
        document.querySelector<AppComponent>('app-root')!.innerHTML = `<doc-page></doc-page>`;
        return;
      }
    },
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
    ]
  },

  {
    path: '/blogs',
    component: BlogPage
  },

  {
    path: '/chat',
    component: ChatPage
  },

  {
    path: '/error',
    component: ErrorPage,
  }
];