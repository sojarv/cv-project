import { Component } from 'react';
import { MdEdit, MdDone } from 'react-icons/md';

class Name extends Component {
  constructor() {
    super();
    this.state = {
      name: 'First',
      surname: 'Last name',
      editing: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.saveName = this.saveName.bind(this);
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ editing: !this.state.editing });
  };

  saveName = (e) => {
    e.preventDefault();
    console.log(e.target.id === 'name');
    if (e.target.id === 'name') {
      this.setState({ name: e.target.value });
      console.log('name', this.state.name);
    } else this.setState({ surname: e.target.value });
  };

  render() {
    return (
      <div id="nameInput">
        {!this.state.editing ? (
          <>
            <input
              className="h2"
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.saveName}
            ></input>
            <input
              className="h2"
              id="surname"
              type="text"
              value={this.state.surname}
              onChange={this.saveName}
            ></input>

            <MdDone className="done" onClick={this.handleClick} />
          </>
        ) : (
          <>
            <h2>
              {this.state.name} {this.state.surname}
            </h2>
            <MdEdit className="edit " onClick={this.handleClick} />
          </>
        )}
      </div>
    );
  }
}

export default Name;
