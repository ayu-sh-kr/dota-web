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

    // language=HTML
    return `
      <section class="mx-auto max-w-7xl px-3 py-2 mt-10">
        <h1 class="text-3xl sm:text-4xl font-extrabold font-adaptive text-center mb-20">Our Tools</h1>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
          <article
              class="card-wrapper  h-[200px] mx-auto w-[340px] p-4 bg-white  rounded-lg shadow-md dark:text-gray-100 hover:scale-110 ease-in-out duration-300 hover:shadow-2xl">
            <div class="card-content pt-6 flex flex-col gap-y-4 items-center">
              <p class="text-lg font-semibold pt-4">
                Dota Core
              </p>
              <p class="text-gray-700 max-w-[85%] dark:text-gray-300">
                Dota Core is a library for building-reusable, customizable UI components libraries.
              </p>
            </div>
          </article>

          <article
              class="card-wrapper h-[200px]  mx-auto w-[340px] p-4 bg-white  rounded-lg shadow-md dark:text-gray-100 hover:scale-110 ease-in-out duration-300 hover:shadow-2xl">
            <div class="card-content delay-200 pt-6 flex flex-col gap-y-4 items-center">
              <p class="text-lg font-semibold pt-4">
                Dota Rest
              </p>
              <p class="text-gray-700 max-w-[85%] dark:text-gray-300">
                Dota Rest is wrapper around fetch API, provides fluent API based methods for performing Rest based requests.
              </p>
            </div>
          </article>

          <article
              class="card-wrapper h-[200px] mx-auto w-[340px] p-4 bg-white  rounded-lg shadow-md dark:text-gray-100 hover:scale-110 ease-in-out duration-300 hover:shadow-2xl">
            <div class="card-content delay-500 pt-6 flex flex-col gap-y-4 items-center">
              <p class="text-lg font-semibold pt-4">
                Dota UI
              </p>
              <p class="text-gray-700 max-w-[85%] dark:text-gray-300">
                Dota UI is a UI library which provides collection of web component ready to be served for your next project.
              </p>
            </div>
          </article>
        </div>
      </section>
        
    `;
  }
}
