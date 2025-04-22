import {BaseElement, Component, BindEvent, WindowListener} from "@ayu-sh-kr/dota-core";
import {GeneralUtils} from "@dota/utils/GeneralUtils.ts";


@Component({
  selector: 'dark-mode-button',
  shadow: false
})
export class DarkModeButtonComponent extends BaseElement {

  constructor() {
    super();
  }

  @BindEvent({event: 'click', id: '#dark-button'})
  handleDark() {
    GeneralUtils.toggleDarkMode();
  }

  @WindowListener({event: 'themeChange'})
  handleThemeChange() {
    this.updateHTML();
  }

  render(): string {
    const isDarkTheme = GeneralUtils.isDarkMode();
    const icon = isDarkTheme ? 'material-symbols:dark-mode' : 'material-symbols:sunny-rounded';
    // language=html
    return `
      <span id="dark-button" class="active:scale-95 cursor-pointer">
        <dota-icon name="${icon}" color="purple" variant="ghost" size="md"/>
      </span>
    `;
  }

}