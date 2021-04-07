/*
Add Inline Styles in React

React uses camel case.

Any hyphenated style properties are written using camel case in JSX.

Value length units (like height, width, and fontSize) are assumed to be in px.

You wrap the value and the units in quotes, like {fontSize: "4em"}.

You can assign a style object to a constant to keep your code organized.
*/
const styles = {
  color: "purple",
  fontSize: 40,
  border: "2px solid purple",
}

// Change code above this line
class Colorful extends React.Component {
  render() {

    return (
      <div style={styles}>Style Me!</div>
    );

  }
};
/*
Initialize a styles constant and assign an object with three style properties and their values to it.

Give the div a color of purple, a font-size of 40, and a border of 2px solid purple.

Then set the style attribute equal to the styles constant.
*/