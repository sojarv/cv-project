import { Component } from 'react';
import { MdAdd, MdDone, MdRemove } from 'react-icons/md';

class Skills extends Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      skills: ['CSS', 'JS', 'HTML', 'React'],
      skill: '',
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
    this.addSkill = this.addSkill.bind(this);
  }

  removeSkill = (e) => {
    e.preventDefault();
    var el;
    if (e.target.parentElement.tagName === 'LI') {
      el = e.target.parentElement;
    } else el = e.target.parentElement.parentElement;

    this.setState({
      skills: this.state.skills.filter((skill) => skill !== el.id),
    });
  };

  handleEvent = (e) => {
    e.preventDefault();
    if (this.state.editing === true) {
      this.setState((prevState) => ({
        skills: [...prevState.skills, this.state.skill],
        skill: '',
      }));
    }
    this.setState({ editing: !this.state.editing });
  };

  addSkill = (e) => {
    this.setState({ skill: e.target.value });
  };

  render() {
    const allSkills = this.state.skills.map((skill) => (
      <li key={skill} id={skill}>
        {skill} <MdRemove className="remove" onClick={this.removeSkill} />
      </li>
    ));

    return (
      <div id="skills">
        <h3>Skills</h3>
        {this.state.editing ? (
          <>
            <ul>{allSkills}</ul>

            <input
              id="skill"
              placeholder="Add a new skill"
              onChange={this.addSkill}
            />
            <MdDone className="done" onClick={this.handleEvent} />
          </>
        ) : (
          <>
            <ul>
              {allSkills}

              <MdAdd className="add" onClick={this.handleEvent} />
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default Skills;
