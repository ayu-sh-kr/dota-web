import {BaseElement, Component} from "@ayu-sh-kr/dota-core";

@Component({
  selector: "section-header",
  shadow: false
})
export class SectionHeaderComponent extends BaseElement {

  content!: string;

  constructor() {
    super();
    this.content = this.innerHTML;
  }

  render() {
    // language=html
    return `
      <h1 class="text-3xl sm:text-4xl font-extrabold font-adaptive text-center mb-20">
        ${this.content}
      </h1>
    `
  }
}