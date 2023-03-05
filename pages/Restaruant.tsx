import { useState, useEffect } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Helmet from "../components/Helmet";
import { log } from "console";
import Testimionals from "../components/Testimionals";
const OwlCarousel:any=require("react-owl-carousel");
const rest1=require('../assets/images/bar.jpg')
const rest2=require('../assets/images/chef1.jpg')
const rest3=require('../assets/images/chef.jpg')
const menu3=require('../assets/images/drinkrest1.jpg')
const menu2=require('../assets/images/drinklemon.jpg')
const menu1=require('../assets/images/drinkrest1.jpg')
const menu0=require('../assets/images/menuimg1.jpg')
const menu4=require('../assets/images/starter1.jpg')
const menu5=require('../assets/images/starter.jpg')
const menu6=require('../assets/images/menuwine.jpg')
const menu7=require('../assets/images/menuwine1.jpg')
const menu8=require('../assets/images/pastry-img-4.jpg')
const menu9=require('../assets/images/pastry-img-6.jpg')
const menu10=require('../assets/images/saladrest.jpg')
const menu11=require('../assets/images/saladrest1.jpg')
const menu12=require('../assets/images/resta.jpg')
const menu13=require('../assets/images/menupizza.jpg')
const menu14=require('../assets/images/menuimg.jpg')
const restslider1=require('../assets/images/restslider.jpg')
const restslider2=require('../assets/images/restslider1.jpg')
const restslider3=require('../assets/images/restslider2.jpg')
const restslider4=require('../assets/images/restslider3.jpg')
const axios=require('axios')
type res =
 {drinks:any,
  start:any,
 menu:any,
 main:any,
 salad:any,
 desert:any,
  foodname:string,
  price:string,
  ingridients:string
  categoryfood:string
  }


export default function App() {
  
  const options :any= {
    loop: true,
    margin: 0,
    items: 5,
    autoplay: true
  };
  const opt :any= {
    loop: false,
    margin: 10,
    items: 1,
    autoplay: false
  };
  const [data, setData]=useState<res>();
  useEffect(() => {
    fetch('./menu.json')
      .then(resp => resp.json())
      .then(datas => setData(datas));
  }, [])

  
const [filtered,setFiltered]=useState('STARTERS')
  



  
// const filter = data?.menu.filter( (item:any) => {
//   return item.categoryfood === tab
// // })
// console.log(filter)

  return (
    <Helmet title='Restaruant'>
    <section>
      <div className="w-100 overflow-hidden">
   <div className="cont kenburns-top">
    <div className="conthov kenburns-top">
    </div>
    </div>
  </div>
   
       <section id="menu" className="restaurant-menu menu section-padding bg-black">
        <div className="container p-5">
          <div className="row">
            <div className="col-md-12 col col-lg-12 text-center">
              <div className="rest-subtitle"><span className="mb-5 mt-5 rest-subtitle">Luxury Hotel</span></div>
              <div className="rest-title"><span className="mb-5 mt-3 rest-title">Restaurant Menu</span></div>
            </div>
          </div>
      
                
                 
         
            </div>
            <OwlCarousel className="owl-theme" {...opt}>
<div className="item"><div className="container ">
            <div className="row ">
            <div className="col col-lg-4 col-md-12 col-sm-12"><h4  className="text-light category-title">Starters</h4></div>
            <div className="col col-lg-4 col-md-12 col-sm-12">{' '} </div>
            <div className="col col-lg-4 col-md-12 col-sm-12"><h4  className="text-light category-title">Mains</h4></div>
            </div>
            </div>

          <div className="menu-content container">
            <div className="row">
               
              <div className=" col col-lg-4 col-md-12 col-sm-12">
                
              {
                            data?.start.map((e:any,index:any) => {
                  
                              return (  <div className="menu-info " key={index}>
                                  
                                <h5 className="foodname">{e.foodname} <span className="text-dark">---</span><span className="price">{e.price}$</span></h5>
                                
                                <p className="ingridients">{e.ingridients}</p>
                              </div>
                            
                                
                              
                               
                                  
                               
                              );
                            }
          
          )
          
        
}
               
              </div>
                     
              <div className="col col-lg-4 col-md-12 col-sm-12">
                  <div className="foodImg1">

                  </div>
                  <div className="foodImg2">

</div>
                 </div>
              
              <div className=" col col-lg-4 col-md-12 col-sm-12">
                
              {
                            data?.main.map((e:any,index:any) => {
                  
                              return (
                                <div className="menu-info " key={index}>
                                  <h5 className="foodname">{e.foodname} <span className="text-dark">---</span><span className="price">{e.price}$</span></h5>
                                <p className="ingridients">{e.ingridients}</p>
                              </div>
                              
                               
                                  
                               
                              );
                            }
          
          )
          
 
}
               
              </div>

                    </div>
                  </div>
















</div>
<div className="item"><div className="container">
            <div className="row">
            <div className="col col-lg-4 col-md-12 col-sm-12"><h4  className="text-light category-title">Salads</h4></div>
            <div className="col col-lg-4 col-md-12 col-sm-12">{' '} </div>
            <div className="col col-lg-4 col-md-12 col-sm-12"><h4  className="text-light category-title">Deserts</h4></div>
            </div>
            </div>

          <div className="menu-content container">
            <div className="row">
               
              <div className=" col col-lg-4 col-md-12 col-sm-12">
                
              {
                            data?.salad.map((e:any,index:any) => {
                  
                              return (  <div className="menu-info " key={index}>
                                  
                                  <h5 className="foodname">{e.foodname} <span className="text-dark">---</span><span className="price">{e.price}$</span></h5>
                                <p className="ingridients">{e.ingridients}</p>
                              </div>
                            
                                
                              
                               
                                  
                               
                              );
                            }
          
          )
          
        
}
               
              </div>
                     
              <div className="col col-lg-4 col-md-12 col-sm-12">
                  <div className="foodImg3">

                  </div>
                  <div className="foodImg4">

</div>
                 </div>
              
              <div className=" col col-lg-4 col-md-12 col-sm-12">
                
              {
                            data?.desert.map((e:any,index:any) => {
                  
                              return (
                                <div className="menu-info " key={index}>
                                  <h5 className="foodname">{e.foodname} <span className="text-dark">---</span><span className="price">{e.price}$</span></h5>
                                <p className="ingridients">{e.ingridients}</p>
                              </div>
                              
                               
                                  
                               
                              );
                            }
          
          )
          
 
}
               
              </div>

                    </div>
                  </div>
















</div>
<div className="item"><div className="container">
            <div className="row">
            <div className="col col-lg-6 col-md-12 col-sm-12"><h4  className="text-light category-title">Drinks</h4></div>
            
            <div className="col col-lg-6 col-md-12 col-sm-12"><h4  className="text-light">{''}</h4></div>
            </div>
            </div>

          <div className="menu-content container">
            <div className="row">
               
              <div className=" col col-lg-6 col-md-12 col-sm-12">
                
              {
                            data?.drinks.map((e:any,index:any) => {
                  
                              return (  <div className="menu-info  " key={index}>
                                  
                                  <h5 className="foodname">{e.foodname} <span className="text-dark">---</span><span className="price">{e.price}$</span></h5>
                                <p className="ingridients">{e.ingridients}</p>
                              </div>
                            
                                
                              
                               
                                  
                               
                              );
                            }
          
          )
          
        
}
               
              </div>
                     
              <div className="col col-lg-6 col-md-12 col-sm-12">
                <div className="d-flex ">
                <img className="img-menu3 flip-scale-up-ver" src={menu7} width='200px'height='300px' />
                  <img className="img-menu3 flip-scale-up-ver" src={menu1} width='200px'height='300px'/>
                  <img className="img-menu3 flip-scale-up-ver" src={menu2} width='200px'height='300px'/>
                </div>
                <div className="d-flex ">
                <img className="img-menu3 flip-scale-up-ver" src={menu0} width='200px'height='300px'/>
                  <img className="img-menu3 flip-scale-up-ver" src={menu9} width='200px'height='300px'/>
                  <img className="img-menu3 flip-scale-up-ver" src={menu8} width='200px'height='300px'/>
                </div>
                 </div>
         

                    </div>
                  </div>
















</div>

            </OwlCarousel>
     
      </section>
       <section>
       <div className="container col-xxl-8 px-4 py-5 mt-3 hero1 heros" >
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6 d-flex ">
         <img src={rest3} alt="" className="restohero1" />
         <img src={rest2} alt="" className="restohero2" />
          </div>
          <div className="col-lg-6">
            <span><i className="fa-solid fa-star stars me-2 mb-3"></i> <i className="fa-solid fa-star stars me-2 mb-3"></i><i className="fa-solid fa-star stars me-2 mb-3"></i><i className="fa-solid fa-star stars me-2 mb-3"></i><i className="fa-solid fa-star stars me-2 mb-3"></i></span>
            <p className="heromaintext">AN EXPERIENCE FOR THE SENSES</p>
            <h1 className="display-3 fw-bold lh-1 mb-3 herotxtlittle">The Restaurant</h1>
           
            <p className="lead text">Led by Chef de Micheal Martin, The Restaurant is celebrated for its excellent cuisine and unique ambience. The gorgeous dining room features three open studio kitchens, allowing you to enjoy the sights and sounds of the culinary artistry on display. The menu showcases both Asian and European influences, with a tempting selection of classic favorites and creative dishes for you to sample. Cheese connoisseurs will be drawn to the The Wine and Cheese Cellar, housed in five-meter-high glass walls, where our knowledgeable staff can introduce you to some of New York's greatest culinary treasures.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start justify-content-center align-items-center">
            <p><span className='resar text-secondary'>Dress Code</span><p className='resar text-secondary'>Smart casual (no shorts, hats, or sandals permitted)</p></p>
            </div>
          </div>
        </div>
      </div> 
       </section>
       <div className="inter mt-5 pt-5 pb-5">
        <div className="container ">

          <div className="d-flex align-items-center justify-content-between "><img src={menu10} width='200px' height='130px' className="bg1 " /><img src={menu12} width='200px' height='130px' className="bg3 " /><img src={menu13} width='200px' height='130px' className="bg2 " /> <img src={menu14} width='200px' height='130px' className="bg2" /><img src={menu5} width='200px' height='130px' className="bg2" /></div>
          <div className="d-flex align-items-center justify-content-center flex-column">
            <h1 className="resttitle animate__animated animate__fadeInUp">SALADS
/STARTERS 
MAINS/
</h1 >
<h1 className="resttitle animate__animated animate__fadeInUp" >VEGAN
/
WINE
/ 
DESSERTS
/</h1>
          </div>
          <div className="d-flex align-items-center justify-content-between"><img src={menu4} width='200px' height='130px' className="bg4" /><img src={menu3} width='200px' height='130px' className="bg5" /><img src={menu8} width='200px' height='130px' className="bg6" /><img src={menu11} width='200px' height='130px' className="bg2" /><img src={menu6} width='200px' height='130px' className="bg2" /></div>
        </div>
       </div>
       <Testimionals/>
       <OwlCarousel className="owl-theme mb-0" {...options}>
<div className="item "><img src={restslider1} alt="" height={230}  width={300}/></div>
<div className="item"><img src={restslider2}height={230}  width={300} alt="" /></div>
<div className="item"><img src={menu0}height={230}  width={300} alt="" /></div>
<div className="item"><img src={restslider4}height={230}  width={300} alt="" /></div>
<div className="item"><img src={restslider3}height={230}  width={300} alt="" /></div>
       </OwlCarousel>
    </section>
    </Helmet>
  );
}


