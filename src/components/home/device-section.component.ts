import {BaseElement, Component, HTML} from "@ayu-sh-kr/dota-core";


@Component({
  selector: "device-section",
  shadow: false,
})
export class DeviceSectionComponent extends BaseElement {

  constructor() {
    super();
  }

  render(): string {
    // language=html
    return HTML`
      <section class="font-dm mx-auto max-w-7xl px-6  py-20">
        <h1 class="text-3xl sm:text-4xl font-extrabold font-adaptive text-center mb-20">A single component library for
          all of your frameworks.
        </h1>
        <div class="grid grid-cols-2 md:grid-cols-4 place-items-center gap-10 ">
          <device-preview label="React" image="/images/react-img.png" color="blue" shadow-color="${FrameworkStyleConfig.react}"></device-preview>
          <device-preview label="Angular" image="/images/angular-img.png" color="pink" shadow-color="${FrameworkStyleConfig.angular}"></device-preview>
          <device-preview label="Vue" image="/images/vue-img.png" color="emerald" shadow-color="${FrameworkStyleConfig.vue}"></device-preview>
          <device-preview label="Solid" image="/images/solid-logo.png" color="purple" shadow-color="${FrameworkStyleConfig.solid}"></device-preview>
        </div>
      </section>
    `;
  }
}

export const FrameworkStyleConfig = {
  react: "framework-logo hover:drop-shadow-[0px_10px_15px_rgba(34,211,238,0.8)]",
  angular: "framework-logo hover:drop-shadow-[0px_10px_15px_rgba(220,38,38,0.8)]",
  vue: "framework-logo hover:drop-shadow-[0px_10px_15px_rgba(22,163,74,0.8)]",
  solid: "framework-logo hover:drop-shadow-[0px_10px_15px_rgba(147,51,234,0.8)]",
}
