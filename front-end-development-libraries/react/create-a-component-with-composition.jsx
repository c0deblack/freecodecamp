/*
Create a Component with Composition

Include the component name written as a custom HTML tag in the JSX

return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
)
*/
const ChildComponent = () => {
    return (
      <div>
            <p>I am the child</p>
      </div>
    );
  };
  
class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div>
            <h1>I am the parent</h1>
            <ChildComponent />
        </div>
        );
    }
};
/*
There is a simple functional component called ChildComponent and a class component called ParentComponent.

Compose the two together by rendering the ChildComponent within the ParentComponent.
*/