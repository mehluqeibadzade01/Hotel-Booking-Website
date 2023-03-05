import React,{useState} from 'react'
import { Button } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist';
import productdata from '../assets/fake-data/products';
import { useTranslation } from "react-i18next";
import CommonSection from '../components/CommonSection'
import Helmet from '../components/Helmet'
import MyOwlCarousel from '../components/MyOwlCarousel'
import ProductsData from '../assets/fake-data/products'
import ProductIem from '../product/ProductIem'
import products from '../assets/fake-data/products'
import { isTryStatement } from 'typescript'
import Discover from '../components/Discover'
const suit =require('../assets/images/room1.jpg')
const Room = () => {
  const [search, setSearch]= React.useState<string>("");
  
  const [allproducts,setAllproducts]=React.useState<{title:string;id:string;price:number;image01:any;personnum:any;category:string;desc:string}[] | undefined>(ProductsData)
  const handleOnclick=()=>{
    const findRoom= allproducts && allproducts?.length>0 ? allproducts?.filter((prod)=>prod?.title===search) : undefined;
    console.log(findRoom);
    
    setAllproducts(findRoom)
  }
  const [products,setProducts] = useState<any>(productdata);

    
  const { t, i18n } = useTranslation();
  return (
    <Helmet title='Rooms&Suits'>

<CommonSection title='Rooms&Suits' image={suit}></CommonSection>
<div className="container mt-5 mb-4">
    <div className="row">
      <div className="col-lg-6">
      <h5 className="room-text1">{t('home2.name1')}</h5>
      <h1 className="room-text2">{t('carousel.sliderbtn')}</h1>
    
      </div>
      <div className="col-lg-6 ">
      < div className="search-widget input_wrapper input-group ">
      <input type="text" value={search} onChange={(e) => {setSearch(e.target.value);setAllproducts(ProductsData)}}></input>
 < button disabled={!search} onClick={handleOnclick}> <i className="fa-solid fa-magnifying-glass "> </i> </button > 
    </div> 
      </div>
      </div>
   
     
      </div>
<div className="container">
  <div className="row">
    {allproducts&& allproducts?.length===0 &&(
      <div className='notFound text-center fs-3 mt-5 mb-5'>No Room Found</div>
    )}
{
      allproducts && allproducts?.length>0 &&  allproducts?.map((item,i)=>(
<div   className='col col-lg-4 col-md-6 col-sm-12 col-xs-12' key={i}>
        <ProductIem id={item.id} title={item.title} price={item.price} image01={item.image01} personnum={item.personnum} category={item.category} desc={item.desc} addwish={item} addproduct={item} />
      </div>
        ))
      }
  
  </div></div>
  <div className="sliders">
    <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-7">
          <MyOwlCarousel/>
          </div>
          <div className="col-lg-5">
            <p className='service-heading1-text mb-0'>{t('home2.name5')}</p>
            <p className="fs-1 lh-1 mb-3 text-light service-heading2-text">{t('home2.name6')}</p>
            <p className="lead detail">The best prices for your relaxing vacation. The utanislen quam nestibulum ac quame odion elementum sceisue the aucan. <br /><br />Orci varius natoque penatibus et magnis disney parturient monte nascete ridiculus mus nellen etesque habitant morbine.
            
            </p>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start justify-content-center align-items-center">
           <span  className="nav-link px-2 a me-4   phone-icon "><i className="fa-solid fa-phone-volume "></i></span> <p><span className='resar'>{t('home2.name4')}</span><p className='phone-number'>855 100 4444</p></p>
            </div>
          </div>
        </div>
      </div>  </div>
    </Helmet>

  )
}

export default Room