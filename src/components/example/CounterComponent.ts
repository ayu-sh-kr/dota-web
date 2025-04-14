import {BaseElement, BindEvent, Component, Number, Property} from "@ayu-sh-kr/dota-core";


@Component({
  selector: "counter-component",
  shadow: false
})
export class CounterComponent extends BaseElement {

  @Property({
    name: "counter",
    type: Number
  })
  counter: number = 0;

  constructor() {
    super();
  }

  @BindEvent({event: 'click', id: '#increment'})
  increment() {
    this.counter = this.counter + 1;
  }

  @BindEvent({event: 'click', id: '#decrement'})
  decrement() {
    this.counter--;
  }

  render(): string {
    // language=html
    return `
      <div class="flex flex-col items-center justify-center p-8">
        <h1 class="text-2xl font-bold mb-4">Counter Component</h1>
        <div class="flex items-center space-x-4">
          <button id="decrement" class="bg-red-500 text-white px-3 py-1 rounded text-sm">-</button>
          <p id="counter" class="text-xl font-medium w-8 text-center">${this.counter}</p>
          <button id="increment" class="bg-blue-500 text-white px-3 py-1 rounded text-sm">+</button>
        </div>
      </div>
    `
  }

}