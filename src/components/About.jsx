import { Component } from 'react';
import { MdEdit, MdDone } from 'react-icons/md';
import TextareaAutosize from 'react-autosize-textarea';
import '../About.css';

class About extends Component {
  constructor() {
    super();
    this.state = {
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      editing: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.changeAbout = this.changeAbout.bind(this);
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ editing: !this.state.editing });
  };

  changeAbout = (e) => {
    this.setState({ about: e.target.value });
  };

  render() {
    return (
      <div id="about">
        {this.state.editing ? (
          <>
            <TextareaAutosize
              defaultValue={this.state.about}
              placeholder="Write something about you"
              onChange={this.changeAbout}
              rows={5}
              className="textarea"
            />

            {/*<textarea
              value={this.state.about}
              placeholder="Something about you"
              onChange={this.changeAbout}
            ></textarea>
            */}
            <MdDone className="done" onClick={this.handleClick} />
          </>
        ) : (
          <>
            <p>{this.state.about}</p>
            <MdEdit className="edit" onClick={this.handleClick} />
          </>
        )}
      </div>
    );
  }
}

export default About;
