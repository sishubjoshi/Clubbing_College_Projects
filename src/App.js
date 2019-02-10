import React, { Component } from 'react';
import Navbar from './components/Navbar';
// import Auth from './components/Auth';
import User from './components/User';
import { Route, Switch, Redirect } from 'react-router-dom';
import firebase from "firebase";

import './App.css';
import Posts from './components/Posts';
import Myposts from './components/Myposts';
import Profile from './components/Profile';
class App extends Component {


  componentDidMount(){
    const config = {
      apiKey: "AIzaSyBl28wfLspLPjiiJ02VrYbzeyuh-z9NC9g",
      authDomain: "ccpind.firebaseapp.com",
      projectId: "ccpind",
      messagingSenderId: "701591541780"
    };
    firebase.initializeApp(config);
  }
  state={
    user:null,
    token:null,
    isAuthenticated:false
  }

  

  authenticate(e){
    e.preventDefault();
    let token, user;
    var provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      token = result.credential.accessToken;
      // The signed-in user info.
      user = result.additionalUserInfo.username;
      console.log(user);

      this.setState({token,user,isAuthenticated:true});
      // ...
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      alert(errorMessage)
    });
  }

  unauthenticate(e){
    e.preventDefault();
    let isAuthenticated;
    firebase.auth().signOut().then(function() {
      isAuthenticated=false;
      alert("Signed Out Successful");
      // this.setState({isAuthenticated});
    }).catch(function(error) {
      alert(error)
    });
  }


  render() {
    return (
      <div className="App">
      <nav className="navbar bg-dark fixed-top ">
        <a href="/" className="navbar-brand text-warning" width="100%">CCP</a>
        <div className="right">
        <button type="submit" className="btn btn-warning m-1" onClick={(e)=> this.authenticate(e)}>LogIn</button>
        <button type="submit" className="btn btn-warning m-1" onClick={(e)=>{this.unauthenticate(e)}}>LogOut</button>
        </div>
      </nav>
        

      <Switch>
        <Route path='/posts' component={Posts}/>
         <Route path='/dashboard/' component={Posts} />
         <Route path='/myposts/' component={Myposts} />
         <Route path='/profile/' component={Profile} />
      </Switch>
      {this.state.isAuthenticated?(<Route exact path='/' component={User}/>):('')}
          
      </div>
    );
  }
}

export default App;
