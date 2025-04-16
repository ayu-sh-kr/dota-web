import {BaseElement, Component, HTML} from "@ayu-sh-kr/dota-core";


@Component({
  selector: 'doc-page',
  shadow: false
})
export class DocPage extends BaseElement {

  constructor() {
    super();
  }

  render(): string {
    // language=html
    return HTML`
      <app-header></app-header>
      <doc-section></doc-section>
      <footer-component></footer-component>
      <scroll-bottom-button></scroll-bottom-button>
    `;
  }
}
