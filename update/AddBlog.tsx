import React from 'react'
import BlogForm from '../components/BlogForm'
import { Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addBlog } from '../actions/blogAction'
import { useNavigate } from 'react-router-dom'
import configureStore from '../store/configureStore';
import CommonSection from '../components/CommonSection'
const imggblog=require('../assets/images/room12.jpg')

const AddBlog = (props:any) => {
  const navigate = useNavigate();
  return (
    <div>
        <CommonSection title='Add Blog'/>
     
     <div className="d-flex align-items-center justify-content-center flex-column">
     <Col md={6}>
      <BlogForm blogSubmit={(fd:any)=>{
        props.dispatch(addBlog(fd));
      
        navigate('/blogs')
   
        
      }}/>
      </Col>
     </div>
    </div>
  )
}

export default connect()(AddBlog)