import {BaseElement, Component, HostListener, Property, String} from "@ayu-sh-kr/dota-core";
import {RoutesService} from "@dota/service/routes.service.ts";
import {RouteUtils} from "@dota/utils/RouteUtils.ts";

@Component({
  selector: 'doc-path',
  shadow: false,
})
export class DocPathComponent extends BaseElement {

  @Property({
    name: 'file-path',
    type: String,
  })
  filePath!: string;

  constructor() {
    super();
  }

  @HostListener({event: 'click'})
  clickListener() {
    RoutesService.route(`/docs/${this.filePath}`);
  }

  render(): string {
    const includes = RouteUtils.getCurrentEntry().includes(this.filePath);
    // language=html
    return `
    <div class="cursor-pointer text-sm text-gray-600 dark:text-gray-300 py-1 px-2 ${includes ? 'text-purple-600 dark:text-purple-500' : ''}
        hover:text-purple-600 dark:hover:text-purple-500 transition-all hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
    >
      ${this.filePath.replace('.md', '').replace('-', ' ')}
    </div>
    `;
  }

}