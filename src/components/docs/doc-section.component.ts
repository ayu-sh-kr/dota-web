import { BaseElement, Component, Property, String } from "@ayu-sh-kr/dota-core";
import { docConfigs } from "@dota/configs/doc.config.ts";
import { RouterUtils } from "@ayu-sh-kr/dota-router";
import {routerService} from "@dota/configs/routes.config.ts";

@Component({
  selector: "doc-section",
  shadow: false,
})
export class DocSectionComponent extends BaseElement {
  @Property({
    name: "content-path",
    type: String,
  })
  contentPath!: string;

  constructor() {
    super();
    const currentEntry = RouterUtils.getCurrentPath();
    if (currentEntry.includes("/docs")) {
      const path = currentEntry.replace("/docs", "");
      if (path === "") {
        routerService.route("/docs/Getting-Started.md");
      }
      this.contentPath = path;
    }
  }

  render(): string {
    // language=html
    return `
      <section class="flex gap-4 relative font-dm w-full">
        <aside class="sticky top-14 h-[calc(100vh-50px)] hidden md:block w-64 bg-[#F6F6F7]  dark:bg-gray-900 overflow-y-auto text-sm space-y-4 border-r custom-scrollbar px-4">
          <h1 class="text-2xl font-bold border-b dark:!bg-transparent dark:text-white sticky top-0  py-4 pl-4 w-full bg-[#F6F6F7]"> Dota <span class="text-purple-600">Docs</span></h1>
          ${docConfigs
            .map((config) => {
              // language=html
              return `
            <div class="border-b-2 pl-4">
                <h2 class="dark:text-white text-[#67676c] font-semibold">${config.category}</h2>
               <p class="my-3 "> ${config.paths
                 .map((path) => `<doc-path file-path="${path}"></doc-path>`)
                 .join(" ")}</p>
            </div>
            `;
            })
            .join(" ")}
        </aside>
        <main class="flex-1 p-4 w-full">
          <doc-content file-path="${this.contentPath}"></doc-content>
        </main>
      </section>
    `;
  }
}
