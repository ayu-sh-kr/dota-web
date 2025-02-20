import {BaseElement, Component} from "@ayu-sh-kr/dota-core/dist";
import {BindEvent} from "@ayu-sh-kr/dota-core";
import {toggleDark} from "@dota/components/utils/header.component.ts";


@Component({
    selector: 'dark-mode-button',
    shadow: false
})
export class DarkModeButtonComponent extends BaseElement{

    constructor() {
        super();
    }

    @BindEvent({event: 'click', id: '#dark-button'})
    handleDark() {
        const iconContainer = this.querySelector('#dark-button');

        if(iconContainer) {
            if(toggleDark()) {
                iconContainer.innerHTML = `<dota-icon  name="material-symbols:dark-mode" color="purple" variant="ghost" size="md" />`
            }else {
                iconContainer.innerHTML = `<dota-icon  name="material-symbols:sunny-rounded" color="purple" variant="ghost" size="md" />`
            }
        }
    }

    render(): string {
        // language=HTML
        return `
            <span id="dark-button" class="active:scale-95 cursor-pointer">
                <dota-icon name="material-symbols:sunny-rounded" color="purple" variant="ghost" size="md"/>
            </span>
        `;
    }

}