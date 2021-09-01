import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/ContactMe.css'
import { Spring } from 'react-spring/renderprops';
import { motion } from 'framer-motion';
import { useTrail, animated } from 'react-spring';
import emailjs from 'emailjs-com';

function ContactMe() {
 const[message, setMessage] = useState();
 const[name, setName] = useState();
 const[email, setEmail] = useState();
 const[phone, setPhone] = useState();
 const[text, setText] = useState();


const handleChange = (e) => {
if(e.target.name === "name"){
    setName(e.target.value)
}else if(e.target.name === "email"){
    setEmail(e.target.value)
}else if(e.target.name === "phone"){
    setPhone(e.target.value)
}else if(e.target.name === "message"){
    setText(e.target.value)
}
}


function sendEmail(e) {
e.preventDefault();
if(name && email && phone && text){

emailjs.sendForm('service_ji46uhq', 'template_chppd3c', e.target, 'user_ZyOxWspwe6RKIA4Y8K4xg')
.then((result) => {
console.log(result.text);
result.text === "OK" ? setMessage("Message sent") : setMessage("Please try again")
}, (error) => {
console.log(error.text);
});
}else setMessage('You have to fill all fields')


e.target.reset();
}
    
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
        <form onSubmit={sendEmail} className="inputs-div">
            
            <input onChange={(e)=>handleChange(e)} type="text" name="name" placeholder="You name"/>
            <input onChange={(e)=>handleChange(e)} type="text" name="email" placeholder="You email"/>
            <input onChange={(e)=>handleChange(e)} type="text" name="phone" placeholder="You phone number"/>
            <textarea onChange={(e)=>handleChange(e)} type="text" name="message" placeholder="You message"/>
            <p>{message}</p>
            <motion.div className='submit-button'
          whileHover={{
            scale:1.05,
            textShadow:"0px 0px 15px rgb(95,244,255)",
            boxShadow:"0px 0px 10px rgb(95,244,255)", 
             }}>
            
            <button id="contact-button" type="submit">Send</button>
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
