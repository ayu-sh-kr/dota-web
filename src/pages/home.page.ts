import {BaseElement, Component, HTML} from "@ayu-sh-kr/dota-core";

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
           <app-feature></app-feature>
           <code-section></code-section>
           <reactive-dota></reactive-dota>
           <hostlistener-section></hostlistener-section>
           <emitter-section></emitter-section>
           <device-section></device-section>
           <our-tools></our-tools>
           <client-section></client-section>
           <footer-component></footer-component>
        `
    }

}