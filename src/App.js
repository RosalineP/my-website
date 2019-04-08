// THIS ISN'T BEING USED

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// ==================================================================================
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
// ==================================================================================
library.add(faIgloo)

class App extends Component {
  render() {
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
}

class App1 extends Component{
  render(){
    return(
      <div>
        <div>
          <header>
            <h1> Rosaline P </h1>
            <p> Title/intro </p>
            <div> <FontAwesomeIcon icon="igloo" /> icon2 icon3 </div>
          </header>
        </div>

        <div className="About">
        <i class="far fa-user"></i>
          About
        </div>

        <div className="Portfolio">
          Portfolio
        </div>

        <div className="Skills">
          Skills
        </div>

        <div className="Contact">
          Contact
        </div>
      </div>
    )
  }
}

export default App;
