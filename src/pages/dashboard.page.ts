import { BaseElement, Component, HTML } from "@ayu-sh-kr/dota-core";

@Component({
    selector: "dashboard-page",
    shadow: false,
})
export class DashboardPage extends BaseElement {
    constructor() {
        super();
    }

    render(): string {
        return HTML`
            <div>
                <h1>Dashboard</h1>
            </div>
        `;
    }
}
