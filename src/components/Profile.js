import React, { Component } from 'react'
import Sidenav from './Sidenav';

export default class Profile extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col col-2 side-nav">
              <Sidenav />
          </div>
          <div className="col">
            <h1>profile</h1>
          </div>
        </div>
      </div>
    )
  }
}
