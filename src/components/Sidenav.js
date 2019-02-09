import React from 'react'
import {Link} from 'react-router-dom';
export default function Sidenav() {
  return (
    <div>
      <ul className="navbar-nav mt-4 side-menu">
                        <li className="nav-items p-2">
                            <Link to="/dashboard">posts</Link>
                        </li>
                        <li className="nav-items p-2"><Link to="/Posts">my posts</Link></li>
                        <li className="nav-items p-2"><Link to="/Myposts">profile</Link></li>
                        <li className="nav-items p-2"><Link to="/Profile">logout</Link></li>
                    </ul>
    </div>
  )
}
