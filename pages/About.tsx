import React from 'react'
import MyOwlCarousel from '../components/MyOwlCarousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useTranslation } from "react-i18next";
import CommonSection from '../components/CommonSection'
import Helmet from '../components/Helmet'
import Testimionals from '../components/Testimionals'

const aboutimg=require("../assets/images/hotel.jpg")
const hero1= require('../assets/images/img1.jpg')
const hero2= require('../assets/images/img2.jpg')
const icon1= require('../assets/images/location-icon.png')
const icon2= require('../assets/images/break-icon.png')
const icon3= require('../assets/images/car-icon.png')
const icon4= require('../assets/images/sports.png')
const icon5= require('../assets/images/wf.png')
const icon6= require('../assets/images/bed-icon.png')
const OwlCarousel:any=require("react-owl-carousel");
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
const team1 =require('../assets/images/team1.jpg')
const team2 =require('../assets/images/team2.jpg')
const team3 =require('../assets/images/team3.jpg')
const team4 =require('../assets/images/team4.jpg')
const team5 =require('../assets/images/team5.jpg')
const team6 =require('../assets/images/4.jpg')
const About = () => {
  const options :any= {
    loop: true,
    margin: 10,
    items: 3,
    autoplay: true,
    responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
        items:2,
        nav:false
    },
    1000:{
        items:3,
        nav:true,
        loop:false
    }}

  };
  const { t, i18n } = useTranslation();
  return (
   <Helmet title='About'>

<CommonSection title='About Us' image={aboutimg} />
  
<div className="about">
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
           
            <p className="lead text">Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane. <br /><br />

Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start justify-content-center align-items-center">
           <span  className="nav-link px-2 a me-4   phone-icon "><i className="fa-solid fa-phone-volume "></i></span> <p><span className='resar'>{t('home2.name4')}</span><p className='phone-number'>855 100 4444</p></p>
            </div>
          </div>
        </div>
      </div> 

      <OwlCarousel className="owl-theme container" {...options}>
      
  <div className="item">
    
        <div className="card">
          <img src={team2} alt=""className='card-img' />
          <div className="card-bod">
          <h3 className='card-tit'>Michael White</h3>
         <p className="subtitle"> Guest service Department</p>
         <p className="mail">white99@gmail.com</p>
          <div className="icon-box"><ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-twitter text-light"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-pinterest text-light"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-instagram text-light"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-facebook text-light"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-youtube text-light"></i></a></li>
          
        </ul></div>
          </div>
       
    </div>
  </div>
  <div className="item">
 
        <div className="card">
          <img src={team4} alt="" className='card-img' />
          <div className="card-bod">
          <h3 className='card-tit'>Victoria Dan</h3>
          <p className="subtitle">Meeting and event manager</p>
          <p className="mail">DaniVictorian@hotel.com</p>
          <div className="icon-box"><ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-twitter text-light"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-pinterest text-light"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-instagram text-light"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-facebook text-light"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-youtube text-light"></i></a></li>
          
        </ul></div>
          </div>
       
    </div>
    </div>
    <div className="item">
        <div className="card">
          <img src={team3} alt=""className='card-img' />
          <div className="card-bod">
          <h3 className='card-tit'>Olivia Martin</h3>
          <p className='subtitle'>Reservation manager</p>
          <p className="mail">oliviamartin@gmail.com</p>
          <div className="icon-box"><ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-twitter text-light"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-pinterest text-light"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-instagram text-light"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-facebook text-light"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-youtube text-light"></i></a></li>
          
        </ul></div>
          </div>
        
        
       </div></div>
    <div className="item">
        <div className="card">
          <img src={team1} alt=""className='card-img' />
          <div className="card-bod">
          <h3 className='card-tit'>Mariana Diana</h3>
          <p className='subtitle'>FB Manager</p>
          <p className="mail">marianadana@gmail.com</p>
          <div className="icon-box"><ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-twitter text-light"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-pinterest text-light"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-instagram text-light"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-facebook text-light"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-youtube text-light"></i></a></li>
          
        </ul>

          </div>
        </div>
        
       </div></div>
    <div className="item"> 
     <div className="card">
          <img src={team6} alt="" className='card-img' />
          <div className="card-bod">
          <h3 className='card-tit'>Valentino Carla</h3>
          <p className="subtitle">General Manager</p>
          <p className="mail">ValentinoCarla@gmail.com</p>
          <div className="icon-box"><ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-twitter text-light"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-pinterest text-light"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-instagram text-light"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-facebook text-light"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-youtube text-light"></i></a></li>
          
        </ul></div>
          </div>
        </div></div>
    <div className="item"> 
     <div className="card">
          <img src={team5} alt="" className='card-img' />
          <div className="card-bod">
          <h3 className='card-tit'>Enrico Brown</h3>
          <p className="subtitle">Head Chef</p>
          <p className="mail">Brown@hotel.com</p>
          <div className="icon-box"><ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-twitter text-light"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-pinterest text-light"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-instagram text-light"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-facebook text-light"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-youtube text-light"></i></a></li>
          
        </ul></div>
          </div>
        </div></div>
       
  </OwlCarousel>

  <div className="sliders">
    <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-7">
          <MyOwlCarousel/>
          </div>
          <div className="col-lg-5">
            <p className='service-heading1-text mb-0'>BEST PRICES</p>
            <p className="fs-1 lh-1 mb-3 text-light service-heading2-text">Extra Services</p>
            <p className="lead detail">The best prices for your relaxing vacation. The utanislen quam nestibulum ac quame odion elementum sceisue the aucan. <br /><br />Orci varius natoque penatibus et magnis disney parturient monte nascete ridiculus mus nellen etesque habitant morbine.
            
            </p>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start justify-content-center align-items-center">
           <span  className="nav-link px-2 a me-4   phone-icon "><i className="fa-solid fa-phone-volume "></i></span> <p><span className='resar'>Resarvation</span><p className='phone-number'>855 100 4444</p></p>
            </div>
          </div>
        </div>
      </div>  </div>
      <div className="container mt-5">
        <div className="col col-lg-12 col-md-12 col-sm-12 "data-aos='fade-up' >

<h5 className="service-text1">OUR SERVICES</h5>
<h1 className="service-text2">Hotel Facilities</h1>

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
  </div></div>
 
 
  <Testimionals />
   </Helmet>
  )
}

export default About