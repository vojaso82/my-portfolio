import React, { useRef } from 'react';
import '../components/Home.css';
import { Link } from 'react-router-dom';
import '../components/MyProjects.css'
import { useChain, animated, useTransition, useSpringRef, useSpring } from 'react-spring/renderprops';
import { Spring } from 'react-spring/renderprops';
import { motion } from 'framer-motion';


function MyProjects() {

    return (
        <Spring
        from={{opacity:0, marginLeft:-500}}
        to={{opacity:1,marginLeft:0}}
        >
        {props => (
        <animated.div  style={props} className="projects-main-div">
        <div className="projects-div">
          <motion.a
          whileHover={{
            scale:1,
            textShadow:"0px 0px 15px rgb(95,244,255)",
            boxShadow:"0px 0px 10px rgb(255,255,255)", 
            }}
          className="a-links" href="https://natureall.netlify.app/" target="_blank">
          </motion.a>

           <motion.a 
           whileHover={{
            scale:1,
            textShadow:"0px 0px 15px rgb(95,244,255)",
            boxShadow:"0px 0px 10px rgb(255,255,255)", 
            }}
           className="a-links" href="https://nutriyoga.netlify.app/" target="_blank">
           </motion.a>
           <motion.a 
            whileHover={{
              scale:1,
              textShadow:"0px 0px 15px rgb(95,244,255)",
              boxShadow:"0px 0px 10px rgb(255,255,255)", 
              }}
           className="a-links" href="https://week-4-game-project.github.io/2d-tower-defense/" target="_blank">
           </motion.a>
           <motion.a
           whileHover={{
            scale:1,
            textShadow:"0px 0px 15px rgb(95,244,255)",
            boxShadow:"0px 0px 10px rgb(255,255,255)", 
            }}
           className="a-links" href="https://ux-portfolio-project.github.io/ux-project/index.html" target="_blank">
           </motion.a>
           <motion.a
           whileHover={{
            scale:1,
            textShadow:"0px 0px 15px rgb(95,244,255)",
            boxShadow:"0px 0px 10px rgb(255,255,255)", 
            }}
           className="a-links" href="https://www.ars.rs/" target="_blank">
           </motion.a>
           <motion.a
           whileHover={{
            scale:1,
            textShadow:"0px 0px 15px rgb(95,244,255)",
            boxShadow:"0px 0px 10px rgb(255,255,255)", 
            }}
           className="a-links" href="http://www.kita-wolkenland.ch/" target="_blank">
           </motion.a>
           <motion.a
            whileHover={{
             scale:1,
             textShadow:"0px 0px 15px rgb(95,244,255)",
             boxShadow:"0px 0px 10px rgb(255,255,255)", 
              }}
            className="a-links" href="https://www.orthodoxchurch.ch/sr" target="_blank">
            </motion.a>
           <motion.a
           whileHover={{
            scale:1,
            textShadow:"0px 0px 15px rgb(95,244,255)",
            boxShadow:"0px 0px 10px rgb(255,255,255)", 
            }}
           className="a-links" href="https://www.jurpm.ch/en/" target="_blank">
           </motion.a>
        </div>
        <div className="buttons-div-projects">
          <motion.div className='motion-button1-projects'
          whileHover={{
            scale:1,
            textShadow:"0px 0px 15px rgb(95,244,255)",
            boxShadow:"0px 0px 10px rgb(95,244,255)", 
        }}
          >
            <Link to="/">Home</Link> 
          </motion.div>
          <motion.div className='motion-button2-projects'
          whileHover={{
            scale:1.05,
            textShadow:"0px 0px 15px rgb(95,244,255)",
            boxShadow:"0px 0px 15px rgb(95,244,255)",
        }}
          >
            <Link to="/contact">Contact</Link> 
          </motion.div>
        </div> 
        </animated.div>

        )}
        </Spring>
    )
}

export default MyProjects
