import {AfterInit, BaseElement, Component} from "@ayu-sh-kr/dota-core";
import {GeneralUtils} from "@dota/utils/GeneralUtils.ts";

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
    GeneralUtils.scrollToTop('instant');
  }

  render() {
    // language=html
    return `
      <app-header></app-header>
      <page-wrapper>
        <community-component></community-component>
      </page-wrapper>
      <footer-component></footer-component>
    `
  }
}