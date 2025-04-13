import {AfterInit, BaseElement, Component, Property, String} from "@ayu-sh-kr/dota-core";
import {DocLoaderService} from "@dota/service/doc-loader.service.ts";
import markdownit from 'markdown-it';
import highlightjs from 'markdown-it-highlightjs';
import 'highlight.js/styles/github-dark.css';

@Component({
  selector: 'doc-content',
  shadow: false
})
export class DocContentComponent extends BaseElement {

  @Property({
    name: 'file-path',
    type: String,
  })
  filePath!: string;

  docLoaderService: DocLoaderService;
  content!: string;

  constructor() {
    super();
    this.docLoaderService = new DocLoaderService();
  }

  @AfterInit()
  async afterViewInit() {
    const md = markdownit({
      html: true,
      linkify: true,
      typographer: true,
    }).use(highlightjs);

    const content = await this.docLoaderService.loadDoc(this.filePath);
    this.content = md.render(content)
    this.updateHTML();
  }

  render(): string {
    // language=html
    return `
      <article class="prose-sm dark:text-white max-w-7xl mx-auto">
        ${this.content || 'Loading Docs'}
      </article>
    `;
  }

}