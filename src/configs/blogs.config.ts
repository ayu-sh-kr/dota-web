
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
  imageUrl?: string;
  content?: string;
  tags?: string[];
  link?: string;
}
