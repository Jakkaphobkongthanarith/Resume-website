// App.jsx
// import React from 'react';
import { Link } from 'react-scroll';
import './App.css';
import Profile from './Image/Profile.png';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Main from './components/Main';
import Aboutme from './components/Aboutme';
import Ability from './components/Ability.jsx';
import Portfolio from './components/Project.jsx';
import Coding from './components/Coding.jsx';

const App = () => {
  return (
    <Router>
      <div className="container">
        <div className="left">
          <img src={Profile} alt="Profile Image" width='220' style={{ marginBottom: '25px' }} className='Profileimg' />
          <Navbar />
        </div>
        <div className='right' >
          <Main />
          <Aboutme />
          <Ability />
          <Coding />
          <Portfolio />
        </div>
      </div>
    </Router>
  );
};

export default App;


