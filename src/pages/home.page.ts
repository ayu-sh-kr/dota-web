import {BaseElement, Component, HTML} from "@ayu-sh-kr/dota-core/dist";
import '@dota/components/home/offer.component'
import '@dota/components/home/header.component'
import '@dota/components/home/hero-section.component'

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