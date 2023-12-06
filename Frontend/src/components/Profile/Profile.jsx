import React, { useContext } from 'react'
import { MyContext } from '../../contexts/context'

import { useNavigate } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

function Profile() {
const {user,setUser} = useContext(MyContext)
const navigate= useNavigate()

const logoutUser =()=>{
    localStorage.removeItem("token")
    setUser(null)
    navigate("/login")
}

return (
  <div>

 <NavBar/>
     <div>
         <h1>Profile Page</h1>
         <h2>{user?.firstName} {user?.lastName}</h2>
         <h3>{user?.email}</h3>
         <h4>{user?.orders?.map(order=>{
           return(<div key={order._id}> <h3>{order._id}</h3> </div>)
         })}</h4>
         <button onClick={logoutUser}>logout</button>
        
     </div>
     </div>
   )
 }

 export default Profile