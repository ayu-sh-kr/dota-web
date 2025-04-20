import {BaseElement, Component, Property, String} from "@ayu-sh-kr/dota-core";

@Component({
  selector: "section-header",
  shadow: false
})
export class SectionHeaderComponent extends BaseElement {

  @Property({
    name: 'header',
    type: String
  })
  header!: string

  constructor() {
    super();
  }

  render() {
    // language=html
    return `
      <h1 class="text-3xl sm:text-4xl font-extrabold font-adaptive text-center mb-20">${this.header}</h1>
    `
  }
}