import markdownit from 'markdown-it';
import highlightjs from 'markdown-it-highlightjs';
import 'highlight.js/styles/github-dark.css';

export class MarkdownService {

  static renderMarkdown(content: string): string {
    const md = markdownit({
      html: true,
      linkify: true,
      typographer: true,
    }).use(highlightjs);

    return md.render(content);
  }
}