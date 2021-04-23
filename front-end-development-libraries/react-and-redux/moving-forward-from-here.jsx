/*
Moving Forward From Here

Finally, writing React and Redux code generally requires some configuration.

This can get complicated quickly.

To experiment

  the node package 'Create React App' comes configured and ready to go.

  CodePen

    enable Babel as a JavaScript Preprocessor

    add React and ReactDOM as external JavaScript resources

React-Redux using imports

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers'
import App from './components/App'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
*/

console.log('Now I know React and Redux!');
/*
Log the message 'Now I know React and Redux!' to the console.
*/