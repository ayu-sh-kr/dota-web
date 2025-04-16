`Dota-Core` relys on decorators to provide meta-data to the components. Decorators are a special kind of declaration that can be attached to a class or a method. They are used to modify the behavior of the class or method. 
Decorators are a stage 2 proposal for JavaScript and are available in TypeScript.

## Component Decorator
Component decorator is used to provide meta-data to a component. It used to register the component
for bootstrap. It is used to define the selector for the component along with whether the component is
shadow DOM or not.

```typescript
import {Component} from '@ayu-sh-kr/dota-core';
import {BaseElement} from "@ayu-sh-kr/dota-core/dist";

@Component({
    selector: 'app-root',
    shadow: false,
})
export class AppComponent extends BaseElement {
    // Component logic goes here
}
```
> **Note:** The `selector` property is used to define the selector for the component. 
> The `shadow` property is used to define whether the component should use shadow DOM or not. If the `shadow` 
> property is set to `true`, the component will use shadow DOM. If it is set to `false`, 
> the component will not use shadow DOM. The default value of the `shadow` property is `false`. 
> The `selector` property is required.
> 
> `Selector` value must have - (dash) in it otherwise component won't be registered.


## Property Decorator
Property decorator is used to define the properties of a component. It is used to bind the component
attribute to the class property field. 

```html
<app-root loading="false"></app-root>
```

In above code we can bind the `loading` attribute to the class property field using the `@Property` decorator.

```typescript
import {Component, Property, BaseElement, Boolean} from '@ayu-sh-kr/dota-core';

@Component({
    selector: 'app-root',
    shadow: false,
})
export class AppComponent extends BaseElement {
    @Property({
        name: 'loading',
        type: Boolean, 
        default: false
    })
    loading: boolean = false;
}
```

> **Note**
> - `name` - is required and is used to define the name of the property. It should be same as the attribute name in the HTML.
> - `type` - is used to define the type of the property. It can be any of the following types: `String`, `Number`, `Boolean`, `Object`, `Array`.
> - `default` - is used to define the default value of the property. It is optional and if not provided, the default value will be `undefined`.

`type` option in the `@Property` decorator config is used for conversion of the string attribute back to its intended
type. For example, if the attribute is a number, then the `type` should be set to `Number`.


## Bind Event Decorator
Bind event decorator is used to bind the events withing the component to the component's
class methods.
```typescript
import {Component, BaseElement, BindEvent} from '@ayu-sh-kr/dota-core';

@Component({
    selector: 'app-root',
    shadow: false,
})
export class AppComponent extends BaseElement {
    // ...
    @BindEvent({event: 'click', id: '##btn'})
    onClick(event: Event) {
        console.log('Clicked', event);
    }
    // ...
}
```

> **Note**
> - `event` - is required and is used to define the name of the event. It should be same as the event name in the HTML.
> - `id` - is used to define the id of the element to which the event should be bound. It should be same as the id of the element in the HTML.
> - `params`- is used to define the parameters that should be passed to the event handler. It is optional and if not provided, the default value will be `undefined`.

## Host Listener Decorator
Host listener decorator is used to bind the events on the component itself to the component's methods.

```typescript
import {Component, BaseElement, HostListener} from '@ayu-sh-kr/dota-core';
@Component({
    selector: 'app-root',
    shadow: false,
})
export class AppComponent extends BaseElement {
    // ...
    @HostListener({event: 'click'})
    onClick(event: Event) {
        console.log('Clicked', event);
    }
    // ...
}
```

> **Note**
> - `event` - is required and is used to define the name of the event. It should be same as the event name in the HTML.

## Window Listener Decorator
Window listener decorator is used to bind the events on the window object to the component's methods.

```typescript
import {Component, BaseElement, WindowListener} from '@ayu-sh-kr/dota-core';
@Component({
    selector: 'app-root',
    shadow: false,
})
export class AppComponent extends BaseElement {
    // ...
    @WindowListener({event: 'resize'})
    onResize(event: Event) {
        console.log('Resized', event);
    }
    // ...
}
```

> **Note**
> - `event` - is required and is used to define the name of the event. It should be same as the event name in the HTML.

## After Init Decorator
After init decorator is used to define the method that should be called after the component is initialized.
```typescript
import {Component, BaseElement, AfterInit} from '@ayu-sh-kr/dota-core';
@Component({
    selector: 'app-root',
    shadow: false,
})
export class AppComponent extends BaseElement {
    // ...
    @AfterInit()
    afterViewInit() {
        console.log('Component Initialized');
    }
    // ...
}
```

> **Note**
> - method decorated with `@AfterInit` must be name `afterViewInit` otherwise it won't be called.
> - It is used for things to do after component is initialized.

## Before Init Decorator
Before init decorator is used to define the method that should be called before the component is initialized.
```typescript
import {Component, BaseElement, BeforeInit} from '@ayu-sh-kr/dota-core';
@Component({
    selector: 'app-root',
    shadow: false,
})
export class AppComponent extends BaseElement {
    // ...
    @BeforeInit()
    beforeViewInit() {
        console.log('Component Initialized');
    }
    // ...
}
```

> **Note**
> - method decorated with `@BeforeInit` must be name `beforeViewInit` otherwise it won't be called.
> - It is used for things to do before component is initialized.

## Emitter Decorator
Emitter decorator is used on the property that should be initialized with `EventEmitter` class.
`EventEmitter` class is used to emit custom event from the component or on window object from the component
itself. 
```typescript
import {Component, BaseElement, Emitter} from '@ayu-sh-kr/dota-core';
@Component({
    selector: 'app-root',
    shadow: false,
})
export class AppComponent extends BaseElement {
    // ...
    @Emitter()
    customEvent: EventEmitter;
    // ...
}
```

> **Note**
> - field name will be translated to event name by adding prefix `on-` to the field name, also it converted to camelCase.
> - for `fieldName` event name will be `onFieldName`.
> - `EventEmitter` class is used to emit custom event from the component or on window object from the component itself.

