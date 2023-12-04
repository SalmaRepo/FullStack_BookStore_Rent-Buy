import React, { useContext } from 'react'
import { MyContext } from '../../contexts/context'

function Cart() {
  const {cart,quant,bookId}=useContext(MyContext)
  console.log(cart)
 

  return (
    <div>
      {cart?.map(order=>{
        return (
          <div key={order?._id}>
            <img src={order?.books[0].formats["image/jpeg"]} alt="bookimage" />
           <h1>{order?.books[0].title}</h1>
           <p>{order?.books[0].bookshelves[0]}</p>
           <p>Quantity:{order?.books[0].quantity?order.books[0].quantity:0}</p>

           <button>Proceed to CheckOut</button>
          </div>
        )
      })}
    </div>
  )
}

export default Cart