import React,{useRef,useEffect,useState,useContext} from 'react'
import {useCart} from 'react-use-cart'
import ProductsData from '../assets/fake-data/products'
import Login from '../auth/Login'
import {Link} from 'react-router-dom'
import Helmet from '../components/Helmet'
import { useTranslation } from "react-i18next";
import CommonSection from '../components/CommonSection'
import { UserContext } from '../context/UserContext';
const reception =require('../assets/images/reception3.jpg')

const Cart = () => {
  const { t, i18n } = useTranslation();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  const [allproducts,setAllproducts]=useState(ProductsData)
  const [users,setUsers] = useContext(UserContext);
  const sumbitCart=()=>{
   emptyCart()
   alert('Your order has been successfully completed');
  }
  const {isEmpty,items,updateItemQuantity,removeItem,cartTotal,emptyCart}= useCart();
if (isEmpty) return <div className="text-center">  <CommonSection title='Your Cart' image={reception}/><div className='container d-flex align-items-center justify-content-center' ><h2 className=' emptytext'>{t('cart.emptycart')}<Link to='/room' className='nav-link fs-5 mt-5 text-secondary'>{t('cart.click')}</Link>
</h2>

</div>

</div>;
  
  return (
    <Helmet title=' Cart'>
      <CommonSection title='Your Cart' image={reception}/>
    <section>
    

    <div className='container'>  <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">{t('cart.imag')}</th>
        <th scope="col">{t('cart.title')}</th>
        <th scope="col">{t('cart.qiymət')}</th>
        <th>{t('cart.say')}</th>
        <th scope="col">{t('cart.delet')}</th>
      </tr>
    </thead>
    <tbody className="table-group-divider">

{items.map((item,i)=>{return(   
        <tr key={i}>
        <th className='row'>{i+1}</th>
        <td><img src={item.image01} alt="" width={90}height={120} /></td>
        <td className='mx-auto'>{item.title}</td>
        <td>{item.price*item.quantity}$</td>
        
        <td>
          <button className="btn btn-dark btn-sm" onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</button>
          <span className="mx-2">{item.quantity}</span>
          <button className="btn btn-dark btn-sm" onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</button>
          </td>
                <td><button onClick={()=>{removeItem(item.id)}} className="btn-dark btn">X</button></td>
            
        </tr>)})}


   
     
    </tbody>
  </table>
  <div className="container">
   <div className="row">
   <div className="col-lg-6 col-sm-12 col-md-12 col">
      <h3 className='total'>{t('cart.total')}: {cartTotal}$</h3>
  
  <button className='btn bttn btn-md' onClick={()=>{emptyCart()}}>{t('cart.clear')}</button>
  </div>
  <div className="col-lg-6 col-sm-12 col-md-12 col">
  <Link to='/room' className='nav-link '>{t('cart.click')}</Link>
 {users ? <button className='btn bttn btn-md' onClick={sumbitCart}>{t('cart.sub')}</button>:<Link to='/login' className=' btn bttn btn-md nav-item'>{t('cart.log')}</Link>}
    
  </div>
   </div>

    </div>
  
  </div>
  </section>
  </Helmet>
  )
}

export default Cart