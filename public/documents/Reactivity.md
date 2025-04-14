# Reactivity

Reactivity in `dota-core` provides an efficient way to automatically update the DOM when component properties change. This system manages the synchronization between component state and UI rendering.

## Property Decorator

The `@Property` decorator is the core of `dota-core`'s reactivity system. It watches fields for changes and triggers DOM updates automatically.

```typescript
import { BaseElement, Component, Property, String } from "@ayu-sh-kr/dota-core";

@Component({
  selector: "my-component",
  shadow: false
})
export class MyComponent extends BaseElement {
  @Property({
    name: "user-name",    // HTML attribute name
    type: String,         // Type of the property
    default: "Guest"      // Default value
  })
  userName!: string;
  
  render() {
    return `
      <div>Hello, ${this.userName}!</div>
    `;
  }
}
```

## How Reactivity Works

### Attribute Change Handling

The `@Property` decorator automatically:

1. Registers the property in observed attributes
2. Implements the `attributeChangedCallback` to detect changes
3. Updates the component's internal state when attributes change
4. Triggers re-rendering when needed

### Lifecycle Integration

Property reactivity is seamlessly integrated with the web component lifecycle:

- **Connection**: Properties are registered and initialized when component connects to DOM
- **Updates**: Changes to properties trigger DOM updates
- **Disconnection**: Property observers are cleaned up when component disconnects

### Built-in DOM Updates

When a reactive property changes, `dota-core`:

1. Updates the component's internal state
2. Calls the `updateHtml()` method to re-render with the latest state
3. Efficiently updates only what's needed in the DOM

## Example with Multiple Properties

```typescript
import {BaseElement, Component, Property, Number, Boolean, BindEvent} from "@ayu-sh-kr/dota-core";

@Component({
    selector: "counter-component"
})
export class CounterComponent extends BaseElement {
    @Property({
        name: "count",
        type: Number,
        default: 0
    })
    count!: number;

    @Property({
        name: "disabled",
        type: Boolean,
        default: false
    })
    disabled!: boolean;

    @BindEvent({name: "click", id: "#btn"})
    increment() {
        if (!this.disabled) {
            this.count++;
            // No need to call updateHtml() manually - it's handled by the reactivity system
        }
    }

    render() {
        return `
      <div>
        <p>Current count: ${this.count}</p>
        <button 
          ${this.disabled ? 'disabled' : ''} 
          id="btn"
        >
          Increment
        </button>
      </div>
    `;
    }
}
```

<counter-component counter="0"></counter-component>

## Best Practices

- Use `@Property` for any field that should trigger UI updates when changed
- Provide appropriate types for type checking and conversion
- Set sensible default values to ensure components work before properties are set
- Avoid excessive DOM manipulation outside the reactivity system

The reactivity system in `dota-core` provides a simple yet powerful way to create responsive web components with minimal boilerplate.