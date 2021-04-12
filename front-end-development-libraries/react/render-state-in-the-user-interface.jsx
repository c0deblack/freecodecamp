/*
Render State in the User Interface

It allows you to track important data in your app and render a UI in response to changes in this data.

If your data changes, your UI will change.
*/
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      return (
        <div>
          
          <h1>{this.state.name}</h1>

        </div>
      )
    }
  }
/*
Define an h1 tag in the component's render method which renders the value of name from the component's state.
*/