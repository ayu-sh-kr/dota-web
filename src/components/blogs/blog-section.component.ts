// blog-section.component.ts
import { BaseElement, Component } from "@ayu-sh-kr/dota-core";
import {type Blog} from "@dota/configs/blogs.config.ts";

@Component({
  selector: 'blog-section',
  shadow: false,
})
export class BlogSectionComponent extends BaseElement {

  constructor() {
    super();
  }

  // Updated blogPosts with a category for each blog
  blogPosts: Blog[] = [
    {
      date: '2024-01-01',
      writer: 'John Doe',
      header: 'My First Blog Post',
      description: "Embarking on a journey into modern web development, this narrative examines innovative design strategies and refined development practices. Innovative case studies further illustrate how pragmatic approaches and creative problem-solving drive both usability improvements and design excellence in today’s competitive market landscape. Detailed insights empower teams to innovate and excel consistently.",
      category: "Rant"
    },
    {
      date: '2024-01-02',
      writer: 'Jane Smith',
      header: 'Another Blog Post',
      description: "Venturing through evolving digital frameworks, this detailed exploration reveals refined techniques and strategic solutions that enhance both user experience and functionality. Real-world examples underscore the value of adaptive design and meticulous coding practices, fostering an environment where innovation and performance merge to achieve remarkable results consistently.",
      category: "Tutorial"
    },
    {
      date: '2024-01-03',
      writer: 'Alice Johnson',
      header: 'A Third Blog Post',
      description: "Navigating the challenges of contemporary web design, this account delves into robust coding methodologies and aesthetic innovations. It highlights collaborative efforts, adaptive layouts, and modern development tools that collectively ensure seamless integration of functionality and style, empowering teams to create engaging, efficient platforms.",
      category: "News"
    },
    {
      date: '2024-01-04',
      writer: 'Bob Williams',
      header: 'The Fourth Article',
      description: "Addressing the dynamic nature of web application design, this comprehensive overview outlines proven practices and forward-thinking strategies for building reliable, intuitive user interfaces. Emphasizing efficiency and creative problem-solving, the narrative blends technical expertise with artistic vision to foster excellence in digital project execution.",
      category: "Tools"
    },
    {
      date: '2024-01-05',
      writer: 'Carol Danvers',
      header: 'Fifth Blog Post',
      description: "In this comprehensive piece, the exploration of advanced web development techniques intertwines with innovative design principles to craft interactive user experiences. Thorough analysis and real-world project insights are provided to inspire developers to leverage modern frameworks, optimize performance, and uphold best practices in coding and design. Rich details encourage sustainable scalable.",
      category: "Others"
    },
    {
      date: '2024-01-06',
      writer: 'Eve Adams',
      header: 'Sixth Insights',
      description: "Delving into the intricacies of responsive web architectures, this article presents a detailed overview of component-based design and modular development. Case studies and embedded code examples illustrate best practices for maintaining efficiency while ensuring a high level of user engagement. Methodical breakdowns and expert commentary guide readers through each phase of the build process.!!",
      category: "Tutorial"
    },
    {
      date: '2024-01-07',
      writer: 'Frank Miller',
      header: 'Seventh Chronicle',
      description: "Examining modern UI trends and robust frameworks, this narrative delves into the seamless integration of design and functionality. It discusses smart layout patterns, dynamic content rendering, and performance optimizations that empower developers to build resilient applications. In-depth tutorials and expert analyses form the backbone of this comprehensive guide. Further expert views added.!!",
      category: "News"
    },
    {
      date: '2024-01-08',
      writer: 'Grace Lee',
      header: 'Eighth Reflections',
      description: "Focusing on scalability and maintainability, this article explores the evolution of coding practices within modern development environments. The discussion highlights the shift towards component-driven frameworks, robust testing methodologies, and agile project management. Detailed case studies and analytical insights reveal practical strategies for continuous innovation. Expert tips fuel change",
      category: "Rant"
    }
  ];

  render(): string {
    return `
        <section class="font-dm mx-auto max-w-7xl px-3 py-8">
            <section-header header="Blogs By The Team Dota"></section-header>
            <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                ${this.blogPosts.map(post => `
                    <blog-preview 
                        date="${post.date}"
                        writer="${post.writer}"
                        header="${post.header}"
                        description="${post.description}"
                        category="${post.category}"
                    ></blog-preview>
                `).join('')}
            </div>
        </section>
        `;
  }
}