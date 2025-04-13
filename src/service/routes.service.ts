import {routes} from "@dota/routes.config.ts";
import {AppComponent} from "@dota/app.component.ts";

export class RoutesService {

  constructor() {
    this.init()
    this.handleInitialNavigation();
  }

  init() {
    const navigation: Navigation = window.navigation;
    navigation.addEventListener('navigate', (event: NavigateEvent) => {
      if (!event.canIntercept || event.hashChange || event.downloadRequest !== null) {
        return;
      }

      const url = new URL(event.destination.url);
      let render = this.render;
      event.intercept({
        async handler() {
          render(url.pathname);
        }
      })
    })
  }

  handleInitialNavigation() {
    const url = new URL(window.location.href);
    this.render(url.pathname);
  }

  goBack() {
    const navigation: Navigation = window.navigation;
    navigation.back();
  }

  goForward() {
    const navigation: Navigation = window.navigation;
    navigation.forward();
  }

  render(path: string) {

    if (path.includes('/docs')) {
      // Render the docs page with the specified document
      document.querySelector<AppComponent>('app-root')!.innerHTML = `<doc-page></doc-page>`;
      return;
    }

    document.querySelector<AppComponent>('app-root')!.innerHTML = routes[path] || `<app-error path="${path}" message="Page Not Found" status=404 />`;
  }

  static route(path: string) {
    // Make sure path starts with a slash
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;

    // Create a navigation destination object
    const navigationDestination = {
      url: new URL(normalizedPath, window.location.origin).toString()
    };

    // Trigger navigation using the Navigation API
    window.navigation.navigate(navigationDestination.url);
  }
}