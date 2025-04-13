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
      <section class="w-full grid grid-cols-8 p-5 gap-x-3 relative">
        <aside class="lg:col-span-2 col-span-3 hidden md:block w-full py-1 px-2 border-r-2">
          <doc-path file-path="Getting-Started.md"></doc-path>
          <doc-path file-path="Component-Registration.md"></doc-path>
          <doc-path file-path="Component-Definition.md"></doc-path>
          <doc-path file-path="Property-Binding.md"></doc-path>
        </aside>
        <main class="lg:col-span-6 md:col-span-5 col-span-8 w-full">
          <doc-content file-path="${this.contentPath}"></doc-content>
        </main>
      </section>
      <footer-component></footer-component>
      <notification-holder id="dota-notification" position="bottom-right"></notification-holder>
    `
  }

}
