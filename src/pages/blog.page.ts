import {BaseElement, Component, HTML} from "@ayu-sh-kr/dota-core/dist";

@Component({
    selector: 'blog-page',
    shadow: false
})
export class BlogPage extends BaseElement {

    constructor() {
        super();
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