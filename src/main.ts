import './style.css'
import './app.component.ts';
import {OfferComponent} from "@dota/components/home/offer.component.ts";
import {HeroSectionComponent} from "@dota/components/home/hero-section.component.ts";
import {HeaderComponent} from "@dota/components/home/header.component.ts";
import {NotificationHolderComponent} from "@dota/components/utils/notification/notification-holder.component.ts";
import {NotificationComponent} from "@dota/components/utils/notification/notification.component.ts";
import {HomePage} from "@dota/pages/home.page.ts";
import {DocPage} from "@dota/pages/doc.page.ts";
import {AppComponent} from "@dota/app.component.ts";
import {RoutesService} from "@dota/service/routes.service.ts";

new RoutesService();


declare global {
    interface HTMLTagNameMap {
        'app-offer': OfferComponent,
        'app-header': HeaderComponent,
        'app-hero': HeroSectionComponent,
        'notification-holder': NotificationHolderComponent
        'app-notification': NotificationComponent
        'home-page': HomePage
        'doc-page': DocPage,
        'app-root': AppComponent
    }
}