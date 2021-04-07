/*
Use && for a More Concise Conditional

Writing a lot of else if statements to return slightly different UIs leaves room for error.

Use the && logical operator to perform conditional logic.

{condition && <p>markup</p>}

You can include these statements directly in your JSX
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
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};
/*
Solve the previous example again,

so the h1 only renders if display is true,

but use the && logical operator instead of an if/else statement.
*/