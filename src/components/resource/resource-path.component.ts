import {AfterInit, BaseElement, Component, Property, String} from "@ayu-sh-kr/dota-core";

@Component({
  selector: "resource-path",
  shadow: false
})
export class ResourcePathComponent extends BaseElement {

  constructor() {
    super();
  }
  @Property({
    name:"title",
    type:String
  })
  title!:string

  @AfterInit()
  afterViewInit() {
    // Initialize component after it's added to the DOM
  }

  render() {
    // language=html
    return `
      <button class="rounded-lg relative text-center h-28 px-20 font-semibold  shadow-[0px_15px_25px_rgba(68,68,68,0.15)] hover:shadow-2xl hover:scale-105
                 duration-300 transition-all text-lg sm:text-2xl before:absolute before:sm:w-2 before:w-full before:left-0 before:sm:top-0 before:max-sm:bottom-0 before:sm:rounded-l-2xl
                  before:rounded-b-2xl before:sm:h-full before:h-2 before:content-[''] before:bg-purple-600">
        ${this.title}
      </button>
`
  }
}