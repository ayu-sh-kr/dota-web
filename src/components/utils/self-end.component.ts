import {BaseElement, Component} from "@ayu-sh-kr/dota-core";

@Component({
  selector: "self-end",
  shadow: false
})
export class SelfEndComponent extends BaseElement {

  constructor() {
    super();
  }

  render() {
    // language=html
    return `
      <div class="flex justify-center items-center text-sm text-slate-700 dark:text-slate-200 font-medium font-dm lg:mt-5 md:mt-3 mt-2 gap-x-2">
        <span>Made with</span>
        <dota-icon name="mdi:heart" color="purple" variant="link" size="md"></dota-icon>
        <span>by Team Dota</span>
      </div>
    `
  }
}