import React,{useState,useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/configureStore'
import Home from '../pages/Home'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../pages/About'
import Restaruant from '../pages/Restaruant'
import { CartProvider } from 'react-use-cart'
import Contact from '../pages/Contact'
import Room from '../pages/Room'
import Login from '../auth/Login'
import BlogList from '../pages/BlogList'
import BlogDetails from '../pages/BlogDetails'
import Dashboard from '../admin/Dashboard'
import RoomDetails from '../pages/RoomDetails'
import AddBlog from '../update/AddBlog'
import EditBlog from '../update/EditBlog'
import NotFoundPages from '../pages/NotFoundPages'
import News from '../pages/News'
import Log from '../authenec/Login'
import WishList from '../pages/WishList'
import { UserProvider }from "../context/UserContext";
import { WishlistProvider } from "react-use-wishlist";
import Cart from '../pages/Cart'
import { Container } from 'react-bootstrap'
const AppRouter = () => {  


  return (
<>
    <BrowserRouter>
    <UserProvider>
    <WishlistProvider>
    <CartProvider>
  
<Header/>

   <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/restaruant' element={<Restaruant/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/room' element={<Room/>}></Route>
 
  <Route path='/cart' element={<Cart/>}></Route>
  <Route path="/blogs"  element={<BlogList />}></Route>
          <Route path="/blogs/:id" element={<BlogDetails />}></Route>
        
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/add" element={<AddBlog />}></Route>
          <Route path="/edit/:id" element={<EditBlog />}></Route>
  <Route path='/roomdet/:id'element={<RoomDetails  />
  
}></Route>
 
    <Route path='*'  element={<NotFoundPages/>}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/wish" element={<WishList />}></Route>
    
   </Routes>

   <Footer/>
  
   </CartProvider>
   </WishlistProvider>
   </UserProvider>
   </BrowserRouter>
   </>
  )
}

export default AppRouter