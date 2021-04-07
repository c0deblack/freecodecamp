/*
Use Array.filter() to Dynamically Filter an Array

Another method related to map is filter.
*/
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }
  render() {
    
    const usersOnline = this.state.users.filter((obj) => obj.online == true);
    //console.log(usersOnline);
    const renderOnline = usersOnline.map((obj) => <li key={obj.username}>{obj.username}</li>);

    //console.log(renderOnline);

    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}
/*
Filter the array so you see only the users who are online.

First use filter to return a new array containing only the users whose online property is true.

Map over the filtered array, and return a li element for each user that contains the text of their username.

Be sure to include a unique key as well.
*/