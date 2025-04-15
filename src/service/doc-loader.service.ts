import {RestClient} from "@ayu-sh-kr/dota-rest";
import {RoutesService} from "@dota/service/routes.service.ts";


export class DocLoaderService {

  restClient: RestClient;

  constructor() {
    this.restClient = RestClient.builder()
      .timeout(10000)
      .handler((response) => {
        console.log(response)
        if(!response.ok) {
          RoutesService.route('/error')
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
}