import React, { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Like from "../../../../Backend/models/likeSchema";
import { MyContext } from "../../contexts/context";
import Likes from "../Likes/Likes";
import NavBar from "../NavBar/NavBar";
import toast,{Toaster} from 'react-hot-toast'

const BookInfo = () => {
  const navigate = useNavigate();
  const {
    bookId,
    user,
    setLike,
    like,
    requestedBook,
    setRequestedBook,
    cart,
    setCart,
    search,
    islike,
    quant,
    setisLike,
    setQuant,
    rent,setRent
  } = useContext(MyContext);
  console.log(bookId);

  useEffect(() => {
    fetch(`http://localhost:4000/api/books/getBookById/${bookId}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result.data);
        setRequestedBook(result.data);
      })
      .catch((err) => console.log(err));
    console.log(bookId);
  }, [bookId]);

  console.log(requestedBook);
  console.log(bookId);

  //likes need to handled later
  const createLike = () => {
    fetch(`http://localhost:4000/api/likes/addlike`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: user._id,
        bookId: requestedBook._id,
      }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result.data))
      .catch((err) => console.log(err));
  };

  const updateLike = () => {
    fetch(`http://localhost:4000/api/likes/updatelike/${user._Id}/${bookId}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((result) => setLike(result.data))
      .catch((err) => console.log(err));
  };

  console.log(islike);
  console.log(like);

  //the above likes part will be handled later

  const addToCart=()=>{
    if(user){
      const foundItem=cart.find(item=>item._id===requestedBook._id)
      
      if(foundItem){
        foundItem.quantity++
        localStorage.setItem("cart",JSON.stringify(cart))
        setCart([...cart])
        navigate("/cart")
      }else{
        setCart([...cart,{...requestedBook,quantity:1}])
        localStorage.setItem("cart",JSON.stringify([...cart,{...requestedBook,quantity:1}]))
        navigate("/cart")
      }
    }else{
      toast.error("Login to Add to Cart")

    }
    
  }

  /* const buyBook = () => {
    const buy={
      books: [bookId],
      totalPrice: parseInt(requestedBook.download_count.toString().substring(0, 3)),
      userId: user._id,
      toBuy:true
    }

    const gettoken=localStorage.getItem("token")

    fetch("http://localhost:4000/api/cart/addorder", {
      method: "POST",
      headers: { token:gettoken,"Content-Type": "application/json" },
      body: JSON.stringify(buy)
  }
  ).then(res=>res.json())
  .then(result => {

  console.log(result)
      const duplicates=cart?.find(order=>order.books[0]._id===bookId)
      console.log(duplicates)

      if(duplicates){
        window.alert("order already exists, do you want to add more")
        duplicates.books[0].quantity++
         navigate("/cart")
        
      }else{
        result.updatedUser.orders.map(order=>order.books[0].quantity=1)
        setCart(result.updatedUser.orders)
        navigate("/cart")
      }    
  }).catch((err) => console.log(err))
  }; */

  const rentBook=()=>{
      setRent(!rent)

  }
console.log(cart)

const minDate=new Date().toDateString()
console.log(minDate)

  return (
    <div>
      <NavBar/>
    <div style={{ display: "flex", gap: "2rem" }}>
    <Toaster position="top-center"/>
      <img src={requestedBook?.formats["image/jpeg"]} />
      <div>
        <h3>{requestedBook?.title}</h3>
        <h2>Authors</h2>
        {requestedBook?.authors.map((author) => (
          <li key={author.id}>{author.name}</li>
        ))}
        <h3>Genre</h3>
        <p>
          {requestedBook?.bookshelves[0] ||
            requestedBook?.subjects[requestedBook?.subjects.length - 2]}
        </p>
        <h2>Price:</h2>
        <h2>
          {requestedBook?.download_count.toString().substring(0, 3)} Euros
        </h2>
      </div>

      <div>
        <button
          onClick={() => {
            setisLike(true);
            createLike();
            islike && updateLike();
          }}
        >
          Like{islike && like?.like}
        </button>
        <button>Review</button>

        <div>
          <button onClick={addToCart}>Add to Cart</button>
          <button onClick={rentBook}>Rent</button>
        </div>

        {rent&&<div>
        <input type="date"  min={`${minDate}`}/>
        </div>}

      </div>
    </div>
    </div>
  );
};

export default BookInfo;
