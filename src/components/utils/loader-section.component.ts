import {BaseElement, Component, Boolean, Property} from "@ayu-sh-kr/dota-core";

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
      <section class="${this.isLoading ? 'fixed' : 'hidden'} z-50 top-0 left-0 h-full bg-black/10 w-full flex items-center justify-center">
        <app-loader></app-loader>
      </section>
    `;
  }
}