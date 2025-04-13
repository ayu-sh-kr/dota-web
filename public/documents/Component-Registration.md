# Component Registration

To effectively register and use web components with `dota-core`, follow these detailed steps:

## Using `bootstrap` Method

The `bootstrap` method from `@ayu-sh-kr/dota-core` is a convenient way to register multiple web components at once. This method takes an array of components and registers them using the selectors defined in their `@Component` decorators.

##### Example

```typescript
import { bootstrap } from '@ayu-sh-kr/dota-core';
import { MyComponent1, MyComponent2 } from './path-to-components';

// Register components using bootstrap method
bootstrap([MyComponent1, MyComponent2]);
```

In this example, `MyComponent1` and `MyComponent2` are registered with the custom elements registry using their respective selectors. The `bootstrap` method simplifies the registration process by handling the details internally.

> It is recommended that you should register your components in your `main.ts` or `index.ts` file which is executed first, inorder to ensure that components 
> are loaded first in the browser before anything. By doing this we can avoid unexpected UI and logic behaviour.

> In order due avoid component not exists state when registering the component where some components depend on other components, for example `Component A` depends on `Component B`,
> in case like this always put `Component B` before `Component A` in array passes to the function `bootstrap` that way `Component B` is defined before `Component A`

#### Using Registered Components

Once the components are registered, you can use them in your HTML by including their custom tags. This allows you to integrate the components into your web pages seamlessly.

##### Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Web Components</title>
</head>
<body>
  <my-component1></my-component1>
  <my-component2></my-component2>
  <script type="module" src="main.ts"></script>
</body>
</html>
```

## Side Effect

As a side effect, you can use the components by directly importing the script as a module. The browser will automatically pick up and register the components without explicitly calling the `bootstrap` method. This can be useful for scenarios where you want to include components in a more modular fashion.

##### Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Web Components</title>
</head>
<body>
  <my-component1></my-component1>
  <my-component2></my-component2>
  <script type="module" src="./path-to-your-components.js"></script>
</body>
</html>
```

In this example, the components are automatically registered by the browser when the script is imported as a module. This approach eliminates the need for manual registration using the `bootstrap` method.

### Summary

By following these steps, you can efficiently register and use web components in your project using `dota-core`. The `bootstrap` method provides a streamlined way to register multiple components, while the side effect of direct script import offers flexibility for modular usage. This ensures that your web components are easily integrated and managed within your application.