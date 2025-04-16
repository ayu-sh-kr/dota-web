import {BaseElement, Component} from "@ayu-sh-kr/dota-core/dist";
import {MessageRecord} from "@dota/pages/chat.page.ts";
import {Object, Property} from "@ayu-sh-kr/dota-core";

@Component({
  selector: "message-box",
  shadow: false
})
export class MessageBoxComponent extends BaseElement {

  content: string

  @Property({
    name: "messages",
    type: Object
  })
  messages: MessageRecord[] = [];

  constructor() {
    super()
    this.content = this.innerHTML
  }

  encodeHtmlAttribute(value: string): string {
    return value
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  render() {
    // language=html
    return `
      <section class="h-[55vh] shadow-md dark:shadow-[0px_0px_12px_rgba(147,51,234,0.8)] overflow-y-auto custom-scrollbar p-4 bg-slate-100 dark:bg-slate-900 rounded-lg flex flex-col gap-4 ">
        ${this.messages.map(({type, message}, index) => {
          // language=html
          return `
                <message-card 
                    message-type="${type}" 
                    message="${this.encodeHtmlAttribute(message)}"
                    key="${index}"
                >
                </message-card>
            `
        }).join(" ")}
        ${this.messages.length===0?
      "<div class='h-full flex items-center justify-center'> <p class='text-4xl font-medium text-center !leading-[3rem] dark:text-gray-400 !font-montserrat'>Explore the true power of Our Dota library with Our <span class='text-purple-500 underline underline-offset-4'>Dota AI</span></p> </div>":""}
      </section>
    `
  }
}
