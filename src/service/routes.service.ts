import {routes} from "@dota/routes.config.ts";
import {AppComponent} from "@dota/app.component.ts";

export class RoutesService {

    constructor() {
        this.init()
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
                    console.log(url.pathname)
                    render(url.pathname);
                }
            })
        })


    }

    route(event: Event) {
        const target: HTMLAnchorElement = event.target as HTMLAnchorElement;
        const url: URL = new URL(target.href);
        const navigation: Navigation = window.navigation;
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
        document.querySelector<AppComponent>('app-root')!.innerHTML = routes[path] || `<app-error path="${path}" message="Page Not Found" status=404 />`;
    }
}