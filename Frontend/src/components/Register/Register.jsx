import React from 'react'

import toast,{Toaster} from 'react-hot-toast' //this is for popups after login
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate=useNavigate()

  const register=(e)=>{
    e.preventDefault();
    const user={
      firstName:e.target.firstname.value,
      lastName:e.target.lastname.value,
      email:e.target.email.value,
      password:e.target.password.value
    }
    
    fetch("http://localhost:4000/api/users/register",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
    }).then(res=>res.json())
    .then(result=>{
      if(result.errors){
        console.log(result.errors);
        toast.error(JSON.stringify(result.erros))//this is to pop up the error message
      }else{
        e.target.reset()
        toast.success("you successfully registered")//this is to pop up the error message
        setTimeout(()=>{
            navigate("/login")//this is navigate to login page 
        },1500)
      }

    }).catch(err=>console.log(err))
  }
  return (
   


    <div >
      
      <h1>Register</h1>
      <Toaster position="top-center"/>
      <form action="" style={{width:"10%",display:"flex",flexDirection:"column"}} onSubmit={register}>
        <label htmlFor="firstname">First Name : </label>
        <input type="text" id="firstname" name="firstname" />
        <label htmlFor="lastname">Last Name : </label>
        <input type="text" id="lastname" name="lastname" />
        <label htmlFor="email">Email : </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password : </label>
        <input type="password" id="password" name="password" />
        <button>Register</button>

      </form>
      
      </div>
    
  )
}