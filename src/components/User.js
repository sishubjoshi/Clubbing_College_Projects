import React, { Component } from 'react'
import Navbar from './Navbar';
export default class User extends Component {
  render() {
    return (
      <div>
        <Navbar />
            <div className="row">
                <div className="col col-md-2 side-nav">
                    <ul className="navbar-nav mt-4">
                        <li className="nav-items p-2">
                            <a href="/">posts</a>
                        </li>
                        <li className="nav-items p-2"><a href="/">my posts</a></li>
                        <li className="nav-items p-2"><a href="/">profile</a></li>
                        <li className="nav-items p-2"><a href="/">logout</a></li>
                    </ul>
                </div>
                <div className="col container">
                    <h3>jsdmsdjsd</h3>
                </div>
            </div>
      </div>
    )
  }
}
