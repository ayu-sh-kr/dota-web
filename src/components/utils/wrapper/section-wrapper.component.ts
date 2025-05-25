import {BaseElement, Component, State} from "@ayu-sh-kr/dota-core";

@Component({
  selector: "section-wrapper",
  shadow: false
})
export class SectionWrapperComponent extends BaseElement {

  @State()
  content!: string

  constructor() {
    super();
    this.content = this.innerHTML;
  }

  render() {
    // language=html
    return `
      <section class="mt-10 font-dm">
        ${this.content}
      </section>
    `
  }
}