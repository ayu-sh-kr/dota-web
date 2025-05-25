import {AfterInit, BaseElement, Component, HTML, Property, String} from "@ayu-sh-kr/dota-core";
import {GeneralUtils} from "@dota/utils/GeneralUtils.ts";

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

  @AfterInit()
  afterViewInit() {
    GeneralUtils.scrollToTop('instant');
  }

  render(): string {
    // language=html
    return HTML`
      <div class="relative flex flex-col justify-center items-center h-screen font-dm gap-y-2 md:gap-y-4 lg:gap-y-6 p-3">
        <span class="absolute top-4 right-4">
          <dark-mode-button></dark-mode-button>
        </span>
        <dota-icon class="scale-150" name="emojione-monotone:confounded-face" color="purple" variant="link" size="2xl"></dota-icon>
        <h1 class="text-5xl sm:text-7xl py-4 text-center font-semibold text-purple-600">404</h1>
        <p class="text-center text-2xl sm:text-3xl text-gray-500 dark:text-gray-100 font-medium">Page Not Found</p>
        <p class="max-sm:text-sm lg:text-lg font-medium text-gray-900 dark:text-gray-200 text-center">
          The document you're looking for doesn't exist or has been
          moved to another location .
        </p>
        <div class="items-center flex gap-2">
          <a href="/" class="bg-purple-600 text-white flex items-center gap-1 px-5 py-3 rounded-lg">
            <dota-icon name="mdi:home" variant="ghost" size="md"></dota-icon>
            Go Home
          </a>

          <a href="/docs/Getting-Started.md"
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

