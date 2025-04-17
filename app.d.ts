import {Route} from "@dota/routes.config.ts";

export interface RouterService {

  render(path: string, routes?: Route<Object>[]): void;

}