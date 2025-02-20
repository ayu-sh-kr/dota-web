import {BaseElement, Component} from "@ayu-sh-kr/dota-core/dist";


@Component({
    selector: 'github-button',
    shadow: false
})
export class GithubButtonComponent extends BaseElement{

    constructor() {
        super();
    }

    render(): string {
        // language=HTML
        return `
            <span id="github-button" class="active:scale-95 cursor-pointer">
                <a href="https://github.com/ayu-sh-kr" target="_blank">
                    <dota-icon name="mdi:github" color="gray" variant="ghost" size="md"/>
                </a>
            </span>
        `;
    }

}