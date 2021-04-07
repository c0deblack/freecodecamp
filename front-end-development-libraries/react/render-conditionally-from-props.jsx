/*
Render Conditionally from Props

Use the value of a given prop to automatically make decisions about what to render.
*/
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return <h1>{this.props.fiftyFifty ? "You Win!" : "You Lose!"} </h1>;

  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState( state => ({
      
      counter: state.counter + 1

    }));
  }
  render() {
    
    const expression = Math.random() >= .5 ;
    
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>

        <Results fiftyFifty={expression}/>

        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}
/*
Create a simple expression that randomly returns a different value every time it is run.

For 50/50 odds, use Math.random() >= .5

Replace null with the above expression to complete the variable declaration.

Render the Results component as a child of GameOfChance.

Pass in expression as a prop called fiftyFifty. 

Write a ternary expression to render the h1 element with the text You Win! or You Lose! based on the fiftyFifty prop.

Finally, make sure the handleClick() method is correctly counting each turn.
*/