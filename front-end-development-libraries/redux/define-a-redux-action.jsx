/*
Define a Redux Action

Redux is a state management framework.

  all state updates are triggered by dispatching actions

  receives action objects 

  updates state based on the action that occurred

Action objects

  a JavaScript object

  contains information about an action event that has occurred
  
  can also carry some data

  the data is optional
  
  must carry a type property 
  
    specifies the 'type' of action 

  delivers information about events to the Redux store
*/
const action = {type: 'LOGIN'};
/*
Declare an object action and give it a property type set to the string 'LOGIN'.
*/