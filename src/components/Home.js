import React from 'react';
import '../components/Home.css'
import { HashLink } from 'react-router-hash-link';


function Home() {
    return (
      <div className="main-div">
        <div className="home">
            <h1 className="my-name">Vojislav Zaja</h1>
            <h2 className="job-title">Front End Web Developer</h2>
            <p className="description">Hi. I produce elegant, performant, and accessible digital experiences</p>
        </div>
        <div className="buttons">
                <button> My work </button>
                <button> About me </button>

        </div>
      </div>  
    )
}

export default Home;
