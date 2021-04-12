/*
Create a Stateless Functional Component

Everything in React is a component.

There are two ways to create a React component. 

The first way is to use a JavaScript function.

Defining a component in this way creates a stateless functional component. 

    Think of a stateless component as one that can receive data and render it, but does not manage or track changes to that data.

    Write a JavaScript function that returns either JSX or null.

    React requires your function name to begin with a capital letter.

    const DemoComponent = function() {
    return (
        <div className='customClass' />
    );
    };

The <div> will have a CSS class of customClass.

You could put several components together to create a more complex HTML page.
*/
const MyComponent = function() {
    return (<div>String of Text</div>);
  }

/*
The code editor has a function called MyComponent.

Complete this function so it returns a single div element which contains some string of text.

Note: The text is considered a child of the div element, so you will not be able to use a self-closing tag.
*/