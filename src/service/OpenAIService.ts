import {RestClient} from "@ayu-sh-kr/dota-rest";
import {notificationService} from "@dota/components/utils/notification/notification.service.ts";
import {SYSTEM_PROMPT} from "@dota/constants/prompt.ts";


export class OpenAIService {

  restClient: RestClient;
  model: string

  constructor(model: string) {
    this.restClient = RestClient.builder()
      .defaultHeaders({
        "Authorization": `Bearer ${import.meta.env.VITE_OPEN_AI_KEY}`,
        "Content-Type": "application/json"
      })
      .handler((response) => {
        if(!response.ok) {
          notificationService.danger({
            title: "API Error",
            message: `Failed to fetch response from API.`,
            duration: 5000,
          });
          return;
        }
      })
      .baseUrl("https://openrouter.ai/api/v1")
      .build();
    this.model = model;
  }


  async chatCompletion(prompt : string) {
    const entity = await this.restClient.post<DeepSeekResponse>()
      .uri(`/chat/completions`)
      .body({
        model: this.model,
        messages: [
          {
            role: "system",
            content: SYSTEM_PROMPT
          },
          {
            role: "user",
            content: prompt
          },
        ],
        temperature: 0.3,
        language: "english"
      })
      .retrieve()
      .toEntity();

    return entity.data.choices[0].message.content;
  }

}

export interface DeepSeekResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    index: number;
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}