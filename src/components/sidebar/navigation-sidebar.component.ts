import {AfterInit, BaseElement, Component, Property, String, Boolean, Watcher} from "@ayu-sh-kr/dota-core";
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

  @Property({
    name:"visible",
    type:Boolean
  })
  visible:boolean=false
  constructor() {
    super();
  }

  @AfterInit()
  afterViewInit() {

  }
  @Watcher('visible')
  handleVisibility(){
    document.body.classList.toggle('overflow-hidden')
  }

  render() {
    // language=html
    return `
      <div class="fixed ${ this.visible ? "block" : "hidden" } p-4 bg-white top-0 left-0 dark:bg-slate-900 h-screen  w-full z-50">
        <div class="relative h-full">
             <button class="absolute top-4 right-4">
               <dota-icon name="gridicons:cross-small" size="md" variant="ghost"></dota-icon>
              </button>
            <ul class="flex flex-col items-center justify-center gap-6 h-full">
              ${this.items.map((item) => {
                return `
                  <li class=" font-semibold hover:text-purple-600 dark:hover:text-purple-500
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