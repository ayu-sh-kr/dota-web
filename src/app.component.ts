import {BaseElement, Component, HTML} from "@ayu-sh-kr/dota-core/dist";
import '@dota/pages/home.page.ts'
import '@dota/pages/doc.page.ts'
import '@dota/pages/error.page.ts'
import {AfterInit} from "@ayu-sh-kr/dota-core";
import {GeneralUtils} from "@dota/utils/GeneralUtils.ts";


@Component({
    selector: 'app-root',
    shadow: false
})
export class AppComponent extends BaseElement {

    constructor() {
        super();
    }

    @AfterInit()
    afterViewInit() {
        const browserTheme = GeneralUtils.getBrowserTheme();
        GeneralUtils.setBrowserTheme(browserTheme);
    }

    render(): string {
        return HTML`<home-page></home-page>`
    }

}