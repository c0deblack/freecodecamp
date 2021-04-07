/*
Pass State as Props to Child Components

A common pattern:

    have a stateful component containing the state important to your app

    that then renders child components

    rest of your components simply receive state from the parent as props, and render a UI from that state.



Important paradigms in React:


    The first is unidirectional data flow.

    The child components only receive the state data they need.

    Complex stateful apps can be broken down into just a few, or maybe a single, stateful component.
*/
class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'CamperBot'
      }
    }
    render() {
      return (
         <div>

           <Navbar name={this.state.name}/>

         </div>
      );
    }
  };
  
  class Navbar extends React.Component {
    constructor(props) {
      super(props);      
    }
    render() {
      return (
      <div>

        <h1>Hello, my name is: {this.props.name}</h1>

      </div>
      );
    }
  };
/*
The MyApp component is stateful and renders a Navbar component as a child. Pass the name property in its state down to the child component, then show the name in the h1 tag that's part of the Navbar render method. name should appear after the text Hello, my name is:.
*/