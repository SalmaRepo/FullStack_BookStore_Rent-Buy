<<<<<<< HEAD
import React, { useContext} from 'react'
import { MyContext } from '../../contexts/context'

import { useNavigate } from 'react-router-dom'

function Login() {
  const {setUser} =useContext(MyContext)
  const navigate = useNavigate()
  const loginUser=(e)=>{
      e.preventDefault()
      //POST request
      fetch("http://localhost:4000/api/users/login", {
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({email: e.target.email.value, password :e.target.password.value })
      })
      .then(res=>{
      const token = res.headers.get("token")
      if(token){
          //storing/writing token in localstorage
          localStorage.setItem("token",token) 
      }
      return res.json()
      })
      .then(result=>{
         if(result.success){
          setUser(result.data)
          navigate("/profile")
          }else{
          console.log(result.message)
         }
      })
      .catch(err=>console.log(err))
  }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={loginUser}>
        <label htmlFor="email">Email :</label>
        <input type="email" id='email' name="email" /> <br />

        <label htmlFor="password">Password : </label>
        <input type="password" id='password' name="password" /> <br />

        <button>Login</button>
    </form>
    </div>
  )
}
=======
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../contexts/context";
import Register from "../Register/Register";
import { Link } from "react-router-dom";

export default function Login() {
  const { user, setUser } = useContext(MyContext);
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    const loginInfo = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    fetch("http://localhost:4000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginInfo),
    })
      .then((res) => {
        const token = res.headers.get("token");
        if (token) {
          localStorage.setItem("token", token);
        }
        return res.json();
      })
      .then((result) => {
        if (result.success) {
          setUser(result.data);
          /*   navigate("/books") */
        } else {
          console.log(result.message);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      style={{
        width: "30rem",
        height:"30rem",
        margin: "2rem auto",
        padding:"2rem",
        border: "2px solid",
        position: "absolute",
        zIndex: "1",
        left: "30rem",
        top:"3rem"
      }}
    >
      <h1>Login</h1>
>>>>>>> cdc054d993d9f3149fdac41ce62f354900227454

      <form
        action=""
        style={{ width: "10%", display: "flex", flexDirection: "column" }}
        onSubmit={loginUser}
      >
        <label htmlFor="email">Email : </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password : </label>
        <input type="password" id="password" name="password" />
        <button>Login</button>
        <p>Dont have an Account, please Register</p>
        <Link to="/register">Regsiter</Link>
      </form>
    </div>
  );
}
