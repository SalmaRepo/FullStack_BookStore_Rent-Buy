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
      <NavBar />
      <div >
        <h1>Profile Page</h1>
        {user && (
          <div>
            <h2>{user.firstName} {user.lastName}</h2>
            <h3>Email: {user.email}</h3>

            <h4>
          Orders:
          {user?.orders?.map((order) => (
            <div key={order._id}>
              <h3>{order._id}</h3>
              {/* Include other order details as needed */}
            </div>
          ))}
        </h4>
          </div>
        )}
        <button onClick={logoutUser}>Logout</button>
      </div>
    </div>
   )
 }

 export default Profile