import {AfterInit, BaseElement, Component} from "@ayu-sh-kr/dota-core";
import {DocLoaderService} from "@dota/service/doc-loader.service.ts";
import {MarkdownService} from "@dota/service/markdown.service.ts";

@Component({
  selector: "blog-view",
  shadow: false
})
export class BlogViewComponent extends BaseElement {

  docLoader!: DocLoaderService;
  content!: string;

  constructor() {
    super();
    this.docLoader = new DocLoaderService();
  }

  @AfterInit()
  async afterViewInit() {
    const params = new URLSearchParams(window.location.search);

    const blog = params.get("blog");
    if (blog) {
      const content = await this.docLoader.loadBlog(blog);
      this.content = MarkdownService.renderMarkdown(content)
      this.updateHTML();
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