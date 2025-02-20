import {BaseElement, BindEvent, Component, HTML} from "@ayu-sh-kr/dota-core/dist";

@Component({
    selector: 'app-offer',
    shadow: false
})
export class OfferComponent extends BaseElement {

    constructor() {
        super();
    }

    @BindEvent({event: 'click', id: '#close'})
    handleClose(){
        this.remove();
    }

    render(): string {
        return HTML`
            <div 
                class="relative font-dm flex items-center justify-center w-full bg-gradient-to-r from-purple-600 via-black to-purple-600 py-4"
            >
                <div class="text-lg text-white gap-x-4 hover:text-opacity-90 cursor-pointer flex">Write <span class="text-purple-600"> Reusable </span> HTML</div>
                <span id="close" class="absolute right-10 focus:scale-95 cursor-pointer">
                        <dota-icon name="ic:twotone-close" color="gray" variant="ghost" size="md"></dota-icon>
                </span>
            </div>
        `
    }

}