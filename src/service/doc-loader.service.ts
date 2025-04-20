import {RestClient} from "@ayu-sh-kr/dota-rest";
import {DomNavigationRouter} from "@ayu-sh-kr/dota-router";
import {WithLoading} from "@dota/utils/DecoratorUtils.ts";


export class DocLoaderService {

  restClient: RestClient;

  constructor() {
    this.restClient = RestClient.builder()
      .timeout(10000)
      .handler((response) => {
        if(!response.ok) {
          DomNavigationRouter.route('/error')
        }
      })
      .build();
  }

  async loadDoc(path: string): Promise<string> {
    const response = await this.restClient.get()
      .uri(`/documents/${path}`)
      .retrieve()
      .toResponse();

    return response.text();
  }

  async loadResource(path: string): Promise<string> {
    const response = await this.restClient.get()
      .uri(`/materials/${path}`)
      .retrieve()
      .toResponse();

    return response.text();
  }
}