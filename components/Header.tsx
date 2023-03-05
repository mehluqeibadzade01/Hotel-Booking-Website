import React from 'react'
import useLocalStorage from 'use-local-storage'
import { Link } from 'react-router-dom'
import {useRef,useEffect,useState,useContext} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import{useCart} from 'react-use-cart'
import useTheme from './hooks/useTheme'
import { UserContext } from '../context/UserContext';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import userData from "../auth/UserData";
import "../langconfig/i18next";
import { useTranslation } from 'react-i18next'
import { useWishlist } from 'react-use-wishlist'
const logo = require('../assets/images/logo.png')

const Header = () => {

  useEffect(()=>{
    const header:any = document.querySelector<HTMLDivElement>('.head');
    window.onscroll = ()=>{
        if (document.documentElement.scrollTop > 140) {

            header.style.zIndex = '9999999999999';
            header.style.backgroundColor = 'white';
            header.style.position = 'fixed';
            header.style.height = '85px';
            header.style.transition = '.6s';
            header.style.boxShadow='0 3px 5px rgba(57, 63, 72, 0.3)'
            if(document.querySelector('body')?.className==='dark'){
              header.style.backgroundColor = '#222';
            }
        }else{
            header.style.zIndex = '9999999999999999999';
            header.style.backgroundColor = 'transparent';
            header.style.position = 'absolute';
            header.style.height = '50px';
            header.style.transition = '.6s';
            header.style.boxShadow='none'
        }
    }  },[])

  const { t, i18n } = useTranslation();
  const handleClick = (lang:any) => {
    i18n.changeLanguage(lang);
  };

  const [users,setUsers] = useContext<any>(UserContext);
  let [userName,setUserName] = useContext<any>(UserContext);
  useEffect(()=>{
    const show = localStorage.getItem("navres");
  
  
     if(show){
       document.documentElement.classList.add("responsive_nav");
    
     }

   },[])
   const navRef:any=useRef();
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
   
   
      navRef.current.classList.toggle("responsive_nav", toggle);
  }, [toggle]);

  
   const { theme, toggleTheme } = useTheme();
   useEffect(() => { document.body.className = theme; }, [theme] );
   const{totalItems}=useCart()
   const{totalWishlistItems}=useWishlist()
  return (
    <div className={`App w-100 head `}  >
    <div className="container ">
    <header className="d-flex  justify-content-between align-items-center  ">
      <Link to="/">
         <img src={logo} alt="logo" className='logo' />
      </Link>

      <ul className='d-flex justify-content-center align-items-center'> 
      {/* <Link to="/log" className='btn nav-btn ms-3'><i className="fa-solid fa-user"></i></Link> */}
    
      <Link to="/login" className='nav-btn ms-3'>
        {users ? <button className='nav-btn btn' onClick={()=>{setUsers(false)}}> <small>{userData.email}</small><i className="fa-solid fa-arrow-right-from-bracket nav-btn"></i></button>:<><i className="fa-solid fa-user"></i></>}</Link>
      {/* <button className="nav-item nav-btn btn lang"><i className="fa-solid fa-globe  "></i></button> */}
      <div className="dropdown">
        <button className="btn nav-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <i className="fa-solid fa-globe  "></i>
        </button>
        <ul className="dropdown-menu">
          <li><button className='dropdown-item nav-btn btnlang' onClick={()=>{handleClick('az')}
          }>Az</button></li>
          <li><button className='dropdown-item nav-btn btnlang' onClick={()=>{handleClick('en')}}>Eng</button></li>
         
        </ul>
      </div>

      <Link to='/cart' className='nav-btn'><i className="fa-solid fa-cart-shopping"><sup>{totalItems}</sup></i></Link>
        <button className="nav-item btn nav-btn nav-open"onClick={()=> setToggle(!toggle) }><i className="fa-solid fa-bars-staggered menu"></i></button>
        </ul>
        <nav className="nav nav-pills aside-menu" ref={navRef}>
        <button className=" btn nav-btn nav-close " onClick={()=> setToggle(!toggle) }><i className='fa-regular fa-x menu'></i></button>
       
        <li className="nav-item a"><Link to='/' className="nav-link a  ">{t('b1.navlink1')}</Link></li>
        <li className="nav-item a"><Link to='/about' className="nav-link  a ">{t('b1.navlink2')}</Link></li>
        <li className="nav-item a"><Link to='/contact' className="nav-link  a ">{t('b1.navlink3')}</Link></li>
        <li className="nav-item a"><Link to='/restaruant' className="nav-link  a  ">{t('b1.navlink4')}</Link></li>
        <li className="nav-item a"><Link to='/room' className="nav-link a">{t('b1.navlink5')}</Link></li>
        <li className="nav-item a"><Link to='/blogs' className="nav-link a">{t('b1.navlink6')}</Link></li>
        <li className="nav-item a"><Link to='/wish'className="nav-link a"><button className='btn vbtn ' ><i className=" fa-regular fa-heart text-light"><sup>{totalWishlistItems}</sup></i></button></Link></li>


       <div className="d-flex gap-5" ><button onClick={toggleTheme} className='modebtn btn'>{theme}</button>
       
       </div>

 

       
      
        
        </nav>
    </header>
  </div></div>
    
  )
}

export default Header