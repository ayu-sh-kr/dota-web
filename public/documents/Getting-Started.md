# Introduction to `Dota Core`
`dota-core` is a utility library for creating and managing web components. It provides clean API and functions to manage aspects such as `Property Binding`, `Event Binding`, `Listeners`, `Reactivity` etc. The library aims to simplify the development of web components by offering tools to efficiently manage component properties, events, and their interactions.

It provides automation for repetitive tasks such as defining web components, binding properties on them and adding reactivity. Written entirely in TypeScript, it provides developers with a solid foundation to build scalable and maintainable web components efficiently.

# Installation
To install this package use the `npm` command below
```bash
npm install @ayu-sh-kr/dota-core
```

# Creating a Web Component
To create the web component `dota-core` provides decorators such as `@Component` to manage the component type `shadow` or not, also 
the `selector` to be used for the component.

>the `selector` to be used for the component. Note that the selector must contain a hyphen (-) and should be in lowercase letters as per Web Components specification.

```typescript
import {BaseElement, Component} from '@ayu-sh-kr/dota-core';

@Component({
    selector: 'hello-dota',
    shadow: false
})
class MyComponent extends BaseElement {

    name = 'Dota';
    
    constructor() {
        super();
    }
    
    render() {
        // language=HTML
        return `
        <div>Hello ${this.name}</div>
        `
    }

}
```

# Registering the Web Components
It is important that we register our web components before we use them within our project. Usually one register the web component
to the component registry but `dota-core` provides a `bootstrap` method to wrap up and define all component at once, and
it utilizes the metadata present in the `@Component` decorator to define the component

```typescript
// ususal registration
customElements.define('component-selector', MyComponent);

// with dota-core
import { bootstrap } from '@ayu-sh-kr/dota-core'

bootstrap([
    MyComponent1, MyComponent2
]);
```

# Using the Web Component
Once you have registered the web component it's time for using it. We can use it by including the compoment
in the html file or withing the typescript and inject it to the html. Both way it will work.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Web Component</title>
</head>
<body>
  <hello-dota></hello-dota>
  <script type="module" src="./path-to-your-component.ts"></script>
</body>
</html>
```
> **Note:** The html tag `hello-dota` is derived from the selector within the `@Component` decorator
> on the `HelloComponent` class

```typescript
document.querySelector('#app')!.innerHTML = `
    <hello-dota></hello-dota>
`
```

# Sum Up
Define the component in `hello.component.ts`

```typescript
import {Component} from '@ayu-sh-kr/dota-core';

@Component({
    selecter: 'hello-dota',
    shadow: false
})
export class HelloComponent extends BaseElement {

    name = 'dtoa';
    
    constructor() {
        super();
    }
    
    render() {
        return `Hello ${this.name}`
    }

}
```

Import, Register and Serve the component from `main.ts`

```typescript
import { HelloComponent } from '@pathToSource/hello.component';
import { bootstrap } from '@ayu-sh-kr/dota-core';

bootstrap([
    HelloComponent
]);

document.querySelector('#app')!.innerHTML = `
    <hello-dota></hello-dota>
`
```

