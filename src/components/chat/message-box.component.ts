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
      <section class="h-[60vh] overflow-y-auto custom-scrollbar p-4 bg-slate-100 dark:bg-slate-900 rounded-lg flex flex-col gap-4 ">
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
      </section>
    `
  }
}