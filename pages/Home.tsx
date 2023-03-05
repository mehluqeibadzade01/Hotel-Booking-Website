import React ,{useEffect,useState,Component}from 'react'
import Header from '../components/Header'
import { useTranslation } from "react-i18next";
import ProductsData from '../assets/fake-data/products'
import 'animate.css';
import 'aos/dist/aos.css'
import "react-multi-date-picker/styles/backgrounds/bg-dark.css"
import "react-multi-date-picker/styles/colors/purple.css"
import Helmet from '../components/Helmet'
import ProductIem from '../product/ProductIem'
import MyOwlCarousel from '../components/MyOwlCarousel'
import DatePicker from 'react-multi-date-picker'

import Check from '../date/Check'
import Testimionals from '../components/Testimionals'
import Discover from '../components/Discover'



const Aos =require('aos')
type Props={item:any,index:any
  
}
const hero1= require('../assets/images/img1.jpg')
const hero2= require('../assets/images/img2.jpg')
const icon1= require('../assets/images/location-icon.png')
const icon2= require('../assets/images/break-icon.png')
const icon3= require('../assets/images/car-icon.png')
const icon4= require('../assets/images/sports.png')
const icon5= require('../assets/images/wf.png')
const icon6= require('../assets/images/bed-icon.png')
const featureData=[
  {
    title:"Pick Up & Drop",
    imgUrl:icon1,
    desc: " We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant."
  },
  {
    title:"Breakfast",
    imgUrl:icon2,
    desc: "Eat tincidunt nisa ace park norttito sit amet space, mus nellentesque habitant"
  },
  {
    title:"Parking Space",
    imgUrl:icon3,
    desc: " Fusce tincidunt nis ace park norttito sit amet space, mus nellentesque habitant."
  },
  {
    title:"Swimming Pool",
    imgUrl:icon4,
    desc: "Swimming pool tincidunt nise ace park norttito sit space, mus nellentesque habitant."
  },
  {
    title:"Fibre Internet",
    imgUrl:icon5,
    desc: "Wifi tincidunt nis ace park norttito sit amet space, mus nellentesque habitant."
  },
  {
    title:"Room Service",
    imgUrl:icon6,
    desc: "Room tincidunt nis ace park norttito sit amet space, mus nellentesque habitant."
  }
]

const Home = () => {
 
  const { t, i18n } = useTranslation();
  const handleClick = (lang:any) => {
    i18n.changeLanguage(lang);
  };

  const [category,setCategory]=useState('ALL')
    const [allproducts,setAllproducts]=useState(ProductsData)

    useEffect(()=>{
      if(category==='ALL'){
        setAllproducts(ProductsData)
      }
      if(category==='SINGLE'){
        const filteredProducts=ProductsData.filter(item=>item.category==='Single')
        setAllproducts(filteredProducts)
      }
      if(category==='FAMILY'){
        const filteredProducts=ProductsData.filter(item=>item.category==='Family')
        setAllproducts(filteredProducts)
      }
      if(category==='DELUXE'){
        const filteredProducts=ProductsData.filter(item=>item.category==='Deluxe')
        setAllproducts(filteredProducts)
      }
        },[category])
  
 
 
Aos.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 100,
});
 
  return (
<Helmet title='Home'>
    <React.Fragment>
  
  <div id="myCarousel" className="carousel slide pointer-event car headline " data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={0}  aria-label="Slide 1" />
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={1} aria-label="Slide 2" className="active" aria-current="true" />
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={2} aria-label="Slide 3"  />
        </div>
        <div className="carousel-inner  ">
          <div className="carousel-item ">
    
            <div className="bg-hov1" style={{width:'100%'}}>
            <div className="bg1"></div>
            </div>
          
          
            <div className="container ">
              <div className="carousel-caption text-center karusel-box ">
              <span className='mb-3 text-center animate__animated animate__fadeInUp'><i className="fa-solid fa-star stars me-2 mb-3"></i> <i className="fa-solid fa-star stars me-2 mb-3"></i><i className="fa-solid fa-star stars me-2 mb-3"></i><i className="fa-solid fa-star stars me-2 mb-3"></i><i className="fa-solid fa-star stars me-2 mb-3"></i></span>
                <h4 className='animate__animated animate__fadeInUp'>{t('carousel.slidersm3')}</h4>
                <h1 className='animate__animated animate__fadeInUp'>{t('carousel.slider3')}</h1>
                <p><a className="btn btn-sm text-light roombtn animate__animated animate__fadeInUp" href="#">{t('carousel.sliderbtn')}</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
          <div className="bg-hov2 d-block w-100"  >
            <div className="bg2"></div></div>
            <div className="container">
            
              <div className="carousel-caption karusel-box text-center">
              <span className='mb-3 text-center animate__animated animate__fadeInUp'><i className="fa-solid fa-star stars me-2 mb-3"></i> <i className="fa-solid fa-star stars me-2 mb-3"></i><i className="fa-solid fa-star stars me-2 mb-3"></i><i className="fa-solid fa-star stars me-2 mb-3"></i><i className="fa-solid fa-star stars me-2 mb-3"></i></span>
                <h4 className='animate__animated animate__fadeInUp'>{t('carousel.slidersm1')}</h4>
                <h1 className='animate__animated animate__fadeInUp'>{t('carousel.slider1')}</h1>
                <p className='btnp animate__animated animate__fadeInUp'><a className="btn btn-sm text-light roombtn" href="#">{t('carousel.sliderbtn')}</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
          <div className="bg-hov3"  style={{width:'100%'}}>
            <div className="bg3"></div></div>
            <div className="container">
              <div className="carousel-caption text-center karusel-box">
              <span className='mb-3 text-center animate__animated animate__fadeInUp'><i className="fa-solid fa-star stars me-2 mb-3"></i> <i className="fa-solid fa-star stars me-2 mb-3"></i><i className="fa-solid fa-star stars me-2 mb-3"></i><i className="fa-solid fa-star stars me-2 mb-3"></i><i className="fa-solid fa-star stars me-2 mb-3"></i></span>
                <h4 className='animate__animated animate__fadeInUp'>{t('carousel.slidersm2')}</h4>
                <h1 className='animate__animated animate__fadeInUp'>{t('carousel.slider2')}</h1>
                <p className='animate__animated animate__fadeInUp'><a className="btn btn-sm text-light roombtn " href="#">{t('carousel.sliderbtn')}</a></p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="false" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="false" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
     <div className="w-100">
      <div className="container col-xxl-8 px-4 py-5 mt-3 hero1" data-aos='fade-up'>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6 d-flex ">
           <img src={hero1} alt="hero1" className='heroimg1'  />
           <img src={hero2} alt="hero2" className='heroimg2'  />
          </div>
          <div className="col-lg-6">
            <span><i className="fa-solid fa-star stars me-2 mb-3"></i> <i className="fa-solid fa-star stars me-2 mb-3"></i><i className="fa-solid fa-star stars me-2 mb-3"></i><i className="fa-solid fa-star stars me-2 mb-3"></i><i className="fa-solid fa-star stars me-2 mb-3"></i></span>
            <p className="heromaintext">{t('home2.name1')}</p>
            <h1 className="display-5 fw-bold lh-1 mb-3 herotxtlittle">{t('home2.name2')}</h1>
           
            <p className="lead text">{t('home2.name3')}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start justify-content-center align-items-center">
           <span  className="nav-link px-2 a me-4   phone-icon "><i className="fa-solid fa-phone-volume "></i></span> <p><span className='resar'>{t('home2.name4')}</span><p className='phone-number'>855 100 4444</p></p>
            </div>
          </div>
        </div>
      </div> 
      </div>
    
   <div className="roomcont mt-5 pt-5">
   <div className="container mb-4">
    <div className="row">
      <div className=" col col-lg-6 col-md-6 col-sm-12">
      <h5 className="room-text1">{t('home2.name1')}</h5>
      <h1 className="room-text2">{t('carousel.sliderbtn')}</h1>
      </div>
      <div className=" col col-lg-6 col-md-6 col-sm-12">
      <div className="btnbox d-flex ">
        <button className={`all-btn btnroomfilter ${category==='ALL' ? 'foodBtnActive': ' '} me-3`} onClick={()=>setCategory('ALL')} >{t('buttons.btna')}</button>
        <button  className='btnroomfilter me-3'  onClick={()=>setCategory('FAMILY')}>{t('buttons.btnf')}</button>
        <button className='btnroomfilter me-3' onClick={()=>setCategory('SINGLE')}>{t('buttons.btns')}</button>
        <button className='btnroomfilter me-3' onClick={()=>setCategory('DELUXE')}>{t('buttons.btnd')}</button>
      </div>
      </div>
      </div>
    
     
      </div>
      
    </div>
    <div className="roomcont">
    <div className="container">
     <div className="row">
     {
        allproducts.map((item,index)=>(
<div className='col col-lg-4 col-md-6 col-sm-12 col-xs-12 '>
        <ProductIem key={index}  id={item.id} title={item.title} price={item.price} image01={item.image01} personnum={item.personnum} category={item.category} desc={item.desc} addproduct={item} addwish={item} />
      </div>
        ))
      }
     </div></div>
    </div>
   <div className="sliders">
    <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10  col col-sm-12 col-md-6 col-lg-7">
          <MyOwlCarousel/>
          </div>
          <div className="col-lg-5 col-md-6 col col-sm-12">
            <p className='service-heading1-text mb-0'>{t('home2.name5')}</p>
            <p className="fs-1 lh-1 mb-3 text-light service-heading2-text">{t('home2.name6')}</p>
            <p className="lead detail">{t('home2.name7')}
            
            </p>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start justify-content-center align-items-center">
           <span  className="nav-link px-2 a me-4   phone-icon "><i className="fa-solid fa-phone-volume "></i></span> <p><span className='resar'>{t('home2.name4')}</span><p className='phone-number'>855 100 4444</p></p>
            </div>
          </div>
        </div>
      </div>  </div>
      <div className="promotional-background  d-flex  align-items-center justify-content-center">
      
      <div className="promhover d-flex flex-column align-items-center justify-content-center">
      <div className="promotional-star"> <span><i className="fa-solid fa-star stars me-2 mb-3"></i> <i className="fa-solid fa-star stars me-2 mb-3"></i><i className="fa-solid fa-star stars me-2 mb-3"></i><i className="fa-solid fa-star stars me-2 mb-3"></i><i className="fa-solid fa-star stars me-2 mb-3"></i></span>
</div>
<div className="name-hotel">
THE CAPPA LUXURY HOTEL</div>
<div className="promotional-text">Promotional Image</div>
      </div>

      </div>
      <div className="container mt-5">
        <div className="col col-lg-12 col-md-12 col-sm-12 "data-aos='fade-up' >

<h5 className="service-text1">{t('home2.featur1')}</h5>
<h1 className="service-text2">{t('home2.featur2')}</h1>

</div>
</div>
      <div className="container featurbpx">
    <div className="row" data-aos='fade-up'>

    
    
      {
        featureData.map((item,index)=>(
          <div className="col col-lg-4 col-md-6 col-sm-12  col-xs-12 featur"  key={index}>
            <div className="feature-item text-center px-5 py-3 ">
              <div className="image"> <img src={item.imgUrl} alt="featured-img"className='w-25 mb-3 feature-img ' />
              <h5 className='fw-bold featur-title'>{item.title}</h5></div>
             
           <div className="content">
          
            <p className='featur-desc'>{item.desc}</p>
           </div>
            
            </div></div>
        ))
      }
      
    
    </div>
  </div>
<div>

</div>

<Check/>
<Testimionals/>
<Discover/>
   </React.Fragment>
   </Helmet>
  )
  
}
export default Home