import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import User from './components/User';
import { Route, Switch } from 'react-router-dom';

import './App.css';

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <Navbar />
      <Switch>
        <Route exact path='/' component={Auth}/>
        <Route path='/dashboard' component={User} />
      </Switch>
          
      </div>
    );
  }
}

export default App;
