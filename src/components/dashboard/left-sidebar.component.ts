import {BaseElement, Component, HTML} from "@ayu-sh-kr/dota-core";

@Component({
    selector: "left-sidebar",
    shadow:false
})
export class LeftSidebarComponent extends BaseElement {
    constructor() {
        super();
    }
    render():string{
        return HTML`
        <aside class="bg-white flex-none relative p-4 h-full overflow-y-auto w-[250px] flex flex-col gap-4 items-center overflow-hidden ">
        <h1 class="font-semibold text-lg text-center py-2">Components</h1>
                
        </aside>
        `
    }
}