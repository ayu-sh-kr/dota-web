import {AfterInit, BaseElement, BindEvent, Component} from "@ayu-sh-kr/dota-core";
import {OpenAIService} from "@dota/service/OpenAIService.ts";
import {MessageBoxComponent} from "@dota/components/chat";
import {LocalStorageService} from "@dota/service/local-storage.service.ts";

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
    this.messages = []
  }

  @AfterInit()
  afterViewInit() {
    this.messages = LocalStorageService.getList<MessageRecord>("message");
    this.updateMessageBox();
  }

  @BindEvent({event: 'onMessageEvent', id: '#ai-form'})
  listenUserMessage(event: CustomEvent<MessageRecord>) {
    this.messages = LocalStorageService.pushToList<MessageRecord>("message", event.detail);
    this.updateMessageBox();
  }

  private updateMessageBox() {
    const messageBox = this.querySelector<MessageBoxComponent>("#message-box");
    if (messageBox) {
      messageBox.messages = this.messages;
      messageBox.updateHTML();
    }
  }

  render(): string {
    // language=html
    return `
      <app-header></app-header>
      <main id="chat-main" class="flex-1 h-full">
        <div class="container mx-auto px-4 py-6 max-w-3xl">
          <div id="welcome-message" class="text-center mb-8">
            <h2 class="text-2xl md:text-4xl font-semibold text-neutral-800 dark:text-neutral-200 mb-3">Welcome to <span class="text-purple-500">Dota AI</span> Chat</h2>
            <p class="text-neutral-600 text-lg font-medium">Convert your Ideas into Code with our Dota AI </p>
          </div>
          
          <message-box id="message-box"></message-box>

          <div id="chat-messages" class="space-y-6 mt-4">
            <div class="flex items-start space-x-4 relative group">
              <ai-form id="ai-form" is-loading="${this.isLoading}" class="w-full"></ai-form>
            </div>
        </div>
      </main>
      <footer-component></footer-component>
      <notification-holder id="dota-notification" position="bottom-right"></notification-holder>
    `;
  }
}

export type MessageType = 'USER' | 'SERVER';

export interface MessageRecord {
  message: string;
  type: MessageType;
}
