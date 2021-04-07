/*
Create a Controlled Form
*/
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      submit: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  handleSubmit(event) {
    this.setState((state) => ({
      submit: state.input,
    }));

    const newLocal = event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.input} />

          <button type="submit">Submit!</button>
        </form>

        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}
/*
  We've added a button which submits the form. You can see it has the type set to submit indicating it is the button controlling the form. Add the input element in the form and set its value and onChange() attributes like the last challenge. You should then complete the handleSubmit method so that it sets the component state property submit to the current input value in the local state.
  
  Note: You also must call event.preventDefault() in the submit handler, to prevent the default form submit behavior which will refresh the web page.
  
  Finally, create an h1 tag after the form which renders the submit value from the component's state. You can then type in the form and click the button (or press enter), and you should see your input rendered to the page.
  */
