import React, { useContext,useEffect,useState } from "react";
import { MyContext } from "../../contexts/context";
import NavBar from "../NavBar/NavBar";

function Cart() {
  const { cart, quant,setQuant, bookId,user,setCart } = useContext(MyContext);

  console.log(user)
  console.log(cart)
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

 

   const totalPrice = () => {
    return cart?.reduce((acc, order) => {
      acc += order?.download_count.toString().substring(0, 3)*order.quantity;
      return acc;
    }, 0);
  };

  const totalItems=()=>{
    return cart?.reduce((acc, order) => {
      acc += order.quantity;
      return acc;
    }, 0);
  } 
/* 
  console.log(totalPrice()); */
console.log(cart)
  return (

  <div>
<NavBar/>

    <div style={{display:"flex",width:"100%",gap:"1rem"}}>
    <div style={{display:"flex",flexDirection:"column",border:"2px solid",padding:"1rem",width:"60%",overflow:"scroll",height:"100%"}}>
      {cart?.map((order) => {
         return (
          
             <div key={order?._id} >
              <div style={{display:"flex",width:"50%",alignItems:"center",borderBottom:"2px solid",margin:"2rem",gap:"2rem"}}>
                <div>
                <img
                src={order?.formats["image/jpeg"]}
                alt="bookimage"
                width="50%"
             />
             <div style={{display:"flex",gap:"0.5rem"}}>
              <h4>Quantity:</h4>
             
             <p>
               {order?.quantity}
              </p>
            
             </div>
             
                </div>
              
             <h3>{order?.title}</h3>
               <p>{order?.bookshelves[0]}</p>
            
              <h4>Price: {order?.download_count.toString().substring(0, 3)} Euro</h4>
              </div>
           </div>
        
       );
       })}
        </div>

     <div>
         <h2>
          Subtotal({totalItems()} items):{totalPrice()} 
        </h2>
         <button>Proceed to Checkout</button>
       </div>
     </div>
     </div>
  );
}


export default Cart;
