import {BaseElement, Component} from "@ayu-sh-kr/dota-core/dist";
import {HostListener} from "@ayu-sh-kr/dota-core";
import {NavigationRouterService} from "@dota/service/routes.service.ts";


@Component({
  selector: 'get-started-button',
  shadow: false
})
export class GetStartedButtonComponent extends BaseElement {

  constructor() {
    super();
  }

  @HostListener({event: 'click'})
  onClickListener() {
    NavigationRouterService.route('/docs/Getting-Started.md');
  }

  render(): string {
    // language=HTML
    return `
      <div class="relative group">
        <div class="absolute -inset-0.5 bg-gradient-to-r dark:from-pink-400 dark:to-purple-400 from-pink-600 to-purple-600 
            rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
        >
        </div>
        <button
          class="relative bg-gray-950 text-gray-50 dark:bg-gray-50 dark:text-gray-900 px-4 py-3 rounded-2xl active:scale-95 transition-all">
          Getting Started
        </button>
      </div>
    `;
  }

}