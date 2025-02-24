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
    OfferComponent, OurToolsComponent
} from "@dota/components/home";
import {IconsComponent} from "@ayu-sh-kr/dota-ui/dist";
import {
    DarkModeButtonComponent,
    GithubButtonComponent,
    NotificationComponent,
    NotificationHolderComponent
} from "@dota/components/utils";
import {ReactiveSectionComponent} from "@dota/components/home/reactive-section.component.ts";
import {HostListenerSectionComponent} from '@dota/components/home/hostlistener-section.component.ts'
import {FooterComponent} from "@dota/components/utils/footer.component.ts";
import {LeftSidebarComponent} from "@dota/components/dashboard";
import {DashboardPage} from "@dota/pages/dashboard.page.ts";


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
    ReactiveSectionComponent,
    HostListenerSectionComponent,
    FooterComponent,

    // dashboardComponents
    LeftSidebarComponent,

    // pages
    DashboardPage,
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
        'home-page': HomePage,
        'doc-page': DocPage,
        'app-root': AppComponent,
        'code-section': CodeSectionComponent,
        'device-section': DeviceSectionComponent,
        'get-started-button': GetStartedButtonComponent,
        'dark-mode-button': DarkModeButtonComponent,
        'github-button': GithubButtonComponent,
        'our-tools': OurToolsComponent,
        'left-sidebar': LeftSidebarComponent,
        'dashboard-page':DashboardPage
    }
}