/*
React is a great tool to render the User Interface (UI) of modern web applications.

React uses a syntax extension of JavaScript called JSX that allows you to write HTML directly within JavaScript. There are a few key differences that will be covered throughout these challenges.

You can actually write JavaScript directly within JSX. 

Include the code you want to be treated as JavaScript within curly braces: { 'this is treated as JavaScript code' }.

JSX code must be compiled into JavaScript. 

The transpiler Babel is a popular tool for this process. 

Under the hood the challenges are calling ReactDOM.render(JSX, document.getElementById('root')). 

This function call is what places your JSX into React's own lightweight representation of the DOM.

React then uses snapshots of its own DOM to optimize updating only specific parts of the actual DOM.
*/
const JSX = <h1>Hello JSX!</h1>;