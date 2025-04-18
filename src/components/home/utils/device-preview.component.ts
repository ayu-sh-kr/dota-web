import {AfterInit, BaseElement, Component, Property, String} from "@ayu-sh-kr/dota-core";

@Component({
  selector: "device-preview",
  shadow: false
})
export class DevicePreviewComponent extends BaseElement {

  @Property({
    name: 'label',
    type: String
  })
  label!: string;

  @Property({
    name: 'image',
    type: String
  })
  image!: string;

  @Property({
    name: 'color',
    type: String
  })
  color!: string;

  @Property({
    name: 'shadow-color',
    type: String
  })
  shadowColor!: string;

  constructor() {
    super();
  }

  @AfterInit()
  afterViewInit() {
    // Initialize component after it's added to the DOM
  }

  render() {
    // language=html
    return `
      <div class="flex flex-col justify-center items-center gap-y-3">
        <img src="${this.image}" alt="dota-react" class="${this.shadowColor}"/>
        <dota-button color="${this.color}" variant="soft" round="md">${this.label}</dota-button>
      </div>
    `
  }
}