/*
Render with an If-Else Condition

Tie the elements that are rendered to a condition.

When the condition is true, one view renders.

When it's false, it's a different view.
*/
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    if (this.state.display) {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
     );
    } else {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
     );    }
  }
};
/*
Rewrite the render() method with an if/else statement.

If display is true, you return the current markup.

Otherwise, return the markup without the h1 element.
*/