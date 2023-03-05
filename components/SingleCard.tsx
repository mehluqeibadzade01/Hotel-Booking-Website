import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const SingleCard = (props:any) => {
  return (
    <Col sm={6} md={4}>
      <Card className="cardblog">
        <Card.Img variant="top" src={props.photo} className='blogimg test-shine' />
        <Card.Body className="blog-body">
          <Card.Title className="blog-title">{props.title}</Card.Title>
          <Card.Text className="blog-text"> 
           {props.desc.substring(0,30)}...
          </Card.Text>
         <Link to={`/blogs/${props.id}`}><button className="bttn">Read more</button></Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleCard;