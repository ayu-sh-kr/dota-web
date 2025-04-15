import {BaseElement, BindEvent, Boolean, Component, Property} from "@ayu-sh-kr/dota-core";
import {OpenAIService} from "@dota/service/OpenAIService.ts";

@Component({
  selector: "chat-page",
  shadow: false,
})
export class ChatPage extends BaseElement {

  messages: MessageRecord[] = [];


  constructor() {
    super();
    this.openApiService = new OpenAIService("deepseek/deepseek-r1-distill-llama-8b")
  }

  @BindEvent({event: 'onMessageEvent', id: '#ai-form'})
  listenUserMessage(event: CustomEvent<MessageRecord>) {
    this.messages.push(event.detail)
    this.updateHTML()
  }

  render(): string {
    // language=html
    return `
      <app-header></app-header>
      <header class="border-b border-neutral-200 bg-white dark:bg-black/30 dark:text-white">
        <div class="container mx-auto px-4 py-4 flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <h1
              class="text-xl text-neutral-800 bg-gradient-moving bg-clip-text text-transparent bg-[length:200%] animate-gradient-x">
              AI Assistant</h1>
          </div>
          <div class="flex items-center space-x-4">
            <button class="p-2 hover:bg-neutral-100 rounded-full">
            </button>
            <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&amp;seed=123" alt="User avatar"
                 class="w-8 h-8 rounded-full"/>
          </div>
        </div>
      </header>
      <main id="chat-main" class="flex-1 overflow-y-auto">
        <div class="container mx-auto px-4 py-6 max-w-3xl">
          <div id="welcome-message" class="text-center mb-8">
            <h2 class="text-2xl text-neutral-800 dark:text-neutral-200 mb-3">Welcome to AI Chat</h2>
            <p class="text-neutral-600">Convert your Ideas into Code with our Dota AI</p>
          </div>
          
          <message-box id="message-box">
            <message-card message-type="USER" message="Ram ram ndsjkkfjd fnjsd jkfdsnf kjdfndsjf bnbndsjkfnsjkd njdsj fsdfksdbfj sdfsdjfk bsdbkfksfbsdbf "></message-card>
            <message-card message-type="SERVER" message="Ram ram fjndjn fjnfjlfljjdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"></message-card>
            ${this.messages.map(({type,message},idx)=> {
              return `<message-card message-type="${type}" message="${message}"></message-card>`
            }).join(" ")}
          </message-box>

          <div id="chat-messages" class="space-y-6 mt-4">
            <div class="flex items-start space-x-4 relative group">
              <div class="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                <img src="https://cdn-icons-png.flaticon.com/512/15917/15917116.png" alt="dota-bot"
                     class="size-5 invert"/>
              </div>
              <ai-form id="ai-form" is-loading="false" class="w-full"></ai-form>
            </div>

          
        </div>
      </main>
    `;
  }
}

export type MessageType = 'USER' | 'SERVER';

export interface MessageRecord {
  message: string;
  type: MessageType;
}
