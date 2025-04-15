import { BaseElement, Component } from "@ayu-sh-kr/dota-core";

@Component({
  selector: "chat-page",
  shadow: false,
})
export class ChatPage extends BaseElement {
  constructor() {
    super();
  }

  render(): string {
    // language=html
    return `
    <app-header></app-header>
  <header  class="border-b border-neutral-200 bg-white dark:bg-black/30 dark:text-white">
        <div class="container mx-auto px-4 py-4 flex items-center justify-between">
            <div class="flex items-center space-x-4">
                <h1 class="text-xl text-neutral-800 bg-gradient-moving bg-clip-text text-transparent bg-[length:200%] animate-gradient-x">AI Assistant</h1>
            </div>
            <div class="flex items-center space-x-4">
                <button class="p-2 hover:bg-neutral-100 rounded-full">
                </button>
                <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&amp;seed=123" alt="User avatar" class="w-8 h-8 rounded-full"/>
            </div>
        </div>
    </header>
<main id="chat-main" class="flex-1 overflow-y-auto">
    <div class="container mx-auto px-4 py-6 max-w-3xl">
        <div id="welcome-message" class="text-center mb-8">
            <h2 class="text-2xl text-neutral-800 dark:text-neutral-200 mb-3">Welcome to AI Chat</h2>
            <p class="text-neutral-600">Convert your Ideas into Code with our Dota AI</p>
        </div>

        <div id="chat-messages" class="space-y-6">
            <div class="flex items-start space-x-4">
                <div class="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                   <img src="https://cdn-icons-png.flaticon.com/512/15917/15917116.png" alt="dota-bot" class="size-5 invert"/>
                </div>
                <div class="flex-1 bg-white rounded-lg p-4 shadow-sm">
                   <input type="text" class="w-full outline-none"  placeholder="Hello! How can I assist you today?"/>
                </div>
            </div>

            <div class="flex items-start space-x-4 justify-end">
                <div class="flex-1 bg-neutral-700 rounded-lg p-4 shadow-sm">
                    <p class="text-white">Can you help me with my question?</p>
                </div>
                <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=456" alt="User" class="w-8 h-8 rounded-full"/>
            </div>
        </div>
    </div>
</main>
    `;
  }
}
