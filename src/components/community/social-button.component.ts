import {BaseElement, Component, HostListener, Property, String} from "@ayu-sh-kr/dota-core";
import {notificationService} from "@dota/components/utils/notification/notification.service.ts";

@Component({
  selector: "social-button",
  shadow: false
})
export class SocialButtonComponent extends BaseElement {

  @Property({
    name: "color",
    type: String
  })
  color!: string;

  @Property({
    name: "text",
    type: String
  })
  text!: string;

  @Property({
    name: "link",
    type: String
  })
  link!: string;

  constructor() {
    super();
  }

  @HostListener({event: 'click'})
  clickListener() {
    if (this.link && this.link !== "") {
      window.open(this.link, "_blank");
    } else {
      notificationService.info({
        duration: 5000,
        title: 'Not Available',
        message: 'Setup in progress, please try again later.',
      })
    }
  }

  render() {
    // language=html
    return `
      <div class="flex justify-center">
        <dota-button color="${this.color}" variant="link" size="sm">
          ${this.text}
        </dota-button>
      </div>
    `
  }
}