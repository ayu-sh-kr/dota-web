import {AfterInit, BaseElement, Component, Property, String} from "@ayu-sh-kr/dota-core";

@Component({
  selector: "emitter-section",
  shadow: false
})
export class EmitterSectionComponent extends BaseElement {

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
      <section class="font-dm mx-auto max-w-7xl px-3 py-20">
        <div class="grid md:grid-cols-2 gap-x-20 gap-y-10 place-items-center justify-items-center">
          <img src="/images/code-snippet-4.jpg" alt="dota-reactive"
               class="rounded-lg  min-w-[360px] h-full max-h-[90%] order-2 lg:order-1"
          />
          <div class="space-y-5 order-1 lg:order-2">
            <h4 class="text-gray-700 dark:text-gray-300 font-semibold">Event Emitter</h4>
            <h2 class="ld:text-5xl md:text-4xl text-3xl font-extrabold tracking-wide text-gray-950 dark:text-gray-100">Custom Event Support.</h2>
            <p class="text-gray-600 dark:text-gray-400 font-light lg:text-2xl md:text-xl text-lg">
              Event Emitters <span class="text-purple-500 font-semibold italic">@Emitter</span> are a core part of Dota-Core and are used to handle events in a decoupled way. They allow you to emit events, making it easy to emit custom events and listen for them in different parts of your code.
            </p>
          </div>
        </div>
      </section>
    `
  }
}