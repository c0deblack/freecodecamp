/*
Remove an Item from an Array

The spread operator can be used here as well.

Other useful JavaScript methods include slice() and concat().
*/
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':

      return [...state].filter((val, index) => {
        return index != action.index
      })
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
/*
The reducer and action creator were modified to remove an item from an array based on the index of the item.

Finish writing the reducer so a new state array is returned with the item at the specific index removed.
*/