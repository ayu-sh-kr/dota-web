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
        <img src="${this.image}" alt="dota-react" class="framework-logo hover:drop-shadow-[0px_10px_15px_rgba(34,211,238,0.8)]"/>
        <dota-button color="${this.color}" variant="soft" round="md">${this.label}</dota-button>
      </div>
    `
  }
}