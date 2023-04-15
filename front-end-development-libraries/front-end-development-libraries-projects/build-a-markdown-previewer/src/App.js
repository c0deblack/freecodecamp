import logo from './logo.svg';
import './App.css';
import React from 'react';
import { marked } from 'marked'

const defaultEditorText = `
# FIRST HEADER

## Second Header

Link to: [Create React App](https://create-react-app.dev/)

Demonstrate \`inline code\` here.

Below is a code block:

\`\`\`
{
    // Enter Code Here
}
\`\`\`

1. Here is..
2. ...a markdown list

> Now it is time for a blockquote. Have any inspirational quotes to share?

![image alt text](${logo})

**That's all folks!**
`





/**
 * @brief ReactLogo Component
 */
const ReactLogo = () => {
  const styles = {
    height: "6em"
  }
  return (
    <img style={styles} src={logo} className="App-logo" alt="logo" />
  )
}





/**
 * @brief codeblack Logo Component
 */
const C0deblackLogo = () => {
  const styles = {
    padding: "1em",
    background: "black",
    color: "red",
    letterSpacing: "1em",
    fontSize: "2em"
  }

  return (
    <p style={styles}>
      <span>c0de</span>
      <span>black</span>
    </p>
  )
}




/**
 * @brief FreeCodeCamp Logo Component
 */
/*
const FCCLogo = props => {
  return (
    <img src={props.FCCLogo} alt="FreeCodeCamp Logo"/>
  )
}
*/






/**
 * @brief Header Component
 *
 * Contains the RectLogo and the c0deblack logo
 */
const Header = () => {
  const styles = {
                background: "gray",
                textAlign: "center",
                boxShadow: "0em .1em 1em .1em gray",
                paddingBottom: "1em"
  }
  return (
    <header style={styles} >
      <ReactLogo />
      <C0deblackLogo />
     {/*  <FCCLogo /> */}
    </header>
  )
}





/**
 * @brief Button Component for controlling the view
 */
class ClickButton extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }

  click() {
    alert(`
    You clicked a button! 
    To change the click event:
    Assign a callback function 
    to ClickButton Component
    onClick property.
    `)
  }



  render () {

    const button_styles = {
      fontSize: "1em",
      height: "5em",
      width: "10em"
    }


    return (
      <button
            type="button"
            id={this.props.id}
            style={button_styles}
            onClick={this.props.onClick || this.click}
      >
        {this.props.text || "Button"}
      </button>
    )
  }
}

const ViewEditorButton = (props) => {
  const {id, text, onClick} = props.state;

  return (
    <ClickButton id={id} text={text} onClick={onClick}/>
  )
}
const ViewSplitButton = (props) => {
  const {id, text, onClick} = props.state;

  return (
    <ClickButton id={id} text={text} onClick={onClick}/>
  )
}
const ViewPreviewButton = (props) => {
  const {id, text, onClick} = props.state;

  return (
    <ClickButton id={id} text={text} onClick={onClick}/>
  )
}


/**
 * @breif Component the holds the view buttons
 */
const ButtonBar = props => {
  
  const div_styles = {
    margin: "2em 0em",
    display: "flex",
    justifyContent: "space-around"
  }

  return (
    <div style={div_styles}>
      <ViewEditorButton state={props.state.ViewEditorButton}/>
      <ViewSplitButton state={props.state.ViewSplitButton}/>
      <ViewPreviewButton state={props.state.ViewPreviewButton}/>
    </div>
    )
}




/**
 * @brief Component that holds the editor
 *
 * Markup can eb entered directly into the textarea
 * and it the html is generated in the preview component.
 */
const Editor = (props) => {
  const {id, markdown: text}  = props.editor;
  const editor_styles = {
    width: "45%",
    border: "1px solid black",
    padding: "1%",
    resize: "none",
    height: "100%",
    background: "burlywood",
  }
  return (
      <textarea style={editor_styles } id={id} defaultValue={text} onChange={props.onchange} />
    )
}



/**
 * @brief Component that holds the preview
 */
const Preview = (props) => {
  let {id, html} = props.preview;

  const preview_styles = {
    width: "45%",
    border: "1px solid black",
    padding: "1%",
    resize: "none",
    height: "100%",
    overflow: "auto",
    background: "wheat",
  }


  return (
    <div 
      id={id}
      style={preview_styles}  
      dangerouslySetInnerHTML={({__html: html})}
    />
    )
}



/**
 * @brief The content window holds the editor and preview components
 */
const ContentWindow = (props) => {
  const {Editor: editor, Preview: preview} = props.state;

  const div_styles = {
    display: "flex",
    justifyContent: "space-around",
    width: "90%",
    margin: "auto",
//    marginBottom: "auto",
    padding: "3%",
    background: "gray",
    marginBottom: "4em",
    height: "500px"
  }

  return (
    <div style={div_styles}>
      <Editor  editor={editor}  onchange={props.onchange} />
      <Preview preview={preview} />
    </div>
  )
}



/**
 * @brief The main app component.
 *
 * Holds all of the other components as well as the state 
 * of the app.
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ButtonBar: {
        ViewEditorButton: {
          id: "view-editor-button",
          text: "View Editor",
          className: "menu-button",
          onClick: () => {
            document.getElementById("preview").style.display = "none"
            document.getElementById("editor").style.display = "block"
            document.getElementById("editor").style.width = "90%"
          }
        },
        ViewSplitButton: {
          id: "view-split-button",
          text: "View Split",
          className: "menu-button",
          onClick: () => {
            document.getElementById("preview").style.display = "block"
            document.getElementById("editor").style.display = "block"
            document.getElementById("editor").style.width = "45%"
            document.getElementById("preview").style.width = "45%"
          }
        },
        ViewPreviewButton: {
          id: "view-preview-button",
          text: "View Preview",
          className: "menu-button",
          onClick: () => {
            document.getElementById("editor").style.display = "none"
            document.getElementById("preview").style.display = "block"
            document.getElementById("preview").style.width = "90%"
          }
        },
      },
      ContentWindow: {
        Editor: {
          id: "editor",
          markdown: defaultEditorText
        },
        Preview: {
          id: "preview",
          html: marked(defaultEditorText),
          markdownToHTML: html => {
            return marked(html);
          }
        }
      }
    }

      this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e) {
      this.setState(() => ({
        ContentWindow: {
          Editor: {
            markdown: e.target.value
          },
          Preview: {
            html: marked(e.target.value)
          }
        }
      }))
    }

    componentDidMount() {
    }

    render() {
      
      return (
        <div>
          <Header />
          <ButtonBar state={this.state.ButtonBar}/>
          <ContentWindow state={this.state.ContentWindow} onchange={this.handleChange} />
        </div>
      );
    }
}


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
