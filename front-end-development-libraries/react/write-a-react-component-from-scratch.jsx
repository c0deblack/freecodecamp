/*
Write a React Component from Scratch

A typical React component is an ES6 class which extends React.Component.

It has a render method that returns HTML (from JSX) or null

This is the basic form of a React component

class FirstComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // The JSX code you put here is what your component will render
    );
  }
};
*/

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>
                    My First React Component!
                </h1>
            </div>
        )
    };
};

ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"));
/*
Define a class MyComponent that extends React.Component.

Its render method should return a div that contains an h1 tag with the text:

  My First React Component!
  
Make sure to call the constructor for your component, too.

Render this component to the DOM using ReactDOM.render().

There is a div with id='challenge-node' available for you to use.
*/