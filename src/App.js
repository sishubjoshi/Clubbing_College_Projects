import React, { Component } from 'react';
import Navbar from './components/Navbar';
// import Auth from './components/Auth';
import User from './components/User';
import { Route, Switch, Redirect } from 'react-router-dom';
import firebase from "firebase";

import './App.css';

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
      <Redirect to="dashboard"/>
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
    firebase.auth().signOut().then(function() {
      this.setState({name:'',token:'',isAuthenticated:false});
      alert("Signed Out Successful");
    }).catch(function(error) {
      alert(error)
    });
  }

  
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>GitHub Authentication</h1>
        <button type="submit" onClick={(e)=> this.authenticate(e)}>LogIn</button>
        <button type="submit" onClick={(e)=>{this.unauthenticate(e)}}>LogOut</button>

      <Switch>
        {/* <Route exact path='/' component={Auth}/> */}
        <Route path='/dashboard/:id' component={User} />
      </Switch>
          
      </div>
    );
  }
}

export default App;
