import { useState, useEffect } from "react";
import { MyContext } from "./context";

export default function Container({ children }) {
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState(null);
  const [search, setSearch] = useState(null);
  const [bookId, setBookId] = useState(null);
  const [requestedBook,setRequestedBook] = useState(null);
  const [islike,setisLike]=useState(false);
  const [like,setLike]=useState(null)
  const [quant,setQuant]=useState(0)

  useEffect(() => {
    //on load
    const token = localStorage.getItem("token");

    if (token) {
      fetch("http://localhost:4000/api/users/verifytoken", {
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
        quant,setQuant
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
