import {BaseElement, Component, HTML} from "@ayu-sh-kr/dota-core/dist";


@Component({
    selector: 'app-feature',
    shadow: false
})
export class FeatureComponent extends BaseElement {

    items: FeatureInfo[] = [
        {
            icon: 'material-symbols:blur-circular-outline',
            title: 'Simple',
            description: 'Plain API for creating Web Components with Vanilla javascript, just write your javascript to additional concept to learn'
        },

        {
            icon: 'material-symbols:performance-max-outline-rounded',
            title: 'Performant',
            description: 'Dota Core have a tiny bundle size and uses the raw Javascript no additional load at all. Integrate it with Vite Vanilla'
        },

        {
            icon: 'material-symbols:extension-rounded',
            title: 'Future Proof',
            description: 'Build your web apps with web standards and remain free of Frameworks war. Write Once and Use Everywhere'
        },

        {
            icon: 'material-symbols:deployed-code',
            title: 'Cross Compatibility',
            description: 'Web Components are browser standards and will work with any frameworks.'
        }
    ]

    constructor() {
        super();
    }


    render(): string {
        return HTML`
        <section class="py-10 px-3">
            <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 font-dm text-gray-900 dark:text-gray-100 gap-5">
                ${this.items.map(item => {
                    return `<div class="flex flex-col items-start justify-start gap-y-5 px-3">
                                <span>
                                    <app-icon name="${item.icon}" color="text-purple-600" class="h-10 w-10"></app-icon>
                                </span>
                                <div class="flex flex-col gap-y-2">
                                    <h1 class="text-lg font-semibold tracking-wide">${item.title}</h1>
                                    <p class="text-xl text-gray-700 dark:text-gray-300 leading-loose">${item.description}</p>
                                </div>
                            </div>`
                }).join('')}
            </div>
        </section>
        `;
    }

}

export interface FeatureInfo {
    icon: string
    title: string,
    description: string
}