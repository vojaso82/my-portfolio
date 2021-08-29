import React from 'react';
import { Link } from 'react-router-dom';
import '../components/AboutMe.css'
import { Spring } from 'react-spring/renderprops';
import { useTrail, animated } from 'react-spring';
import pdf from './VojislavZajaResume.pdf';


function AboutMe() {

    return (
        <Spring 
        from={{opacity:0, marginLeft:-500}}
        to={{opacity:1,marginLeft:0}}
        >
        {props => (
        <div style={props} className ="main-div-about-me">
         <div className="aboutme-div">
            <p>I'm a Full Stack Web Developer. </p>
            <p></p>
            <p>I enjoy spending time coding and designing projects.</p>
            <p>Check out my work, my skills and get in touch with me.</p>
           
            <div className="tools">
            <h3>Tools & Technologies</h3>
            <p>JavaScript (ES6)  |  React.js  |  Node.js  |  Express.js  | MongoDB</p>
            <p>REST API  |  Mongoose  |  JSON  |  CSS  |  HTML </p>
             </div> 
            <div className="get-in-touch">
             <h3>Connect with me</h3>
             <div className="links">
             <a href="https://www.linkedin.com/in/vojislav-zaja/" target="_blank">LinkedIn</a>
             <a href="https://github.com/vojaso82" target="_blank"> GitHub</a> 
             <a href={pdf}>Resume</a> 
             </div>
            </div>
         </div>  
         <div className="buttons-about-div">
            <Link to="/projects"> Projects</Link> 
            <Link to="/">Home</Link> 
        </div>
            
        </div>
        )} 
        </Spring>
    )
}

export default AboutMe
