import {BaseElement, Component} from "@ayu-sh-kr/dota-core";

@Component({
  selector: "resource-page",
  shadow: false
})
export class ResourcePage extends BaseElement {

  constructor() {
    super();
  }

  render() {
    // language=html
    return `
      <app-header></app-header>
      <resource-section></resource-section>
      <footer-component></footer-component>
`
  }
}