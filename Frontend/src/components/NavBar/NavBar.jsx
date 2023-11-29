import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { MyContext } from '../../contexts/context'
import Login from '../Login/Login'
import Register from '../Register/Register'

function NavBar() {
    const {user}=useContext(MyContext)
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
                    <Link to="/login">Login</Link>
                </li>
<<<<<<< HEAD
                <li>
                    <Link to="/register">register</Link>
                </li>
                <li>
=======
                {user&&<li>
>>>>>>> cdc054d993d9f3149fdac41ce62f354900227454
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