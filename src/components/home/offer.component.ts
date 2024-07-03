import { BaseElement, Component, HTML } from "@ayu-sh-kr/dota-core/dist";

@Component({
    selector: 'app-offer',
    shadow: false
})
export class OfferComponent extends BaseElement {

    constructor() {
        super();
    }

    render(): string {
        return HTML`
            <div 
                class="font-helvetica flex items-center justify-center w-full bg-gradient-to-r from-purple-600 via-black to-purple-600 py-4"
            >
                <div class="text-lg text-white gap-x-4 hover:text-opacity-90 cursor-pointer flex">Write <span class="text-purple-600"> Reusable </span> HTML</div>
            </div>
        `
    }

}