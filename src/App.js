import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import User from './components/User';
import './App.css';

class App extends Component {

  
  render() {
    return (
      <div className="App">
          <User />
          {/* <Navbar/> */}
          {/* <Auth /> */}
      </div>
    );
  }
}

export default App;
