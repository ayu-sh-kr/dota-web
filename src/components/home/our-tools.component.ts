import { BaseElement, Component } from "@ayu-sh-kr/dota-core";

@Component({
  selector: "our-tools",
  shadow: false,
})
export class OurToolsComponent extends BaseElement {
  constructor() {
    super();
  }

  render(): string {
    return `
            <h1 class="text-5xl sm:text-7xl font-extrabold text-gray-900 dark:text-gray-100 text-wrap py-10 leading-[3.25rem] tracking-wide text-center">Our Tools</h1>

              <div class="flex flex-wrap py-20 justify-items-center  place-items-center justify-between px-10 mt-20 gap-20 ">

            <article class="card-wrapper h-[180px]  mx-auto w-[340px] p-4 bg-white  rounded-lg shadow-md dark:text-gray-100 hover:scale-110 ease-in-out duration-300 hover:shadow-2xl">
            <div class="card-content pt-6 flex flex-col gap-y-4 items-center">
             <p class="text-lg font-semibold pt-4">
             Dota Core
              </p>
            <p class="text-gray-700 max-w-[85%] dark:text-gray-300">
            Dota Core is a library for building-reusable, customizable UI components libraries.
             </p>
             </div>
            </article>
           
             <article class="card-wrapper h-[180px]  mx-auto w-[340px] p-4 bg-white  rounded-lg shadow-md dark:text-gray-100 hover:scale-110 ease-in-out duration-300 hover:shadow-2xl">
            <div class="card-content delay-200 pt-6 flex flex-col gap-y-4 items-center">
             <p class="text-lg font-semibold pt-4">
            Dota Web
              </p>
            <p class="text-gray-700 max-w-[85%] dark:text-gray-300">
            Dota Web is a library for building-reusable, customizable UI components libraries.
             </p>
             </div>
            </article>
         
              <article class="card-wrapper h-[180px] mx-auto w-[340px] p-4 bg-white  rounded-lg shadow-md dark:text-gray-100 hover:scale-110 ease-in-out duration-300 hover:shadow-2xl">
            <div class="card-content delay-500 pt-6 flex flex-col gap-y-4 items-center">
             <p class="text-lg font-semibold pt-4">
             Dota Core
              </p>
            <p class="text-gray-700 max-w-[85%] dark:text-gray-300">
             Dota Core is a library for building-reusable, customizable UI components libraries
             </p>
             </div>
            </article>
          
           <article class="card-wrapper  h-[180px] mx-auto w-[340px] p-4 bg-white  rounded-lg shadow-md dark:text-gray-100 hover:scale-110 ease-in-out duration-300 hover:shadow-2xl">
            <div class="card-content  pt-6 flex flex-col gap-y-4 items-center">
             <p class="text-lg font-semibold pt-4">
               Web
              </p>
            <p class="text-gray-700 max-w-[85%] dark:text-gray-300">
            The Dota Web is a library for building-reusable, customizable UI components libraries.
             </p>
             </div>
            </article>
            </div>
        `;
  }
}
