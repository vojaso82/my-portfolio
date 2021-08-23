import React from 'react';
import '../components/Home.css'
import { HashLink } from 'react-router-hash-link';


function Home() {
    return (
        <div className="text_div center_all">
            <div className="center_all">
            <h1 className="my-name">Vojislav Zaja</h1>
            <h2 className="job-title">Web Developer</h2>
            <p className="description">Hi. I produce elegant, performant, and accessible digital experiences</p>
            </div>
        </div>
    )
}

export default Home;
