import React from 'react'
import DatePicker from 'react-multi-date-picker'
import { useTranslation } from 'react-i18next'
const Check = () => {
  const { t, i18n } = useTranslation();
  const handleClick = (lang:any) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div >
      <div className="date-background mt-5">    <div className="container">
      <div className="col-lg-12 col-md-12 col col-sm-12">
    <div className="search-room mb-5 mt-5">
      <h5 className='search-text1'>{t('check.chen')}</h5>
      <h1 className='search-text2'>{t('check.search')}</h1>
    </div></div></div></div>
      <div className="date-background">

    
      <div className="date-general-box display-flex justify-content-center align-items-center">
      <div className="box-datepicker1">
        <div className="container">
     <div className="row">
     <div className="col col-lg-2 col-md-2 col-sm-4"> 
     <DatePicker  placeholder='Check in' className='bg-dark purple' style={{
        
        height: "40px",
        borderRadius: "4px",
        fontSize: "16px",
        fontFamily:"Gilda-Display"
        
      }}/></div>
      <div className="col col-lg-2 col-md-2 col-sm-4">
    
    <div className="date-box   ">
    
    <DatePicker placeholder='Check out' className='bg-dark purple'style={{
    
    height: "40px",
    borderRadius: "4px",
    fontSize: "16px",
    fontFamily:"Gilda-Display"
    
    }}/></div>
    </div>
    <div className="date-box col-lg-2 col-md-2 col-sm-4">
       <select name="room" id="roomper" className='dt'>
       <option value="adul1" className='opt'>{t('check.a1')}</option>
       <option value="Adult2" className='opt'>{t('check.a2')}</option>
       <option value="adults3" className='opt'>{t('check.a3')}</option>
       <option value="4Adults" className='opt'>{t('check.a4')}</option>
     </select></div>
    
     <div className="date-box col-lg-2 col-md-2 col-sm-4">
       <select name="room" id="roomper" className='dt'>
       <option value="adul1"  className='opt'>{t('check.c1')}</option>
       <option value="Adult2"  className='opt'>{t('check.c2')}</option>
       <option value="adults3"  className='opt'>{t('check.c3')}</option>
       <option value="4Adults" className='opt'>{t('check.c4')}</option>
     </select></div>
    
     <div className="date-box col-lg-2 col-md-2 col-sm-4">
       <select name="room" id="roomper" className='dt'>
       <option value="adul1"  className='opt'>{t('check.r1')}</option>
       <option value="Adult2"  className='opt'>{t('check.r2')}</option>
       <option value="adults3"  className='opt'>{t('check.r3')}</option>
       <option value="4Adults"  className='opt'>{t('check.r4')}</option>
     </select></div>
    
    <div className="col-lg-2 col-md-2 col-sm-4" > <button className='check-button dt' >{t('check.chbtn')}</button>
    
    </div>
     </div>
    
    
    
      
    
    
    </div>
      </div>
      </div>
        
      </div>
    
    </div>
   
  )
}

export default Check