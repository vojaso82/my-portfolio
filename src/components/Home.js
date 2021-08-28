import React from 'react';
import { Link } from 'react-router-dom'
import '../components/Home.css'
import { Spring } from 'react-spring/renderprops';
import { FaBluetooth } from 'react-icons/fa';


function Home() {
    return (
      <Spring 
       from={{opacity:0}}
       to={{opacity:1}}>
        {props => ( 
        <div style={props} className="main-div">
        <div className="home">
            <h1 className="my-name">Vojislav Zaja</h1>
            <h2 className="job-title">Front End Web Developer</h2>
            <p className="description">I define and design customer experiences in the digital channel</p>
        </div>
        <div className="buttons-div">
            <Link to="/about">About</Link> 
            <Link to="/projects">Projects</Link> 
        </div>
      </div>  
        )}
      </Spring>
    )
}

export default Home;
