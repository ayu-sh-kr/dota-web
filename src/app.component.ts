import {BaseElement, BindEvent, Component, EventListener, HTML} from "@ayu-sh-kr/dota-core/dist";
import '@dota/pages/home.page.ts'
import '@dota/pages/doc.page.ts'
import '@dota/pages/error.page.ts'


@Component({
    selector: 'app-root',
    shadow: false
})
export class AppComponent extends BaseElement {



    handleUrlChange(){

    }

    @BindEvent({event: 'route', id: 'a'})
    handleRoutes(event: Event){
        console.log(this)
    }

    render(): string {
        return HTML`<home-page></home-page>`
    }

}