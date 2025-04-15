import {BaseElement, BindEvent, Component} from "@ayu-sh-kr/dota-core";
import {OpenAIService} from "@dota/service/OpenAIService.ts";

@Component({
  selector: "chat-page",
  shadow: false,
})
export class ChatPage extends BaseElement {

  messages: MessageRecord[] = [];
  isLoading = false;


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
      <main id="chat-main" class="flex-1 h-full">
        <div class="container mx-auto px-4 py-6 max-w-3xl">
          <div id="welcome-message" class="text-center mb-8">
            <h2 class="text-2xl text-neutral-800 dark:text-neutral-200 mb-3">Welcome to AI Chat</h2>
            <p class="text-neutral-600">Convert your Ideas into Code with our Dota AI</p>
          </div>
          
          <message-box id="message-box">
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
              <ai-form id="ai-form" is-loading="${this.isLoading}" class="w-full"></ai-form>
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
