import {BaseElement, Component} from "@ayu-sh-kr/dota-core/dist";
import {HostListener} from "@ayu-sh-kr/dota-core";
import {NavigationRouterService} from "@dota/service/routes.service.ts";


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
    NavigationRouterService.route('/chat');
  }

  render(): string {
    // language=html
    return `
      <span id="github-button" class="active:scale-95 cursor-pointer">
        <a target="_blank">
            <dota-icon name="healthicons:artificial-intelligence" color="pink" variant="ghost" size="lg"/>
        </a>
      </span>
    `;
  }

}