import { useState,useEffect } from "react";
import { MyContext } from "./context";

export default function Container({ children }) {
    const [user,setUser] = useState(null)
    const [books,setBooks]=useState([])
    const [cart,setCart]=useState([])


    useEffect(()=>{
        //on load 
        const token = localStorage.getItem("token")
        
        if(token){
            fetch("http://localhost:4000/api/users/verifytoken",{
                method:"GET",
                headers:{"token":token}
            }).then(res=>res.json())
            .then(result=>{
                if(result.success){
                    setUser(result.data)
                }else{
                    console.log(result.message)
                }
            })
        }
    },[])

    return (
        <MyContext.Provider value={{user,setUser,books,setBooks,cart,setCart}}>
            {children}


        </MyContext.Provider>
    )
}