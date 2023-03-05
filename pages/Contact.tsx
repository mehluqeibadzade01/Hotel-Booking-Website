import React from 'react'
import Helmet from '../components/Helmet'
import CommonSection from '../components/CommonSection'
import useTheme from '../components/hooks/useTheme'
import { useTranslation } from "react-i18next";
import ProductIem from '../product/ProductIem'
const contactimg=require('../assets/images/hotel2.jpg')
const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
    <Helmet title='Contact'>
      <CommonSection title='Contact Us' image={contactimg}></CommonSection>


      <div className="container mt-5 mb-5 contact">
        <div className="row mb-5 mt-5">
          <div className="col col-lg-6">
            <h5 className="con-title mb-4">
            {t('home2.name1')}

            </h5>
            <p className="con-det mb-4">Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start justify-content-center align-items-center conicon">
           <span  className="nav-link px-2 a me-4   phone-icon "><i className="fa-solid fa-phone-volume phone-icon"></i></span> <p><span className='resar'>{t('home2.name4')}</span><p className='phone-number'>855 100 4444</p></p>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start justify-content-center align-items-center conicon">
           <span  className="nav-link px-2 a me-4  "><i className="fa-regular fa-envelope  phone-icon "></i></span> <p><span className='resar'>{t('home2.email')}</span><p className='phone-number'>info@luxuryhotel.com</p></p>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start justify-content-center align-items-center conicon">
           <span  className="nav-link px-2 a me-4   phone-icon "><i className="fa-solid fa-location-dot  phone-icon "></i></span> <p><span className='resar text-dark'>{t('home2.adr')}</span><p className='phone-number'>1616 Broadway NY, New York 10001
United States of America</p></p>
            </div>
          </div>
          <div className="col col-lg-6">
            <div className="row mb-5">
              <div className="col-lg-6 col col-md-12 col-sm-12"><input type="text" placeholder='Your Name' className='review' /></div>
              <div className="col-lg-6 col-md-12 col-sm-12"><input type="text" placeholder='Your Surname' className='review' /></div>
            </div>
            <div className="row mb-5">
              <div className="col-lg-6 col col-md-12 col-sm-12 "><input type="text" placeholder='Your Number'className='review' /></div>
              <div className="col-lg-6 col-md-12 col-sm-12"><input type="email" placeholder='Your Mail' className='review'/></div>
             
            </div>
            <div className="row ">
      <textarea className="col-lg-6 col-md-12 col-sm-12  review" placeholder='message' ></textarea>
              <div className="col-lg-6 col-md-12 col-sm-12 "><button className="btn sendbtn">{t('home2.sendbtn')}</button></div>
             
            </div>
          </div>
        </div>
      </div>
      <div className="container">
     
      <div className="maps"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.7097937203116!2d2.3300073150042278!3d48.863744079288075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e21852883b7%3A0x88f8c24b3bea7b50!2sRue%20de%20Rivoli%2C%20Paris%2C%20Fransa!5e0!3m2!1str!2s!4v1674572294500!5m2!1str!2s" width="100%" height="450"></iframe></div>
      </div>
    </Helmet>
  )
}

export default Contact