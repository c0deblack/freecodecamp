/*
Map State to Props

The Provider component allows you to:

  provide state and dispatch to your React components

  specify exactly what state and actions you want

  make sure that each component only has access to the state it needs

Declare 

  two functions:

    mapStateToProps(state)

    mapDispatchToProps(dispatch)

  what pieces of state you want to have access to

  which action creators you need to be able to dispatch

Create a function mapStateToProps():

  take state as an argument.

  return an object which maps that state to specific property names

  these properties will become accessible to your component via props

You can pass that entire state to your component.

Note: Behind the scenes, React Redux uses the store.subscribe() method to implement mapStateToProps().
*/
const state = [];

const mapStateToProps = (state) => {
  return {
    messages: state
  }
}
/*
Create a property messages in the object that's being returned, and set it to state.
*/