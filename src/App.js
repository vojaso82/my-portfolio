import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import ContactMe from './components/ContactMe';
import ParticlesBackground from './components/ParticlesBackground';
import { HashLink } from 'react-router-hash-link';
import { stack as Menu } from 'react-burger-menu';




function App() {

  return (
    <div className="App">
      <ParticlesBackground/>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/AboutMe' component={AboutMe} />
      <Route exact path='/MyProjects' component={MyProjects} />
      <Route exact path='/ContactMe' component={ContactMe} />


      </Switch>

     
      
    </div>
  );


  
}

export default App;
