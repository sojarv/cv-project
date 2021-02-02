import { Component } from 'react';
import { MdDone, MdEdit } from 'react-icons/md';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      email: 'example@page.com',
      website: 'Address of your page',
      address: 'My home road 1, 10000 Home',
    };

    this.handleEvent = this.handleEvent.bind(this);
    this.changeContact = this.changeContact.bind(this);
  }

  handleEvent = (e) => {
    e.preventDefault();
    this.setState({ editing: !this.state.editing });
  };

  changeContact = (e) => {
    if (e.target.id === 'email') {
      this.setState({ email: e.target.value });
    } else if (e.target.id === 'website') {
      this.setState({ website: e.target.value });
    } else this.setState({ address: e.target.value });
  };
  render() {
    return (
      <div id="contact">
        {this.state.editing ? (
          <>
            <input
              id="email"
              value={this.state.email}
              placeholder="E-mail"
              onChange={this.changeContact}
            />{' '}
            <MdDone className="done" onClick={this.handleEvent} />
            <br></br>
            <input
              id="website"
              value={this.state.website}
              placeholder="Website"
              onChange={this.changeContact}
            />{' '}
            <br></br>
            <input
              id="address"
              placeholder="Address"
              value={this.state.address}
              onChange={this.changeContact}
            />
          </>
        ) : (
          <>
            <p>
              {this.state.email}
              <MdEdit className="edit" onClick={this.handleEvent} />
            </p>
            <p>{this.state.website}</p>
            <p>{this.state.address}</p>
          </>
        )}
      </div>
    );
  }
}

export default Contact;
