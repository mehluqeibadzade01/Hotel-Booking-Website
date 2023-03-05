import React from 'react'
import SingleCard from '../components/SingleCard'
import { Container, Row,Col } from 'react-bootstrap'
import { connect } from 'react-redux'

import { blogReducer } from '../reducers/blogReducer'
import CommonSection from '../components/CommonSection'
import Discover from '../components/Discover'
const imggblog=require('../assets/images/room13.jpg')
const BlogList = (props:any) => {
  return (
    <div className="w-100">
        <CommonSection title='Our News' image={imggblog}/>
    <Container className='mt-5'>
       
       <Row className='g-5'>
       {props.pvalue.map((item:any,i:number)=>{
            return <SingleCard id={item.id} key={i} photo={item.img} title={item.title} desc={item.desc} />
        })}
       </Row>
       <Discover/>
    </Container></div>
  )
}

const mapStateToProps =(state:any)=>{
    return{
        pvalue:state
    }
}

export default connect(mapStateToProps)(BlogList)
