import {BaseElement, BindEvent, Component, HTML} from "@ayu-sh-kr/dota-core";
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
                notificationService.info({duration: 5000, message: 'Text Copied to Clipboard', title: 'Notification' })
            })
    }

    render(): string {
        return HTML`
            <div class="flex flex-col items-center justify-center py-20 font-dm px-2">
                <h1 
                    class="text-5xl sm:text-7xl font-extrabold text-gray-900 dark:text-gray-100 max-w-5xl text-wrap py-10 leading-[3.25rem] tracking-wide text-center">
                    Build. Customize. Distribute. <span class="bg-gradient-to-r from-purple-600 via-purple-600 to-purple-400 bg-clip-text text-transparent">Reuse.</span>
                </h1>
                
                <div class="text-center flex flex-col gap-y-2 text-gray-800 dark:text-gray-200 sm:text-lg md:text-xl lg:text-2xl">
                    <p class="tracking-wide">
                        Dota is a library for building-reusable, customizable UI components libraries.
                    </p>
                    <p class="tracking-wide">
                        Generate small, blazing fast Web Components that run everywhere.
                    </p>
                </div>
                
                <div class="flex py-10 justify-center sm:justify-between items-center gap-y-5 gap-x-10 flex-wrap text-gray-100 md:text-xl text-lg">
                    <get-started-button></get-started-button>
                    <p  class="border lg:rounded-3xl md:rounded-2xl rounded-xl flex items-center gap-x-2 
                    dark:text-gray-200 text-gray-800 md:py-3 md:px-4 py-1 px-2 md:text-xl sm:text-lg text-sm"
                    >
                        npm install @ayu-sh-kr/dota-core 
                        <span class="active:scale-95 cursor-pointer" id="copy"">
                            <dota-icon name="material-symbols:content-copy-rounded" color="purple" variant="ghost" size="md"/>
                        </span> 
                    </p> 
                </div>
            </div>
        `
    }

}