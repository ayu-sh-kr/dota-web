import {BaseElement, Component} from "@ayu-sh-kr/dota-core/dist";
import {AfterInit} from "@ayu-sh-kr/dota-core";

@Component({
    selector: 'blog-page',
    shadow: false
})
export class BlogPage extends BaseElement {

    constructor() {
        super();
    }

    @AfterInit()
    afterViewInit() {
      window.scrollTo({top: 0, behavior: 'instant'});
    }

    render(): string {
        // language=html
        return `
            <app-header></app-header>
            <page-wrapper>
              <blog-section></blog-section>
            </page-wrapper>
            <footer-component></footer-component>
        `
    }

}