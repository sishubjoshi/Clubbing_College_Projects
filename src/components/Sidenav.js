import React from 'react'
import {Link} from 'react-router-dom';
export default function Sidenav() {
  return (
    <div>
      <ul className="navbar-nav mt-4 side-menu">
                        <li className="nav-items p-2 slist">
                            <Link to="/posts">Posts</Link>
                        </li>
                        <li className="nav-items p-2 slist " ><Link to="/myposts">My Posts</Link></li>
                        <li className="nav-items p-2 slist"><Link to="/profile">Profile</Link></li>
                        <li className="nav-items p-2 slist"><Link to="/profile">Logout</Link></li>
                    </ul>
    </div>
  )
}
