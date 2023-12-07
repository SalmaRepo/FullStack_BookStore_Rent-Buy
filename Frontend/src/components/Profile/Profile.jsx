import React, { useContext,useEffect } from "react";
import { MyContext } from "../../contexts/context";

import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function Profile() {
  const { user, setUser, completedOrders, setCompletedOrders } =
    useContext(MyContext);
  console.log(user);
  console.log(completedOrders)
  const navigate = useNavigate();

  useEffect(()=>{
    const token = localStorage.getItem("token");
    fetch(`http://localhost:4000/api/users/getAllOrdersOfUser/${user?._id}`,{
      method:"GET",
      headers: { token: token },
    }).then(res=>res.json())
    .then(result=>{
    setCompletedOrders(result.orders)
    })
    .catch(err=>console.log(err))
  
  },[])

  const logoutUser = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <div>
      <NavBar />
      <div>
        <h1>Profile Page</h1>
        {user && (
          <div>
            <img src="https://static.vecteezy.com/system/resources/previews/014/212/681/original/female-user-profile-avatar-is-a-woman-a-character-for-a-screen-saver-with-emotions-for-website-and-mobile-app-design-illustration-on-a-white-isolated-background-vector.jpg" alt="" width="10%"/>
            <h2>
              Name : {user.firstName} {user.lastName}
            </h2>
            <h3>Email: {user.email}</h3>
            
            <div style={{border:"2px solid"}}>
            <h1>Your Completed Orders:</h1>
            {completedOrders?.map((order) => {
              return (
                <div key={order.books[0]._id}>
                  <h3>{order.books[0].title}</h3>
                  <h4>orderId-{order.books[0]._id}</h4>
                  <h2>placed on-{order.orderPlacedOn}</h2>
                  {order.toRent&&
                  <div>
 <h2>You have rented the books</h2>
                  <h2>Rent Period Expires on -{order.rentTill}</h2>
                  </div>}
                 
                  {/* Include other order details as needed */}
                </div>
              );
            })}
            </div>
            
            <button onClick={logoutUser}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
