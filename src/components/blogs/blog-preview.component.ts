// blog-preview.component.ts
import { BaseElement, Component, Property, String } from "@ayu-sh-kr/dota-core";
import {type BlogCategory} from "@dota/configs/blogs.config.ts";

@Component({
    selector: 'blog-preview',
    shadow: false,
})
export class BlogPreviewComponent extends BaseElement {

    @Property({
      name: 'date',
      type: String
    })
    date: string = '';

    @Property({
      name: 'writer',
      type: String
    })
    writer: string = '';

    @Property({
      name: 'header',
      type: String
    })
    header: string = '';

    @Property({
      name: 'description',
      type: String
    })
    description: string = '';

    @Property({
      name: 'category',
      type: String
    })
    category: BlogCategory = 'Rant';

    constructor() {
      super();
    }

    render(): string {
        // language=html
        return `
        <div class="relative w-full rounded-lg shadow-md p-4 bg-white dark:bg-gray-800 transition-transform transform cursor-pointer">
            <div class="flex justify-end mb-2">
              <blog-icon category="${this.category}"></blog-icon>
            </div>
            <div class="flex justify-between items-center mb-2">
                <span class="text-gray-600 dark:text-gray-400 text-sm">${this.date}</span>
                <span class="text-purple-500 dark:text-purple-400 text-sm">By ${this.writer}</span>
            </div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">${this.header}</h2>
            <p class="text-gray-700 dark:text-gray-300 line-clamp-5">${this.description}</p>
        </div>
        `;
    }
}