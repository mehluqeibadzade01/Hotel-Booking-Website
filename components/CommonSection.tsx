import React from 'react'


const CommonSection = (props:any) => {
  const style = {
    backgroundImage: "url("+props.image+")",
    backgroundSize: " cover ",
    width:'100%',
    height:"60vh",
    backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        clipPath: "polygon(100% 0, 100% 50%, 0 100%, 0 0)"
    
  }
  return (
    <div className="sect "  style={style}>
    <section className="common-section" >
            <div className='container'>
              <p className='hotel'>Luxury Hotel</p>
<h2>
  {props.title}
</h2>

            </div>

    </section>
    </div>
  )
}

export default CommonSection