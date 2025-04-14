import { BaseElement, Component, Property, String } from "@ayu-sh-kr/dota-core";
import {docConfigs} from "@dota/doc.config.ts";
import {RoutesService} from "@dota/service/routes.service.ts";
import {RouteUtils} from "@dota/utils/RouteUtils.ts";

@Component({
  selector: 'doc-section',
  shadow: false
})
export class DocSectionComponent extends BaseElement{

  @Property({
    name: 'content-path',
    type: String
  })
  contentPath!: string;

  constructor() {
    super();
    const currentEntry = RouteUtils.getCurrentEntry();
    if (currentEntry.includes("/docs")) {
      const path = currentEntry.replace("/docs", "");
      if(path === '') {
        RoutesService.route('/docs/Getting-Started.md')
      }
      this.contentPath = path;
    }
  }

  render(): string {
    // language=html
    return `
      <section class="flex gap-4 relative font-dm w-full">
        <aside class="sticky top-14 h-[calc(100vh-50px)] hidden md:block w-72 bg-white p-4 dark:bg-gray-900 overflow-y-auto text-sm space-y-4 border-r custom-scrollbar">
          ${docConfigs.map(config => {
            // language=html
            return `
            <div class="border-b-2 py-2">
                <h2 class="dark:text-white text-gray-900 font-semibold">${config.category}</h2>
                ${config.paths.map(path => `<doc-path file-path="${path}"></doc-path>`).join(" ")}
            </div>
            `
          }).join(" ")}
        </aside>
        <main class="flex-1 p-4 w-full">
          <doc-content file-path="${this.contentPath}"></doc-content>
        </main>
      </section>
    `;
  }

}