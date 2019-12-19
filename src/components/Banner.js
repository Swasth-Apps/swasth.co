import React, { Fragment, useState } from 'react'
import { Col, Row } from 'antd'
import bannerGraphic from '../assets/images/Banner_graphic.png'
import therapyGraphic from '../assets/images/Therapy_graphic.png'
import Carousel from '../shared/carousel'
import appStore from '../assets/images/app-store.png'
import googlePay from '../assets/images/google-play.png'
import DBTCoach from '../assets/images/DBT_coach.png'
import ACTCoach from '../assets/images/ACT_coach.png'
import CBTCompanion from '../assets/images/CBT_companion.png'
import DBTCoachScreen from '../assets/images/DBT_coach_screen.png'
import ACTCoachScreen from '../assets/images/ACT_coach_screen.png'
import CBTCompanionScreen from '../assets/images/CBT_companion_screen.png'
import engagementTools from '../assets/images/Engagement_tools_img.png'
import rightProvider from '../assets/images/Right_provider_graphic.png'
import blogImg from '../assets/images/Blog_img01.png'
import blogImg2 from '../assets/images/Blog_img02.png'
import blogImg3 from '../assets/images/Blog_img03.png'
import evidenceGraphic from '../assets/images/Evidence_based_graphic.png'
import { home } from '../helper/helper'

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
