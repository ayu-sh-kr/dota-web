# Web Component Life Cycle

Web Components have several lifecycle callbacks that allow you to run code at specific times during a component's existence. Understanding these lifecycle hooks is crucial for properly initializing, updating, and cleaning up your components.

## Main Lifecycle Hooks

### Constructor
```javascript
export class MyElement extends HTMLElement {
  constructor() {
    super();
    // Initialize state and properties
    // Set up event listeners
  }
}
```
The constructor runs when an instance of the element is created or upgraded. Use it to initialize state and set up event listeners.

### connectedCallback
```javascript
export class MyElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Component has been added to the DOM
    // Set up initial state, fetch data, etc.
    this.render();
  }
}
```
Invoked when the element is appended to the document's DOM. Perfect for DOM initialization tasks.

### disconnectedCallback
```javascript
export class MyElement extends HTMLElement {
  constructor() {
    super();
  }

  disconnectedCallback() {
    // Component has been removed from the DOM
    // Clean up event listeners, timers, etc.
  }
}
```
Called when the element is removed from the DOM. Use it for cleanup tasks.

### attributeChangedCallback
```javascript
export class MyElement extends HTMLElement {
  static get observedAttributes() {
    return ["attr1", "attr2"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Called when an observed attribute is added, removed, updated, or replaced
    if (name === "attr1") {
      this.handleAttr1Change(newValue);
    }
  }
}
```
Invoked when an observed attribute is added, removed, updated, or replaced.

### adoptedCallback
```javascript
export class MyElement extends HTMLElement {
  constructor() {
    super();
  }

  adoptedCallback() {
    // Called when the element is moved to a new document
    // Useful for handling cross-document scenarios
  }
}
```
Called when the element is moved to a new document.

## In Dota Framework

The Dota framework you're using provides additional lifecycle hooks:

```typescript

import { AfterInit, BeforeInit, Component, BaseElement } from "@ayu-sh-kr/dota-core";

@Component({
  selector: "my-component"
})
export class MyComponent extends BaseElement {
  constructor() {
    super();
    console.log("Constructor called");
  }

  @AfterInit()
  afterViewInit() {
    console.log("Component fully initialized");
  }

  @BeforeInit()
  beforeViewInit() {
    console.log("Component about to be destroyed");
  }
}
```

## Best Practices

1. Use constructor for instance property initialization
2. Use connectedCallback for DOM setup
3. Use disconnectedCallback for cleanup
4. Use attributeChangedCallback for reacting to attribute changes
5. Always implement cleanup in disconnectedCallback to prevent memory leaks

## References

- [MDN Web Components Guide](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#using_the_lifecycle_callbacks)
- [MDN Custom Elements API](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)
- [HTML Living Standard - Custom Elements](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-lifecycle)