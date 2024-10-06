import './style.css'
import {NotificationHolderComponent} from "@dota/components/utils/notification/notification-holder.component.ts";
import {NotificationComponent} from "@dota/components/utils/notification/notification.component.ts";
import {AppComponent} from "@dota/app.component.ts";
import {RoutesService} from "@dota/service/routes.service.ts";
import {bootstrap} from "@ayu-sh-kr/dota-core";
import {DocPage, ErrorPage, HomePage} from "@dota/pages";
import {FeatureComponent, HeaderComponent, HeroSectionComponent, OfferComponent} from "@dota/components/home";
import {IconsComponent} from "@ayu-sh-kr/dota-ui/dist";


bootstrap([
    OfferComponent,
    HeroSectionComponent,
    HeaderComponent,
    NotificationComponent,
    NotificationHolderComponent,
    HomePage,
    DocPage,
    ErrorPage,
    FeatureComponent,
    IconsComponent,
    AppComponent
])

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