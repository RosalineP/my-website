import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import logo from './logo.svg';
import face from './myFace.png';
import compy from './compy3.gif';


import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import scrollToComponent from 'react-scroll-to-component';
// ==================================================================================
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,
         faUser,
         faKeyboard,
         faFileCode,
         faCircle as farCircle
         } from '@fortawesome/free-regular-svg-icons'

import {faCircle as fasCircle, faEnvelope as fasEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(
         faEnvelope,
         faUser,
         faKeyboard,
         faFileCode,
         fasCircle,
         farCircle,
         faGithubSquare,
         faLinkedin,
         fasEnvelope
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


        <div className="NavBar" id="NavBar">
          <Link activeClass="active" className="about navOption HorizontalSpacer" to="about" spy={true} smooth={true} duration={500} >About</Link>
          <Link activeClass="active" className="portfolio navOption HorizontalSpacer" to="portfolio" spy={true} smooth={true} duration={500} >Portfolio</Link>
          <Link activeClass="active" className="skills navOption HorizontalSpacer" to="skills" spy={true} smooth={true} duration={500} >Skills</Link>
          <Link activeClass="active" className="contact navOption HorizontalSpacer" to="contact" spy={true} smooth={true} duration={500} >Contact</Link>
        </div>
        <div className="NavBarColorSeperator" ></div>


        <br/><br/><br/>


          <section className="About element" name="about">
            <div className="VerticalSpacer"></div>
            <span className="aboutImg">
              <div className="VerticalSpacer2"></div>
              <img src={compy} alt="me!"/>
            </span>

            <span className="aboutText">
              <div className="VerticalSpacer2"></div>
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
            <div className="VerticalSpacer2"></div>
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

        <table className="aboutText SkillsTable" id="SkillsTable">
        <tbody>
          <tr>
            <td> CSS </td>
            <td> JavaScript </td>
            <td> Node.js </td>
            <td> Python </td>
          </tr>

          <tr>
            <td> HTML </td>
            <td> React </td>
            <td> Express </td>
            <td> Java </td>
          </tr>

          <tr>
            <td> BootStrap </td>
            <td> jQuery </td>
            <td> MongoDB </td>
            <td> Github </td>
          </tr>

          <tr>
            <td>  </td>
            <td> Flask </td>
            <td> MySQL </td>
            <td> Selenium </td>
          </tr>

        </tbody>
        </table>

        </div>

        <div className="VerticalSpacer"></div>


        <div className="Contact  element" name="contact">
          <div className="SectionHeader">
            (Contact)
          </div>

          <div className="aboutText ContactTable">
            <table>
              <tbody>
              <tr>
                <td>
                  <a href="mailto:rpyktel@gmail.com" className="contactLinks" >
                    <FontAwesomeIcon className="icon" icon={['fas', 'envelope']} size="3x"/>
                  </a>
                </td>
                <td>
                  <a href="mailto:rpyktel@gmail.com" className="contactLinks">
                    rpyktel@gmail.com
                  </a>

                </td>
              </tr>

              <tr>
                <td>
                  <a href="https://www.linkedin.com/in/rosaline-pyktel/" className="contactLinks">
                    <FontAwesomeIcon className="icon" icon={['fab', 'linkedin']} size="3x"/>
                  </a>
                </td>
                <td>
                  <a href="https://www.linkedin.com/in/rosaline-pyktel/" className="contactLinks">
                    linkedin.com/in/rosaline-pyktel
                  </a>
                </td>
              </tr>

              <tr>
                <td>
                  <a href="https://github.com/RosalineP" className="contactLinks">
                    <FontAwesomeIcon className="icon" icon={['fab', 'github-square']} size="3x"/>
                  </a>
                </td>
                <td>
                  <a href="https://github.com/RosalineP" className="contactLinks">
                    github.com/RosalineP
                  </a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="VerticalSpacer"></div>
        <div className="VerticalSpacer"></div>

        <div className="NavBarColorSeperator"></div>
        <footer>
        </footer>


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
