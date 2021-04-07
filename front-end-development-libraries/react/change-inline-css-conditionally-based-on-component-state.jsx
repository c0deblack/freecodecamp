/*
Change Inline CSS Conditionally Based on Component State

You can render CSS conditionally based on the state of a React component.

There is a clear flow of information that only moves in one direction.

This is the preferred method when writing applications with React.
*/
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };

    {this.state.input.length > 15 && (inputStyle.border = "3px solid red")}

    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};
/*
Style the border red if the user types more than 15 characters of text in the input box.

Add a condition to check for this and, if the condition is valid, set the input border style to 3px solid red.
*/