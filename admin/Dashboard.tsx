import React from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import CommonSection from '../components/CommonSection';
const imgdash=require('../assets/images/room16.jpg')
const Dashboard = (props:any) => {
  return (
  <>
<CommonSection title='Dashboard' image={imgdash}/>
 
  <Link to='/add'><button className="mb-5 bttn" >Add</button></Link>
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Blog photo</th>
        <th>Blog title</th>
        <th>Blog description</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
        {props.pvalue.map((item:any,i:number)=>(
    <tr key={i}>
        <td>{i+1}</td>
        <td><img width={50} src={item.img} alt="blogImg" /></td>
        <td>{item.title}</td>
        <td>{item.desc.substring(0,30)}</td>
        <td><Link to={`/edit/${item.id}`}><button className='bttn fs-5'>Edit</button></Link></td>
      </tr>
        ))}


    </tbody>
  </Table>

  </>

  )
}

const mapStateToProps =(state:any)=>{
    return{
        pvalue:state
    }
}
export default connect(mapStateToProps)(Dashboard)