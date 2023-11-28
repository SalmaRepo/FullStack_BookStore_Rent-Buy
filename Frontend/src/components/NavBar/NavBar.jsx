import React from 'react'
import {Link} from "react-router-dom"

function NavBar() {
  return (
    <div className='navbar'>
     
            <ul className='nav'>
                <li>Logo</li>
                <li>
                    <Link to="/search">
                        <div>searchbar</div>
                    </Link>
                </li>
                <li>
                    <Link to="/login">login</Link>
                </li>
                <li>
                    <Link to="/profile">profile</Link>
                </li>
                <li>
                    <Link to="/cart">cart</Link>
                </li>
            </ul>
      
    </div>
  )
}

export default NavBar