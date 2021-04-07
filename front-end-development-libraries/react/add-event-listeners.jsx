/*
Add Event Listeners

The componentDidMount() method is also the best place to attach any event listeners.

If you want to attach an event handler to the document or window objects, you have to do this directly.

It's good practice to use this lifecycle method to do any clean up on React components.

Removing event listeners is an example of one such clean up action.
*/
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: ''
      };
      this.handleEnter = this.handleEnter.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    // Change code below this line
    componentDidMount() {
        /*
          document.addEventListener('keydown', logKey);

          function logKey(e) {
            log.textContent += ` ${e.code}`;
          }
        */
      document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
      /*
        target.removeEventListener(type, listener[, options]);
      */
      document.removeEventListener('keydown', this.handleKeyPress);
    }
    // Change code above this line
    handleEnter() {
      this.setState((state) => ({
        message: state.message + 'You pressed the enter key! '
      }));
    }
    handleKeyPress(event) {
      if (event.keyCode === 13) {
        this.handleEnter();
      }
    }
    render() {
      return (
        <div>
          <h1>{this.state.message}</h1>
        </div>
      );
    }
  };
/*
Attach an event listener in the componentDidMount() method for keydown events.

Have these events trigger the callback handleKeyPress(). 

Then, in componentWillUnmount(), remove this same event listener.
*/