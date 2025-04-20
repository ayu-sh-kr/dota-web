import {AfterInit, BaseElement, Component, HTML} from "@ayu-sh-kr/dota-core";
import {GeneralUtils} from "@dota/utils/GeneralUtils.ts";

@Component({
    selector: 'home-page',
    shadow: false
})
export class HomePage extends BaseElement {

    constructor() {
        super();
    }

    @AfterInit()
    afterViewInit() {
      GeneralUtils.scrollToTop('instant');
    }

    render(): string {
        return HTML`
           <app-offer visible="true"></app-offer>
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
           <navigation-sidebar></navigation-sidebar>
           <footer-component></footer-component>
        `
    }

}