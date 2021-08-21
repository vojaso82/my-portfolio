import React from 'react';
import Particles from 'react-particles-js';
import ParticlesConfig from './config/ParticlesConfig';

function ParticlesBackground() {
console.log(ParticlesConfig)
    return (
        
            <Particles params={ParticlesConfig}></Particles>
    
    )
}

export default ParticlesBackground;
