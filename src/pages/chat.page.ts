import {AfterInit, BaseElement, Component} from "@ayu-sh-kr/dota-core";
import {OpenAIService} from "@dota/service/OpenAIService.ts";
import {LocalStorageService} from "@dota/service/local-storage.service.ts";
import {GeneralUtils} from "@dota/utils/GeneralUtils.ts";

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
    GeneralUtils.scrollToTop('instant');
    this.messages = LocalStorageService.getList<MessageRecord>("message");
  }

  render(): string {
    // language=html
    return `
      <app-header></app-header>
      <main id="chat-main" class="flex-1  min-h-screen">
        <div class="container mx-auto px-4 py-6 mt-8 ">
          <div id="welcome-message" class="text-center mb-8">
            <h2 class="text-2xl md:text-4xl font-semibold text-neutral-800 dark:text-neutral-200 mb-3">Welcome to <span class="text-purple-500">Dota AI</span> Chat</h2>
            <p class="text-neutral-600 text-lg font-medium">Convert your Ideas into Code with our Dota AI </p>
          </div>
          <div class="max-w-4xl mx-auto">
            <message-box id="message-box"></message-box>
            <div id="chat-messages" class="space-y-6 mt-4">
              <div class="flex items-start space-x-4 relative group">
                <ai-form id="ai-form" is-loading="${this.isLoading}" class="w-full"></ai-form>
              </div>
            </div>
          </div>
      </main>
      <app-footer></app-footer>
    `;
  }
}

export type MessageType = 'USER' | 'SERVER';

export interface MessageRecord {
  message: string;
  type: MessageType;
}
