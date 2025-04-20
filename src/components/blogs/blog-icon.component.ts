import {BaseElement, Component, Property, String} from "@ayu-sh-kr/dota-core";
import {type BlogCategory, BlogTypeConfig} from "@dota/configs/blogs.config.ts";

@Component({
  selector: "blog-icon",
  shadow: false
})
export class BlogIconComponent extends BaseElement {

  @Property({
    name: 'category',
    type: String
  })
  category!: BlogCategory

  constructor() {
    super();
  }

  render() {
    // language=html
    const iconDetail = BlogTypeConfig[this.category];
    return `
      <span>
        <dota-icon name="${iconDetail.icon}" color="${iconDetail.color || 'gray'}" variant="link" size="md"></dota-icon>
      </span>
    `
  }
}