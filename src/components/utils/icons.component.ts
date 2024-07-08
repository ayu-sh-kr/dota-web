import {BaseElement, BindEvent, Component, EventListener, HTML, Property, AfterInit} from "@ayu-sh-kr/dota-core/dist";


@Component({
    selector: 'app-icon',
    shadow: false
})
export class IconsComponent extends BaseElement {

    @Property({name: 'name'})
    name!: string;

    @Property({name: 'color'})
    color: string = '#111827'

    constructor() {
        super();
    }


    @AfterInit()
    afterViewInit() {
        this.getSvg().then();
    }

    async getSvg() {
        let url = `https://api.iconify.design/${this.name}.svg?color=%23${this.processColor()}`;
        const response = await fetch(url);
        if(response.status === 200){
            let text = await response.text();
            if(text !== '404' ){
                this.querySelector('#svg')!.innerHTML = text;
            }
        }
        else {
            console.warn('Invalid Icon Name')
            this.innerHTML = '';
        }
    }

    processColor() {
        return this.color.substring(1)
    }

    render(): string {
        return HTML`
        <div id="svg" class="p-1.5 transition-all duration-300 dark:bg-slate-100 dark:hover:bg-slate-200 hover:bg-slate-100 rounded-lg flex items-center justify-center">
            
        </div> 
        `;
    }
}
