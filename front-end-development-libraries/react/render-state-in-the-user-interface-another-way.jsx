/*
Render State in the User Interface Another Way
*/
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {

    const name = this.state.name;
      return (
        <div>
          
          <h1>{name}</h1>

        </div>
      );
    }
  };
/*
In the MyComponent render method, define a const called name.

Set it equal to the name value in the component's state.

Render this value in an h1 tag using the variable name within the return statement.
*/