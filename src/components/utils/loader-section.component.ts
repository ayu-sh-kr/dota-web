import {BaseElement, Component} from "@ayu-sh-kr/dota-core/dist";
import {Boolean, Property} from "@ayu-sh-kr/dota-core";

@Component({
  selector:"loader-section",
  shadow:false
})
export class LoaderSectionComponent extends BaseElement{

  @Property({
    name: 'is-loader',
    type: Boolean
  })
  isLoading: boolean = false;

  constructor() {
    super();
  }

  render(): string {
    //language=html
    return `
      <section class="${this.isLoading ? 'fixed' : 'hidden'} z-50 top-0 left-0 h-screen bg-black/50 w-full flex items-center justify-center">
        <app-loader></app-loader>
      </section>
    `;
  }
}