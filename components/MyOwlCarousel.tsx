import React from "react";
import { useTranslation } from "react-i18next";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel:any=require("react-owl-carousel");
const safeimg=require("../assets/images/safe.jpg")
const cleaningimg=require("../assets/images/clean.jpg")
const breakimg=require("../assets/images/breakfast.jpg")
const drinksimg=require("../assets/images/drinks.jpg")
const MyOwlCarousel = () => {
  const options :any= {
    loop: true,
    margin: 10,
    items: 2,
    autoplay: true,
    responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
        items:1,
        nav:false
    },
    1000:{
        items:2,
        nav:true,
        loop:false
    }}
  };
  const { t, i18n } = useTranslation();
  return (
    <OwlCarousel className="owl-theme" {...options}>
      <div className="item">
      
          <div className="card crd">
            <img src={safeimg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title name">{t('home2.name11')}</h5>
              <div className="amount">$15<span className="as">/ {t('home2.name8')}</span></div>
              <ul className="list-unstyled list">
                                    <li className="mb-2 list-price"><i className="fa-solid fa-check ok"></i> Hotel ut nisan the duru</li>
                                    <li className="mb-2 list-price"><i className="fa-solid fa-check ok"></i> Orci miss natoque vasa ince</li>
                                    <li className="mb-2 list-price"><i className="fa-solid fa-x x"></i>Clean sorem ipsum morbin</li>
                                </ul>
            </div>
          </div>
        
        
       
      </div>
      <div className="item">
         <div className="card crd">
            <img src={drinksimg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title name">{t('home2.name12')}</h5>
              <div className="amount">$30<span className="as">/ {t('home2.name8')}</span></div>
              <ul className="list-unstyled list">
                                    <li className="mb-2  list-price" ><i className="fa-solid fa-check ok"></i> Hotel ut nisan the duru</li>
                                    <li className="mb-2 list-price" ><i className="fa-solid fa-check ok"></i> Orci miss natoque vasa ince</li>
                                    <li className="mb-2 list-price" ><i className="fa-solid fa-x x"></i>Clean sorem ipsum morbin</li>
                                </ul>
            </div>
          </div></div>
      <div className="item">
     
          <div className="card crd">
            <img src={breakimg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title name">{t('home2.name9')}</h5>
              <div className="amount">$30<span className="as">/ {t('home2.name8')}</span></div>
              <ul className="list-unstyled list">
                                    <li className="mb-2 list-price"><i className="fa-solid fa-check ok me-5"></i> Hotel ut nisan the duru</li>
                                    <li className="mb-2 list-price"><i className="fa-solid fa-check ok"></i> Orci miss natoque vasa ince</li>
                                    <li className="mb-2 list-price"><i className="fa-solid fa-x x"></i>Clean sorem ipsum morbin</li>
                                </ul>
            </div>
          
        </div>
      </div>
      <div className="item">
      <div className="card crd">
            <img src={cleaningimg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title name">{t('home2.name10')}</h5>
              <div className="amount">$50<span className="as">/ {t('home2.name8')}</span></div>
              <ul className="list-unstyled list">
                                    <li className="mb-2 list-price"><i className="fa-solid fa-check ok"></i> Hotel ut nisan the duru</li>
                                    <li className="mb-2 list-price"><i className="fa-solid fa-check ok"></i> Orci miss natoque vasa ince</li>
                                    <li className="mb-2 list-price"><i className="fa-solid fa-x x"></i>Clean sorem ipsum morbin</li>
                                </ul>
            </div>
          </div>
      </div>
     
    </OwlCarousel>
  );
};
export default MyOwlCarousel;