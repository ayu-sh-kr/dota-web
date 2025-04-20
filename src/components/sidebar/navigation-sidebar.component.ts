import {AfterInit, BaseElement, Component, Property, String} from "@ayu-sh-kr/dota-core";
import {Link} from "@dota/components/utils/header.component.ts";

@Component({
  selector: "navigation-sidebar",
  shadow: false
})
export class NavigationSidebarComponent extends BaseElement {
  items: Link[] = [
    {
      name: "Documents",
      url: "/docs/Getting-Started.md",
    },

    {
      name: "Resources",
      url: "/resources",
    },

    {
      name: "Community",
      url: "/community",
    },

    {
      name: "Blogs",
      url: "/blogs",
    },
  ];

  constructor() {
    super();
  }

  @AfterInit()
  afterViewInit() {
    // Initialize component after it's added to the DOM
  }

  render() {
    // language=html
    return `
      <div class="fixed p-4 bg-white dark:bg-slate-900 h-screen overflow-hidden w-full z-50">
        <div class="relative">
             <button class="absolute top-4 right-4">
               <dota-icon name="gridicons:cross-small" size="md" variant="ghost"></dota-icon>
              </button>
            <ul class="flex flex-col items-center justify-center gap-6 h-full">
              ${this.items.map((item) => {
                return `
                  <li class="text-sm font-semibold hover:text-purple-600 dark:hover:text-purple-500
                   text-gray-700 dark:text-gray-100">
                    <a href="${item.url}">${item.name}</a>
                     </li>
                   `;
                 }).join("")}
            </ul>
        </div>
      </div>
`
  }
}