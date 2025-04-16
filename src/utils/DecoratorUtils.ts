import {LoaderService} from "@dota/service/LoaderService.ts";


export function WithLoading(): MethodDecorator {
  return function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      LoaderService.toggle();
      try {
        return await originalMethod.apply(this, args);
      } finally {
        LoaderService.toggle();
      }
    };

    return descriptor;
  }
}