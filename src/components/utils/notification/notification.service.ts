import {NotificationHolderComponent} from "@dota/components/utils/notification/notification-holder.component.ts";
import {NotificationColor, NotificationComponent} from "@dota/components/utils/notification/notification.component.ts";


class NotificationService {

    readonly notificationHolderId = '#dota-notification'


    push({duration, icon, color, message, title}: NotificationDetails) {

        const notification = document.createElement('app-notification') as NotificationComponent;
        notification.duration = duration;
        notification.message = message;
        notification.color = color;
        notification.icon = icon
        notification.title = title
        this.propagateNotification(notification);
    }

    info({duration, message, title}: SoftNotification) {
        this.push({
            color: "purple",
            message: message,
            duration: duration,
            icon: 'ic:baseline-info',
            title: title
        })
    }

    success({duration, message, title}: SoftNotification) {
        this.push({
            color: "emerald",
            message: message,
            duration: duration,
            icon: 'ic:baseline-check-box',
            title: title
        })
    }

    danger({duration, message, title}: SoftNotification) {
        this.push({
            color: "red",
            message: message,
            duration: duration,
            icon: 'ic:sharp-dangerous',
            title: title
        })
    }

    warning({duration, message, title}: SoftNotification) {
        this.push({
            color: "amber",
            message: message,
            duration: duration,
            icon: 'ic:twotone-warning',
            title: title
        })
    }


    private propagateNotification(notification: NotificationComponent) {
        document.querySelector<NotificationHolderComponent>('#dota-notification')!
            .propagate(notification);
    }

}

const notificationService = new NotificationService();


interface NotificationDetails {
    message: string,
    duration: number,
    color: NotificationColor,
    icon: string,
    title: string
}

interface SoftNotification {
    duration: number,
    message: string,
    title: string
}

export {type NotificationDetails, type SoftNotification, notificationService}