import { url } from 'inspector'
import React from 'react'
import CommonSection from '../components/CommonSection'
const notfound=require('../assets/images/err.jpg')
const NotFoundPages = () => {
  return (
    <div className='notfoundpage w-100' >
        
<img src={notfound} alt="" height='80%' width='100%' />
    </div>
  )
}

export default NotFoundPages