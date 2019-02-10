import React from 'react'
import {Link} from 'react-router-dom';
export default function Sidenav() {
  return (
    <div>
      <ul className="navbar-nav mt-4 side-menu">
                        <li className="nav-items p-2">
                            <Link to="/posts">posts</Link>
                        </li>
                        <li className="nav-items p-2" ><Link to="/myposts">my posts</Link></li>
                        <li className="nav-items p-2"><Link to="/profile">profile</Link></li>
                        <li className="nav-items p-2"><Link to="/profile">logout</Link></li>
                    </ul>
    </div>
  )
}
