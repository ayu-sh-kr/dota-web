import {AfterInit, BaseElement, Component} from "@ayu-sh-kr/dota-core";
import {GeneralUtils} from "@dota/utils/GeneralUtils.ts";

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
    GeneralUtils.scrollToTop('instant')
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