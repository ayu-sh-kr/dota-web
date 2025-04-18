import { BaseElement, Component, HTML } from "@ayu-sh-kr/dota-core";


@Component({
  selector: "device-section",
  shadow: false,
})
export class DeviceSectionComponent extends BaseElement {

  constructor() {
    super();
  }

  render(): string {
    return HTML`
            <section class="font-dm mx-auto max-w-7xl px-6  py-20">
            <h1 class="text-3xl sm:text-4xl font-extrabold font-adaptive text-center mb-20">A single component library for all of your frameworks.</h1>
                <div class="grid grid-cols-2 md:grid-cols-4 place-items-center gap-10 ">
                  <img src="/images/react-img.png" alt="dota-react" class="framework-logo hover:drop-shadow-[0px_10px_15px_rgba(34,211,238,0.8)]"/>
                  <img src="/images/angular-img.png" alt="dota-angular" class="framework-logo hover:drop-shadow-[0px_10px_15px_rgba(220,38,38,0.8)]"/>
                  <img src="/images/vue-img.png" alt="dota-vue" class="framework-logo  hover:drop-shadow-[0px_10px_15px_rgba(22,163,74,0.8)] "/>
                  <img src="/images/solid-logo.png" alt="dota-solid" class="framework-logo hover:drop-shadow-[0px_10px_15px_rgb(147,51,234,0.8)]"/>
                </div>
            </section>
    `;
  }
}
