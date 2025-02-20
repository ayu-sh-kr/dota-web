import {BaseElement, Component, HTML} from "@ayu-sh-kr/dota-core";

@Component({
    selector: "code-section",
    shadow: false,
})
export class CodeSectionComponent extends BaseElement {
    constructor() {
        super();
    }

    render(): string {
        // language=HTML
        return HTML`
            <section class="font-dm mx-auto max-w-7xl px-3 py-2 mt-10">
                <div class="grid md:grid-cols-2 gap-x-20 gap-y-10 place-items-center justify-items-center">
                    <div class="space-y-5">
                      <h4 class="text-gray-700 dark:text-gray-300 font-semibold">Component Libraries</h4>
                      <h2 class="ld:text-5xl md:text-4xl text-3xl font-extrabold tracking-wide text-gray-950 dark:text-gray-100">Web Component Tool.</h2>
                      <p class="text-gray-600 dark:text-gray-400 font-light lg:text-2xl md:text-xl text-lg">
                          Ensure consistent UX and brand experiences at scale with components that run on any platform or device. 
                          Build custom UIs that work seamlessly across teams and projects.
                      </p>
                    </div>
                    <img src="/images/code-snippet-1.png" alt="dot-ui-bg"
                         class="rounded-lg mix-blend-darken min-w-[360px] max-w-[80%]"
                    />
                </div>
            </section>
        `;
    }
}
