import {BaseElement, BindEvent, Boolean, Component, Emitter, EventEmitter, Property} from "@ayu-sh-kr/dota-core";
import {OpenAIService} from "@dota/service/OpenAIService.ts";
import {MessageRecord} from "@dota/pages/chat.page.ts";


@Component({
  selector: 'ai-form',
  shadow: false,
})
export class AiFormComponent extends BaseElement {

  openApiService: OpenAIService;

  @Property({
    type: Boolean,
    name: 'is-loading',
  })
  isLoading!: boolean;

  @Emitter()
  messageEvent!: EventEmitter<MessageRecord>

  constructor() {
    super();
    this.openApiService = new OpenAIService("deepseek/deepseek-r1-distill-llama-8b")
  }
  @BindEvent({event: 'submit', id: '#chat-form'})
  async userInputEvent(event: SubmitEvent) {
    this.isLoading = true;
    try {
      event.preventDefault();
      const form = event.currentTarget as HTMLFormElement;
      const formData = new FormData(form);
      const userMessage = formData.get('user-input')?.toString().trim() || '';

      if (userMessage) {
        this.messageEvent.emit({
          message: userMessage,
          type: 'USER',
        }, this);
        const message = await this.openApiService.chatCompletion(userMessage);
        console.log(message);
        this.messageEvent.emit({
          message: message,
          type: 'SERVER',
        }, this);
        form.reset();
      }
    }
    finally {
      this.isLoading = false;
    }
  }


  render(): string {
    // language=html
    return `
      <div class="relative group flex-1 ">
        ${this.isLoading ? `<div class="absolute border -inset-1 bg-gradient-to-r dark:from-pink-400 dark:to-purple-400 from-pink-600 to-purple-600 
                    rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
                >
                </div>` : ''}
        <form id="chat-form" class="relative flex items-center gap-2  w-full bg-white dark:bg-slate-900 rounded-lg p-2 shadow-sm  dark:shadow-[0px_0px_12px_rgba(147,51,234,0.8)]">

          <div class="w-12 h-12 rounded-full bg-gray-50 dark:bg-slate-800 flex items-center justify-center">
            <img src="https://icon-library.com/images/bot-icon/bot-icon-29.jpg" alt="dota-bot"
                 class="size-7"/>
          </div>
          <input name="user-input" type="text"  class="disabled:pointer-events-none disabled:opacity-70 w-full dark:text-gray-400  outline-none bg-transparent focus:border-purple-600 border-2  p-4 rounded-lg border-transparent "
                 placeholder="Hello! How can I assist you today?"/>
        </form>
      </div>
    `;
  }

}