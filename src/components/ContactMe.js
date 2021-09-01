import React from 'react';
import { Link } from 'react-router-dom';
import '../components/ContactMe.css'
import { Spring } from 'react-spring/renderprops';
import { motion } from 'framer-motion';
import { useTrail, animated } from 'react-spring';

function ContactMe() {
    return (
        <Spring
        from={{opacity:0, marginLeft:-500}}
        to={{opacity:1,marginLeft:0}}
        >
        {props => (
        <animated.div style={props} className="contact-me-main-div">
        <div className="h1-text">
            <h1>Get in touch with me</h1>
        </div>
        <form className="inputs-div">
            
            <input type="text" name="name" placeholder="You name"/>
            <input type="text" name="email" placeholder="You email"/>
            <input type="text" name="phone" placeholder="You phone number"/>
            <textarea type="text" name="message" placeholder="You message"/>
            <motion.div className='submit-button'
          whileHover={{
            scale:1.05,
            textShadow:"0px 0px 15px rgb(95,244,255)",
            boxShadow:"0px 0px 10px rgb(95,244,255)", 
             }}>
            <Link >Submit</Link> 
        </motion.div>
        
        </form> 
        <div className="button-div">
        <motion.div className='button1-projects'
          whileHover={{
            scale:1.05,
            textShadow:"0px 0px 15px rgb(95,244,255)",
            boxShadow:"0px 0px 10px rgb(95,244,255)", 
             }}>
            <Link to="/">Home</Link> 
        </motion.div>
        </div>  
        </animated.div>
        )}
        </Spring>
    )
}

export default ContactMe
