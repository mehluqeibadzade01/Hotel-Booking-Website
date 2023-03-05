import React from 'react'
import { useTranslation } from "react-i18next";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel:any=require("react-owl-carousel");
const Testimionals = () => {
    const options :any= {
        loop: true,
        margin: 10,
        items: 1,
        autoplay: true
      };
      const team1img=require('../assets/images/team1.jpg')
      const team2img=require('../assets/images/team2.jpg')
      const team3img=require('../assets/images/4.jpg')
      const { t, i18n } = useTranslation();
  return (
    <div className='bg-testmionals mb-0'>
        <div className="bg-hover">
        <OwlCarousel className="owl-theme" {...options}>
        <div className="item">
        <div className="px-4 py-5 my-5 text-center">
       <p className='text1 animate__animated animate__fadeInUp'>TESTIMONIALS</p>
        <h1 className="display-5 fw-bold text2 animate__animated animate__fadeInUp">{t('Test.say')}</h1>
        <hr />
        <div className="col-lg-6 mx-auto">
          <p className=" mb-4 text-light review-text animate__animated animate__fadeInUp">Hotel, dolor sit amet consectetur adipisicing elit. Voluptatibus commodi labore porro nisi quas mollitia nihil natus. Sed cupiditate a fugit quam mollitia modi eum accusantium vero debitis, incidunt architecto velit eligendi .</p>
          <div className="d-grid gap-2 d-flex justify-content-center flex-column align-items-center ">
            <img src={team1img} className='review-img ' />
            <div className="review-person d-flex flex-column animate__animated animate__fadeInUp">
                <div className="stars">
                    <i className="fa-solid fa-star stars me-2 mb-3"></i> <i className="fa-solid fa-star stars me-2 mb-3"></i><i className="fa-solid fa-star stars me-2 mb-3"></i><i className="fa-solid fa-star stars me-2 mb-3"></i><i className="fa-solid fa-star stars me-2 mb-3"></i>
                    </div>
<div className="review-name">OLIVIA MARTIN</div>
     <p className='guestn text-white'>{t('Test.gues')}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="item">
      <div className="px-4 py-5 my-5 mb-0 text-center">
       <p className='text1 animate__animated animate__fadeInUp'>TESTIMONIALS</p>
        <h1 className="display-5 fw-bold text2 animate__animated animate__fadeInUp">{t('Test.say')}</h1>
        <hr />
        <div className="col-lg-6 mx-auto ">
          <p className=" mb-4 text-light review-text animate__animated animate__fadeInUp">Hotel, dolor sit amet consectetur adipisicing elit. Voluptatibus commodi labore porro nisi quas mollitia nihil natus. Sed cupiditate a fugit quam mollitia modi eum accusantium vero debitis, incidunt architecto velit eligendi .</p>
          <div className="d-grid gap-2 justify-content-center flex-column align-items-center animate__animated animate__fadeInUp">
            <img src={team3img} className='review-img' />
            <div className="review-person d-flex flex-column">
                <div className="stars-box">
                    <i className="fa-solid fa-star stars me-2 mb-3"></i> <i className="fa-solid fa-star stars me-2 mb-3"></i><i className="fa-solid fa-star stars me-2 mb-3"></i><i className="fa-solid fa-star stars me-2 mb-3"></i><i className="fa-solid fa-star stars me-2 mb-3"></i>
                    </div>
<div className="review-name"> EMILY BROWN</div>
<p className='guestn'>{t('Test.gues')}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="item">
      <div className="px-4 py-5 my-5 text-center">
       <p className='text1 animate__animated animate__fadeInUp'>TESTIMONIALS</p>
        <h1 className="display-5 fw-bold text2 animate__animated animate__fadeInUp">{t('Test.say')}</h1>
        <hr />
        <div className="col-lg-6 mx-auto">
          <p className=" mb-4 text-light review-text animate__animated animate__fadeInUp">Hotel, dolor sit amet consectetur adipisicing elit. Voluptatibus commodi labore porro nisi quas mollitia nihil natus. Sed cupiditate a fugit quam mollitia modi eum accusantium vero debitis, incidunt architecto velit eligendi .</p>
          <div className="d-grid gap-2 justify-content-center flex-column align-items-center animate__animated animate__fadeInUp">
            <img src={team2img} className='review-img' />
            <div className="review-person d-flex flex-column align-items-start">
                <div className="stars"><i className="fa-solid fa-star stars me-2 mb-3"></i> <i className="fa-solid fa-star stars me-2 mb-3"></i><i className="fa-solid fa-star stars me-2 mb-3"></i><i className="fa-solid fa-star stars me-2 mb-3"></i><i className="fa-solid fa-star stars me-2 mb-3"></i>
                
                </div>
<p className="review-name">NOLAN WHITE</p>
<p className='guestn'>{t('Test.gues')}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
        </OwlCarousel>
        </div>
    </div>
  )
}

export default Testimionals