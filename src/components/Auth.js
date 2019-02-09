import React, { Component } from 'react'
import firebase from "firebase";

export default class Auth extends Component {

  state={
    user:null,
    token:null
  }

  componentDidMount(){
    const config = {
      apiKey: "AIzaSyBl28wfLspLPjiiJ02VrYbzeyuh-z9NC9g",
      authDomain: "ccpind.firebaseapp.com",
      projectId: "ccpind",
      messagingSenderId: "701591541780"
    };
    firebase.initializeApp(config);
  }

  authenticate(e){
    e.preventDefault();

    var provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
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
      alert("Signed Out Successful");
    }).catch(function(error) {
      alert(error)
    });
  }

  render() {
    return (
      <div>
        <h1>GitHub Authentication</h1>
        <button type="submit" onClick={(e)=> this.authenticate(e)}>LogIn</button>
        <button type="submit" onClick={(e)=>{this.unauthenticate(e)}}>LogOut</button>
      </div>
    )
  }
}
