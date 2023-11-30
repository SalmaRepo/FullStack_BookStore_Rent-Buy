import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { MyContext } from '../../contexts/context'
import Login from '../Login/Login'
import Register from '../Register/Register'
import SearchBar from '../SearchBar/SearchBar'

function NavBar() {
    const {user}=useContext(MyContext)
  return (
    <div className='navbar'>
     
            <ul className='nav'>
                <li>Logo</li>
                <li>
                <SearchBar/>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                {user&&<li>
                    <Link to="/profile">profile</Link>
                </li>}
                <li>
                    <Link to="/cart">cart</Link>
                </li>
            </ul>
      
    </div>
  )
}

export default NavBar