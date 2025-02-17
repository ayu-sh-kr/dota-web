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
          <div class="flex flex-col items-center justify-center py-20 font-dm px-2">
              <h1 class="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-gray-100 max-w-5xl text-wrap py-10 leading-[3.25rem] tracking-wide text-center">
                  Reach your audience on any device with 
                  <span class="bg-gradient-to-r from-purple-600 via-purple-600 to-purple-400 bg-clip-text text-transparent">Dota Core.</span>
              </h1>
              <section class="gird md:grid-cols-2 lg:grid-cols-4 py-20 justify-items-center  place-items-center justify-between px-10  gap-10">
                  <div class="grid w-full  sm:grid-col-2 lg:grid-cols-3 place-items-center gap-10 bg-gray-100 dark:bg-black/60 shadow-xl max-w-6xl mx-auto p-20 rounded-xl text-gray-400   text-center border-2 shadow-purple-800  hover:hue-rotate-15  ease-in transition duration-500 border-t-2 border-purple-400 sm:hover:[transform:perspective(1000px)_rotateX(10deg)_rotateY(0deg)_translateZ(-30px)]">
                      <div>
                          <img src="/images/device-image-1.png" alt="dot-ui-bg" class="invert dark:invert-0 hover:scale-105 ease-in-out duration-100"/>
                          <p> 32-inch TV: ~ 1366px * 768px</p>
                          <p>43-inch TV: ~ 1920px * 1080px</p>
                          <p>55-inch and above (4K TV): ~ 3840px * 2160px</p>
                      </div>
                      <div>
                          <img src="/images/device-image-2.png" alt="dot-ui-bg" class=" invert dark:invert-0 hover:scale-105 ease-in-out duration-100"/>
                          <p>13-inch laptop: ~ 1280px * 800px </p>
                          <p>17-inch laptop: ~ 1920px * 1080px</p>
                          <p>19-inch laptop: ~ 2560px * 1440px </p>
                      </div>
                      <div>
                          <img src="/images/Device image.png" alt="dot-ui-bg" class="invert dark:invert-0 hover:scale-105 ease-in-out duration-100"/>
                          <p>mobiles - 360px * 640p</p>
                          <p>Tablets - 768px * 1024px </p>
                      </div>
                  </div>
              </section>
          </div>
    `;
  }
}
