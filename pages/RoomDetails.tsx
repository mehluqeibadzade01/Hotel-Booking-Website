import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import ProductsData from '../assets/fake-data/products';
import Helmet from '../components/Helmet';
import ProductItem from '../product/ProductIem';
import CommonSection from '../components/CommonSection';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlCarousel:any=require("react-owl-carousel");
const hotelImg =require('../assets/images/lobby.jpg')
  const bath =require('../assets/images/bathroom.jpg')
  
const ExploreDetails = (props:any) => {
  const  [tab,setTab]=useState('desc')
 
  const { id } = useParams()
  const [allproducts,setAllproducts]=useState(ProductsData)
  
  const {title,price,category,desc,image01,personnum}:any=allproducts.find((product)=>product.id==id)
  const relatedProduct=allproducts.filter((item)=> title===item.title)
  const options :any= {
    loop: true,
    margin: 10,
    items: 1,
    autoplay: true
  };
  return (


   <Helmet title='Room Details'>
    <section>
 
<div className="w-100 overflow-hidden">
  <img src={hotelImg} alt="" className='detailroom kenburns-top '/>
</div>
      <div className="full-detail mb-5">
        
        <div className="detailsroom-container">
          {
            allproducts
              .filter((list) => list.id == id)
              .map((list) => (
                
                <div className="full-card mt-5" key={ list.id }>
                  <div className="container">
                    <div className="row">
                      <div className=" col col-lg-6 col-md-12 col-sm-12">
                       <img src={list.image01} alt="" className='detailphoto mt-2' />
                       <img src={bath} alt="" className='detailphoto' />
                      </div>
                      <div className="col-lg-6 col col-sm-12 col-md-12">
                        <span className="luxury">Luxury Hotel</span>
                        <h2 className='det-title'>{list.title}</h2>
                        <h2 className='det-title'>{list.category}</h2>
                        <p className='det-desc'>{list.desc}</p>
                        <p className="persnum"> For {list.personnum} People</p>
                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                          <div className="in">
                            <h6 >Check-in</h6>
                            <p>Check-in from 9:00 AM - anytime</p>
                            <p>
                              Early check-in subject to availability
                              </p>
                          </div>
                          <div className="out">
                          <h6 >Check-out</h6>
                            <p>Check-out before noon</p>
                            <p>
                              
                             Express check-out
                              </p>
                          </div>
                        </div>
                        <h6>Special check-in instructions</h6>
                        <p>Guests will receive an email 5 days before arrival with check-in instructions; front desk staff will greet guests on arrival For more details, please contact the property using the information on the booking confirmation.</p>
                        <h6>Pets</h6>
                        <p>Pets not allowed</p>
                        <h6>Children and extra beds</h6>
                        <p>Children are welcome Kids stay free! Children stay free when using existing bedding; children may not be eligible for complimentary breakfast Rollaway/extra beds are available for $ 10 per day.</p>
                      </div>
                      
                      
                    </div>
                  </div>
                </div>
              ))}

        </div>
      </div>

  
      <div className="w-100 releatedroom">
<div className="container">
  <div className="row">
    <div className="col-lg-12">
      <h2 className='text-light mb-3 simitext'>Similiar Rooms</h2>
    </div>
  </div>
</div>
      <div className="container">

        <div className="row">
        {relatedProduct
              .map((list,i) => (
             <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
              <ProductItem addwish={list} id={list.id} title={list.title} price={list.price} image01={list.image01} personnum={list.personnum} category={list.category} desc={list.desc}  addproduct={list}/>
             </div>
            ))}
        </div>
      </div>
      </div>
   
      </section>
      </Helmet>
  )
}

export default ExploreDetails