import React from 'react'
import { Button } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist'
import ProductIem from '../product/ProductIem';
import CommonSection from '../components/CommonSection';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Helmet from '../components/Helmet';
const lobby =require('../assets/images/room10.jpg')
const Wishlist = () => {
    const {items,isWishlistEmpty,emptyWishlist,removeWishlistItem,wishlistTotal} = useWishlist();
    const { t, i18n } = useTranslation();
    const {addItem} = useCart();
    if (isWishlistEmpty) return (  <Helmet title='Favorites'><div className="text-center">  <CommonSection title='Your Favorities is Empty' image={lobby}/>

</div></Helmet>)
  return (
    <Helmet title='Favorites'>
        <CommonSection title='Your Favorities' image={lobby}/>
        <div className="container">
    <div className="row">
       
    {
       items.map((item,index)=>(
        <div className='col col-lg-4 col-md-6 col-sm-12 col-xs-12' key={index}>
 <div className=" mb-4 prod card">
      <div className="wrapper ">
      <img src={item.image01} alt="" className='proimg' />
      <div className="procontent">
      <p className="card-text">{item.price}$/Night</p>
    <h5  className='title'>{item.title}</h5>
    <hr  className='text-light mt-0'/>
    
       
        
  
     
    
      <button onClick={()=>{(removeWishlistItem(item.id))}} className='wish btn '><i className=" fa-regular fa-heart text-danger "></i></button> 
    
      </div>
     
      
  
      </div>
      <div className="card-body display-flex justify-content-between">
   <div>{}</div>
      <button  onClick={()=>{addItem(item)}}  className='btnbook text-end' type='button'  >{t('products.book')}</button>
      </div>
    </div>
    </div>
       ))
     }
    </div></div>
    <div className="container">
<div className="row">
<div className="col-lg-6">
<button className='btn vbtn btn-sm' onClick={()=>{emptyWishlist()}}>Clear All</button>
</div>
<div className="col-lg-6"></div>
</div></div>
    </Helmet>
  )
}

export default Wishlist