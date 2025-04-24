import {BaseElement, Component, HTML, Property, String} from "@ayu-sh-kr/dota-core";
import '@dota/components/utils/notification/notification.component.ts'
import {NotificationComponent} from "@dota/components/utils/notification/notification.component.ts";

const PositionConfig = {
    'bottom-right': 'fixed bottom-10 right-10',
    'bottom-left': 'fixed bottom-10 left-10',
    'top-left': 'fixed top-10 left-10',
    'top-right': 'fixed top-10 right-10'
}

@Component({
    selector: 'notification-holder',
    shadow: false
})
class NotificationHolderComponent extends BaseElement {

    @Property({name: 'position', type: String})
    position!: NotificationPosition

    constructor() {
        super();
    }


    propagate(notification: NotificationComponent) {
        const holder = this.querySelector('div[content="notification"]') as HTMLElement;
        holder.appendChild(notification);
    }

    render(): string {
        return HTML`
        <div content="notification" class="${PositionConfig[this.position ?? 'bottom-right']} w-fit flex flex-col gap-y-3">
            
        </div>
        `
    }

}

type NotificationPosition = keyof typeof PositionConfig;

export {type NotificationPosition, NotificationHolderComponent, PositionConfig}