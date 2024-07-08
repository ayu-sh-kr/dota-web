import {BaseElement, Component, HTML, Property} from "@ayu-sh-kr/dota-core/dist";

@Component({
    selector: 'app-error',
    shadow: false
})
export class ErrorPage extends BaseElement {

    @Property({name: 'path'})
    path!: string;

    @Property({name: 'message'})
    message!: string;

    @Property({name: 'status'})
    status!: number

    render(): string {
        return HTML`
        <div class="flex flex-col justify-center items-center h-screen font-dm">
            <div class="font-semibold text-6xl text-gray-900 dark:text-gray-100">Error <span class="text-red-500">${this.status}</span></div>
            <div class="text-center font-light text-lg text-gray-900">
                <span class="font-semibold text-sm">Path: </span> ${this.path},
                <span class="font-semibold text-sm">Message: </span> ${this.message}
            </div>
        </div>
        `
    }

}