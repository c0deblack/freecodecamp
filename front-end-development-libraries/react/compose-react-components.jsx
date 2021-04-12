/*
Compose React Components

You can render JSX elements, stateless functional components, and ES6 class components within other components.
*/
class Fruits extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Fruits:</h2>

          <NonCitrus />
          <Citrus />

        </div>
      );
    }
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
       super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>

          <Fruits />

          <Vegetables />
        </div>
      );
    }
  };
/*
Nest two components inside of Fruits — first NonCitrus, and then Citrus.

Nest the Fruits class component into the TypesOfFood component below the h1 header and above Vegetables.
*/