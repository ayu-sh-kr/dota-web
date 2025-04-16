import {AfterInit, BaseElement, Component, Property, String} from "@ayu-sh-kr/dota-core";
import {type MessageType} from "@dota/pages/chat.page.ts";
import {MarkdownService} from "@dota/service/markdown.service.ts";

@Component({
  selector: "message-card",
  shadow: false
})
export class MessageCardComponent extends BaseElement {

  @Property({
    name: 'key',
    type: String,
  })
  key!: string;

  @Property({
    type: String,
    name: "message-type"
  })
  type!: MessageType

  @Property({
    type: String,
    name: "message"
  })
  message!: string

  constructor() {
    super();
  }


  @AfterInit()
  afterViewInit() {
    const result = this.type === "USER" ? ["self-end", "max-w-[45%]"] : ["self-start", "max-w-[50%]"];
    this.classList.add(...result);
  }

  escapeHtml(html: string): string {
    if(!html) return "";
    return MarkdownService.renderMarkdown(html);
  }

  render() {
    //   language=html
    return `
      <div class="prose-sm prose-slate dark:prose-invert h-fit rounded-md p-2 ${messageStyleConfig[this.type]}">
        ${this.escapeHtml(this.message)}
      </div>
    `
  }
}

const messageStyleConfig = {
  "USER": "bg-purple-400 dark:text-white dark:bg-purple-900",
  "SERVER": "bg-purple-100 dark:text-gray-300 dark:bg-slate-800 text-slate-700"
}