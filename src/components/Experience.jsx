import { Component } from 'react';
import { MdDone, MdRemove, MdAdd } from 'react-icons/md';

class Experience extends Component {
  constructor() {
    super();
    this.state = {
      experience: [
        ['Position1', '2010', '2015', 'Work from home'],
        ['Position2', '2015', '2020', 'Workplace'],
      ],
      position: '',
      year1: '',
      year2: '',
      company: '',
      whole: [],
      editing: false,
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.changeExperience = this.changeExperience.bind(this);
    this.removeExperience = this.removeExperience.bind(this);
  }

  handleEvent = (e) => {
    console.log(this.state.position);
    if (this.state.editing === true) {
      const abc = [
        this.state.position,
        this.state.year1,
        this.state.year2,
        this.state.company,
      ];
      this.setState((prevState) => ({
        experience: [...prevState.experience, abc],
        position: '',
        year1: '',
        year2: '',
        company: '',
      }));
      console.log(abc);
    }
    console.log(this.state.experience);

    this.setState({ editing: !this.state.editing });
  };

  changeExperience = (e) => {
    if (e.target.className === 'position') {
      this.setState({ position: e.target.value });
    } else if (e.target.className === 'year1') {
      this.setState({ year1: e.target.value });
    } else if (e.target.className === 'year2') {
      this.setState({ year2: e.target.value });
    } else this.setState({ company: e.target.value });
  };

  removeExperience = (e) => {
    var el;
    if (e.target.parentElement.tagName === 'LI') {
      el = e.target.parentElement;
    } else {
      el = e.target.parentElement.parentElement;
    }

    this.setState({
      experience: this.state.experience.filter((id) => id[0] !== el.id),
    });
  };

  render() {
    const exp = this.state.experience.map((job) => (
      <li key={job[0]} id={job[0]}>
        <p className="pSchool">{job[0]}</p>
        <p className="pYears">
          {job[1]} - {job[2]}
        </p>

        <p className="pWorkplace"> {job[3]}</p>

        <MdRemove className="remove" onClick={this.removeExperience} />
      </li>
    ));

    return (
      <div id="experience">
        <h3>Experience</h3>
        {!this.state.editing ? (
          <>
            <ol>
              {exp}

              <MdAdd className="add" onClick={this.handleEvent} />
            </ol>
          </>
        ) : (
          <>
            <ol>{exp}</ol>

            <input
              placeholder="Position"
              className="position"
              onChange={this.changeExperience}
              required
            ></input>
            <input
              placeholder="Starting year"
              className="year1"
              onChange={this.changeExperience}
            ></input>
            <input
              placeholder="Ending year"
              className="year2"
              onChange={this.changeExperience}
            ></input>
            <input
              placeholder="Company name"
              className="company"
              onChange={this.changeExperience}
            ></input>
            <MdDone className="done" onClick={this.handleEvent} />
          </>
        )}
      </div>
    );
  }
}

export default Experience;
