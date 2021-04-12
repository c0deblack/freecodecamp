/*
Review Using Props with Stateless Functional Components

A stateless functional component is any function you write which accepts props and returns JSX.

A stateless component is a class that extends React.Component, but does not use internal state.

A stateful component is a class component that does maintain its own internal state.

You may see stateful components referred to simply as components or React components.

A common pattern is to try to minimize statefulness.
  
  create stateless functional components wherever possible

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

 const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
    )
  };
  
  ShoppingCart.defaultProps = {items: 0};
*/
class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper/>
        </div>
      );
    }
  };

class Camper extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Camper Component Header</h1>
                <p>{this.props.name}</p>
            </div>
        )
    }
}
Camper.defaultProps = {name: 'CamperBot'}
Camper.propTypes = {name: PropTypes.string.isRequired}
/*
The code editor has a CampSite component that renders a Camper component as a child.

Define the Camper component and assign it default props of { name: 'CamperBot' }.

Inside the Camper component, render any code that you want.

Make sure to have one p element that includes only the name value that is passed in as a prop.

Define propTypes on the Camper component to require name to be provided as a prop.

Verify that it is of type string.
*/