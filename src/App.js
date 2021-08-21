import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import ContactMe from './components/ContactMe';
import ParticlesBackground from './components/ParticlesBackground';
import { HashLink } from 'react-router-hash-link';
import Particles from 'react-particles-js';


function App() {




  return (
    <div className="App">
      
      <ParticlesBackground/>
      <Home/>
      <AboutMe/>
      <MyProjects/>
      <ContactMe/>
      
    </div>
  );
}

export default App;
