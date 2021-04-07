/*
Render React on the Server with renderToString

React provides a renderToString() method you can use.

There are two key reasons why rendering on the server may be used

  The initial page contains markup which can be crawled by search engines.

  The rendered HTML is smaller than the JavaScript code of the entire app.
*/
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};
ReactDOMServer.renderToString(<App />);
/*
The renderToString() method is provided on ReactDOMServer.

The method takes one argument which is a React element.

Use this to render App to a string.
*/