import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import bannerGraphic from '../assets/images/home-woman.png'
import topBg from '../assets/images/top-bg@3x.png'

const Banner = (props) => {
  const changingText=['Behavioral','Mental','Emotional'];
  useEffect(() => {
    let count = 0;
    const timer = setInterval(()=>{
      const changeText = document.getElementById('change-text');
      if(changeText) {
        changeText.innerHTML = `${changingText[count % 3]}`;
        count = count + 1;
      }
    },2000);
  }, [])

  return (
    <Row
        className='card-row divider -margin-bottom home-top-bg'
        style={{background: `url(${topBg}) no-repeat center center fixed`, backgroundSize: "cover"}}
    >
      <div className="home-top-bg-inner-div">
    <Col md={12} className='card-col -margin-right -margin-bottom'>
      <p className='bottom-space base-text'>Driving towards better{' '}<br/>
        <span className='-highlighted-text' id='change-text' />{' '}Health.</p>
      <div className='para-text'>
        Resiliens is transforming behavioral health care by creating a seamless experience for clients,
        providers and employers. Using technology within the context of evidence based treatments, we
        connect clients to behavioral health providers and treatments that work, making the experience
        personalized and effective.
      </div>
    </Col>
    <Col md={12} className='card-col'>
      <img src={bannerGraphic} className='custom-image'/>
    </Col>
      </div>
  </Row>
)
}

export default Banner
