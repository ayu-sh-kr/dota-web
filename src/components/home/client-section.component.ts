import {BaseElement, Component} from "@ayu-sh-kr/dota-core";
import {testimonials} from "@dota/constants/client.ts";

@Component({
  selector: "client-section",
  shadow: false
})
export class ClientSectionComponent extends BaseElement{

  constructor() {
    super();
  }

  render(){
    // language=html
    return `
      <section id="clients" class="py-24 font-dm">
        <div class="mt-16 container mx-auto">
          <h1 class="text-3xl sm:text-4xl font-extrabold font-adaptive text-center mb-20"> Trusted by Industry Leaders</h1>
          <div class="grid  place-items-center md:grid-cols-3 px-4 gap-14">
            ${testimonials.map((testimonial) => {
              return `
              <article class="bg-white max-w-sm dark:bg-gray-800 shadow-md shadow-purple-200 dark:shadow-purple-500 p-6 rounded-xl">
                    <div class="flex items-center mb-4">
                        <img
                            src=${testimonial.img}
                            alt=${testimonial.name}
                            class="w-12 h-12 rounded-full"
                        />
                        <div class="ml-4">
                            <div class="text-gray-600 dark:text-gray-100 font-semibold">
                                ${testimonial.name}
                            </div>
                            <div class="text-purple-500 dark:text-purple-600 text-sm">
                                ${testimonial.title}
                            </div>
                        </div>
                    </div>
                    <p class="text-neutral-500 dark:text-neutral-200">${testimonial.feedback}</p>
                </article>
            `
            }).join(" ")}
          </div>
        </div>
      </section>
    `;
  }
}
