import React from 'react'
import { useState } from 'react';
import { useTranslation } from "react-i18next";

const rest =require('../assets/images/bar.jpg')
const spa =require('../assets/images/spa.jpg')
const fit =require('../assets/images/fitness.jpg')
const pool =require('../assets/images/pool.jpg')

const Discover = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className='discover'  >
       
        <div className="container col-xxl-8 mt-5 mb-0 p-5 bg " data-aos='fade-right'>
        <div className="row flex-lg-row-reverse align-items-center  ">
          <div className="col-10 col-sm-8 col-lg-6 test-shine">
            <img src={rest} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500}  />
          </div>
          <div className="col-lg-6">
            <h6 className="discover-text1 mb-2">{t('discover.disc')}</h6>
            <h3 className='discover-text2'>{t('discover.res')}</h3>
            <p className="about-text">Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className=" learn-btn bttn   px-4 me-md-2">{t('discover.btn')}</button>
             
            </div>
          </div>
        </div>
      </div>
      <div className="container col-xxl-8 bg " data-aos='fade-left'>
        <div className="row flex-lg-row align-items-center ">
          <div className="col-10 col-sm-8 col-lg-6 test-shine">
            <img src={spa} className="d-block mx-lg-auto img-fluid" alt=" Themes" width={700} height={600}  />
          </div>
          <div className="col-lg-6">
            <h6 className="discover-text1 mb-2">{t('discover.exp')}</h6>
            <h3 className='discover-text2'>{t('discover.spa')}</h3>
            <p className="about-text">Spa center inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className=" learn-btn  bttn px-4 me-md-2">{t('discover.btn')}</button>
             
            </div>
          </div>
        </div>
      </div>
      <div className="container col-xxl-8 bg" data-aos='fade-right'>
        <div className="row flex-lg-row-reverse align-items-center ">
          <div className="col-10 col-sm-8 col-lg-6 test-shine">
            <img src={fit} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={600}  />
          </div>
          <div className="col-lg-6">
            <h6 className="discover-text1 mb-2">{t('discover.mode')}</h6>
            <h3 className='discover-text2'>{t('discover.fit')}</h3>
            <p className="about-text">Fitness Center nilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className=" learn-btn  bttn px-4 me-md-2">{t('discover.btn')}</button>
             
            </div>
          </div>
        </div>
      </div>
      <div className="container col-xxl-8 bg" data-aos='fade-left'>
        <div className="row flex-lg-row align-items-center ">
          <div className="col-10 col-sm-8 col-lg-6 test-shine">
            <img src={pool} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={600}  />
          </div>
          <div className="col-lg-6">
            <h6 className="discover-text1 mb-2">{t('discover.disc')}</h6>
            <h3 className='discover-text2'>{t('discover.healt')}</h3>
            <p className="about-text">The health club & pool at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine..</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="bttn learn-btn px-4 me-md-2">Learn More</button>
             
            </div>
          </div>
        </div>
      </div>
        </div>
  
    
  )
}

export default Discover
