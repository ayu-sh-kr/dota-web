import {BaseElement, Component} from "@ayu-sh-kr/dota-core/dist";
import LoaderSvg from '/images/animated-loader.svg'
import {Property,Number} from "@ayu-sh-kr/dota-core";

@Component({
  selector:"loader-component",
  shadow:false
})
export class LoaderComponent extends BaseElement{

  constructor() {
    super();
  }
  @Property({
    name:"size",
    type:Number
  })
  size!:number


  render(): string {
    // language=html
    return `
        <img src="${LoaderSvg}" alt="dota-loader" class="size-${this.size??8}"/>
    `;
  }

}