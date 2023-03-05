import React from 'react'
import { useParams } from 'react-router-dom'
import   '../assets/fake-data/products.js'
import { Link } from 'react-router-dom'
import { url } from 'inspector'
import { useTranslation } from "react-i18next";
import products from '../assets/fake-data/products.js'
import { Button } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useWishlist } from 'react-use-wishlist';
type Props={


  id:string,
  title:string,
  price:number,
  image01:string,
  personnum:string,
  category:string,
  desc:string,
  addproduct:any,
  addwish:any
  


}

const ProductIem = ( {id,title,price,image01,personnum,category,desc,addproduct,addwish}:Props) => {
  const notafiy:any = () => toast.success('Has been added!', {
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });;
  const {addItem}=useCart()
  const { addWishlistItem } = useWishlist();
  const { t, i18n } = useTranslation();
  return (
 
    <div className=" mb-4 prod card">
      <div className="wrapper ">
      <img src={image01} alt="" className='proimg' />
      <div className="procontent">
      <p className="card-text">{price}$/Night</p>
    <h5  className='title'>{title}</h5>
    <hr  className='text-light mt-0'/>
    
       
        
  
     
    <button className='btndetails'><Link to={`/roomdet/${id}`}>{t('products.detail')}</Link></button>
      <button onClick={()=>{notafiy(addWishlistItem(addwish))}} className='wish btn'><i className=" fa-regular fa-heart"></i></button> 
      <ToastContainer
      toastStyle={{ backgroundColor: "#AA8453",color:"white" }}
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
      </div>
     
      
  
      </div>
      <div className="card-body display-flex justify-content-between">
   <div>{}</div>
      <button  onClick={()=>{notafiy(addItem(addproduct))}}  className='btnbook text-end' type='button'  >{t('products.book')}</button><ToastContainer
      toastStyle={{ backgroundColor: "#AA8453",color:"white" }}
              position="bottom-right"
              autoClose={6000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
      </div>
    </div>
  
        

  )
}

export default ProductIem