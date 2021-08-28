import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import ContactMe from './components/ContactMe';
import ParticlesBackground from './components/ParticlesBackground';
import Burger from './components/Burger';


function App() {

  return (
    <div className="App">
      <Burger/>
      <ParticlesBackground/>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={AboutMe} />
      <Route exact path='/projects' component={MyProjects} />
      <Route exact path='/contact' component={ContactMe} />
      </Switch>
    </div>
  );


  
}

export default App;
