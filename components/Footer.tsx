import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
const Footer = () => {
      
  const { t, i18n } = useTranslation();
  return (
    <div className='w-100 bg-dark'>  <div className="container mt-1">
    <footer className="py-5">
      <div className="row">
        <div className="col-6 col-lg-4 col-md-12 col-sm-12 mb-3">
          <p className='text-white fs-4 foottext'>{t('home2.exp')}</p>
          <ul className="nav flex-column">
            <li className="nav-item mb-2 ftxt"><Link to='/'className="nav-link p-0 text-muted">{t('b1.navlink1')}</Link></li>
            <li className="nav-item mb-2 ftxt"><Link to='/about' className="nav-link p-0 text-muted">{t('b1.navlink2')}</Link></li>
            <li className="nav-item mb-2 ftxt"><Link to='/contact' className="nav-link p-0 text-muted">{t('b1.navlink3')}</Link></li>
            <li className="nav-item mb-2 ftxt"><Link to='/restaruant' className="nav-link p-0 text-muted">{t('b1.navlink4')}</Link></li>
            <li className="nav-item mb-2 ftxt"><Link to='/rooms' className="nav-link p-0 text-muted">{t('b1.navlink5')}</Link></li>
          </ul>
        </div>
        <div className="col-6 col-lg-4 col-md-12 col-sm-12 mb-3">
          <p className='text-white fs-4 foottext'>{t('b1.navlink3')}</p>
          <ul className="nav flex-column">
            <li className="nav-item mb-2 ftxt"><a href="#" className="nav-link p-0 text-muted">1616 Broadway NY, New York 10001
United States of America</a></li>
            <li className="nav-item mb-2 ftxt"><a href="#" className="nav-link p-0 text-muted">855 100 4444</a></li>
            <li className="nav-item mb-2 ftxt"><a href="#" className="nav-link p-0 text-muted">info@luxuryhotel.com</a></li>
           
          </ul>
        </div>
        <div className="col-6 col-lg-4 col-md-12 col-sm-12 mb-3">
          <h5 className='text-white foottext'>{t('b1.navlink2')}</h5>
         <p className='text-secondary ftxt'>Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat.</p>
        </div>
       
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p className='text-light ftxt'>© 2022 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-twitter text-light"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-pinterest text-light"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-instagram text-light"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-facebook text-light"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fa-brands fa-youtube text-light"></i></a></li>
          
        </ul>
      </div>
    </footer>
  </div></div>
  )
}

export default Footer