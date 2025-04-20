import './style.css'

import {AppComponent} from "@dota/app.component.ts";
import {bootstrap} from "@ayu-sh-kr/dota-core";
import {BlogPage, ChatPage, CommunityPage, DocPage, ErrorPage, HomePage} from "@dota/pages";
import {
  ClientSectionComponent,
  CodeSectionComponent, DevicePreviewComponent, DeviceSectionComponent, EmitterSectionComponent,
  FeatureComponent, GetStartedButtonComponent,
  HeaderComponent,
  HeroSectionComponent, HostListenerSectionComponent,
  OfferComponent, OurToolsComponent, ReactiveSectionComponent
} from "@dota/components/home";
import {IconsComponent, ButtonComponent, PopoverComponent} from "@ayu-sh-kr/dota-ui";
import {
  AiButtonComponent,
  DarkModeButtonComponent,
  FooterComponent,
  GithubButtonComponent,
  HamBurgerButtonComponent,
  LoaderSectionComponent,
  NotificationComponent,
  NotificationHolderComponent,
  PageWrapperComponent,
  ScrollBottomButtonComponent,
  SectionHeaderComponent,
  SelfEndComponent
} from "@dota/components/utils";
import {LoaderComponent} from "@dota/components/utils"
import {DocContentComponent, DocPathComponent, DocSectionComponent} from "@dota/components/docs";
import {CounterComponent} from "@dota/components/example/CounterComponent.ts";
import {AiFormComponent, MessageBoxComponent, MessageCardComponent} from "@dota/components/chat";
import {DomNavigationRouter} from "@ayu-sh-kr/dota-router";
import {routesConfig} from "@dota/configs/routes.config.ts";
import {ResourcePage} from "@dota/pages/resource.page.ts";
import {ResourceSectionComponent, ResourcePathComponent, ResourceContentComponent} from "@dota/components/resource";
import {BlogIconComponent, BlogPreviewComponent, BlogSectionComponent} from "@dota/components/blogs";


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
  PopoverComponent,
  AiButtonComponent,
  LoaderComponent,
  LoaderSectionComponent,
  ScrollBottomButtonComponent,
  DevicePreviewComponent,
  ButtonComponent,
  HamBurgerButtonComponent,
  SelfEndComponent,
  PageWrapperComponent,

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
  EmitterSectionComponent,
  ClientSectionComponent,
  FooterComponent,
  SectionHeaderComponent,

  // doc-page components
  DocPathComponent,
  DocContentComponent,
  DocSectionComponent,


  // resource-page components
  ResourcePathComponent,
  ResourceContentComponent,
  ResourceSectionComponent,

  // blog components
  BlogSectionComponent,
  BlogPreviewComponent,
  BlogIconComponent,

  // example components
  CounterComponent,

  // chat components
  MessageCardComponent,
  MessageBoxComponent,
  AiFormComponent,


  // pages
  HomePage,
  DocPage,
  ErrorPage,
  BlogPage,
  ChatPage,
  ResourcePage,
  CommunityPage
])

new DomNavigationRouter(
  routesConfig,
  {
    path: '/error',
    component: ErrorPage,
  },
  {
    path: '/',
    component: HomePage,
  }
)


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
    'reactive-section': ReactiveSectionComponent,
    'host-listener-section': HostListenerSectionComponent,
    'client-section': ClientSectionComponent,
    'doc-path': DocPathComponent,
    'doc-content': DocContentComponent,
    'doc-section': DocSectionComponent,
    'feature-component': FeatureComponent,
    'footer-component': FooterComponent,
    'error-page': ErrorPage,
    'blog-page': BlogPage,
    'chat-page': ChatPage,
    'counter-component': CounterComponent,
  }
}