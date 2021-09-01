import React from 'react';
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
            <div className="inputs-div">
            <input type="text" name="name" placeholder="You name"/>
            <input type="text" name="email" placeholder="You email"/>
            <input type="text" name="phone" placeholder="You phone number"/>
            <textarea type="text" name="message" placeholder="You message"/>
            <button>Submit</button>
            </div>
        </animated.div>
        )}
        </Spring>
    )
}

export default ContactMe
