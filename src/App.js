import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";

import Home from './Components/Home'
import About from './Components/About'


const App = () => (
  <Router>
    <div> 
          <Route exact path='/' component={Home}/>
          <Route path='/About' component={About}/>
    </div>
    
  </Router>
);
  

export default App;





