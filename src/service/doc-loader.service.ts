import {RestClient} from "@ayu-sh-kr/dota-rest";
import {routerService} from "@dota/configs/routes.config.ts";


export class DocLoaderService {

  restClient: RestClient;

  constructor() {
    this.restClient = RestClient.builder()
      .timeout(10000)
      .handler((response) => {
        if(!response.ok) {
          routerService.route('/error')
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

  async loadBlog(path: string): Promise<string> {
    const response = await this.restClient.get()
      .uri(`/blogs/${path}`)
      .retrieve()
      .toResponse();

    return response.text();
  }
}