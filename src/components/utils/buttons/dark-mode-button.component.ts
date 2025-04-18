import {BaseElement, Component} from "@ayu-sh-kr/dota-core/dist";
import {AfterInit, BindEvent} from "@ayu-sh-kr/dota-core";

import {GeneralUtils, toggleDark} from "@dota/utils/GeneralUtils.ts";
import {LocalStorageService} from "@dota/service/local-storage.service.ts";


@Component({
  selector: 'dark-mode-button',
  shadow: false
})
export class DarkModeButtonComponent extends BaseElement {

  constructor() {
    super();
  }

  @AfterInit()
  afterViewInit() {
    const browserTheme = GeneralUtils.getBrowserTheme();
    switch (browserTheme) {
      case 'dark':
        this.querySelector('#dark-button')!.innerHTML = `<dota-icon name="material-symbols:dark-mode" color="purple" variant="ghost" size="md" />`;
        break;
      case 'light':
        this.querySelector('#dark-button')!.innerHTML = `<dota-icon name="material-symbols:sunny-rounded" color="purple" variant="ghost" size="md" />`;
        break;
      default:
        break;
    }
  }

  @BindEvent({event: 'click', id: '#dark-button'})
  handleDark() {
    const iconContainer = this.querySelector('#dark-button');

    if (iconContainer) {
      if (toggleDark()) {
        iconContainer.innerHTML = `<dota-icon  name="material-symbols:dark-mode" color="purple" variant="ghost" size="md" />`
        LocalStorageService.add('theme', 'dark');
      } else {
        iconContainer.innerHTML = `<dota-icon  name="material-symbols:sunny-rounded" color="purple" variant="ghost" size="md" />`
        LocalStorageService.add('theme', 'light');
      }
    }
  }

  render(): string {
    // language=html
    return `
      <span id="dark-button" class="active:scale-95 cursor-pointer">
        <dota-icon name="material-symbols:sunny-rounded" color="purple" variant="ghost" size="md"/>
      </span>
    `;
  }

}