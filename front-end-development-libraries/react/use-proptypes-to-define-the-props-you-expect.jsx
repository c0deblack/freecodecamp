/*
Use PropTypes to Define the Props You Expect

MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }

Doing this will check that props of a given key are present with a given type.

In the example above, the PropTypes.func part checks that handleClick is a function. 

Adding isRequired tells React that handleClick is a required property for that component.

You will see a warning if that prop isn't provided.

Note: As of React v15.5.0, PropTypes is imported independently from React, like this: import PropTypes from 'prop-types';
*/
const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  };
  

  Items.propTypes = { quantity: PropTypes.number.isRequired }

  
  Items.defaultProps = {
    quantity: 0
  };
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items />
    }
  };
/*
Define propTypes for the Items component to require quantity as a prop and verify that it is of type number.
*/