import React from 'react';
import { Link } from 'react-router-dom';
import '../components/AboutMe.css'

function AboutMe() {
    return (
     
        <div className ="main-div-about-me">
         <div className="aboutme-div">
            <h1>About me</h1>
            <p>I'm a Full Stack Web Developer. </p>
            <p>I worked as a Front End Web Developer back in 2015, when I got 
            the chance to move in USA. I am Ironhack boot camp graduated.</p>
            <p>I enjoy spending time coding and designing Full Stack projects.</p>
            <p>Check out my work, my skills aned get in touch with me</p>
            <div className="tools">
            <h3>Tools & Technologies</h3>
            <p>JavaScript(ES6) | React.js | Node.js | Express.js | MongoDB</p>
            <p>REST API | Mongoose | JSON | CSS | HTML </p>
            </div>
         </div>   
         <div className="buttons-about-div">
            <Link to="/projects"> Projects</Link> 
            <Link to="/">Home</Link> 
        </div>
            
        </div>
    
    )
}

export default AboutMe
