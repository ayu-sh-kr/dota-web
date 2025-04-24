import {AfterInit, BaseElement, BindEvent, Component, HTML, Property, Boolean} from "@ayu-sh-kr/dota-core";
import {LocalStorageService} from "@dota/service/local-storage.service.ts";

@Component({
  selector: 'app-offer',
  shadow: false
})
export class OfferComponent extends BaseElement {

  @Property({
    name: 'visible',
    type: Boolean
  })
  isVisible: boolean = true;

  constructor() {
    super();
  }

  @AfterInit()
  afterViewInit() {
    const offer = LocalStorageService.get('offer');
    this.isVisible = Boolean.process(offer);
  }

  @BindEvent({event: 'click', id: '#close'})
  handleClose() {
    this.isVisible = false;
    LocalStorageService.add('offer', 'false');
  }

  render(): string {
    return HTML`
        <div 
            class="${this.isVisible ? '' : 'hidden'} relative font-dm flex items-center justify-center w-full bg-gradient-to-r from-purple-600 via-black to-purple-600 py-4"
        >
            <div class="text-lg text-white gap-x-4 hover:text-opacity-90 cursor-pointer flex">Write <span class="text-purple-600"> Reusable </span> HTML</div>
            <span id="close" class="absolute right-10 focus:scale-95 cursor-pointer">
                    <dota-icon name="ic:twotone-close" color="gray" variant="soft" size="md"></dota-icon>
            </span>
        </div>
    `
  }

}