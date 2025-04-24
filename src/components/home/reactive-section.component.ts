import {BaseElement, Component, HTML} from "@ayu-sh-kr/dota-core";

@Component({
    selector: "reactive-dota",
    shadow:false
})
export class ReactiveSectionComponent extends BaseElement{

    constructor() {
        super();
    }

    render():string{
    //     language=html
        return HTML`
            <section class="font-dm mx-auto max-w-7xl px-3 py-20">
                <div class="grid md:grid-cols-2 gap-x-20 gap-y-10 place-items-center justify-items-center">
                    <img src="/images/code-snippet-2.png" alt="dota-reactive"
                         class="rounded-lg  min-w-[360px] h-full order-2 lg:order-1"
                    />
                    <div class="space-y-5 order-1 lg:order-2">
                        <h4 class="text-gray-700 dark:text-gray-300 font-semibold">Reactive Components</h4>
                        <h2 class="ld:text-5xl md:text-4xl text-3xl font-extrabold tracking-wide text-gray-950 dark:text-gray-100">Reactive Support.</h2>
                        <p class="text-gray-600 dark:text-gray-400 font-light lg:text-2xl md:text-xl text-lg">
                            With reactivity dom gets update each time a property marked as <span class="text-purple-500 font-semibold italic">@Property</span> gets its value changed.
                        </p>
                    </div>
                </div>
            </section>
        `
    }
}