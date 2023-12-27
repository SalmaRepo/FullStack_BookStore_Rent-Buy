import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../../contexts/context'
import {Link} from 'react-router-dom'
import './logout.css'

function LogOut() {
    const {setUser,isLogin,setisLogin}=useContext(MyContext)
    const logoutUser=()=>{
    localStorage.removeItem("token")
    setUser(null)
    navigate("/login")
  
    }
  return (
    <div className='logout'>
        <Link to="/login" onClick={logoutUser}>Logout</Link>
    </div>
  )
}

export default LogOut