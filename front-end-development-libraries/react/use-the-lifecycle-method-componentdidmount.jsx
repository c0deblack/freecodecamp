/*
Use the Lifecycle Method componentDidMount

Place any calls to your server in the lifecycle method componentDidMount().

This method is called after a component is mounted to the DOM.

Any calls to setState() here will trigger a re-rendering,

This method, sets your state with the data that the API returns. 

Automatically triggers an update once you receive the data.
*/
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeUsers: null
      };
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          activeUsers: 1273
        });
      }, 2500);
    }
    render() {
      return (
        <div>

          <h1>Active Users: {this.state.activeUsers}</h1>

        </div>
      );
    }
  }
/*
In the render method, render the value of activeUsers in the h1 after the text Active Users:.
*/