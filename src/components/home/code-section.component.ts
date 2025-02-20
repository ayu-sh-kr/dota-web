import { BaseElement, Component, HTML } from "@ayu-sh-kr/dota-core";

@Component({
  selector: "code-section",
  shadow: false,
})
export class CodeSectionComponent extends BaseElement {
  constructor() {
    super();
  }

  render(): string {
    return HTML`
          <section>
            <h1 class="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-gray-100 text-center text-wrap leading-[3.25rem] tracking-wide py-20 ">Clean And Efficient Code Architecture</h1>
        

            <div class="grid md:grid-cols-2 gap-x-20 gap-y-10 py-20 px-10 sm:px-20 place-items-center justify-items-center">
            <div class="space-y-20">
            <h1 class="text-4xl font-semibold">Reactive support</h1>
             <p class="text-lg">
                With reactivity dom gets update each time a property marked as @Property gets its value changed.
                </p>         
             </div>
             <img src="/images/code-snippet-1.png" alt="dot-ui-bg" class="rounded-lg mix-blend-darken min-w-[360px] max-w-[80%]" />
            </div>
            
          
          </section>
        `;
  }
}
