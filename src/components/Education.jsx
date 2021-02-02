import { Component } from 'react';
import { MdDone, MdRemove, MdAdd } from 'react-icons/md';

class Education extends Component {
  constructor() {
    super();
    this.state = {
      education: [
        ['High school', '2010', '2015', 'High School Graduate'],
        ['Undergraduate school', '2016', '2017', "Bachelor's degree in CS"],
      ],
      school: '',
      year1: '',
      year2: '',
      title: '',
      whole: [],
      editing: false,
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.changeEducation = this.changeEducation.bind(this);
    this.removeEducation = this.removeEducation.bind(this);
  }

  handleEvent = (e) => {
    console.log(this.state.school);
    if (this.state.editing === true) {
      const abc = [
        this.state.school,
        this.state.year1,
        this.state.year2,
        this.state.title,
      ];
      this.setState((prevState) => ({
        education: [...prevState.education, abc],
        school: '',
        year1: '',
        year2: '',
        title: '',
      }));
      console.log(abc);
    }
    console.log(this.state.education);

    this.setState({ editing: !this.state.editing });
  };

  changeEducation = (e) => {
    if (e.target.className === 'school') {
      this.setState({ school: e.target.value });
    } else if (e.target.className === 'year1') {
      this.setState({ year1: e.target.value });
    } else if (e.target.className === 'year2') {
      this.setState({ year2: e.target.value });
    } else this.setState({ title: e.target.value });
  };

  removeEducation = (e) => {
    var el;
    if (e.target.parentElement.tagName === 'LI') {
      el = e.target.parentElement;
    } else {
      el = e.target.parentElement.parentElement;
    }

    this.setState({
      education: this.state.education.filter((id) => id[0] !== el.id),
    });
  };

  render() {
    const edu = this.state.education.map((school) => (
      <li key={school[0]} id={school[0]}>
        <p className="pSchool">{school[0]}</p>
        <p className="pYears">
          {school[1]} - {school[2]}
        </p>

        <p className="pWorkplace">{school[3]}</p>

        <MdRemove className="remove" onClick={this.removeEducation} />
      </li>
    ));

    return (
      <div id="education">
        <h3>Education</h3>
        {!this.state.editing ? (
          <>
            <ol>
              {edu}

              <MdAdd className="add" onClick={this.handleEvent} />
            </ol>
          </>
        ) : (
          <>
            <ol>{edu}</ol>
            <input
              placeholder="School name"
              className="school"
              onChange={this.changeEducation}
              required
            ></input>
            <input
              placeholder="Starting year"
              className="year1"
              onChange={this.changeEducation}
            ></input>
            <input
              placeholder="Ending year"
              className="year2"
              onChange={this.changeEducation}
            ></input>
            <input
              placeholder="Title"
              className="title"
              onChange={this.changeEducation}
            ></input>
            <MdDone className="done" onClick={this.handleEvent} />
          </>
        )}
      </div>
    );
  }
}

export default Education;
