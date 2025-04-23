import {AfterInit, BaseElement, Component, Param, State} from "@ayu-sh-kr/dota-core";
import {DocLoaderService} from "@dota/service/doc-loader.service.ts";
import {MarkdownService} from "@dota/service/markdown.service.ts";

@Component({
  selector: "blog-view",
  shadow: false
})
export class BlogViewComponent extends BaseElement {

  docLoader!: DocLoaderService;

  @State()
  content!: string;

  @Param('blog')
  blog!: string;

  @Param('category')
  category!: string;

  constructor() {
    super();
    this.docLoader = new DocLoaderService();
  }

  @AfterInit()
  async afterViewInit() {
    if (this.blog && this.category) {
      const content = await this.docLoader.loadBlog(`${this.category.toLowerCase()}/${this.blog}`);
      this.content = MarkdownService.renderMarkdown(content);
    }

  }

  render() {
    // language=html
    return `
      <article class="prose dark:prose-invert mx-auto max-w-6xl px-3 py-8">
        ${this.content || ''}
      </article>
    `
  }
}