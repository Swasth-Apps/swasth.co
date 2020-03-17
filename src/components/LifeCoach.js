import React, { Fragment } from 'react'
import { Button, Col, Input, Row, Tabs } from 'antd'
import appStore from '../assets/images/app-store.png'
import googlePay from '../assets/images/google-play.png'

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
        <Row className='card-row -margin-bottom'>
          <Col md={12} className='card-col -margin-right -margin-bottom'>
            <h2 className='bottom-space'>Behavioral Health Coaching Simplified.</h2>
            <div >
              Empowering Coaches and Therapists to bring Evidence-Based Therapies to clients, helping them reach their full potential.
            </div>
            <div className='form-fields'>
            <Input placeholder='Enter Email'/>
            <Button>Submit</Button>
            </div>
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
