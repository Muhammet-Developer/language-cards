import React from 'react'
import Language from './Language';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/ROW";
import Col from "react-bootstrap/Col";
import {data} from "../helpers/data";
const card = () => {
  // console.log(data);
  return (
    <Container className='rounded-3 mt-4 ' style={{background :"#F48B29"}}>
        <h1 className='text-light py-2'>Language</h1>
        <Row className='g-3 justify-content-center'>
        {data.map((person,index)=>{
          return(
          <Col sm={6} md={4} lg={3} key={index}>
           <Language {...person}  />
          </Col>
        )})}
        </Row>
        

    </Container>
  )
}

export default card;