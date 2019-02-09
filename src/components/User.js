import React, { Component } from 'react'
// import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Sidenav from './Sidenav';
// import Posts from './Posts';
// import Myposts from './Myposts';
// import Profile from './Profile';
export default class User extends Component {
  render() {
    return (
      <div className="Users">
        {/* <Navbar /> */}
            <div className="row">
                <div className="col col-md-2 side-nav">
                    <Sidenav />
                </div>
                <div className="col container">
                    <h3>jsdmsdjsd</h3>
                </div>
            </div>
      </div>
    )
  }
}
