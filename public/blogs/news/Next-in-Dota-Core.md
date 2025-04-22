Before we dive into the details, we want to take a moment to appreciate the works done by the team toward the `Dota-Core` 
development and all the contributions made by the community. The `Dota-Core` project has been a labor of love, and we are 
grateful for the support and enthusiasm.

## Let's take a look the features of current version of `Dota-Core`
In the version `1.1.16`, we have added several patches, refactoring and removed logs along the way. In this release we 
added one feature that allowed userd to watch for `property` changes and execute certain methods
based on that. The introduction of decorator `@Watcher` allows developers to easily create methods that gets
executed when a property changes. This feature is particularly useful for developers who want to create
custom logic that is triggered by property changes.

```typescript
import {BaseElement, Component, Property, String, Watcher} from "@ayu-sh-kr/dota-core";

@Component({
    selector: 'watcher-example',
    shadow: false,
})
export class WatcherExample extends BaseElement {

    @Property({
        name: 'example',
        type: String,
    })

    constructor() {
        super();
    }

    @Watcher('example')
    watchProperty() {
        console.log('example property changed');
    }

    render() {
        return html`
            <div>
                <h1>Watcher Example</h1>
                <p>Example: ${this.example}</p>
            </div>
        `;
    }


}
```

In above example, we have created a `WatcherExample` component that has a property called `example`.
When the `example` property changes, the `watchProperty` method is executed, and a message is logged to the console.


## What is next in `Dota-Core`?
In the next version of `Dota-Core`, we are planning to introduce several new features and improvements.
Some of the key features we are working on include:
- **Improved performance**: We are working on optimizing the performance of `Dota-Core` to make it faster and more efficient.
- **DotaElement**: New class `DotaElement` will be introduced on top of `BaseElement`. This class will provide a more 
  intuitive and user-friendly API for developers. With this new class, we are planning to abstract away more of the verbosity of 
  `Dota-Core` components and add more features on top of `BaseElement` without breaking the existing API.
- **New decorators**: We are working on adding new decorators to `Dota-Core` to make it easier for developers to create 
  components. These decorators will provide additional functionality and make it easier to create complex components.
  - `@Param`: This decorator will allow developers to bind url parameters to properties in their components. This will make it easier to create components that are 
    responsive to changes in the URL.
  - `@Route`: This decorator will allow developers to create components that are responsive to changes in the URL. This will make it easier to create components that are 
    responsive to changes in the URL.
  - `@State`: This decorator will allow developers to create components that are responsive to changes in the state of the application. This will make it easier to create 
    components that are responsive to changes in the state of the application.


- **Improved documentation**: We are working on improving the documentation for `Dota-Core` to make it easier for developers to get started with the framework. This will include
  more examples, tutorials, and guides to help developers understand how to use `Dota-Core` effectively.
- **More Test Coverage**: We are working on improving the test coverage for `Dota-Core` to ensure that the framework is stable and reliable. This will include adding more unit tests, 
  integration tests, and end-to-end tests to ensure that `Dota-Core` is working as expected.


With these new features and improvements, we are confident that `Dota-Core` will become an even more powerful and flexible framework for 
building web applications. We are excited to share these updates with the community and look forward to your feedback.
