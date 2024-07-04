import {BaseElement, Component, HTML, Property} from "@ayu-sh-kr/dota-core/dist";


@Component({
    selector: 'app-icon',
    shadow: false
})
export class IconsComponent extends BaseElement {

    @Property({name: 'name'})
    name!: string;

    svg: string = '';

    constructor() {
        super();
    }


    async getSvg() {
        let url = `https://api.iconify.design/${this.name}.svg?color=%23888888`;
        const response = await fetch(url);
        const svg = await response.text();
        this.innerHTML = svg;
    }

    render(): string {
        this.getSvg();
        return HTML`${this.svg}`;
    }
}
