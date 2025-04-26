import {
  AfterInit, BaseElement,
  Component, Element,
  State, WindowListener
} from "@ayu-sh-kr/dota-core";
import {MessageRecord} from "@dota/pages/chat.page.ts";
import {LocalStorageService} from "@dota/service/local-storage.service.ts";

@Component({
  selector: "message-box",
  shadow: false
})
export class MessageBoxComponent extends BaseElement {

  @State()
  messages: MessageRecord[] = [];

  @Element({
    selector: 'card-section',
    by: 'id'
  })
  cardSection!: HTMLElement

  constructor() {
    super()
  }

  @AfterInit()
  afterViewInit() {
    requestAnimationFrame(() => {
      this.messages = LocalStorageService.getList<MessageRecord>('message')
      this.messages.forEach((message, index) => {
        const messageCardEl = document.createElement('message-card');
        messageCardEl.setAttribute('message-type', message.type);
        messageCardEl.setAttribute('message', message.message);
        messageCardEl.setAttribute('key', index.toString());

        this.cardSection.appendChild(messageCardEl);
        this.cardSection.scrollTop = this.cardSection.scrollHeight;
      })
    })
  }

  @WindowListener({event: 'onMessageEvent'})
  handleNewMessages(event: CustomEvent<MessageRecord>) {
    this.messages.push(event.detail);
    requestAnimationFrame(() => {
        const messageCardEl = document.createElement('message-card');
        messageCardEl.setAttribute('message-type', event.detail.type);
        messageCardEl.setAttribute('message', event.detail.message);
        messageCardEl.setAttribute('key', this.messages.length.toString());

        this.cardSection.appendChild(messageCardEl);
      this.cardSection.scrollTop = this.cardSection.scrollHeight;
    });
  }

  render() {
    // language=html
    return `
      <section id="card-section" class="h-[55vh] w-full shadow-md dark:shadow-[0px_0px_12px_rgba(147,51,234,0.8)] overflow-y-auto custom-scrollbar p-4 bg-slate-100 dark:bg-slate-900 rounded-lg flex flex-col gap-4">
        
      </section>
    `
  }
}
