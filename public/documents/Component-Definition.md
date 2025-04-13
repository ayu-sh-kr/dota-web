# The `@Component` Decorator
As discussed on the [Getting-Started](Getting-Started.md) the `@Component` decorator is used for storing metadata
related to the definition of the component itself. Using the `reflect-metada` library, `dota-core` stores
information such as html selector of the component, whether component will be rendered in shadow dom or normal
dom. Apart from this it stores a reference to the component itself for initialization purpose
with `bootstrap` method.

```typescript
import {Component} from '@ayu-sh-kr/dota-core'

@Component({
    selector: 'hello-dota',
    shadow: false
})
export class HelloComponent extends BaseElement {

    name = 'Dota';
    
    constructor() {
        super();
    }
    
    render(): string {
        return `Hello ${this.name}`
    }

}
```

### Selector

The `selector` property in the `@Component` decorator is used to define the custom HTML tag name for the web component. This tag name is used to instantiate the component in HTML.

#### Rules for Selector
- The selector must contain a hyphen (`-`).
- The selector should be in lowercase letters as per the Web Components specification.

#### Example

Here is an example of how to define a selector in the `@Component` decorator:

```typescript
import { Component } from '@ayu-sh-kr/dota-core';

@Component({
    selector: 'hello-dota',
    shadow: false
})
export class HelloComponent extends BaseElement {

    name = 'Dota';

    constructor() {
        super();
    }

    render(): string {
        return `Hello ${this.name}`;
    }

}
```

In this example, the selector `hello-dota` is used to define the custom HTML tag for the `HelloComponent`. This tag can then be used in HTML to instantiate the component:

```html
<hello-dota></hello-dota>
```

By following these rules and examples, you can define and use custom selectors for your web components effectively.

### Shadow

The `shadow` property in the `@Component` decorator is a boolean field that determines whether the component will use the Shadow DOM or not.

#### Usage

- If `shadow` is set to `true`, the component will be rendered inside a Shadow DOM.
- If `shadow` is set to `false`, the component will be rendered in the regular DOM.

#### Example

Here is an example of how to define the `shadow` property in the `@Component` decorator:

```typescript
import { Component } from '@ayu-sh-kr/dota-core';

@Component({
    selector: 'hello-dota',
    shadow: true
})
export class HelloComponent extends BaseElement {

    name = 'Dota';

    constructor() {
        super();
    }

    render(): string {
        return `Hello ${this.name}`;
    }

}
```

In this example, the `shadow` property is set to `true`, meaning the `HelloComponent` will be rendered inside a Shadow DOM.

#### How it Affects the DOM and Inner HTML

- **Shadow DOM**: When `shadow` is `true`, the component's DOM is encapsulated in a shadow root. This means that the styles and scripts inside the shadow root do not affect the main document and vice versa. This encapsulation helps in avoiding style conflicts and ensures that the component's internal structure is hidden from the main document.

- **Regular DOM**: When `shadow` is `false`, the component's DOM is part of the main document. This means that the styles and scripts inside the component can affect the main document and vice versa. This approach is less encapsulated but allows for easier interaction with the rest of the document.

#### Example of Shadow DOM

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shadow DOM Example</title>
</head>
<body>
  <hello-dota></hello-dota>
  <script type="module" src="./path-to-your-component.ts"></script>
</body>
</html>
```

# `BaseElement` class
The abstract class `BaseElement` comes up with set of configuration for the custom web components. It covers
area such as defining `properties` and adding observation for them, `reactivity` for property change. It handles
when to change dom upon changes to the data encapsulated by the component.

In-short it handle the life cycle of the web component. The lifecycle of a web component consists of several phases,
each corresponding to specific events and methods that can be used to manage the component's behavior:

### 1. Creation
This phase occurs when the component is instantiated. The constructor is called, and the component's initial state is set up.

### 2. Connected
This phase occurs when the component is added to the DOM. The `connectedCallback` method is called, allowing you to perform actions like fetching data or rendering the initial UI.

### 3. Attribute Changes
This phase occurs when the component's attributes are added, removed, or changed. The `attributeChangedCallback` method is called, allowing you to respond to these changes.

### 4. Disconnected
This phase occurs when the component is removed from the DOM. The `disconnectedCallback` method is called, allowing you to perform cleanup actions like removing event listeners.

### 5. Adopted
This phase occurs when the component is moved to a new document. The `adoptedCallback` method is called, allowing you to handle any necessary adjustments.

### Summary
- **Creation**: Constructor is called.
- **Connected**: `connectedCallback` is called when added to the DOM.
- **Attribute Changes**: `attributeChangedCallback` is called when attributes change.
- **Disconnected**: `disconnectedCallback` is called when removed from the DOM.
- **Adopted**: `adoptedCallback` is called when moved to a new document.

By implementing these lifecycle methods, you can manage the behavior and state of your web components effectively throughout their lifecycle.

All of the above phases for us is managed by the abstract class `BaseElement` and we can change the 
particular behavior by overriding the content of `BaseElement`.

# `render` Method

The `render` method is a crucial part of the `BaseElement` class, serving as an abstract method that must be implemented by any class extending `BaseElement`. This method is designed to define the content of the web component, which can be either HTML or plain text.

#### Key Characteristics

- **Abstract Method**: As an abstract method, `render` does not have an implementation in the `BaseElement` class. Instead, it must be provided by the subclass. This ensures that each component can define its own specific content.

- **Called During `connectedCallback`**: The `render` method is invoked during the `connectedCallback` lifecycle phase. This phase occurs when the component is added to the DOM, making it an ideal time to render the initial UI of the component.

- **Return Type**: The `render` method should return a string. This string represents the HTML or text content that will be inserted into the component's DOM. By returning a string, the method provides a flexible way to define the component's structure and content.

- **Attribute Updates**: The `render` method is also called each time the component's attributes are updated. This ensures that any changes to the component's attributes are reflected in its content. By re-rendering the component when attributes change, the method helps maintain the component's reactivity and ensures that the UI stays in sync with its state.

#### Example Usage

When implementing the `render` method in a subclass, you define the specific HTML or text content that the component should display. For instance, if you have a component that displays a greeting message, the `render` method might return a string containing a `div` element with the message.

By adhering to these principles, the `render` method plays a vital role in defining and updating the content of web components, ensuring they are both dynamic and responsive to changes in their attributes.

```typescript
import { Component, Property, String } from '@ayu-sh-kr/dota-core';

@Component({
    selector: 'hello-dota',
    shadow: true
})
export class HelloComponent extends BaseElement {

    @Property({
        name: 'name',
        type: String
    })
    name!: string;

    constructor() {
        super();
    }

    render(): string {
        return `
        <h3>Hello ${this.name}</h3>
        `;
    }

}
```

```html
<hello-data name="Dota"></hello-data>
```

# Sum-up

To define a web component using `dota-core`, follow these key steps:

- **Annotation with `@Component`**: The component must be annotated with the `@Component` decorator, which includes a `selector` property to define the custom HTML tag name for the component.
- **Constructor Implementation**: The component must implement a constructor that calls `super()` to ensure proper initialization.
- **Render Method**: The component must provide a `render` method that returns a string representing the HTML or text content of the component. This method is essential for defining the UI of the component.
