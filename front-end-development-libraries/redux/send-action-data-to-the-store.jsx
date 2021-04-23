/*
Send Action Data to the Store

You can send specific data along with actions.
*/
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {

    case ADD_NOTE:
      return action.text
    default:
      return state;
      
  }
};

const addNoteText = (note) => {
  return {
    type: ADD_NOTE,
    text: note
  }
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
/*
There's a basic notesReducer() and an addNoteText() action creator defined in the code editor.

Finish the body of the addNoteText() function so that it returns an action object.

The object should include

  a type property with a value of ADD_NOTE

  a text property set to the note data that's passed into the action creator

When you call the action creator, you'll pass in specific note information that you can access for the object.

Finish writing the switch statement in the notesReducer().

  add a case that handles the addNoteText() actions

  should be triggered whenever there is an action of type ADD_NOTE

  should return the text property on the incoming action as the new state

The action is dispatched at the bottom of the code.

That's all it takes to send action-specific data to the store and use it when you update store state.
*/