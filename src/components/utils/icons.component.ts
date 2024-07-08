import {BaseElement, Component, HTML, Property, AfterInit} from "@ayu-sh-kr/dota-core/dist";


@Component({
    selector: 'app-icon',
    shadow: false
})
export class IconsComponent extends BaseElement {

    @Property({name: 'name'})
    name!: string;

    @Property({name: 'color'})
    color!: string;

    constructor() {
        super();
    }


    @AfterInit()
    afterViewInit() {
        this.getSvg().then();
    }

    async getSvg() {
        let url = `https://api.iconify.design/${this.name}.svg?color=%23888888`;
        const response = await fetch(url);
        if(response.status === 200){
            let text = await response.text();
            if(text !== '404' ){
                this.querySelector('#svg')!.innerHTML = text;
                const svgElement = this.querySelector('#svg svg path');

                if(svgElement) {
                    svgElement.setAttribute('fill', 'currentColor')
                    console.log(svgElement)
                }
            }
        }
        else {
            console.warn('Invalid Icon Name')
            this.innerHTML = '';
        }
    }

    processColor() {
        if(this.color) {
            return this.color;
        }
        return 'dark:text-gray-100 text-gray-900'
    }

    render(): string {
        return HTML`
        <div id="svg" class="p-1.5 transition-all duration-300 ${this.processColor()} dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg flex items-center justify-center">
            
        </div> 
        `;
    }
}
