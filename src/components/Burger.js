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

const burgerBackground = useSpring({
  backgroundColor: toggle ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.001)',
});

    return (
        <nav>       
          <animated.div id="menuToggle" onClick={() => setToggle(!toggle)} style={burgerBackground}>
          
               <input type="checkbox"/>
               <span id={toggle === false ? "span1" : "spanx1"}></span>
               <span id={toggle === false ? "span2" : "spanx2"}></span>
               <span id={toggle === false ? "span3" : "spanx3"}></span>
          </animated.div>
       
         
        <animated.div className="burger-links" style={downMenuAnimation}>
        <div>
        <Link onClick={() => setToggle(false)} to="/" className="menu-item"><FaHome/></Link>
        <p className='links-name'><Link to='/'>Home</Link></p>
        </div>
        <div>
        <Link onClick={() => setToggle(false) } to="/about" className="menu-item"><RiContactsFill/></Link>
        <p className='links-name'><Link to='/about'>About</Link></p>
        </div>
        <div>
        <Link onClick={() => setToggle(false)} to="/projects" className="menu-item"><BsFillBriefcaseFill/></Link>
        <p className='links-name'><Link to='/projects'>Projects</Link></p>
        </div>
        <div>
        <Link onClick={() => setToggle(false)} to="/contact" className="menu-item"><IoMdMailUnread/></Link>
        <p className='links-name'><Link to='/contact'>Contact</Link></p>
        </div>
          </animated.div> 
        
          
      </nav>
    )
}

export default Burger
