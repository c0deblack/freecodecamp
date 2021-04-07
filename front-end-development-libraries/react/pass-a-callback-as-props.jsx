/*
Pass a Callback as Props
*/
class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: ''
      }
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({
        inputValue: event.target.value
      });
    }
    render() {
      return (
         <div>
          
          <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>

          <RenderInput input={this.state.inputValue}/>

         </div>
      );
    }
  };
  
  class GetInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Get Input:</h3>
          <input
            value={this.props.input}
            onChange={this.props.handleChange}/>
        </div>
      );
    }
  };
  
  class RenderInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Input Render:</h3>
          <p>{this.props.input}</p>
        </div>
      );
    }
  };
/*
Add the GetInput component to the render method in MyApp,

    then pass it a prop called input assigned to inputValue from MyApp's state.
    
Also create a prop called handleChange

    pass the input handler handleChange to it.

Next, add RenderInput to the render method in MyApp,

    then create a prop called input and pass the inputValue from state to it.
*/