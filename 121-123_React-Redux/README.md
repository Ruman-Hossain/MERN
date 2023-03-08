# What is Redux?
- Redux is a state management tool
- Redux can be used with any Javascript Framework or library
- Redux Stores the state of the application, and the components can access the state from a state store.

## Why Redux?
- State Transfer between components is pretty messy in React
- Hard to keep track of which component the data is coming from.
- Redux solves the state transfer problem by storing all of the states in a single place called a store.
- Managing and Transferring states becomes easier as all the states are stored in the same convenient store.
- Every component in the application can then directly access the required state from that store.

## Principles of Redux
```Single Source of Truth```

- The state of your whole application is stored in an object tree within a single-store.
- A single state tree makes it easier to debug or inspect an application.
- It gives you a faster development cycle.

```State is Read-Only```
- The only way to change the state is to inititate an action, an object describing what happened.
This feature ensures that no events like network callbacks or views can change the state.

```Changes are Made with Pure Functions```

- To specify how actions transform the state tree, you need to write pure reducers.


## Pillars of Redux
```1. Store```
- A store is an object that holds the application's state tree. There should only be a single store in a Redux APP.
- ```getState()``` returns the current state of the store.
- ```dispatch()``` dispatches an action. It is the only way to update the application state.

```2. Actions```

- An Action is a plain object that represents an intention to change the state.
- Actions are payloads of information that send data from your application to your store.

```3. Reducers```
- Reducers are pure functions that specify how the application's state changes.


# What is [React-Redux](https://react-redux.js.org/introduction/getting-started)?
- Official React Bindings for Redux.
- Designed to work with React's component model.
- Automatically implements complex performance optimizations.
- React-Redux is maintained by Redux Team.

# [Create New React Redux App](https://react-redux.js.org/introduction/getting-started)```
## Using Create React App​
The recommended way to start new apps with React and Redux is by using the official Redux+JS template or Redux+TS template for Create React App, which takes advantage of Redux Toolkit and React Redux's integration with React components.
```shell
    # Redux + Plain JS templateclear
    npx create-react-app my-app --template redux

    # Redux + TypeScript template
    npx create-react-app my-app --template redux-typescript
```
## An Existing React App​
To use React Redux with your React app, install it as a dependency:
```shell
    # If you use npm:
    npm install react-redux

    # Or if you use Yarn:
    yarn add react-redux
```
You'll also need to install Redux and set up a Redux store in your app.

*React-Redux v8 is written in TypeScript, so all types are automatically included.*

## Installation Summary
```Manual``` [***Preferred***]
1. React APP
2. React-Redux
3. Redux
4. Store 

```Automatic```
```shell
    npx create-react-app my-app --template redux
```
