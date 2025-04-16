import { BaseElement, Component, HTML } from "@ayu-sh-kr/dota-core";

@Component({
  selector: "app-header",
  shadow: false,
})
export class HeaderComponent extends BaseElement {
  items: Link[] = [
    {
      name: "Documents",
      url: "/docs",
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
            <header class="flex z-50 justify-between items-center px-2 py-3 font-dm sticky top-0 left-0 shadow-md bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
                <div class="font-extrabold text-2xl w-1/6 px-5"><a href="/">Dota</a></div>
                <div class="md:flex justify-center items-center hidden w-4/6">
                    <ul class="flex justify-between items-center gap-x-5 w-1/2">
                        ${this.items
                          .map((item) => {
                            return `<li class="text-sm font-semibold hover:text-purple-600"><a href="${item.url}">${item.name}</a></li>`;
                          })
                          .join("")}
                    </ul>
                </div>
                <div class="w-1/6">
                    <div class="flex items-center px-5 gap-x-3 justify-end">
                        <github-button></github-button>
                        <dark-mode-button></dark-mode-button>
                        <ai-button></ai-button>
                    </div>
                </div>
            </header>
        `;
  }
}

export interface Link {
  name: string;
  url: string;
}

export function toggleDark() {
  const html = document.getElementsByTagName("html");
  const value = document.documentElement.classList.toggle("dark");
  document.documentElement.classList.toggle("bg-slate-950");
  return value;
}
