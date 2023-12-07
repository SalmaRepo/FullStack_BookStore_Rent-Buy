import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../contexts/context";
import NavBar from "../NavBar/NavBar";
import "./cart.css";

function Cart() {
  const {
    cart,
    quant,
    setQuant,
    bookId,
    user,
    setCart,
    isChangeInCart,
    setIsChangeInCart,
    isRent,
    setIsRent,
    rentTill,
    setRentTill,
    setOrders
  } = useContext(MyContext);

  const navigate=useNavigate()

  console.log(user);
  console.log(cart);
  /*  useEffect(()=>{
    const token=localStorage.getItem("token")
    if(!cart){
      fetch(`http://localhost:4000/api/users/getAllOrdersOfUser/${user._id}`,{
        method:"GET",
        headers:{token:token}
      })
      .then(res=>res.json())
      .then(result=>{
       /*  console.log("test"+Array.from(new Set(result.orders))) */
  /* result.orders.map(order=>order.books[0].quantity=1)
       
        result.orders.map((order)=>{
            if(order.books[0]._id.includes()){
              res.push(order)
              acc+=1
            }
              console.log(res)
            return res
        },0)  */
  // console.log(result)
  // result.orders?.reduce((acc,order)=>{
  //   console.log(acc)
  //   let quantity=1;
  //   if(acc["books"]?.books[0]._id===order.books[0]._id){
  //     quantity+=1
  //     order.books[0].quantity=quantity;
  //   }else{
  //     order.books[0].quantity=1
  //   }
  // },{})

  //         const isThere = new Set()

  //         for( let ele of result.orders ){
  // if(isThere.has(ele.books[0]._id)){
  //    ele.books[0].quantity +=1

  // }else {
  //   ele.books[0].quantity =1
  //   isThere.add(ele)
  // console.log(isThere)
  // }

  //         }
  // console.log("hello",isThere)
  /* result.orders.map((order)=>{
let all = []


const existItem = all.find(item=>item.books[0]._id===order.books[0]._id)
if(!existItem){
  order.books[0].quantity =1
  all.push(order)
}else{
  existItem.quantity +=1
  
}
setCart({...cart ,all}) */
  // const isIds = new Set(all.map(item=>item.books[0]._id))

  // if(!isIds.has(order.books[0]._id)){
  // order.books[0].quantity =1
  // all.push(order)

  // }else{
  //   order.books[0].quantity +=1
  //   console.log("already")

  // }
  // return all
  /* console.log(result.orders)

let res=result.orders?.reduce((acc,order,index)=>{
     console.log(order)
     acc=result.orders[index+1]
     console.log(acc)
     let quantity=1;
     if(order.books[0]._id===acc.books[0]._id){
          quantity+=1
          order.books[0].quantity=quantity
        
     }else{
      order.books[0].quantity=quantity
      return order
     }
     
    
   },{})
 */

  /* })

    
      .catch(err=>console.log(err))
    }
   
  },[])  */
  // )}

  const deleteBookInCart = (book) => {
    setIsChangeInCart(!isChangeInCart);
    console.log("selectBook", book);
    let target = cart.find((item) => item._id === book._id);
    console.log("target", target);
    if (target) {
      console.log(cart.indexOf(target));
      cart.splice(cart.indexOf(target), 1);
      console.log("new", cart);
      setCart(cart);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const incrementBookInCart = (book) => {
    setIsChangeInCart(!isChangeInCart);
    console.log("selectBook", book);
    let target = cart.find((item) => item._id === book._id);
    console.log("target", target);
    if (target) {
      target.quantity++;
      console.log(cart.indexOf(target));
      cart.splice(cart.indexOf(target), 1, target);
      console.log("new", cart);
      setCart(cart);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const decrementBookInCart = (book) => {
    setIsChangeInCart(!isChangeInCart);
    console.log("selectBook", book);
    let target = cart.find((item) => item._id === book._id);
    console.log("target", target);
    if (target) {
      target.quantity > 0 && target.quantity--;
      console.log(cart.indexOf(target));
      cart.splice(cart.indexOf(target), 1, target);
      console.log("new", cart);
      setCart(cart);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const totalPrice = () => {
    return (
      cart.length > 0 &&
      cart?.reduce((acc, order) => {
        acc +=
          order?.download_count.toString().substring(0, 3) * order.quantity;
        return acc;
      }, 0)
    );
  };

  const totalItems = () => {
    return (
      cart.length > 0 &&
      cart?.reduce((acc, order) => {
        acc += order.quantity;
        setQuant(acc);
        return acc;
      }, 0)
    );
  };

  const checkout = () => {
    const token=localStorage.getItem("token")
    console.log("checkout", cart);
    const bookIds=cart.map(item=>item._id);
    console.log(bookIds)
    const totalPriceOfItems=totalPrice();
    const toBuy=isRent?false:true;
    
    const rentPeriod=rentTill;
  
    

    const finalOrder={
      books:bookIds,
      totalPrice:totalPriceOfItems,
      userId:user._id,
      tobuy:toBuy,
      toRent:isRent,
      rentTill:rentPeriod,
      orderPlacedOn:new Date().toDateString(),
    }

    fetch("http://localhost:4000/api/cart/addorder",{
      method:"POST",
      headers:{"token":token,"Content-Type":"application/json"},
      body:JSON.stringify(finalOrder)
    }).then(res=>res.json())
    .then(result=>{
      console.log("order",result)
      setOrders(result.updatedUser)
      navigate("/checkout")
    })
    .catch(err=>console.log(err))
  };
 console.log(isRent)
 console.log(rentTill)
  /* 
  console.log(totalPrice()); */
  console.log(cart);
  return (
    <div>
      <NavBar />

      <div style={{ display: "flex", width: "100%", gap: "1rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "2px solid",
            padding: "1rem",
            width: "60%",
            overflow: "scroll",
            height: "100%",
          }}
        >
          {cart.length > 0 &&
            cart?.map((order) => {
              return (
                <div key={order?._id}>
                  <div
                    style={{
                      display: "flex",
                      width: "50%",
                      alignItems: "center",
                      borderBottom: "2px solid",
                      margin: "2rem",
                      gap: "2rem",
                    }}
                  >
                    <div>
                      <img
                        src={order?.formats["image/jpeg"]}
                        alt="bookimage"
                        width="50%"
                      />
                      <div style={{ display: "flex" }}>
                        <button onClick={() => deleteBookInCart(order)}>
                          Delete
                        </button>
                        <button onClick={() => incrementBookInCart(order)}>
                          +
                        </button>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                          <h4>Quantity:</h4>

                          <p>{order?.quantity}</p>
                          <button onClick={() => decrementBookInCart(order)}>
                            -
                          </button>
                          <button onClick={() => setIsRent(false)}>Buy</button>
                          <button onClick={() => setIsRent(!isRent)}>Rent</button>
                        </div>
                        {isRent && (
                          <input
                            type="date"
                            onChange={(e) => setRentTill(e.target.value)}
                          />
                        )}
                      </div>
                    </div>

                    <h3>{order?.title}</h3>
                    <p>{order?.bookshelves[0]}</p>

                    <h4>
                      Price: {order?.download_count.toString().substring(0, 3)}{" "}
                      Euro
                    </h4>
                  </div>
                </div>
              );
            })}
        </div>

        <div>
          <h2>
            Subtotal({totalItems()} items):{totalPrice()}
          </h2>
          <button className="cartButton" onClick={checkout}><Link to="/checkout">Proceed to Checkout</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
