import './style.css'

import {AppComponent} from "@dota/app.component.ts";
import {RoutesService} from "@dota/service/routes.service.ts";
import {bootstrap} from "@ayu-sh-kr/dota-core";
import {DocPage, ErrorPage, HomePage} from "@dota/pages";
import {
    CodeSectionComponent, DeviceSectionComponent,
    FeatureComponent, GetStartedButtonComponent,
    HeaderComponent,
    HeroSectionComponent,
    OfferComponent
} from "@dota/components/home";
import {IconsComponent} from "@ayu-sh-kr/dota-ui/dist";
import {
    DarkModeButtonComponent,
    GithubButtonComponent,
    NotificationComponent,
    NotificationHolderComponent
} from "@dota/components/utils";
import { OurToolsComponent } from './components/home/our-tools.component';



bootstrap([
    // entry
    AppComponent,

    // utility component
    HeaderComponent,
    NotificationComponent,
    NotificationHolderComponent,
    DarkModeButtonComponent,
    GithubButtonComponent,
    IconsComponent,

    // home-page components
    OfferComponent,
    HeroSectionComponent,
    FeatureComponent,
    CodeSectionComponent,
    DeviceSectionComponent,
    GetStartedButtonComponent,
    OurToolsComponent,

    // pages
    HomePage,
    DocPage,
    ErrorPage,
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
        'app-root': AppComponent,
        'code-section': CodeSectionComponent,
        'device-section': DeviceSectionComponent,
        'get-started-button': GetStartedButtonComponent,
        'dark-mode-button': DarkModeButtonComponent,
        'github-button': GithubButtonComponent,
        'our-tools': OurToolsComponent,
    }
}