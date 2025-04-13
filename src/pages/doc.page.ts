import {BaseElement, Component, HTML} from "@ayu-sh-kr/dota-core/dist";
import {Property, String, WindowListener} from "@ayu-sh-kr/dota-core";


@Component({
  selector: 'doc-page',
  shadow: false
})
export class DocPage extends BaseElement {

  @Property({
    name: 'content-path',
    type: String
  })
  contentPath!: string

  constructor() {
    super();
    this.contentPath = 'Getting-Started.md'
  }

  @WindowListener({event: 'onFilePathChange'})
  pathChangeListener(event: CustomEvent<string>) {
    console.log(event)
    this.contentPath = event.detail;
    this.updateHTML();
  }

  render(): string {
    // language=html
    return HTML`
      <app-header></app-header>
      <section class="flex gap-4 relative">
        <aside class="sticky top-14 h-[calc(100vh-50px)] hidden md:block w-72 bg-white p-4  dark:bg-gray-900 overflow-y-auto text-sm space-y-4 border-r custom-scrollbar">
          <doc-path file-path="Getting-Started.md"></doc-path>
          <doc-path file-path="Component-Registration.md"></doc-path>
          <doc-path file-path="Component-Definition.md"></doc-path>
          <doc-path file-path="Property-Binding.md"></doc-path>
        </aside>
        <main class="flex-1 p-4">
          <doc-content file-path="${this.contentPath}"></doc-content>
        </main>
      </section>
      <footer-component></footer-component>
      <notification-holder id="dota-notification" position="bottom-right"></notification-holder>
    `;
  }

}
