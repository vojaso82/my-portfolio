import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './Burger.css';
import BurgerConfig from './BurgerConfig';
import { FaHome } from 'react-icons/fa';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { RiContactsFill } from 'react-icons/ri';
import { IoMdMailUnread } from 'react-icons/io';
import { Spring } from 'react-spring/renderprops';
import { useSpring, animated } from 'react-spring';



function Burger() {
const [toggle, setToggle] = useState(false);
// const [downMenuVisible, setDownMenuVisible] = useState(false);

const downMenuAnimation = useSpring({
  opacity: toggle ? 1 : 0,
  transform: toggle ? `translateX(0)` : `translateX(100%)`
});

    return (
        <nav>       
          <div id="menuToggle" onClick={() => setToggle(!toggle)}>
          
               <input type="checkbox"/>
               <span id={toggle === false ? "span1" : "spanx1"}></span>
               <span id={toggle === false ? "span2" : "spanx2"}></span>
               <span id={toggle === false ? "span3" : "spanx3"}></span>
          </div>
       
         
        <animated.div className="burger-links" style={downMenuAnimation}>
        <div>
        <Link onClick={() => setToggle(false)} to="/" className="menu-item"><FaHome/></Link>
        <span>Home</span>
        </div>
        <div>
        <Link onClick={() => setToggle(false) } to="/about" className="menu-item"><RiContactsFill/></Link>
        <span>About</span>
        </div>
        <div>
        <Link onClick={() => setToggle(false)} to="/projects" className="menu-item"><BsFillBriefcaseFill/></Link>
        <span>Projects</span>
        </div>
        <div>
        <Link onClick={() => setToggle(false)} to="/contact" className="menu-item"><IoMdMailUnread/></Link>
        <span>Contact</span>
        </div>
          </animated.div> 
        
          
        </nav>
    )
}

export default Burger
