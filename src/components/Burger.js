import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './Burger.css';
import BurgerConfig from './BurgerConfig';
import { FaHome } from 'react-icons/fa';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { RiContactsFill } from 'react-icons/ri';
import { IoMdMailUnread } from 'react-icons/io';


function Burger() {
const [toggle, setToggle] = useState(false);

// const showSettings = (e) => {
// e.preventDefault();
// }   

    return (
        <nav>       
          <div id="menuToggle" toggle={toggle} onClick={() => setToggle(!toggle)}>
               <input type="checkbox"/>
               <span id="span1"></span>
               <span id="span2"></span>
               <span id="span3"></span>
          </div>
            
        <div className="burger-links" style={toggle && {display:'flex'} || {display:'none'}}>
        <Link onClick={() => setToggle(setToggle)} to="/" className="menu-item"><span>Home</span><FaHome/> </Link>
        <Link onClick={() => setToggle(false)} to="/about" className="menu-item"><span>About</span><RiContactsFill/></Link>
        <Link onClick={() => setToggle(false)} to="/projects" className="menu-item"><span>Projects</span><BsFillBriefcaseFill/></Link>
        <Link onClick={() => setToggle(false)} to="/contact" className="menu-item"><span>Contact</span><IoMdMailUnread/></Link>
        
          </div>
          
        </nav>
    )
}

export default Burger
