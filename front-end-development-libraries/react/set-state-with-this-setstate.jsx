/*
Set State with this.setState

React provides a method for updating component state called setState.

    this.setState()
    
    passing in an object with key-value pairs.

        this.setState({
        username: 'Lewis'
        });

React expects you to never modify state directly.

Updates through the setState method can be asynchronous.

There is an alternative syntax for the setState method which provides a way around this problem.
*/
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Initial State'
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      
        this.setState({
            name: 'React Rocks!'
        });

    }
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };
/*
Within the handleClick method, update the component state using this.setState().

Set the name property in state to equal the string React Rocks!.
*/