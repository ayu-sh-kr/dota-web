import {BaseElement, Component, HTML, Property, String} from "@ayu-sh-kr/dota-core";

@Component({
    selector: 'app-error',
    shadow: false
})
export class ErrorPage extends BaseElement {

    @Property({name: 'path', type: String})
    path!: string;

    @Property({name: 'message', type: String})
    message!: string;

    @Property({name: 'status', type: String})
    status: number = 404

    constructor() {
        super();
    }

    render(): string {
        return HTML`
        <div class="flex flex-col justify-center items-center h-screen font-dm">
            <div class="font-semibold text-6xl text-gray-900 dark:text-gray-100">Error <span class="text-red-500">${this.status || 404}</span></div>
            <div class="text-center font-light text-lg text-gray-900">
                <span class="font-semibold text-sm">Path: </span> ${this.path},
                <span class="font-semibold text-sm">Message: </span> ${this.message}
            </div>
            <a href="/" class="px-3 py-1 text-center rounded-md no-underline bg-purple-500 text-gray-100">Home</a>
        </div>
        `
    }

}