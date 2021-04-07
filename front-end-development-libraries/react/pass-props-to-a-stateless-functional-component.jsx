/*
Pass Props to a Stateless Functional Component

The previous challenges covered a lot about creating and composing JSX elements, functional components, and ES6 style class components in React. 

With this foundation, it's time to look at another feature very common in React: props. 

In React, you can pass props, or properties, to child components. 

<App>
  <Welcome user='Mark' />
</App>

You use custom HTML attributes.

Since Welcome is a stateless functional component, it has access to this value like so:

const Welcome = (props) => <h1>Hello, {props.user}!</h1>

With class components this is a little different.
*/
const CurrentDate = (props) => {
    return (
      <div>

        <p>The current date is: {props.date} </p>

      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>

          <CurrentDate date={Date()} />

        </div>
      );
    }
  };
/*
There are Calendar and CurrentDate components in the code editor. When rendering CurrentDate from the Calendar component, pass in a property of date assigned to the current date from JavaScript's Date object. Then access this prop in the CurrentDate component, showing its value within the p tags. Note that for prop values to be evaluated as JavaScript, they must be enclosed in curly brackets, for instance date={Date()}.
*/