import {
    AfterInit,
    BaseElement,
    BindEvent,
    Component,
    HostListener,
    HTML,
    Number,
    Property,
    String
} from "@ayu-sh-kr/dota-core";


@Component({
    selector: 'app-notification',
    shadow: false
})
export class NotificationComponent extends BaseElement {

    @Property({name: 'type', type: String})
    type!: string;

    @Property({name: 'duration', type: Number})
    duration!: number;

    @Property({name: 'message', type: String})
    message!: string;

    private removalTimeoutId?: number;
    private isHovered: boolean = false;
    private startTime!: number;
    private remainingTime!: number;

    constructor() {
        super();
        this.remainingTime = 5000;
    }

    @AfterInit()
    afterViewInit() {
        this.remainingTime = this.duration
        this.scheduleRemoval();
    }

    private scheduleRemoval() {
        this.startTime = Date.now();
        this.removalTimeoutId = window.setTimeout(() => {
            if (!this.isHovered) {
                this.remove();
            }
        }, this.remainingTime);
    }

    @BindEvent({event: 'click', id: '#close'})
    removeNode(){
        this.remove();
    }

    @HostListener({event: 'mouseenter'})
    onMouseEnter() {
        this.isHovered = true;
        if(this.removalTimeoutId) {
            clearTimeout(this.removalTimeoutId)
            this.querySelector('#timer')!.classList.add('paused-animation');
            const elapsedTime = Date.now() - this.startTime;
            this.remainingTime = this.duration - elapsedTime;
        }
    }

    @HostListener({event: 'mouseleave'})
    onMouseLeave() {
        this.isHovered = false;
        this.querySelector('#timer')!.classList.remove('paused-animation');
        this.scheduleRemoval();
    }

    render(): string {
        return HTML`
           <div class="absolute bottom-10 md:right-10 z-10">
                <div class="${notificationConfig.base}">
                    <div class="flex items-center gap-x-2 px-3">
                        <span class="${notificationConfig.type[this.type].color} text-lg">
                            <dota-icon name="${notificationConfig.type[this.type].icon}" size="lg" color="${notificationConfig.type[this.type].color}" variant="ghost"></dota-icon>
                        </span>
                        <div class="text-gray-900 dark:text-gray-100 text-lg">${this.message}</div>
                    </div>
                    <span id="close" class="focus:scale-95 font-semibold cursor-pointer px-3">
                        <dota-icon name="ic:twotone-close" color="gray" variant="ghost" size="md"></dota-icon>
                    </span>
                    <span id="timer" style="--animation-duration: ${this.remainingTime + 'ms'}" class="toast-animate py-0.5 absolute bottom-0 ${notificationConfig.type[this.type].timer}"></span>
                </div>
           </div>
        `
    }

}


export const notificationConfig = {
    base: 'overflow-hidden relative flex items-center justify-between w-[350px] sm:w-[400px] font-dm py-3 rounded-xl shadow-lg bg-white dark:bg-slate-800',
    position: {
        'left-bottom': 'absolute bottom-10 left-10',
        'right-bottom': 'absolute bottom-10 right-10',
        'left-top': 'absolute top-10 left-10',
        'right-top': 'absolute top-10 right-10'
    },

    type: {
        success: {
            color: 'green',
            icon: 'ic:baseline-check-box',
            timer: 'bg-green-600'
        },
        danger: {
            color: 'red',
            icon: 'ic:sharp-dangerous',
            timer: 'bg-red-600'
        },
        info: {
            color: 'blue',
            icon: 'ic:baseline-info',
            timer: 'bg-blue-600'
        },
        warn: {
            color: 'yellow',
            icon: 'ic:twotone-warning',
            timer: 'bg-yellow-600'
        }
    } as {[key: string]: {color: string, icon: string, timer: string}}
}