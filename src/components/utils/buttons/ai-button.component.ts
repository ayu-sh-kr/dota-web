import {BaseElement, Component, HostListener} from "@ayu-sh-kr/dota-core";
import {routerService} from "@dota/configs/routes.config.ts";


@Component({
  selector: 'ai-button',
  shadow: false,
})
export class AiButtonComponent extends BaseElement {

  constructor() {
    super();
  }

  @HostListener({event: 'click'})
  hostClickListener() {
    routerService.route('/chat');
  }

  render(): string {
    // language=html
    return `
      <span id="github-button" class="active:scale-95 cursor-pointer">
        <a target="_blank">
            <dota-icon name="healthicons:artificial-intelligence" color="pink" variant="ghost" size="md"/>
        </a>
      </span>
    `;
  }

}