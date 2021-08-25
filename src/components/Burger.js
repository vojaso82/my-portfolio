import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './Burger.css';
import BurgerConfig from './BurgerConfig';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function Burger() {
const [toggle, setToggle] = useState(false);

// const showSettings = (e) => {
// e.preventDefault();
// }   

    return (
        <nav>
            
            <div id="menuToggle" onClick={() => setToggle(!toggle)}>
              <input type="checkbox"/>
               <span id="span1"></span>
               <span id="span2"></span>
               <span id="span3"></span>
             </div>
            
        <div className="burger-links" style={toggle && {display:'flex'} || {display:'none'}}>
        <Link to="/" className="menu-item">Home</Link>
        <Link to="/about" className="menu-item">About</Link>
        <Link to="/projects" className="menu-item">Projects</Link>
        <Link to="/contact" className="menu-item">Contact</Link>
        
          </div>
          
        </nav>
    )
}

export default Burger
