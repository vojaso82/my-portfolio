import React from 'react';
import { Link } from 'react-router-dom'
import '../components/Home.css'
import { Spring } from 'react-spring/renderprops';
import { motion } from 'framer-motion';


function Home() {
    return (
    <Spring 
       from={{opacity:0,marginLeft: -500}}
       to={{opacity:1,marginLeft: 0}}>
        {props => ( 
      <div style={props} className="main-div">
      <div className="home">
          <h1 className="my-name">Hi there!</h1>
          <h1 className="my-name"> My name is Vojislav Zaja and I am a software developer based in Miami.</h1>
          <p className="description">Thank you for visiting my portfolio webpage, and I hope you find my work interesting and relevant.</p>
      </div>
      <div className="buttons-div">
        
      <motion.div className='motion-button1'
          whileHover={{
            scale:1.05,
            textShadow:"0px 0px 15px rgb(95,244,255)",
            boxShadow:"0px 0px 15px rgb(95,244,255)", 
        }}
          > 
            <Link to="/about">About</Link> 
      </motion.div>
      <motion.div className='motion-button2'
          whileHover={{
            scale:1.05,
            textShadow:"0px 0px 15px rgb(95,244,255)",
            boxShadow:"0px 0px 15px rgb(95,244,255)",
        }}
          >
            <Link to="/projects">Projects</Link> 
      </motion.div>
      </div>
      </div>  
        )}
    </Spring>
    )
}

export default Home;
