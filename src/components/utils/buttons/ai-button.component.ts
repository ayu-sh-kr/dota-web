import {BaseElement, Component} from "@ayu-sh-kr/dota-core/dist";
import {HostListener} from "@ayu-sh-kr/dota-core";
import {DomNavigationRouter} from "@ayu-sh-kr/dota-router";


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
    DomNavigationRouter.route('/chat');
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