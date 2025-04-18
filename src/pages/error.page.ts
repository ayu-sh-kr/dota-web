import {BaseElement, Component, HTML, Property, String} from "@ayu-sh-kr/dota-core";

@Component({
  selector: 'app-error',
  shadow: false
})
export class ErrorPage extends BaseElement {

  @Property({name: 'path', type: String})
  path!: string;

  @Property({name: 'message', type: String})
  message!: string;

  @Property({name: 'status', type: String})
  status: number = 404

  constructor() {
    super();
  }

  render(): string {
    // language=html
    return HTML`
      <div class="relative flex flex-col justify-center items-center h-screen font-dm gap-y-2 md:gap-y-4 lg:gap-y-6 p-3">
        <span class="absolute top-4 right-4">
          <dark-mode-button></dark-mode-button>
        </span>
<!--        <svg rpl="" fill="#dadada" height="60" icon-name="meme-fill" viewBox="0 0 20 20" width="60"-->
<!--             xmlns="http://www.w3.org/2000/svg">-->
<!--          <path-->
<!--            d="M13 9.25h-2V12H4V9.25H.771a7.09 7.09 0 0 0-.2 1.625 7.545 7.545 0 0 0 2.81 5.779A10.231 10.231 0 0 0 10.024 19c2.423.03 4.778-.802 6.645-2.346A7.7 7.7 0 0 0 19.375 12H13V9.25Zm-3 7a6.26 6.26 0 0 1-4.357-1.713l1.048-1.073a4.977 4.977 0 0 0 4.616 1.117l.386 1.449a6.569 6.569 0 0 1-1.693.22ZM4 8H1.064V1.271a1.128 1.128 0 0 1 .582-.987 1.107 1.107 0 0 1 1.125.033l3.9 2.458c2.18-.696 4.521-.696 6.7 0l3.9-2.458a1.11 1.11 0 0 1 1.554.381c.102.174.156.372.155.573V7H13v1h-2V7H4v1Z"></path>-->
<!--        </svg>-->
        <dota-icon class="scale-150" name="emojione-monotone:confounded-face" color="purple" variant="ghost" size="2xl"></dota-icon>
        <h1 class="text-5xl sm:text-7xl py-4 text-center font-semibold text-purple-600">404</h1>
        <p class="text-center text-2xl sm:text-3xl text-gray-500 dark:text-gray-100 font-medium">Page Not Found</p>
        <p class="max-sm:text-sm lg:text-lg font-medium text-gray-900 dark:text-gray-200">The document you're looking for doesn't exist or has been
          moved to another location.</p>
        <div class="items-center flex gap-2">
          <a href="/" class="bg-purple-600 text-white flex items-center gap-1 px-5 py-3 rounded-lg">
            <dota-icon name="mdi:home" variant="ghost" size="md"></dota-icon>
            Go Home
          </a>
          <source src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/error-404-14393877-11613454.mp4"
                  type="video/mp4">

          <a href="/docs"
             class="bg-gray-200 dark:bg-slate-800 dark:text-white px-5 py-3 rounded-lg flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 24 24">
              <path fill="currentColor"
                    d="M8.385 12.308h7.23v-1h-7.23zm0 2.769h7.23v-1h-7.23zm0 2.77h4.23v-1h-4.23zM5 21V3h9.5L19 7.5V21zm9-13V4H6v16h12V8zM6 4v4zv16z"/>
            </svg>
            Documentation
          </a>
        </div>
      </div>
    `
  }

}

