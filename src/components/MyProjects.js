import React, { useRef } from 'react';
import '../components/MyProjects.css'
import { useChain, animated, useTransition, useSpringRef, useSpring } from 'react-spring/renderprops';
import { Spring } from 'react-spring/renderprops';


function MyProjects() {
// Build a spring and catch its ref
const springRef = useSpringRef()
const spring = useSpring({
    from: { opacity: 0.5 },
    to: { opacity:1},
    config: { tension: 250 },
    ref: springRef
 })
// Build a transition and catch its ref
const transitionRef = useSpringRef()
const transitions = useTransition({
    from: { fontSize: '10px' },
    to: { fontSize:'45px'},
    ref: transitionRef

 })
// First run the spring, when it concludes run the transition
useChain([springRef, transitionRef])
// Use the animated props like always


    return (
        <Spring
        from={{opacity:0, marginLeft:-500}}
        to={{opacity:1,marginLeft:0}}
        >
        {props => (
        <animated.div  style={props, spring} className="projects-main-div">

           <a href="https://natureall.netlify.app/" target="_blank"></a>

           <a href="https://nutriyoga.netlify.app/" target="_blank"></a>

           <a href="https://week-4-game-project.github.io/2d-tower-defense/" target="_blank"></a>

           <a href="https://ux-portfolio-project.github.io/ux-project/index.html" target="_blank"></a>

           <a href="https://www.ars.rs/" target="_blank"></a>

           <a href="http://www.kita-wolkenland.ch/" target="_blank"></a>

           <a href="https://www.orthodoxchurch.ch/sr" target="_blank"></a>

           <a href="https://www.jurpm.ch/en/" target="_blank"></a>

        </animated.div>
        )}
        </Spring>
    )
}

export default MyProjects
