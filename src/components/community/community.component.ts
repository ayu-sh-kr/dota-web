import { AfterInit, BaseElement, Component } from "@ayu-sh-kr/dota-core";

@Component({
  selector: "community-component",
  shadow: false
})
export class CommunityComponent extends BaseElement {

  constructor() {
    super();
  }

  render() {
    // language=html
    return `
      <section class="p-4 space-y-4">
        <section-header>
          Word from <span class="text-purple-600 dark:text-purple-500">Dota Team</span>
        </section-header>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <article class="community-card">
            <header class="flex items-center justify-between gap-x-4">
              <div class="flex items-center gap-2">
                <img src="https://avatars.githubusercontent.com/u/111488605?v=4" alt="Dota-contributors" class="rounded-full w-12 h-12"/>
                <div>
                  <h1 class="text-sm">Ayush kumar jaiswal</h1>
                  <p class="text-sm text-gray-400">Developer</p>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <a target="_blank" href="https://github.com/ayu-sh-kr" class="text-gray-600 dark:text-gray-300 hover:underline" title="github">
                  <dota-icon name="mdi:github" color="slate" variant="ghost" size="md"/>
                </a>
                <a href="https://www.linkedin.com/in/ayu-sh-kr/" target="_blank">
                  <dota-icon name="mdi:linkedin" color="slate" variant="ghost" size="md"/>
                </a>
              </div>
            </header>
            <p class="font-medium text-gray-500 mt-4">
              &quot;
              When I started building this component library, my goal was simple:
              to create a toolkit that makes development smoother, faster, and more enjoyable.
              I wanted to provide well-crafted, reusable components that not only save time but also empower developers to build amazing,
              high-quality applications with consistency and ease.
              <br></br>
              But this library is more than just a collection of components—it’s a growing ecosystem shaped by the ideas,
              feedback, and contributions of developers like you. Every improvement, every enhancement,
              and every piece of documentation is driven by a shared passion for clean, efficient, and scalable UI development.
              &quot;
            </p>
          </article>
          <article class="community-card">
            <header class="flex items-center justify-between gap-4">
              <div class="flex items-center gap-2">
                <img src="https://avatars.githubusercontent.com/u/95143999?v=4" alt="Dota-contributors" class="rounded-full w-12 h-12"/>
                <div>
                  <h1 class="text-sm">Deepanshu Agarwal</h1>
                  <p class="text-sm text-gray-400">Developer</p>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <a target="_blank" href="https://github.com/DeepanshuAgarwal999/" class="text-gray-600 dark:text-gray-300 hover:underline" title="github">
                  <dota-icon name="mdi:github" color="slate" variant="ghost" size="md"/>
                </a>
                <a href="https://www.linkedin.com/in/deepanshuagarwal999/" target="_blank">
                  <dota-icon name="mdi:linkedin" color="slate" variant="ghost" size="md"/>
                </a>
              </div>
            </header>
            <p class="font-medium text-gray-500 mt-4">
              &quot;
              Building this library has been an incredible journey,
              and being one of its key contributors has been both challenging and deeply rewarding.
              From the beginning, my focus has been on ensuring that developers have access to components
              that not only look great but also function seamlessly across projects, saving time and effort.

              More than just writing code, my role has been about shaping the vision of this library—ensuring it
              evolves to meet the needs of modern development while maintaining a balance between flexibility and simplicity.
              Every bug fixed, every feature added, and every discussion held has been a step toward refining and expanding
              what we’ve built.
              &quot;
            </p>
          </article>
          <article class="community-card">
            <header class="flex items-center justify-between gap-4">
              <div class="flex items-center gap-2">
                <img src="/images/rajeev_sir.png" alt="Dota-contributors" class="rounded-full w-12 h-12"/>
                <div>
                  <h1 class="text-sm">Rajeev Singh</h1>
                  <p class="text-sm text-gray-400">Professor</p>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <a href="https://www.linkedin.com/in/rajeev-singh-83b309b/" target="_blank">
                  <dota-icon name="mdi:linkedin" color="slate" variant="ghost" size="md"/>
                </a>
              </div>
            </header>
            <p class=" font-medium text-gray-500 mt-4">
              &quot;
              From the very beginning, I saw something special in this project—not just lines of code,
              but a vision fueled by passion, curiosity, and relentless dedication.
              Watching this library evolve has been an extraordinary journey,
              and I’m honored to have been part of it.

              Mentorship isn’t just about guidance; it’s about pushing boundaries,
              challenging ideas, and standing beside you in moments of uncertainty.
              What you’ve built isn’t just a set of components—it’s a testament to perseverance, collaboration,
              and the spirit of innovation.

              Every contribution, every line of code, and every discussion has shaped this library into
              something truly valuable for developers everywhere. Seeing the impact it has had on the
              community is a reminder that great things are built not alone, but together.
              &quot;
            </p>
          </article>
        </div>
      </section>
`
  }
}