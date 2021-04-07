/*
Use Array.map() to Dynamically Render Elements

You may need your components to render an unknown number of elements.

Programmers need to write their code to correctly handle that unknown state ahead of time.

Using Array.map() in React illustrates this concept.
*/
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      toDoList: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {

    const items = this.state.toDoList.map((val, index) => <li key={index}>{val}</li>); 
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
/*
Inside the constructor create a this.state object and define two states:

  userInput should be initialized as an empty string

  toDoList should be initialized as an empty array

Map over the toDoList array stored in the component's internal state:

  dynamically render a li for each item

Note: You may know that all sibling child elements created by a mapping operation like this

do need to be supplied with a unique key attribute. Don't worry, this is the topic of the next challenge.
*/