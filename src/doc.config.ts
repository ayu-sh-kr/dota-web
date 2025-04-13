

export interface DocConfig {
  category: string;
  paths: string[];
}

export const docConfigs: DocConfig[] = [
  {
    paths: ['Getting-Started.md'],
    category: 'Introduction'
  },

  {
    category: 'Guide',
    paths: ['Component-Registration.md', 'Component-Definition.md', 'Property-Binding.md']
  }
]

//<doc-path file-path="Getting-Started.md"></doc-path>
//           <doc-path file-path="Component-Registration.md"></doc-path>
//           <doc-path file-path="Component-Definition.md"></doc-path>
//           <doc-path file-path="Property-Binding.md"></doc-path>