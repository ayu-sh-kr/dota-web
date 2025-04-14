# Event Emitters
Event Emitters are a core part of `Dota-Core` and are used to handle events in a decoupled way. 
They allow you to emit events, making it easy to emit custom events and listen for them in different parts of your code.

## Creating an Event Emitter
To create an event emitter, you can use the decorator `@Emitter` from `@ayu-sh-kr/dota-core` package. It will
inject the decorated field with an instance of `EventEmitter` class or you can create an instance of `EventEmitter` class directly.

```typescript
import {Component, BaseElement, BindEvent, Emitter, EventEmitter} from '@ayu-sh-kr/dota-core';

export class DemoComponent extends BaseElement {
    @Emitter()
    customEvent!: EventEmitter;

    constructor() {
        super();
    }

    @BindEvent({ name: 'click', id: '#btn'})
    emitEvent() {
        this.emitter.emit({data: 'Hello World'});
    }
    
    render() {
        return `
            <div>
                <button id="btn">Emit Event</button>
            </div>
        `
    }
}
```

Above code will create an event emitter and emit an event with name `onCustomEvent` and data `{data: 'Hello World'}` when the button is clicked.

> **Note**: Events are name after the field name, so in the above case the event name `onCustomEvent` is determined by the field name `customEvent`.
> Field name is converted the title case and prefixed with `on` to create the event name.

> Event emitted in the above example is of event on the windows object and these events can be listened using `@WindowListener` decorator.
> Event of window type can be listened by all the components in the application.

## Emitting Events from Root Component
To emit events from the root component, you can use the `emit` method of the `EventEmitter` class and provide data and the instance of component itself.

```typescript
import {Component, BaseElement, BindEvent, Emitter, EventEmitter} from '@ayu-sh-kr/dota-core';

export class DemoComponent extends BaseElement {
    @Emitter()
    customEvent!: EventEmitter;

    constructor() {
        super();
    }

    @BindEvent({ name: 'click', id: '#btn'})
    emitEvent() {
        this.customEvent.emit({data: 'Hello World'}, this);
    }
    
    render() {
        return `
            <div>
                <button id="btn">Emit Event</button>
            </div>
        `
    }
}
```

> Above event will listened to using `@BindEvent` decorator in the listener component where the `DemoComponent` is used as a child component.
> One can also use the `@HostListener` decorator to listen to the event in the component itself.


## When to use Event Emitters
In context of web components, event emitters are used to handle events in a decoupled way. It allows you to emit events from 
one component and listen for them in another component. This is useful when you want to create reusable components that can be 
used in different parts of your application without tightly coupling them together.