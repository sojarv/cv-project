import { Component } from 'react';
import './App.css';
import Name from './components/Name';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Experience from './components/Experience';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
    };
  }

  render() {
    return (
      <div className="App">
        <div id="personalInfo">
          <Name />
          <Contact />
        </div>
        <hr></hr>
        <About />
        <hr></hr>
        <Experience />
        <hr></hr>
        <Education />
        <hr></hr>
        <Skills />
      </div>
    );
  }
}

export default App;
