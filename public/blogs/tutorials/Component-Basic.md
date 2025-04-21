# Designing Web Components
If you don't know about web components, you can read about them [here](https://developer.mozilla.org/en-US/docs/Web/Web_Components) or follow my previous
blog [Web Components](/blogs/content?blog=tutorials/Web-Component.md). In abstract
web components are custom HTML elements that can be reused any time and in any framework.

## Understanding Requirements
Before designing a component, let alone web components, you must know your requirement in hand and what
objective you need to achieve with this component. Your component can be `stateless` just reusable html amd styles
or `stateful` with some logic and data.

`Stateless` components are easy to design and implement. You might want your next footer or header to be 
`stateless` and reusable, so you can use throughout your application and across multiple projects. Yes you can
use your web component across multiple projects and that to not only in vanilla javascript but in any framework like
`React`, `Angular`, `Vue`, `Svelte` etc. You can use your web component in any framework and it will work as expected.

- An example of `stateless` web component would be `GitHubs` markdown editor.

`Stateful` components are a bit tricky to design and implement. You might want your next `modal` or `dropdown` to be
`stateful` and reusable. With these components you have to handle your state through `attributes`, `properties` or
third party store provides inorder to provide a robust state management.

- A very popular library `Swiper.js` uses web component for its `carousel` and `slider` component. It is a stateful component and uses `attributes` to manage its state.


## Handling Component State
In `Web Component` we handle state using `attributes` and `properties`. Attributes are the values that are passed to the component from the outside
and properties are the values that are set inside the component. Attributes are always strings and properties can be any type of data.

With this information we have a challenge to bind `attributes` and `properties` together to sync state
across element and withing the element. To this we start by observing the `attributes` using a getter and returning `observedAttributes` which will return the list of 
attributes that we want to observe. We can then use the `attributeChangedCallback` to listen for changes in the attributes and update the properties accordingly.

```javascript
class MyComponent extends HTMLElement {
  static get observedAttributes() {
    return ['my-attribute'];
  }

  constructor() {
    super();
    this._myProperty = '';
  }

  get myProperty() {
    return this._myProperty;
  }

  set myProperty(value) {
    this._myProperty = value;
    this.setAttribute('my-attribute', value);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'my-attribute') {
      this._myProperty = newValue;
    }
  }
}
```


At first glance it seems like a lot of work to do for just a simple stateful component
which could have been spin off in few lines of code with `React`, `Angular` or `Vue` but 
what we don't realise is that we are building a reusable component that can be used in any framework
and that to with a very small footprint. The above code is just 50 lines of code and can be used in any framework

To address the issue of verbosity we have few project going on in the community for example
`Lit`, `Stencil` and `Dota` - out native implementation on top of `Web Components` which will help you to build
web components with less code and more functionality. These libraries are built on top of `Web Components`.

Lets look at an example of web component using `Dota` library -

```typescript
import {BaseElement, Component, String} from "@ayu-sh-kr/dota-core";
import {Property} from "@ayu-sh-kr/dota-core";

@Component({
    selector: 'my-button',
    shadow: false,
})
export class ButtonComponent extends BaseElement {

    @Property({
        name: 'label',
        type: String,
    })
    label!: string

    constructor() {
        super();
    }

    render() {
        return `
            <button>
                ${this.label}
            </button>
        `;
    }
}
```

This is a simple web component that takes a `label` as a property and renders a button with the label. 
The `@Component` decorator is used to define the component and the `@Property` decorator is used to define the properties of the component. 
The `render` method is used to render the component.

With this the library abstracts the complexity of `Web Components` and provides a simple API to build web components.

## Conclusion
In this blog we have seen how to design a web component and how to handle state in web components.
We have also seen how to use `Dota` library to build web components with less code and more functionality.
We have also seen how to use `attributes` and `properties` to handle state in web components.
We have also seen how to use `@Component` and `@Property` decorators to define the component and its properties.

With this we have a good understanding of how to design web components and how to handle state in web components.
Lets make your next component a web component