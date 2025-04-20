import 'reflect-metadata';
import {BlogPage, ChatPage, CommunityPage, DocPage, ErrorPage, HomePage, ResourcePage} from "@dota/pages";
import {AppComponent} from "@dota/app.component.ts";
import {BaseElement} from "@ayu-sh-kr/dota-core/dist";
import {RouteConfig} from "@ayu-sh-kr/dota-router";
import {docRoutes} from "@dota/doc.config.ts";

export const routesConfig: RouteConfig<BaseElement>[] = [
  {
    path: '/',
    component: HomePage,
    default: true,
  },
  {
    path:'/resources',
    component:ResourcePage,
  },

  {
    path: '/docs',
    component: DocPage,
    render: (path: string) => {
      if (path.includes('/docs')) {
        // Render the docs page with the specified document
        document.querySelector<AppComponent>('#app-root')!.innerHTML = `<doc-page></doc-page>`;
        return;
      }
    },
    children: docRoutes
  },

  {
    path: '/community',
    component: CommunityPage,
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