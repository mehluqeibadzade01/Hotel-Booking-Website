
import React from 'react'
import BlogForm from '../components/BlogForm'
import { Col,Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { editBLog, removeBlog } from '../actions/blogAction'
import { useNavigate, useParams } from 'react-router-dom'
import CommonSection from '../components/CommonSection'

const EditBlog = (props:any) => {
  const navigate = useNavigate();
  return (
    <div>
        <CommonSection title='Edit Blog'/>
    
   <div className="d-flex align-items-center justify-content-center flex-column">
   <Col md={6}>
    <BlogForm editblog={props.pvalue}
    blogSubmit={(a:any)=>{
      props.dispatch(editBLog(props.pvalue.id,a))
      navigate('/blogs')
     
    }}
    />
      <button className='bttn' onClick={()=>{
          props.dispatch(removeBlog({id:props.pvalue.id}))
      navigate('/blogs')

      }}  type="submit" >
          Delete
        </button>
    </Col>
   </div>
  </div>
  )
}
const MapStateToProps =(state:any)=>{

  const link = window.location.pathname;
  const mainpath = link.slice(6,99);


  return{
    pvalue: state.find((b:any)=>b.id === mainpath)
  }
}

export default connect(MapStateToProps)(EditBlog)