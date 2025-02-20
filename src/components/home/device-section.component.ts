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
            <section class="font-dm mx-auto max-w-7xl px-6 py-10 pt-20">
             <h1 class="text-3xl sm:text-4xl font-extrabold text-center ">A single component library for all of your frameworks.</h1>
                  <div class="grid grid-cols-1 max-lg:max-w-[400px] lg:grid-cols-3 justify-between place-items-center mt-20 gap-10 
                  bg-gradient-to-r from-gray-200 via-gray-50 to-gray-300
                   dark:bg-gradient-to-b dark:from-gray-700 dark:to-gray-900 hover:hue-rotate-15
                   max-w-6xl mx-auto p-10 lg:p-20 rounded-xl text-gray-400   text-center border-2 shadow-purple-800 
                   ease-in transition duration-500 border-t-2 border-gray-200 dark:border-purple-400 group
                    lg:hover:[transform:perspective(1000px)_rotateX(10deg)_rotateY(0deg)_translateZ(-30px)]">
                          <img src="/images/react-img.png" alt="dot-ui-bg" class=" size-24 lg:size-36 ease-in-out  group-hover:scale-105 duration-300 transition dark:drop-shadow-[0_15px_15px_rgba(255,255,255,0.25)]  drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] "/>
                          <img src="/images/angular-img.png" alt="dot-ui-bg" class="size-24 lg:size-36  ease-in-out  group-hover:scale-105 duration-300 transition dark:drop-shadow-[0_15px_15px_rgba(255,255,255,0.25)]  drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]  "/>
                          <img src="/images/vue-img.png" alt="dot-ui-bg" class="size-24 lg:size-32 ease-in-out  group-hover:scale-105 duration-300 transition dark:drop-shadow-[0_15px_15px_rgba(255,255,255,0.25)]  drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"/>
                  </div>
            </section>
    `;
  }
}
