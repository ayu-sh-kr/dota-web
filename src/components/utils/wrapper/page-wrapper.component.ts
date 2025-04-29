import { BaseElement, Component } from "@ayu-sh-kr/dota-core";

@Component({
  selector: "page-wrapper",
  shadow: false
})
export class PageWrapperComponent extends BaseElement {

  content!: string

  constructor() {
    super();
    this.content = this.innerHTML;
  }

  render() {
    // language=html
    return `
      <section class="font-dm mx-auto max-w-7xl px-3 py-2 mt-10">
        ${this.content}
      </section>
    `
  }
}