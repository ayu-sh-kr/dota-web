import {BaseElement, Component} from "@ayu-sh-kr/dota-core/dist";
import {LoaderComponent} from "@dota/components/common/loader.component.ts";

@Component({
  selector:"loader-page",
  shadow:false
})
export class LoaderPage extends BaseElement{
  constructor() {
    super();
  }
  render(): string {
    //language=html
    return `
      <section class="h-screen w-full flex items-center justify-center">
        <loader-component></loader-component>
      </section>
    `;
  }
}