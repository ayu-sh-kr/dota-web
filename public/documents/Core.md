In this section we will be exploring the core concept behind the `web-components` and working
of the `Dota-Core` library.

## Overview
`Dota-Core` as a library is build around the concept of `web-components` and `shadow-dom`. 
The library is designed to be used in a native environment and to help developer create,
maintain and reuse the components in a more efficient way.

`Web Components`- these are the browser native reusable components. They were introduced in
2011 and are now supported in all major browsers. They are a set of standards that allow 
you to create custom HTML elements that can be reused in your web applications. 

The main idea behind web components is to encapsulate the functionality and style of 
a component so that it can be reused without worrying about conflicts with other components 
or styles on the page.

## Elements
Browser treats all the elements in the DOM as `HTML Elements`. The `web-components` are also
HTML elements but they are created using the `Custom Elements` API. The `Custom Elements` API
allows you to create your own HTML elements that can be used in the same way as the built-in.

At the base we have `HTMLElement` which is the base class for all HTML elements. Other elements like
div, span, p, etc. are all subclasses of `HTMLElement`. The `Custom Elements` API allows you to
create your own subclasses of `HTMLElement` that can be used in the same way as the built-in

```typescript
export class MyElement extends HTMLElement {
  constructor() {
    super();
  }
}
```

The above code creates a new class `MyElement` that extends `HTMLElement`. This means that
`MyElement` is now a custom HTML element that can be used in the same way as the built-in
elements. You can use it in your HTML like this:

```html
<my-element></my-element>
```

But to use the custom element in the HTML, you need to register it with the browser using the
`customElements.define` method. 

This method takes two arguments: 
- the name of the custom element and the class that defines the custom element. 
- The name of the custom element must contain a hyphen (-) to distinguish it from the built-in elements. 
- The name must also be lowercase.
```typescript
customElements.define('my-element', MyElement);
```

The above code registers the `MyElement` class as a custom element with the name `my-element`.

> When we write `<div></div>` in HTML, the browser creates an instance of the `HTMLDivElement` class.
> Similarly, when we write `<my-element></my-element>`, the browser creates an instance of the `MyElement` class.

## Using Dota-Core to Create Custom Elements
The `Dota-Core` library provides a set of classes and methods to create custom elements in a more
efficient way. The library is designed to be used in a native environment and to help developer create,
maintain and reuse the components in a more efficient way.

The library provides a `BaseElement` class that extends the `HTMLElement` class. This class provides
a set of methods and properties that can be used to create custom elements.

```typescript
import { BaseElement, Component } from '@ayu-sh-kr/dota-core';

@Component({
  tag: 'my-element',
  shadow: true,
})
export class MyElement extends BaseElement {
  
    constructor() {
    super();
  }

  render() {
    return`
      <div>
        <h1>Hello World</h1>
      </div>
    `;
  }
}
```

Above code creates a new class `MyElement` that extends `BaseElement`.
-  For more read [Component Definition](Component-Definition.md) section.


## Adding Attributes
The custom elements can have attributes just like the built-in elements. You can add attributes 
to the custom element in the same way as the built-in elements. 
```html
<my-element id="my-element" class="my-class"></my-element>
```

The above code adds the `id` and `class` attributes to the `my-element` custom element.
You can access the attributes of the custom element using the `getAttribute` method. 
```typescript
const myElement = document.querySelector('my-element');
const id = myElement.getAttribute('id');
const className = myElement.getAttribute('class');
```
The above code gets the `id` and `class` attributes of the `my-element` custom element.

> `class` attribute will add styles to the custom element same as the built-in elements.
> Usually we just don't create custom elements but also add elements to them and this behavior affects
> the styles of the custom element.

## Adding Custom Attributes
The custom elements can also have custom attributes. You can add custom attributes to the custom
element in the same way as the built-in elements. 
```html
<my-element my-attribute="my-value"></my-element>
```
The above code adds the `my-attribute` attribute to the `my-element` custom element.

To use these attributes in the custom element, you need to define them in the class that defines the custom element.
```typescript
export class MyElement extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['my-attribute'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'my-attribute') {
      console.log(`my-attribute changed from ${oldValue} to ${newValue}`);
    }
  }
}
```
- The above code defines the `my-attribute` attribute in the `MyElement` class.
- The `observedAttributes` static method returns an array of the attributes that you want to observe for changes.
- The `attributeChangedCallback` method is called whenever the value of the observed attribute changes.

To keep track of the attributes, we might want to bing them to the properties of the class. 
```typescript
export class MyElement extends HTMLElement {
  constructor() {
    super();
    this.myAttribute = '';
  }

  static get observedAttributes() {
    return ['my-attribute'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'my-attribute') {
      this.myAttribute = newValue;
      console.log(`my-attribute changed from ${oldValue} to ${newValue}`);
    }
  }
}
```

> - The above code defines the `myAttribute` property in the `MyElement` class.
> - If the no. of attributes are large, our class will become large and hard to maintain.
> - To solve this problem, `Dota-Core` provides a `@Property` decorator that can be used to define the properties of the custom element.

```typescript
import { BaseElement, Component, Property, String } from '@ayu-sh-kr/dota-core';

@Component({
  tag: 'my-element',
  shadow: true,
})
export class MyElement extends BaseElement {
  @Property({ type: String, name: 'my-attribute' })
  myAttribute = '';

  constructor() {
    super();
  }

  render() {
    return`
      <div>
        <h1>Hello World</h1>
      </div>
    `;
  }
}
```

- The above code defines the `myAttribute` property in the `MyElement` class using the `@Property` decorator.
- For more read [Property Binding](Property-Binding.md) section.


>As you can see, with each new functionality we bring to you using `Dota-Core`, the code becomes
 more readable and maintainable, also headache of maintaining repetitive action like attribute binding
 is taken care of by the library itself.
> 
> Similar thing is done for the `events` and `emitters` as well. Read [Event Binding](Event-Binding.md) section and [Event Emitter](Event-Emitter.md) section for more information.


## Shadow DOM
The `Shadow DOM` is a web standard that allows you to create a separate DOM tree for your custom element.
This means that the styles and scripts defined in the shadow DOM will not affect the rest of the page.

The `Shadow DOM` is a powerful feature of web components that allows you to encapsulate the styles and
functionality of your custom element. This means that the styles and scripts defined in the shadow DOM
will not affect the rest of the page. This allows you to create reusable components that can be used
in different parts of the page without worrying about conflicts with other components or styles on the page.

The `Shadow DOM` is created using the `attachShadow` method. This method creates a shadow root for the custom element.
```typescript
export class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        h1 {
          color: red;
        }
      </style>
      <h1>Hello World</h1>
    `;
  }
}
```

- The above code creates a shadow root for the `MyElement` class using the `attachShadow` method.
- The `connectedCallback` method is called when the custom element is added to the DOM.

To do this in `Dota-Core`, we just need to set the `shadow` property to `true` in the `@Component` decorator.
```typescript
import { BaseElement, Component } from '@ayu-sh-kr/dota-core';
@Component({
  tag: 'my-element',
  shadow: true,
})
export class MyElement extends BaseElement {
  constructor() {
    super();
  }

  render() {
    return`
      <div>
        <h1>Hello World</h1>
      </div>
    `;
  }
}
```
- The above code creates a shadow root for the `MyElement` class using the `@Component` decorator.
- The `render` method is called when the custom element is added to the DOM.