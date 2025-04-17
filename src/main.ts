import './style.css'

import {AppComponent} from "@dota/app.component.ts";
import {NavigationRouterService} from "@dota/service/routes.service.ts";
import {bootstrap} from "@ayu-sh-kr/dota-core";
import {BlogPage, ChatPage, DocPage, ErrorPage, HomePage, LoaderSectionComponent} from "@dota/pages";
import {
  ClientSectionComponent,
  CodeSectionComponent, DeviceSectionComponent,
  FeatureComponent, GetStartedButtonComponent,
  HeaderComponent,
  HeroSectionComponent, HostListenerSectionComponent,
  OfferComponent, OurToolsComponent, ReactiveSectionComponent
} from "@dota/components/home";
import {IconsComponent} from "@ayu-sh-kr/dota-ui/dist";
import {
  AiButtonComponent,
  DarkModeButtonComponent, FooterComponent,
  GithubButtonComponent,
  NotificationComponent,
  NotificationHolderComponent, ScrollBottomButtonComponent
} from "@dota/components/utils";
import {LoaderComponent} from "@dota/components/utils"
import {DocContentComponent, DocPathComponent, DocSectionComponent} from "@dota/components/docs";
import {CounterComponent} from "@dota/components/example/CounterComponent.ts";
import {AiFormComponent, MessageBoxComponent, MessageCardComponent} from "@dota/components/chat";


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
  AiButtonComponent,
  LoaderComponent,
  LoaderSectionComponent,
  ScrollBottomButtonComponent,

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
  ClientSectionComponent,
  FooterComponent,

  // doc-page components
  DocPathComponent,
  DocContentComponent,
  DocSectionComponent,

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
])

new NavigationRouterService();


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