import {
  AfterInit,
  BaseElement,
  Component,
  Property,
  Boolean,
  Watcher,
  WindowListener, BindEvent
} from "@ayu-sh-kr/dota-core";
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
  visible:boolean = false;

  constructor() {
    super();
  }

  @AfterInit()
  afterViewInit() {

  }

  @WindowListener({event: 'resize'})
  handleScreenSize() {
    if (window.innerWidth >= 768) { // Tailwind's 'md' breakpoint is 768px
      this.visible = false;
      document.body.classList.remove('overflow-hidden')
    }
  }


  @Watcher('visible')
  handleVisibility(){
    if(this.visible) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }


  @BindEvent({
    event: 'click',
    id: '#close-button'
  })
  handleCloseClick() {
    this.visible = false;
  }

  render() {
    // language=html
    return `
      <div class="fixed ${ this.visible ? "block" : "hidden" } md:hidden  bg-white top-0 left-0 dark:bg-slate-900 h-screen  w-full z-50">
        <div class="relative h-full ">
          <header class="p-4 border-b flex items-center justify-between">
            <div class="font-extrabold text-2xl w-1/6 px-5 text-gray-900 dark:text-gray-100">
              <a href="/">Dota</a>
            </div>
            <button id="close-button" class="">
              <dota-icon name="gridicons:cross-small" size="md" color="gray" variant="soft"></dota-icon>
            </button>
          </header>
           <div class="flex mt-12 justify-center h-full ">
             <ul class="flex flex-col w-[300px]">
               ${this.items.map((item) => {
                 return `
                  <li class=" font-medium hover:text-purple-600 dark:hover:text-purple-500
                   text-gray-700 dark:text-gray-100 text-left w-full">
                    <a href="${item.url}" class=" inline-block py-4 border-b w-full">${item.name}</a>
                     </li>
                   `;
               }).join("")}
             <div class=" bg-[#F6F6F7] dark:bg-slate-800 rounded-md p-3 mt-6 flex items-center justify-between">
               <p class="text-[13px] text-gray-500 dark:text-gray-300 font-medium">Appearance</p>
               <dark-mode-button></dark-mode-button>
             </div>
               <ul class="mt-4 flex gap-2 items-center justify-center">
                   <a href="#" class="text-gray-600 dark:text-gray-300 hover:underline" title="discord">
                     <dota-icon name="mdi:discord" color="slate" variant="ghost" size="lg"/>
                   </a>
                   <a href="#" class="text-gray-600 dark:text-gray-300 hover:underline" title="twitter">
                     <dota-icon name="mdi:twitter" color="slate" variant="ghost" size="lg"/>
                   </a>
                   <a href="#" class="text-gray-600 dark:text-gray-300 hover:underline" title="github">
                     <dota-icon name="mdi:github" color="slate" variant="ghost" size="lg"/>
                   <a href="#" class="text-gray-600 dark:text-gray-300 hover:underline inline-flex pt-1.5" title="blog">
                     <dota-icon name="mdi:blogger" color="slate" variant="ghost" size="lg"/>
                   </a>
               </ul>
             </ul>
           </div>
        </div>
      </div>
`
  }
}