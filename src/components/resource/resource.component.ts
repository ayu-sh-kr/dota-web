import {AfterInit, BaseElement, Component, Property, String} from "@ayu-sh-kr/dota-core";

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
        <h1 class="text-3xl sm:text-4xl relative font-extrabold font-adaptive text-center my-20"> 
          
          <span class="relative">Resources
          <img src="./images/line.svg" class="absolute -bottom-3 left-0 " alt="Dota line"/>  
          </span>
          to help you get more out of Dota</h1>
        <div class="flex gap-10 items-start max-w-5xl mx-auto px-4">
                <button class="rounded-lg relative text-center h-28 px-20 font-semibold  shadow-[0px_15px_25px_rgba(68,68,68,0.15)] hover:shadow-2xl hover:scale-105
                 duration-300 transition-all text-lg sm:text-2xl before:absolute before:sm:w-2 before:w-full before:left-0 before:sm:top-0 before:max-sm:bottom-0 before:sm:rounded-l-2xl
                  before:rounded-b-2xl before:sm:h-full before:h-2 before:content-[''] before:bg-purple-600">
                  Dota Ecosystem
                </button>
          <p></p>
        </div>
      </div>
`
  }
}