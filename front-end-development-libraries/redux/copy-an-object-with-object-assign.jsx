/*
Copy an Object with Object.assign

Object.assign() takes a target object and source objects.

  maps properties from the source objects to the target object

  overwrites properties that exist with props in the source objects

Commonly used to make shallow copies of objects.

Pass an empty object as the first argument followed by the object(s) you want to copy.

  Here's an example:

  const newObject = Object.assign({}, obj1, obj2);

This creates newObject as a new object. 

It contains the properties that currently exist in obj1 and obj2.
*/
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // Don't mutate state here or the tests will fail
      const newObj = Object.assign({}, state)
      newObj.status = 'online'
      return newObj;
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
/*
Edit the code to return a new state object for actions with type ONLINE.

The new object sets the status property to the string online.

Try to use Object.assign() to complete the challenge.
*/