import {BaseElement, Component, HTML, Property} from "@ayu-sh-kr/dota-core/dist";


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


    async getSvg() {
        let url = `https://api.iconify.design/${this.name}.svg?color=${this.color}`;
        const response = await fetch(url);
        if(response.status === 200){
            let text = await response.text();
            if(text !== '404' ){
                this.innerHTML = text;
                // this.querySelector('svg')!.classList.add(`${this.color}`);
            }
        }
        else {
            console.warn('Invalid Icon Name')
            this.innerHTML = '';
        }
    }

    render(): string {
        this.getSvg().then();
        return HTML``;
    }
}
