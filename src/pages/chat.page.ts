import {BaseElement, Component} from "@ayu-sh-kr/dota-core";


@Component({
  selector: 'chat-page',
  shadow: false
})
export class ChatPage extends BaseElement {

  constructor() {
    super();
  }

  render(): string {
    // language=html
    return `
    <app-header></app-header>
    `;
  }

}