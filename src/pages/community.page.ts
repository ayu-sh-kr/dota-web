import {AfterInit, BaseElement, Component} from "@ayu-sh-kr/dota-core";

@Component({
  selector: "community-page",
  shadow: false
})
export class CommunityPage extends BaseElement {

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
      <page-wrapper>
      </page-wrapper>
      <footer-component></footer-component>
    `
  }
}