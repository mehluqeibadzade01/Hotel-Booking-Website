import React from 'react'
import useTheme from './hooks/useTheme';
const Helmet = (props) => {

    document.title='Hotel Booking app-'+ props.title
  return (
    <div className='w-100'>{props.children}</div>
  )
}

export default Helmet