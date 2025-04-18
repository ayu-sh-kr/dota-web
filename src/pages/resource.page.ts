import {AfterInit, BaseElement, Component, Property, String} from "@ayu-sh-kr/dota-core";

@Component({
  selector: "resource-page",
  shadow: false
})
export class ResourcePage extends BaseElement {

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
      <app-header></app-header>
      <resource-section></resource-section>
      <footer-component></footer-component>
`
  }
}