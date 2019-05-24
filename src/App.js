import React, { Component } from 'react';
import Navbar from './components/Navbar';
import BgMusic from './components/BgMusic';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

class App extends Component {
  render() {
    return (
      <div id="pageTop">
        <Navbar />
        <About />
        <hr class="m-0" />
        <Experience />
        <hr class="m-0" />
        <Education />
        <hr class="m-0" />
        <Skills/>
      </div>
    );
  }
}

export default App;
