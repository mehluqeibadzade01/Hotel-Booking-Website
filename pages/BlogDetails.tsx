import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import CommonSection from '../components/CommonSection';
const imggblog=require('../assets/images/room13.jpg')
const BlogDetails = (props:any) => {
    const {id} = useParams();
    const detailsItem = props.pvalue.find((p:any)=>p.id == id)
  return (
<>
<CommonSection title={`${detailsItem.title}`} image={imggblog}/>
        <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
            <img src={detailsItem.img} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
            </div>
            <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3 blog-title">{detailsItem.title}</h1>
            <p className="lead">{detailsItem.desc}</p>

            </div>
        </div>
        </div>
        </>

  )
}
const mapStateToProps=(state:any)=>{
    return{
        pvalue:state
    }
}
export default connect(mapStateToProps)(BlogDetails)
