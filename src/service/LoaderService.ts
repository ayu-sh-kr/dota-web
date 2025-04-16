import {LoaderComponent, LoaderSectionComponent} from "@dota/components/utils";


export class LoaderService {


  static toggle() {
    console.log('Changing loader')
    const loader = document.querySelector('loader-section') as LoaderSectionComponent;
    if (loader) {
      loader.setAttribute('is-loader', !loader.isLoading + '');
    }
  }

}