import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Cart from './components/Cart/Cart'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Register from './components/Register/Register'
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search" element={<SearchBar/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/cart" element={<Cart/>}/>   
      </Routes>
      
      </BrowserRouter>
   
    </div>
  )
}

export default App
