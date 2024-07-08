import {AfterInit, BaseElement, BindEvent, Component, HTML} from "@ayu-sh-kr/dota-core/dist";

@Component({
    selector: 'app-header',
    shadow: false
})
export class HeaderComponent extends BaseElement {

    items: Link[] = [
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

    @BindEvent({event: 'click', id: '#dark-button'})
    handleDark() {
        const iconContainer = this.querySelector('#dark-button');

       if(iconContainer) {
           if(toggleDark()) {
               iconContainer.innerHTML = `<app-icon  name="material-symbols:dark-mode" color="text-purple-600" />`
           }else {
                iconContainer.innerHTML = `<app-icon  name="material-symbols:sunny-rounded" color="text-purple-600" />`
           }
       }

    }


    render(): string {
        return HTML`
            <header class="flex justify-between items-center px-2 py-3 font-dm sticky top-0 left-0 shadow-md bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
                <div class="font-extrabold text-2xl w-1/6 px-5"><a href="/">Logo</a></div>
                <div class="md:flex justify-center items-center hidden w-4/6">
                    <ul class="flex justify-between items-center gap-x-5 w-1/2">
                        ${this.items.map((item) => {
                            return `<li class="text-sm font-semibold hover:text-purple-600"><a href="${item.url}">${item.name}</a></li>`
                        }).join('')}
                    </ul>
                </div>
                <div class="w-1/6">
                    <div class="flex items-center px-5 justify-end">
                        <span id="dark-button" class="active:scale-95 cursor-pointer">
                            <app-icon  name="material-symbols:sunny-rounded" color="text-purple-600" />
                        </span>
                    </div>
                </div>
            </header>
        `
    }

}

export interface Link {
    name: string,
    url: string
}

function toggleDark() {
    const html = document.getElementsByTagName('html');
    const value = document.documentElement.classList.toggle('dark');
    document.documentElement.classList.toggle('bg-slate-950')
    return value;
}