import {AfterInit, BaseElement, Component, Property, String} from "@ayu-sh-kr/dota-core";
import {resources} from "@dota/constants/resources.ts";

@Component({
  selector: "resource-component",
  shadow: false
})
export class ResourceComponent extends BaseElement {

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
      <div class="p-4">
        <h1 class="text-3xl sm:text-4xl leading-[3rem] relative font-extrabold font-adaptive text-center my-20"> 
          
          <span class="relative">Resources
          <img src="./images/line.svg" class="absolute -bottom-3 left-0 " alt="Dota line"/>  
          </span>
          to help you get more out of <span class="text-purple-600">Dota</span></h1>
        <div class="flex gap-10 items-center sm:items-start max-w-[85%] mx-auto px-4 flex-col gap-y-6">
          ${resources.map((item)=> `<resource-path title="${item.title}"></resource-path>`).join(" ")}
          <p></p>
        </div>
      </div>
`
  }
}