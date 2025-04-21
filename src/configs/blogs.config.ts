
export type BlogCategory = "Rant" | "Tutorial" | "News" | "Tools" | "Others"
export const BlogIcons: Record<BlogCategory, string> = {
  Rant: "mdi:comment-outline",
  Tutorial: "mdi:book-open-variant",
  News: "mdi:newspaper-variant",
  Tools: "mdi:wrench-outline",
  Others: "mdi:dots-horizontal"
}

export type BlogIconDetails = {
  category: BlogCategory
  icon: string,
  color?: string,
  variant?: string,
}


export const BlogTypeConfig: Record<BlogCategory, BlogIconDetails> = {
  Rant: {
    category: "Rant",
    icon: BlogIcons.Rant,
    color: "orange",
  },

  Tutorial: {
    category: "Tutorial",
    icon: BlogIcons.Tutorial,
    color: "blue",
  },

  News: {
    category: "News",
    icon: BlogIcons.News,
    color: "green",
  },

  Tools: {
    category: "Tools",
    icon: BlogIcons.Tools,
    color: "purple",
  },

  Others: {
    category: "Others",
    icon: BlogIcons.Others,
    color: "gray",
  }
}

export type Blog = {
  header: string;
  description: string;
  date: string;
  writer: string;
  category: BlogCategory;
  path: string
  imageUrl?: string;
  content?: string;
  tags?: string[];
  link?: string;
}

export const blogPosts: Blog[] = [
  {
    date: '2025-04-21',
    writer: 'Ayush Jaiswal',
    header: 'Head first Web Components',
    description: "Lets explore the world of web components, a powerful technology that enables developers to create reusable and encapsulated custom elements. This article delves into the fundamentals of web components, including shadow DOM, custom elements, and HTML templates. By understanding these concepts, developers can build modular and maintainable applications that enhance user experience and streamline development processes.",
    category: "Tutorial",
    path: "tutorials/Web-Component.md",
  },

  {
    "date": '2025-04-21',
    "writer": 'Ayush Jaiswal',
    "header": 'What is needed to design a web component',
    "description": "In this article, we will explore the essential components required to design a web component. We will discuss the key concepts and technologies involved in creating reusable and encapsulated custom elements. By understanding these components, developers can effectively leverage web components to enhance their web applications.",
    "category": "Tutorial",
    "path": "tutorials/Component-Basic.md",
  }
];
