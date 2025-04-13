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
        return HTML`
            <app-header/>
        `;
    }

}