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
  Add the input element in the form and set its value and onChange() attributes like the last challenge.
  
  Complete the handleSubmit method.
  
  Set the component state property submit to the current input value in the local state.
  
  Prevent the default form submit behavior by calling event.preventDefault() in the submit handler.

  Create an h1 tag after the form which renders the submit value from the component's state.
  */
