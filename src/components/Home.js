import React from 'react';
import { Link } from 'react-router-dom'
import '../components/Home.css'
import { HashLink } from 'react-router-hash-link';


function Home() {
    return (
      <div className="main-div">
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
    )
}

export default Home;
