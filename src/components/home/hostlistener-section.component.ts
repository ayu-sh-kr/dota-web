import {BaseElement, Component, HTML} from "@ayu-sh-kr/dota-core";

@Component({
    selector: "hostlistener-section",
    shadow:false
})
export class HostListenerSectionComponent extends BaseElement{
    constructor() {
        super();
    }

    render():string{
        return HTML`
            <section class="font-dm mx-auto max-w-7xl px-3 ">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 place-items-center justify-items-center">
                    <div class="space-y-5 ">
                      <h4 class="text-gray-700 dark:text-gray-300 font-semibold">Custom Decorators</h4>
                      <h2 class="ld:text-5xl md:text-4xl text-3xl font-extrabold tracking-wide text-gray-950 dark:text-gray-100">Event Listener</h2>
                      <p class="text-gray-600 dark:text-gray-400 font-light lg:text-2xl md:text-xl text-lg">
                        The <span class="text-purple-500 font-semibold italic"> @HostListener</span> decorator binds a method to a specified event on the host element or its shadow root. It is used to listen for events such as 'click', 'mouseover', etc., and execute the decorated method when the event is triggered.
                      </p>
                    </div>
                    <img src="/images/code-snippet-3.png" alt="hostlistner-decorator"
                         class="rounded-lg  min-w-[360px] "
                    />
                </div>
            </section>
        `
    }
}