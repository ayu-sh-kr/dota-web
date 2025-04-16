

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
     'Core.md', 'Decorators.md',
    ]
  }
]