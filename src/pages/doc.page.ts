import {BaseElement, Component, HTML} from "@ayu-sh-kr/dota-core/dist";


@Component({
    selector: 'doc-page',
    shadow: false
})
export class DocPage extends BaseElement {

    render(): string {
        return HTML`
        <app-header/>
        `
    }

}
