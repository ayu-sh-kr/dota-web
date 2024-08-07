import {BaseElement, Component, HTML} from "@ayu-sh-kr/dota-core/dist";
import '@dota/components/utils/notification/notification.component.ts'


@Component({
    selector: 'notification-holder',
    shadow: false
})
export class NotificationHolderComponent extends BaseElement {

    render(): string {
        return HTML`
        <div class="absolute bottom-0 right-0 w-fit">
            <slot></slot>
        </div>
        `
    }

}