import {BaseElement, Component, HTML} from "@ayu-sh-kr/dota-core/dist";
import '@dota/components/home/offer.component.ts'
import '@dota/components/home/header.component.ts'
import '@dota/components/home/hero-section.component.ts'
import '@dota/components/utils/notification/notification.component.ts'

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
           <app-offer></app-offer>
           <app-header></app-header>
           <app-hero></app-hero>
           <notification-holder id="dota-notification"></notification-holder>
        `
    }

}