import React, { useState } from "react";
import { useContext } from "react";
import toast,{Toaster} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../contexts/context";
import Footer from "../Footer/Footer";
import "./Checkout.css"

function Checkout() {
    const navigate=useNavigate()
  const { orders,setQuant, quant,setCart} = useContext(MyContext);
  const [isPay, setIsPay] = useState(false);
  console.log(orders);

  const pay = () => {
    setCart([])
    setQuant(0)
    localStorage.removeItem("cart");
    setIsPay(true);
   
    setTimeout(()=>{
     navigate("/")
    },1500)
  };

  const alertPay=()=>{
    toast.error("Integration to Payment Process Under Construction")
  }
  console.log(isPay)
  return (
    <div className="checkout">
      {isPay ? (
        <div><h1>Your Order is Placed, Thank You !!</h1></div>
      ) : (
        <div>
          <div>
            <h2>You are placing the order for {quant} items.</h2>
            <h1>TotalPrice : {orders.orders&&orders?.orders[0]?.totalPrice} Euros </h1>
          </div>

          <div>
            <form
              action="address"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "30%",
                border: "1px solid",
                padding: "1rem",
              }}
            >
              <h2>Enter the Delivery Address</h2>
              <label htmlFor="street">Street:</label>
              <input type="text" id="street" />
              <label htmlFor="postalcode">Postal Code:</label>
              <input type="number" id="postalcode" />
              <label htmlFor="city">City:</label>
              <input type="text" id="city" />
              <label htmlFor="country">Country:</label>
              <input type="text" id="country" />
            </form>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
              gap: "1rem",
              border: "1px solid",
              padding: "1rem",
            }}
          >
            <h2>Select the Payment method</h2>
            <Toaster position="top-center"/>
            <button onClick={alertPay}>Card</button>
            <button onClick={alertPay}>Bank Account</button>
            <button onClick={alertPay}>Paypal</button>
            <button onClick={alertPay}>Gift Card</button>
          </div>

          <div className="checkoutButton">
            <button onClick={pay}>Pay</button>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
}

export default Checkout;
