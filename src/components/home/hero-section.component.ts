import {BaseElement, BindEvent, Component, HTML} from "@ayu-sh-kr/dota-core/dist";
import '@dota/components/utils/icons.component.ts'
import {notificationService} from "@dota/components/utils/notification/notification.service.ts";

@Component({
    selector: 'app-hero',
    shadow: false
})
export class HeroSectionComponent extends BaseElement {

    constructor() {
        super();
    }

    @BindEvent({event: 'click', id: '#copy'})
    copyText() {
        const text = 'npm install @ayu-sh-kr/dota-core'
        navigator.clipboard.writeText(text)
            .then(() => {
                notificationService.push({type: 'info', duration: 5000, message: 'Text Copied to Clipboard'})
            })
    }

    render(): string {
        return HTML`
            <div class="flex flex-col items-center justify-center py-16 font-dm">
                <h1 
                    class="text-6xl sm:text-8xl font-extrabold text-gray-900 max-w-5xl text-wrap py-10 tracking-wide text-center">
                    Build. Customize. Distribute. <span class="bg-gradient-to-r from-purple-600 via-purple-600 to-purple-400 bg-clip-text text-transparent">Reuse.</span>
                </h1>
                
                <div class="text-center flex flex-col gap-y-2">
                    <p class="text-xl sm:text-2xl text-gray-800 tracking-wide">
                        Dota is a library for building-reusable, customizable UI components libraries.
                    </p>
                    <p class="text-xl sm:text-2xl text-gray-800 tracking-wide">
                        Generate small, blazing fast Web Components that run everywhere.
                    </p>
                </div>
                
                <div class="flex py-10 justify-center sm:justify-between items-center gap-y-5 gap-x-10 flex-wrap">
                    <a href="/docs#get-started" class="text-2xl text-white bg-blue-500 rounded-3xl py-3 px-4">Get Started</a>
                    <p  
                        class="text-gray-800 text-xl px-4 py-3 border rounded-3xl flex items-center gap-x-2">
                        npm install @ayu-sh-kr/dota-core 
                        <span class="active:scale-95 cursor-pointer" id="copy"">
                            <app-icon name="material-symbols:content-copy-rounded"/>
                        </span> 
                    </p> 
                </div>
            </div>
        `
    }

}