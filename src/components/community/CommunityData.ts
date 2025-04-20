// community-data.ts
export interface CommunityMember {
  imageSrc: string;
  name: string;
  role: string;
  githubLink?: string;
  linkedinLink?: string;
  quote: string;
}

export const communityData: CommunityMember[] = [
  {
    imageSrc: "https://avatars.githubusercontent.com/u/111488605?v=4",
    name: "Ayush kumar jaiswal",
    role: "Developer",
    githubLink: "https://github.com/ayu-sh-kr",
    linkedinLink: "https://www.linkedin.com/in/ayu-sh-kr/",
    quote: "When I started building this component library, my goal was simple: to create a toolkit that makes development smoother, faster, and more enjoyable. I wanted to provide well-crafted, reusable components that not only save time but also empower developers to build amazing, high-quality applications with consistency and ease. But this library is more than just a collection of components—it’s a growing ecosystem shaped by the ideas, feedback, and contributions of developers like you. Every improvement, every enhancement, and every piece of documentation is driven by a shared passion for clean, efficient, and scalable UI development."
  },
  {
    imageSrc: "https://avatars.githubusercontent.com/u/95143999?v=4",
    name: "Deepanshu Agarwal",
    role: "Developer",
    githubLink: "https://github.com/DeepanshuAgarwal999/",
    linkedinLink: "https://www.linkedin.com/in/deepanshuagarwal999/",
    quote: "Building this library has been an incredible journey, and being one of its key contributors has been both challenging and deeply rewarding. From the beginning, my focus has been on ensuring that developers have access to components that not only look great but also function seamlessly across projects, saving time and effort. More than just writing code, my role has been about shaping the vision of this library—ensuring it evolves to meet the needs of modern development while maintaining a balance between flexibility and simplicity. Every bug fixed, every feature added, and every discussion held has been a step toward refining and expanding what we’ve built."
  },
  {
    imageSrc: "/images/rajeev_sir.png",
    name: "Rajeev Singh",
    role: "Professor",
    linkedinLink: "https://www.linkedin.com/in/rajeev-singh-83b309b/",
    quote: "From the very beginning, I saw something special in this project—not just lines of code, but a vision fueled by passion, curiosity, and relentless dedication. Watching this library evolve has been an extraordinary journey, and I’m honored to have been part of it. Mentorship isn’t just about guidance; it’s about pushing boundaries, challenging ideas, and standing beside you in moments of uncertainty. What you’ve built isn’t just a set of components—it’s a testament to perseverance, collaboration, and the spirit of innovation. Every contribution, every line of code, and every discussion has shaped this library into something truly valuable for developers everywhere. Seeing the impact it has had on the community is a reminder that great things are built not alone, but together."
  }
];