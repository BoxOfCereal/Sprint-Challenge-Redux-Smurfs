1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

`slice`,`contcat`,`map`.
we can use `Object.assign()` or optionally we can use an object with the `...`(spread) operator

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is known as a single source of truth in a redux application because all application state resides in the store.
This way if anything happens in the context of the application that's all residing inside the store  
From here you can map that state to any component.

An action is an object that describes an interaction to take place within the context of the application.
An action always has a type and he usually has a payload. They sometimes contain effects Or asynchronous API calls.

Actions are dispatched by action creators and sent to the reducer. The reducer handles all changes to the state.
Because the global state or store is immutable , in a state change that happens inside to reducer it is required
To make copies of the state and then apply that copy to the state in that particular case within the reducer.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is this state of your applications such as Whether or not its fetching data or has an error.
Component level state has won the component itself needs to keep track of change within its own context/scope.

login status is a good example of application state
input values are a good example of components state

1.  What is middleware?

Middleware is computer science term and technique to inject code and functionality and between functions as information is passed between
data structures or processes

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk is middleware for redux allows us to make a synchronous calls within our actions.
instead of returning an object inside of a action creator we return a function that takes in dispatch
and can call dispatch any time it needs to. This can be singular or multiple times.

1.  Which `react-redux` method links up our `components` with our `redux store`?
    `connect`
