import {BaseElement, Component, HTML} from "@ayu-sh-kr/dota-core";

@Component({
  selector: "app-header",
  shadow: false,
})
export class HeaderComponent extends BaseElement {
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

  render(): string {
    return HTML`
           <header class="z-50 px-2 font-dm sticky top-4 left-0 ">
                <nav class="flex py-3 justify-between items-center shadow-sm backdrop-blur-lg backdrop-brightness-125 dark:backdrop-brightness-110 
                    dark:shadow-purple-400 max-w-5xl rounded-full mx-auto">
                     <div class="font-extrabold text-2xl w-1/6 px-5 text-gray-900 dark:text-gray-100">
                        <a href="/public">Dota</a>
                     </div>
                    <div class="md:flex justify-center items-center hidden w-4/6">
                        <ul class="flex justify-between items-center gap-x-5 w-1/2">
                                ${this.items.map((item) => {
        return `
                                             <li class="text-sm font-semibold hover:text-purple-600 dark:hover:text-purple-500 text-gray-700 dark:text-gray-100">
                                                <a href="${item.url}">${item.name}</a>
                                             </li>
                                    `;
    }).join("")}
                         </ul>
                      </div>
                      <div class="flex items-center px-5 gap-x-3 justify-end">
                        <github-button></github-button>
                        <dark-mode-button></dark-mode-button>
                        <ai-button></ai-button>
                        <ham-burger-button></ham-burger-button>
                      </div>
                </nav>
            </header>
            <navigation-sidebar visible="false"></navigation-sidebar>
        `;
  }
}

export interface Link {
  name: string;
  url: string;
}

