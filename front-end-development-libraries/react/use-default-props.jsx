/*
 React assigns default props if props are undefined, but if you pass null as the value for a prop, it will remain null.
 */
 const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
    )
  };
  
  ShoppingCart.defaultProps = {items: 0};
  /*
  The code editor shows a ShoppingCart component. Define default props on this component which specify a prop items with a value of 0.
  */