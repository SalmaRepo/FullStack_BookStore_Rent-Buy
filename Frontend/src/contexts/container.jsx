import { useState, useEffect } from "react";
import Base_URL from "../../config/urlBase";
import { MyContext } from "./context";


export default function Container({ children }) {
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState(null);
  const [bookId, setBookId] = useState(null);
  const [requestedBook,setRequestedBook] = useState(null);
  const [islike,setisLike]=useState(false);
  const [like,setLike]=useState(null);
  const [quant,setQuant]=useState(0);
  const [isRent,setIsRent]=useState(false);
  const [isLogin,setisLogin]=useState(false);
  const [rentTill,setRentTill]=useState("")
  const [isChangeInCart,setIsChangeInCart]=useState(false);
  const [orders,setOrders]=useState([]);
  const [completedOrders,setCompletedOrders]=useState([])
  

  useEffect(() => {
    //on load
    const token = localStorage.getItem("token");
    const cart=localStorage.getItem("cart");
 
   
    if(cart){
      setCart(JSON.parse(cart))
    }
  

    if (token) {
      fetch(`${Base_URL}/api/users/verifytoken`, {
        method: "GET",
        headers: { token: token },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success) {
            setUser(result.data);
          } else {
            console.log(result.message);
          }
        });
      }

 

       
  }, []);



  return (
    <MyContext.Provider
      value={{
        user,
        setUser,
        books,
        setBooks,
        cart,
        setCart,
        search,
        setSearch,
        bookId,
        setBookId,
        requestedBook,
        setRequestedBook,
        islike,setisLike,
        like,setLike,
        quant,setQuant,
        isRent,setIsRent,
        isLogin,setisLogin,
        isChangeInCart,setIsChangeInCart,
        rentTill,setRentTill,
        orders,setOrders,
        completedOrders,setCompletedOrders
      
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
