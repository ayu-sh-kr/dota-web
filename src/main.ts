import './style.css'
import {OfferComponent} from "@dota/components/home/offer.component.ts";
import {HeroSectionComponent} from "@dota/components/home/hero-section.component.ts";
import {HeaderComponent} from "@dota/components/home/header.component.ts";
import '@dota/pages/home.page'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<home-page></home-page>
`


declare global {
    interface HTMLTagNameMap {
        'app-offer': OfferComponent,
        'app-header': HeaderComponent,
        'app-hero': HeroSectionComponent
    }
}