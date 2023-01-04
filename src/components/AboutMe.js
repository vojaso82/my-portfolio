import React from 'react';
import { Link } from 'react-router-dom';
import '../components/AboutMe.css'
import { Spring } from 'react-spring/renderprops';
import pdf from './VojislavZajaResume.pdf';
import { motion } from 'framer-motion';

function AboutMe() {

    return (
        <Spring
        from={{opacity:0, marginLeft:-500}}
        to={{opacity:1,marginLeft:0}}
        >
        {props => (
        <div style={props} className ="main-div-about-me">
         <div className="aboutme-div">
            <p>Hello and welcome to my portfolio!</p>
            <p>I am a highly motivated and skilled software developer with a passion</p>  
            <p>for creating intuitive and high-performing applications.</p>
            <p>I am excited to continue growing as a software developer and I am open to new</p> 
            <p>opportunities where I can utilize my skills and contribute to the success of a project.</p> 
            <p>Thank you for visiting my portfolio and I hope you find my work and experience to be of interest.</p>
            <div className="tools">
            <h3>Tools & Technologies</h3>
            <p>JavaScript  |  TypeScript  |  React.js  |  Node.js  | GraphQL  |  AWS  |  Axios  |   JEST  </p>
            <p>Material UI | Express.js  |  MongoDB |  REST API  |  Mongoose  | Jira | Agile | CSS  |  HTML </p>
             </div> 
            <div className="get-in-touch">
             <h3>Connect with me</h3>
             <div className="links">
             <a href="https://www.linkedin.com/in/vojislav-zaja/" target="_blank" rel="noreferrer">LinkedIn</a>
             <a href="https://github.com/vojaso82" target="_blank" rel="noreferrer"> GitHub</a> 
             <a href={pdf} target="_blank" rel="noreferrer">Resume</a> 
             </div>
            </div>
         </div>  
         <div className="buttons-about-div">
             <motion.div className="button1"
             whileHover={{
                 scale:1.05,
                 textShadow:"0px 0px 15px rgb(95,244,255)",
                 boxShadow:"0px 0px 15px rgb(95,244,255)", 
             }}
             >
            <Link to="/projects"> Projects</Link> 
             </motion.div>
             <motion.div className="button2"
              whileHover={{
                scale:1.05,
                textShadow:"0px 0px 15px rgb(95,244,255)",
                boxShadow:"0px 0px 15px rgb(95,244,255)", 
            }}
             >

            <Link to="/">Home</Link> 
             </motion.div>
        </div>
            
        </div>
        )} 
        </Spring>
    )
}

export default AboutMe
