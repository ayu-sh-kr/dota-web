import {BaseElement, Component, HTML} from "@ayu-sh-kr/dota-core/dist";

@Component({
    selector: 'app-header',
    shadow: false
})
export class HeaderComponent extends BaseElement {

    items: Link[] =  [
        {
            name: 'Documents',
            url: '/docs'
        },

        {
            name: 'Resources',
            url: '/resources'
        },

        {
            name: 'Community',
            url: '/community'
        },

        {
            name: 'Blogs',
            url: '/blogs'
        }
    ]

    constructor() {
        super();
    }


    render(): string {
        return HTML`
            <header class="flex justify-between items-center px-2 py-2 font-dm sticky top-0 left-0 shadow-md">
                <div class="text-gray-900 font-extrabold text-xl"><a href="/">Logo</a></div>
                <div class="md:flex justify-start gap-x-4 items-center hidden">
                    <input type="text" class="text-gray-900 text-lg focus:outline-none ring-2 ring-black focus:ring-purple-600 rounded-lg py-1 px-3" placeholder="Search docs">
                    <span class="h-8 border-r-2 border-gray-900"></span>
                    <ul class="flex items-center gap-x-4 font-semibold text-slate-700">
                        <li><a href="${this.items[0].url}">${this.items[0].name}</a></li>
                        <li><a href="${this.items[1].url}">${this.items[1].name}</a></li>
                    </ul>
                    <span class="h-8 border-r-2 border-gray-900"></span>
                    <ul class="flex items-center gap-x-4 font-semibold text-slate-700">
                        <li><a href="${this.items[2].url}">${this.items[2].name}</a></li>
                        <li><a href="${this.items[3].url}">${this.items[3].name}</a></li>
                    </ul>
                </div>
            </header>
        `
    }

}

export interface Link {
    name: string,
    url: string
}