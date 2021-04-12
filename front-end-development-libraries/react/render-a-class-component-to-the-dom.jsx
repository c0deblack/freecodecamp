/*
Render a Class Component to the DOM

None of the React code you write will render to the DOM without making a call to the ReactDOM API.

ReactDOM.render(componentToRender, targetNode)

    The first argument is the React component that you want to render

    The second argument is the DOM node that you want to render that component within

React components are passed into ReactDOM.render() differently than JSX elements. 

ReactDOM.render(<ComponentToRender />, targetNode)
*/
class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          <Fruits />
          <Vegetables />
        </div>
      );
    }
  };

  ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));
  
  // Change code below this line
/*
Both the Fruits and Vegetables components are defined for you behind the scenes.

Render both components as children of the TypesOfFood component.

Render TypesOfFood to the DOM.

There is a div with id='challenge-node' available for you to use.
*/