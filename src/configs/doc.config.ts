import {DocPage} from "@dota/pages";
import {RouteConfig} from "@ayu-sh-kr/dota-router";


export interface DocConfig {
  category: string;
  paths: string[];
}

export const docConfigs: DocConfig[] = [
  {
    paths: ['Getting-Started.md', 'Guides.md'],
    category: 'Introduction'
  },

  {
    category: 'Guide',
    paths: [
      'Component-Registration.md', 'Component-Definition.md',
      'Property-Binding.md', 'Event-Binding.md', 'Event-Emitter.md', 'Reactivity.md',
    ]
  },
  {
    category: 'Concepts',
    paths: [
     'Core.md', 'Decorators.md', 'Life-Cycle.md'
    ]
  },

  {
    category: 'Tools',
    paths: [
      'Rest-Client.md', 'Router.md'
    ]
  }
]

export const docRoutes: RouteConfig<any>[]  = [
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