import React, { Fragment } from 'react'
import { Button, Col, Input, Row, Tabs,Icon } from 'antd'
import appStore from '../assets/images/app-store.png'
import Graphics from '../assets/images/Graphic@3x.png'
import googlePay from '../assets/images/google-play.png'
import { Link } from '@reach/router'

const { TabPane } = Tabs;
const LifeCoach = (props) => {

  const store = (
    <Row className='card-row' style={{display:'flex',flexDirection:'row'}}>
      <Col md={8} style={{marginRight:'10px'}}>
        <a href="https://itunes.apple.com/us/developer/swasth-inc/id1295868545">
          <img src={appStore} alt='{app} Therapy App'/>
        </a>
      </Col>
      <Col md={8}>
        <a href="https://play.google.com/store/apps/developer?id=Swasth+Inc.">
          <img src={googlePay} alt='{app} Therapy App'/>
        </a>
      </Col>
    </Row>
  )
  return (
    <Fragment>
      <section className='home-section-group coaching-home-section-group'>
        <Row className='card-row -margin-bottom -row-flex'>
          <Col md={12} className='card-col -margin-right -margin-bottom'>
            <h2 className='-font-bold margin-bottom-25'>Behavioral Health Coaching Simplified.</h2>
            <div className='subtitle'>
              Empowering Coaches and Therapists to bring Evidence-Based Therapies to clients, helping them reach their full potential.
            </div>
            <div className='join-buttons'>
              <span className=''>I AM A </span>
              <Button className='coaching-primary-orange-btn'>
                <Link to={'/coaching/coach'}>Coach</Link></Button>
              <Button className='coaching-primary-purple-btn'>Client</Button>
            </div>
            <div className='form-fields'>
              <p>Please enter your email to be the first to know about upcoming features , news and updates</p>
              <div>
            <Input placeholder='Enter Email'/>
            <Icon className='coaching-primary-orange-btn coaching-submit-icon' type='arrow-right' />
              </div>
            </div>
          </Col>
          <Col md={12} className='card-col image-col'>
            <img src={Graphics}/>
          </Col>
        </Row>
        {/* <Row className='card-row -row-flex-space-evenly'>
          <Col md={4}>
            <img src={logo1}/>
          </Col>
          <Col md={4}>
            <img src={logo2}/>
          </Col>
          <Col md={4}>
            <img src={logo3}/>
          </Col>
          <Col md={4}>
            <img src={logo4}/>
          </Col>
          <Col md={4}>
            <img src={logo5}/>
          </Col>
        </Row>*/}
      </section>
    </Fragment>
  )
}

export default LifeCoach
