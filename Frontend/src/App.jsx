import { useContext, useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import BookInfo from './components/BookInfo/BookInfo'
import Books from './components/Books/Books'
import Cart from './components/Cart/Cart'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Register from './components/Register/Register'
import SearchBar from './components/SearchBar/SearchBar'
import { MyContext } from './contexts/context'

import Footer from './components/Footer/Footer'

import SingleBook from './components/SingleBook/SingleBook'
import NavBar from './components/NavBar/NavBar'


function App() {
 const {bookId}=useContext(MyContext)  

  return (
    <div>
  
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/search" element={<SearchBar/>}/> */}
      <Route path="/login" element={<Login/>}/>
      <Route path="/books" element={<Books/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path={`books/${bookId}`} element={<BookInfo/>/*  || <SingleBook/> */}/>
      

      <Route path="/cart" element={<Cart/>}/>   
      </Routes>
      
      </BrowserRouter>
    <Footer/> 
    </div>
  )
}

export default App
