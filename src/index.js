import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import logo from './logo.svg';
import face from './myFace.png';


import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import scrollToComponent from 'react-scroll-to-component';
// ==================================================================================
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,
         faUser,
         faKeyboard,
         faFileCode,
         faFolderOpen,
         faCircle as farCircle
         } from '@fortawesome/free-regular-svg-icons'

import {faCircle as fasCircle} from '@fortawesome/free-solid-svg-icons'

library.add(
         faEnvelope,
         faUser,
         faKeyboard,
         faFileCode,
         faFolderOpen,
         fasCircle,
         farCircle
)
// ==================================================================================
class App extends Component{


  render(){
    return(
      <div>
        <div>
          <header>
            <h1> Rosaline P. </h1>
            <p> Jr. Web Developer </p>
            <br/><br/>

          <div>
            <div className="NavIcon">
              <Link activeClass="active" className="about" to="about" spy={true} smooth={true} duration={500} >
                <FontAwesomeIcon className="icon" icon={['far', 'user']} size="3x"/>
              </Link>
              <center className="IconText" >
                about
              </center>
            </div>

            <div className="NavIcon">
            <Link activeClass="active" className="portfolio" to="portfolio" spy={true} smooth={true} duration={500} >
              <FontAwesomeIcon className="icon" icon={['far', 'file-code']} size="3x" />
            </Link>
              <center className="IconText" >
                portfolio
              </center>
            </div>

            <div className="NavIcon">
              <Link activeClass="active" className="skills" to="skills" spy={true} smooth={true} duration={500} >
                <FontAwesomeIcon className="icon" icon={['far', 'keyboard']} size="3x" />
              </Link>
              <center className="IconText" >
                skills
              </center>
            </div>

            <div className="NavIcon">
            <Link activeClass="active" className="contact" to="contact" spy={true} smooth={true} duration={500} >
              <FontAwesomeIcon className="icon" icon={['far', 'envelope']} size="3x" />
            </Link>
              <center className="IconText" >
                contact
              </center>
            </div>
          </div>



          </header>

        </div>

        <div className="NavBar">

        <Link activeClass="active" className="about navOption HorizontalSpacer" to="about" spy={true} smooth={true} duration={500} >About</Link>
        <Link activeClass="active" className="portfolio navOption HorizontalSpacer" to="portfolio" spy={true} smooth={true} duration={500} >Portfolio</Link>
        <Link activeClass="active" className="skills navOption HorizontalSpacer" to="skills" spy={true} smooth={true} duration={500} >Skills</Link>
        <Link activeClass="active" className="contact navOption HorizontalSpacer" to="contact" spy={true} smooth={true} duration={500} >Contact</Link>




        </div>
        <div className="NavBarColorSeperator" ></div>

        <br/><br/><br/>


          <section className="About element" name="about">
            <span className="aboutImg">
              <div className="VerticalSpacer"></div>
              <img src={face} alt="me!"/>
            </span>

            <span className="aboutText">
              <div className="SectionHeader">
              (About)
              </div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              <br/><br/>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </span>
          </section>


          <div className="VerticalSpacer"></div>


          <div className="Portfolio  element" name="portfolio">
            <div className="SectionHeader">
              (Portfolio)
            </div>

            <span className="PortfolioGifs">
                Gif1
                Gif2
                Gif3
            </span>
          </div>

        <div className="VerticalSpacer"></div>






        <div className="Skills  element" name="skills">
          <div className="SectionHeader">
            (Skills)
          </div>

        </div>



        <div className="Contact  element" name="contact">
          <div className="SectionHeader">
            (Contact)
          </div>

        </div>



      </div>
    )
  }
}
class App1 extends Component {
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

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
