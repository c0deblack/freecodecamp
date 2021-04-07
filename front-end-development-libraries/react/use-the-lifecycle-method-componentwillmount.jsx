/*
Use the Lifecycle Method componentWillMountPassed

componentWillMount() 

Others
  componentDidMount() shouldComponentUpdate() 
  componentDidUpdate() componentWillUnmount()

Called before the render() method when a component is being mounted to the DOM. 
*/
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {

    console.log("Something")

  }
  render() {
    return <div />
  }
};
/*
The componentWillMount() method is called before the render() method 
when a component is being mounted to the DOM. Log something to the 
console within componentWillMount() - you may want to have your 
browser console open to see the output.
*/