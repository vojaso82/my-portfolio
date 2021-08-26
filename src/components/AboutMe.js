import React from 'react';
import { Link } from 'react-router-dom';

function AboutMe() {
    return (
        <div className = "about-me">
            <div >
            <h1>About me</h1>
            <p>I'm a Full Stack Web Developer. </p>
            <p>I worked as a Front End Web Developer back in 2015, when I got 
            <br/> the chance to move in USA. I am Ironhack boot camp graduated.</p>
            <p>I enjoy spending time coding and designing Full Stack projects.</p>
            <p>Check out my work, my skills aned get in touch with me</p>
            </div>
            
            <div>
            <Link to="/projects"> <button>Projects</button></Link> 
            <Link to="/"> <button>Home</button></Link> 
            </div>
            
        </div>
    )
}

export default AboutMe
