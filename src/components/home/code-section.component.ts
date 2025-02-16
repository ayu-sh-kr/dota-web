import { BaseElement, Component, HTML } from "@ayu-sh-kr/dota-core";
import transparentImg from "../../../public/images/transparentCard.png";
@Component({
  selector: "code-section",
  shadow: false,
})
export class CodeSection extends BaseElement {
  constructor() {
    super();
  }
  render(): string {
    return HTML`
          <div>
           
            <h1 class="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-gray-100 text-center text-wrap py-10 leading-[3.25rem] tracking-wide py-20 ">Clean And Efficient Code Architecture</h1>
            <section class="h-screen py-20 flex items-center rounded-b-[2rem] bg-gradient-to-br from-[#ffffff] via-[#9333EA]
                to-[#6b007e] justify-center">

            <img src="../../../public/images/code-snippet-1.png" alt="dot-ui-bg" class="opacity-85  max-w-4xl max-h-[530px] w-full h-full" />
             </section>
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 py-20 justify-items-center  place-items-center justify-between px-10 mt-20 gap-10">
            <article class="bg-white rounded-lg shadow-md hover:scale-110 ease-in-out duration-300 hover:shadow-2xl transition dark:bg-gray-900 dark:text-gray-100">
                <div class="p-6 flex flex-col gap-y-4 items-center">
                    <div class="flex flex-col gap-y-4 items-center">
                        <div class="flex flex-col gap-y-2 items-center">
                            <p class="text-lg font-semibold">
                                Dota Core
                            </p>
                            <p class="text-gray-700 dark:text-gray-300">
                                Dota Core is a library for building-reusable, customizable UI components libraries.
                            </p>
                        </div>
                        </div>
                        </div>

                </article>
                    <article class="bg-white  rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100 hover:scale-110 ease-in-out duration-300 hover:shadow-2xl">  <div class="flex flex-col gap-y-2 items-center">
                        <div class="p-6 flex flex-col gap-y-4 items-center">
                            <p class="text-lg font-semibold">
                                Dota Web
                            </p>
                            <p class="text-gray-700 dark:text-gray-300">
                                Dota Web is a library for building-reusable, customizable UI components libraries.
                            </p>
                            </div>
                     
                    </article>
              <article class="bg-white  rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100 hover:scale-110 ease-in-out duration-300 hover:shadow-2xl">
                <div class="p-6 flex flex-col gap-y-4 items-center">
                    <p class="text-lg font-semibold">
                        Dota Core
                    </p>
                    <p class="text-gray-700 dark:text-gray-300">
                        Dota Core is a library for building-reusable, customizable UI components libraries.
                    </p>
                </div>
              </article>
              <article class="bg-white  rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100 hover:scale-110 ease-in-out duration-300 hover:shadow-2xl">
               <div class="p-6 flex flex-col gap-y-4 items-center">
                    <p class="text-lg font-semibold">
                        Web
                    </p>
                    <p class="text-gray-700  dark:text-gray-300">
                        The Dota Web is a library for building-reusable, customizable UI components libraries.
                    </p>
                </div>
            
            </article>

            </div>


             <h1 class="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-gray-100 text-center text-wrap py-20 leading-[4rem] tracking-wide px-10  sm:px-20 "> 
                Inner Component Event Handling with Easy Integration
             </h1>
              <section class=" bg-gradient-to-r  from-purple-500 to-purple-900 w-full grid md:grid-cols-2 justify-items-center place-items-center px-20 py-20 gap-24 rounded-t-[2rem]  rounded-b-[2rem]">

            <img src="../../../public/images/code-snippet-2.png" alt="dot-ui-bg" class="opacity-90 max-w-5xl max-h-[630px] rounded-lg w-full h-full shadow-lg sm:-rotate-12" />
            <img src="../../../public/images/code-snippet-3.png" alt="dot-ui-bg" class="max-w-2xl rounded-lg max-h-[630px] w-full shadow-2xl sm:rotate-12" />
             </section>
            
            </div>
        `;
  }
}
