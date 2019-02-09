import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import User from './components/User';
import './App.css';

class App extends Component {

  state={
    isAuthenticated:false,
    ClientID:"2834dbab917cc03003db",
    ClientSecret:"662918a0101fbada0c41725f4403bb885b55c2cf"
  }
  
  render() {
    return (
      <div className="App">
          {/* <User /> */}
          <Navbar/>
          <Auth />
      </div>
    );
  }
}

export default App;
