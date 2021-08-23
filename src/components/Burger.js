import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './Burger.css';
import BurgerConfig from './BurgerConfig';

function Burger() {

// const [isOpen, setIsOpen] = useState(false);
// const toggle = () => setIsOpen(!isOpen);
// const hide = () => setIsOpen(false);
// const show = () => setIsOpen(true);
  
const showSettings = (e) => {
e.preventDefault();
}   

// const HandleChange = (e) => {
//     setBurger(e.target.value);
//     // console.log(calories);
//   };

    return (
        <div>
    <Menu right width="220px" styles={ BurgerConfig }>
        <Link to="/" className="menu-item">Home</Link>
        <Link to="/about" className="menu-item">About</Link>
        <Link to="/projects" className="menu-item">Projects</Link>
        <Link to="/contact" className="menu-item">Contact</Link>
        <Link onClick={showSettings} className="menu-item--small"></Link>
    </Menu>
        </div>
    )
}

export default Burger
