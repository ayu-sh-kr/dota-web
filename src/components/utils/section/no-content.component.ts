import {BaseElement, Component} from "@ayu-sh-kr/dota-core";

@Component({
  selector: "no-content",
  shadow: false
})
export class NoContentComponent extends BaseElement {

  constructor() {
    super();
  }

  render() {
    // language=html
    return `
      <div class="grid sm:grid-cols-1 md:grid-cols-2 place-items-center overflow-hidden">
        <div class="text-center py-10 font-semibold text-gray-700 dark:text-gray-300">
          <h1 class="text-5xl md:text-6xl lg:text-7xl">Oops!</h1>
          <h3 class="text-purple-500 dark:text-purple-400">No Content At The Moment</h3>
        </div>
        <div class="">
          <img src="/svgs/no-content.svg" alt="no-content.svg" class="bg-transparent">
        </div>
      </div>
    `
  }
}