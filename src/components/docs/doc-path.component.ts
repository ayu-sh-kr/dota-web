import {BaseElement, Component, Emitter, EventEmitter, HostListener, Property, String} from "@ayu-sh-kr/dota-core";

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

  @Emitter()
  filePathChange!: EventEmitter<string>

  constructor() {
    super();
  }

  @HostListener({event: 'click'})
  clickListener() {
    console.log('Clicked path')
    this.filePathChange.emit(this.filePath);
  }

  render(): string {
    // language=html
    return `
    <div class="cursor-pointer text-lg text-gray-600 dark:text-gray-300 py-1 px-2 
        hover:text-purple-600 dark:hover:text-purple-500 transition-all hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
    >
      ${this.filePath.replace('.md', '').replace('-', ' ')}
    </div>
    `;
  }

}