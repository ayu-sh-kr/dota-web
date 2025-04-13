# Property Binding

Property binding is a powerful feature in web components that allows you to synchronize 
the properties of a component with its attributes. This means that when you change the 
value of a property in your component, the corresponding attribute in the DOM is automatically 
updated, and vice versa. This two-way data binding simplifies the process of keeping your 
component's state in sync with its representation in the DOM.

## Using `@Property` Decorator
The `@Property` decorator is used to define properties in your web component. It allows you to specify
the name of the property, its default value, and it's type. When a property is decorated with `@Property`, 
it automatically creates a corresponding attribute in the DOM.

#### Example
```typescript
import { BaseElement, Component, Property, String } from '@ayu-sh-kr/dota-core';

@Component({
    selector: 'hello-dota',
    shadow: false
})
export class HelloComponent extends BaseElement {

    @Property({ 
        name: 'name',
        type: String 
    })
    name: string;

    constructor() {
        super();
    }

    render(): string {
        return `Hello ${this.name}`;
    }
}
```

In this example, the `name` property is decorated with `@Property`, which means it 
will be synchronized with the corresponding attribute in the DOM.

So the above code will handle the following HTML:
```html
    <hello-dota name="Dota"></hello-dota>
```

## Using `@Property` with default value
The `@Property` decorator can also be used to set a default value for the property.
To set the default value, you can use the `default` option in the decorator and assign
it a value. This default value will be used when the component is first created.

#### Example
```typescript
import { BaseElement, Component, Property, String } from '@ayu-sh-kr/dota-core';

@Component({
    selector: 'hello-dota',
    shadow: false
})
export class HelloComponent extends BaseElement {

    @Property({ 
        name: 'name',
        type: String, 
        default: 'Dota' 
    })
    name: string;

    constructor() {
        super();
    }

    render(): string {
        return `Hello ${this.name}`;
    }
}
```

In this example, the `name` property is decorated with `@Property`, and its default value is set to `'Dota'`. 
When the component is created, if no value is provided for the `name` attribute, it will default to `'Dota'`.


## Using `@Property` for mapping attribute to property
The `@Property` decorator can also be used to map attribute with different name to the property or field.

```html
    <hello-dota text="Dota"></hello-dota>
```

In the component above the `text` attribute can be mapped to the `name` property in the component.
```typescript
import { BaseElement, Component, Property, String } from '@ayu-sh-kr/dota-core';
@Component({
    selector: 'hello-dota',
    shadow: false
})
export class HelloComponent extends BaseElement {

    @Property({ 
        name: 'text',
        type: String 
    })
    name: string;

    constructor() {
        super();
    }

    render(): string {
        return `Hello ${this.name}`;
    }
}
```

In this example, the `text` attribute in the HTML is mapped to the `name` property in the component. 
When the component is created, the value of the `text` attribute will be assigned to the `name` property.

> **Note**: The attribute mapping is done internally depends on the config details of the `@Property` decorator.
> - The `name` property in the decorator is used to map the attribute name to the property name.
> - The `type` property is used to define the type of the property. 
> - The `default` property is used to set the default value of the property.
> 
> Using above configuration, core will create observer and handle attribute change callback of the web-component.


