import {AfterInit, BaseElement, Component, Property, String, Watcher} from "@ayu-sh-kr/dota-core";
import {DocLoaderService} from "@dota/service/doc-loader.service.ts";
import {MarkdownService} from "@dota/service/markdown.service.ts";

@Component({
  selector: "resource-content",
  shadow: false
})
export class ResourceContentComponent extends BaseElement {

  @Property({
    name: 'resource-path',
    type: String,
  })
  resourcePath!: string;

  docService: DocLoaderService;
  content!: string;

  constructor() {
    super();
    this.docService = new DocLoaderService();
  }

  @AfterInit()
  async afterViewInit() {
    await this.updateContent()
  }

  @Watcher('resourcePath')
  async updateContent() {
    const content = await this.docService.loadResource(this.resourcePath);
    this.content = MarkdownService.renderMarkdown(content);
    this.updateHTML();
  }

  render() {
    // language=html
    return `
      <article class="prose dark:prose-invert text-lg font-medium">
        ${this.content || ''}
      </article>
    `
  }
}