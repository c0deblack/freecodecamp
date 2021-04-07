/*
Give Sibling Elements a Unique Key Attribute

Each element in an array needs a key attribute set to a unique value.

Note: Keys only need to be unique between sibling elements.

You want to make the key something that uniquely identifies the element being rendered.

Index may be used but typically you should try to use a unique identification.
*/
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map((val) => <li key={val}>{val}</li>);
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};
/*
Frameworks() needs to map the array to an unordered list, much like in the last challenge.

Finish writing the map callback to return an li element for each framework in the frontEndFrameworks array.

This time, make sure to give each li a key attribute, set to a unique value.

The li elements should also contain text from frontEndFrameworks.
*/