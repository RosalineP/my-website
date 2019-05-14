import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import compy from './compy.gif';
import fud from './fud.png'
import daybyday from './daybyday.gif';


import { Link } from 'react-scroll'

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
            <span className="ImgPad">
              <div className="VerticalSpacer"></div> <br/><br/><br/><br/>
              <img className="compy" src={compy} alt="me!"/>
            </span>

            <span className="bodyText aboutText">
              <div className="VerticalSpacer2"></div>
              <div className="SectionHeader">
              (About)
              </div>
              Hello! My name is Rosaline Pyktel, and I’m a programmer based in Seattle. I’m a passionate and creative developer, and I want to help companies grow by using innovative technologies to create intuitive, reactive, and elegant user experiences.
              <br/><br/>
              While I love designing and building with front-end tools such as React and jQuery, I’m also comfortable with back-end tech such as NodeJS, MongoDB, and MySQL.
              <br/><br/>
              In my spare time, you’ll find me writing scifi short stories and enjoying Seattle’s gloomy weather.
            </span>
          </section>


          <div className="VerticalSpacer"></div>


          <div className="Portfolio  element" name="portfolio">
            <div className="VerticalSpacer2"></div>
            <div className="SectionHeader">
              (Portfolio)
            </div>
            <div className="VerticalSpacer2"></div>

            <span>

                <div className="About">
                  <a href="http://www.fudplan.com/">
                    <img className="ImgPad fudPic" src={fud} alt="fud"/>
                  </a>

                  <div className="bodyText portText">
                    <br/>
                    Fud is a demo project geared towards food inventory management! Keep track of expiration dates, minimize spoilage, and keep track of your grocery list. Feel free to use the page as a sandbox to add and eat foods!
                    <br/><br/>
                    Füd uses ReactJS to update the DOM, Node.js to serve data upon API calls, and MongoDB to store user data. The stack is hosted on Heroku, with Google providing the custom DNS-configured domain.
                    <br/><br/>
                    This project is actively being built! Check it out at <a href="http://www.fudplan.com/" style={{ color: '#FFBCBF' }}>fudplan.com</a>.
                  </div>
                </div>

                <br/><br/><br/><br/><br/>

                <div className="About">
                  <div>
                    <img className="ImgPad" src={daybyday} alt="DayByDay"/>
                  </div>

                  <div className="bodyText portText">
                    <br/>
                    DayByDay is a productivity webapp that handles task management, calendar event scheduling, and time tracking, with an emphasis on distributing personal workloads evenly over time.
                    <br/><br/>
                    DayByDay is built with jQuery and Bootstrap, with a Flask backend for handling API requests, and a SQL database to store user data.
                    <br/><br/>
                    Migration from private server in progress!
                  </div>
                </div>



            </span>

          </div>

        <div className="VerticalSpacer"></div>




        <div className="Skills  element" name="skills">
          <div className="VerticalSpacer2"></div>
          <div className="SectionHeader">
            (Skills)
          </div>

        <table className="bodyText SkillsTable" id="SkillsTable">
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

          <div className="bodyText">

            <table className="ContactTable">
              <tbody>
              <tr className = "PinkOut">
                <td>
                  <a href="mailto:rpyktel@gmail.com" className="contactLinks" >
                    <FontAwesomeIcon className="icon" icon={['fas', 'envelope']} size="3x"/>
                  </a>
                </td>
                <td>
                  <a href="mailto:rpyktel@gmail.com" className="contactLinks underline">
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
                  <a href="https://www.linkedin.com/in/rosaline-pyktel/" className="contactLinks underline">
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
                  <a href="https://github.com/RosalineP" className="contactLinks underline">
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

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
