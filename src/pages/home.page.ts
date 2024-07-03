import {BaseElement, Component, HTML} from "@ayu-sh-kr/dota-core/dist";
import '@dota/components/home'

@Component({
    selector: 'home-page',
    shadow: false
})
export class HomePage extends BaseElement {

    constructor() {
        super();
    }

    render(): string {
        return HTML`
           <app-offer/>
           <app-header/>
           <app-hero/>
        `
    }

}