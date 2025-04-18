import {LoaderSectionComponent} from "@dota/components/utils";


export class LoaderService {

  static toggle() {
    const loader = document.querySelector('loader-section') as LoaderSectionComponent;
    if (loader) {
      loader.setAttribute('is-loader', !loader.isLoading + '');
    }
  }

}