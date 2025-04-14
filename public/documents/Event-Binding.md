# Event Binding
Event binding is a powerful feature in JavaScript that allows you to execute a 
function when a specific event occurs on an element. This can be done using the 
`addEventListener` method or by setting the `on<Event>` property directly on the 
element.

`Dota Core` leverages the same native feature to bind events to elements but provides
an abstraction over it to make it easier to work with. When working with `vite/vanilla`
we don't have level of control as we do in the normal `HTML, CSS, JavaScript` code.

>`Dota Core` provides decorators that lets you bind event to the components methods. This
> allows you to easily manage events and keep your code organized.
>
> Before we explores decorator first we need to understand what kind of event we will deal
> with in our application. The events are divided into three categories:
> 1. **Host Events** - These are events that are triggered by the host element itself. For example, a button click or a form submission.
> 2. **Window Events** - These are events that are triggered by the window object. For example, a resize or scroll event.
> 3. **Components' Element Events** - These are events that are triggered by the elements inside the component. For example, a click event on a button inside a component.

## Binding Host Events
To bind a host event to a component method, you can use the `@HostListener` decorator. This decorator takes a configuration
object that at very least specifies the event name for which the method should be called. 
The method will be called when the event is triggered on the host element.

```typescript
import {Component, BaseElement, HostListener} from "@ayu-sh-kr/dota-core";

@Component({
    selector: 'demo-component',
    shadow: false,
})
export class DemoComponent extends BaseElement {

    constructor() {
        super();
    }

    @HostListener({event: 'click'})
    hostClickEvent(event: Event) {
        console.log('Host element clicked', event);
    }

    render() {
        return `
            <p>Click me</p>
        `;
    }

}
```

```html
<demo-component></demo-component>
```

In the above example, the `hostClickEvent` method will be called when the host element is clicked.

> The method annotated with `@HostListener` will be called with the event object as the first argument.
> It will work only when the event is on the component itself, neither inside the component nor outside the component
> or on window object.

> Above is equivalent to the following code:
> ```typescript
> this.addEventListener('click', (event) => {
> console.log('Host element clicked', event);
>});
> ```
> Where this refers to the host element.

## Binding Window Events
To bind a window event to a component method, you can use the `@WindowListener` decorator. This decorator takes a configuration
object that at very least specifies the event name for which the method should be called.
The method will be called when the event is triggered on the window object.

```typescript
import {Component, BaseElement, WindowListener} from "@ayu-sh-kr/dota-core";
@Component({
    selector: 'demo-component',
    shadow: false,
})
export class DemoComponent extends BaseElement {

    constructor() {
        super();
    }

    @WindowListener({event: 'resize'})
    windowResizeEvent(event: Event) {
        console.log('Window resized', event);
    }

    render() {
        return `
            <p>Resize the window</p>
        `;
    }

}
```

```html
<demo-component></demo-component>
```
In the above example, the `windowResizeEvent` method will be called when the window is resized.
> The method annotated with `@WindowListener` will be called with the event object as the first argument.
> It will work only when the event is on the window object, neither inside the component nor outside the component
> or on host element.
> Above is equivalent to the following code:
> ```typescript
> window.addEventListener('resize', (event) => {
> console.log('Window resized', event);
> });
> ```
> Where window refers to the window object.

> The `@WindowListener` decorator is useful for binding events that are not specific to a single component,
>  such as scroll or resize events. It allows you to easily manage these events and keep your code organized.

> **Note**: By listening to windows event component will update its state and re-render itself. Multiple components
> can listen to the same event and update their state independently. This is useful for creating responsive
> components that need to react to changes in the window size or scroll position.


## Binding Components' Element Events
To bind an event to a component's element, you can use the `@BindEvent` decorator. This decorator takes a configuration
object that specifies the event name and the elements identifier for which the method should be called.

```typescript
import {Component, BaseElement, BindEvent} from "@ayu-sh-kr/dota-core";
@Component({
    selector: 'demo-component',
    shadow: false,
})
export class DemoComponent extends BaseElement {

    constructor() {
        super();
    }

    @BindEvent({event: 'click', selector: '#btn'})
    buttonClickEvent(event: Event) {
        console.log('Button clicked', event);
    }

    render() {
        return `
            <button id="btn">Click me</button>
        `;
    }

}
```

```html
<demo-component></demo-component>
```

In the above example, the `buttonClickEvent` method will be called when the button with id `btn` is clicked.
> The method annotated with `@BindEvent` will be called with the event object as the first argument.
> It will work only when the event is on the element specified by the selector, neither inside the component nor outside the component
> or on host element.


`Dota-Core` manages the event binding for you, so you don't have to worry about adding and removing event listeners manually.
Events are binded when the component is connected to the DOM and removed when the component is disconnected from the DOM.