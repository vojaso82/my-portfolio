import React, { useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Burger.css';
import BurgerConfig from './BurgerConfig';

function Burger() {

const showSettings = (e) => {
e.preventDefault();
}   

  
        
      


    return (
        <div>
    <Menu right width="250px" styles={ BurgerConfig }>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="projects" className="menu-item" href="/projects">Projects</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={e=> showSettings(e) } className="menu-item--small" href=""></a>
    </Menu>
        </div>
    )
}

export default Burger
