import React, { Fragment, useState } from 'react'
import { Col, Row } from 'antd'
import bannerGraphic from '../assets/images/Banner_graphic.png'

const Banner = (props) => {
  return (
    <Row className='card-row divider'>
    <Col md={8} className='card-col -margin-right'>
      <h2 className='bottom-space'>Driving towards better
        <span className='-highlighted-text'>{' '}Behavioral</span> Health.</h2>
      <div >
        Swasth is transforming behavioral health care by creating a seamless experience for clients,
        providers and employers. Using technology within the context of evidence based treatments, we
        connect clients to behavioral health providers and treatments that work, making the experience
        personalized and effective.
      </div>
    </Col>
    <Col md={8} className='card-col'>
      <img src={bannerGraphic}/>
    </Col>
  </Row>
)
}

export default Banner
