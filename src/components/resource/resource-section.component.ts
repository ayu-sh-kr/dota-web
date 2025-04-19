import {BaseElement, Component, WindowListener} from "@ayu-sh-kr/dota-core";
import {resources} from "@dota/constants/resources.ts";
import {ResourceContentComponent} from "@dota/components/resource/resource-content.component.ts";

@Component({
  selector: "resource-section",
  shadow: false
})
export class ResourceSectionComponent extends BaseElement {

  constructor() {
    super();
  }

  @WindowListener({event: "onPathChange"})
  handlePathChange(event: CustomEvent<string>) {
    const resourceContentComponent = this.querySelector<ResourceContentComponent>("resource-content");
    if (resourceContentComponent) {
      resourceContentComponent.setAttribute("resource-path", event.detail);
    }
  }


  render() {
    // language=html
    return `
      <div class="p-4">
        <h1 class="text-3xl sm:text-4xl leading-[3rem] relative font-extrabold font-adaptive text-center my-20">
          <span class="relative">Resources
          <img src="/images/line.svg" class="absolute -bottom-3 left-0 " alt="Dota line"/>  
          </span>
          to help you get more out of <span class="text-purple-600">Dota
          </span>
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-y-10 place-items-center md:place-items-start justify-items-center max-w-6xl mx-auto">
          <div class="flex flex-col gap-4">
            ${resources.map((item) => `<resource-path title="${item.title}" path="${item.path}"></resource-path>`).join(" ")}
          </div>
          <resource-content resource-path="${resources[0].path}"></resource-content>
        </div>
      </div>
    `
  }
}