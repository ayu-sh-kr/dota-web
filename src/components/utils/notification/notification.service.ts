import {NotificationHolderComponent} from "@dota/components/utils/notification/notification-holder.component.ts";
import {NotificationComponent} from "@dota/components/utils/notification/notification.component.ts";


class NotificationService {

    readonly notificationHolderId = '#dota-notification'


    push(notificationDetails: NotificationDetails) {

        const notification = document.createElement('app-notification') as NotificationComponent;
        notification.duration = notificationDetails.duration;
        notification.type = notificationDetails.type;
        notification.message = notificationDetails.message;

        document.querySelector<NotificationHolderComponent>('#dota-notification')!
            .append(notification);
    }

}

export const notificationService = new NotificationService();


export interface NotificationDetails {
    type: string,
    message: string,
    duration: number
}