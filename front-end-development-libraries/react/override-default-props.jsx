/*
Override Default Props

Explicitly set the prop values for a component.

If quantity is an integer, it should be wrapped in curly braces.

  {100}
*/
const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  }
  
  Items.defaultProps = {
    quantity: 0
  }
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {

      return <Items quantity={10} />

    }
  };
/*
The ShoppingCart component now renders a child component Items.

This Items component has a default prop quantity set to the integer 0.

Override the default prop by passing in a value of 10 for quantity.
*/