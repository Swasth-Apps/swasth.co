import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import bannerGraphic from '../assets/images/Main-graphic@3x.png'

const Banner = (props) => {
  const changingText=['Behavioral','Mental','Emotional'];
  useEffect(() => {
    let count = 0;
    const timer = setInterval(()=>{
      const changeText = document.getElementById('change-text');
      if(changeText) {
        changeText.innerHTML = `${changingText[count % 3]}`
        count = count + 1;
      }
    },2000);
  }, [])
  return (
    <Row className='card-row divider -margin-bottom'>
    <Col md={12} className='card-col -margin-right -margin-bottom'>
      <h2 className='bottom-space base-text'>Driving towards better{' '}<br/>
        <span className='-highlighted-text' id='change-text' />{' '}Health.</h2>
      <div className='para-text'>
        Swasth is transforming behavioral health care by creating a seamless experience for clients,
        providers and employers. Using technology within the context of evidence based treatments, we
        connect clients to behavioral health providers and treatments that work, making the experience
        personalized and effective.
      </div>
    </Col>
    <Col md={12} className='card-col'>
      <img src={bannerGraphic} className='custom-image'/>
    </Col>
  </Row>
)
}

export default Banner
