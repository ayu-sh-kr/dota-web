import { BaseElement, Component } from "@ayu-sh-kr/dota-core";

@Component({
  selector: "ham-burger-button",
  shadow: false
})
export class HamBurgerButtonComponent extends BaseElement {

  constructor() {
    super();
  }

  render() {
    // language=html
    return `
      <button id="ham-button" class="md:hidden flex items-center justify-center active:scale-95">
        <dota-icon name="solar:hamburger-menu-linear" color="gray" variant="ghost" size="md"></dota-icon>
      </button>
    `
  }
}