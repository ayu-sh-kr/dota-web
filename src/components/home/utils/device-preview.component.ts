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

export const FrameworkStyleConfig = {
  react: "framework-logo hover:drop-shadow-[0px_10px_15px_rgba(34,211,238,0.8)]",
  angular: "framework-logo hover:drop-shadow-[0px_10px_15px_rgba(220,38,38,0.8)]",
  vue: "framework-logo hover:drop-shadow-[0px_10px_15px_rgba(22,163,74,0.8)]",
  solid: "framework-logo hover:drop-shadow-[0px_10px_15px_rgba(147,51,234,0.8)]",
}