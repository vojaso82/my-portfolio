import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import ContactMe from './components/ContactMe';
import { HashLink } from 'react-router-hash-link';


function App() {




  return (
    <div className="App">
      

      <Home/>
      <AboutMe/>
      <MyProjects/>
      <ContactMe/>
    </div>
  );
}

export default App;
