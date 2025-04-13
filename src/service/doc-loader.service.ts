import {RestClient} from "@ayu-sh-kr/dota-rest";


export class DocLoaderService {

    restClient: RestClient;

    constructor() {
        this.restClient = RestClient.builder()
            .timeout(10000)
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