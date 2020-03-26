import React, { Fragment } from 'react'
import { Button, Col, Row } from 'antd'
import CourseImage from '../assets/images/course-img@3x.png'
import BoxIcon from '../assets/images/box-icon@3x.png'
import TransformImg from '../assets/images/Transform-img.png'
import MediumImg from '../assets/images/medium-img@3x.png'
import LargeImg from '../assets/images/Large-img@3x.png'
import HeartImg from '../assets/images/heart-icon@3x.png'

import { Link } from '@reach/router'

const LifeCoachClient = (props) => {
  return (
    <Fragment>
      <section className='home-section-group client-section-group'>
        <Row className='card-row -margin-bottom -row-flex divider col-reverse' gutter={16}>
          <Col md={12} className='card-col -margin-right -margin-bottom'>
            <h2 className='-font-bold margin-bottom-25'>Behavioral Health Coaching Simplified.</h2>
            <div className='subtitle font-proxima-nova'>
              Empowering Coaches and Therapists to bring Evidence-Based Therapies to clients, helping them reach their
              full potential.
            </div>
          </Col>
          <Col md={12} className='card-col image-col'>
            <img src={CourseImage}/>
          </Col>
        </Row>
        <Row className='card-row -margin-bottom -row-flex divider client-main-section col-reverse' gutter={16}>
          <Col md={16} className='card-col -margin-right -margin-bottom'>
            <div className='below-img-section'>
              <div className='flex-container'>
                <div className='box-container coaching-box-shadow'>
                  <img src={BoxIcon} style={{width:'80px'}}/>
                  <h3>What is Lorem Ipsum?</h3>
                  <p className='font-proxima-nova'> is simply dummy text of the printing and typesetting industry. It has survived not only five
                    centuries,</p>
                  <p>Kane Williamson</p>
                </div>
                <div className='box-container coaching-box-shadow'>
                  <img src={BoxIcon} style={{width:'80px'}}/>
                  <h3>What is Lorem Ipsum?</h3>
                  <p className='font-proxima-nova'> is simply dummy text of the printing and typesetting industry. It has survived not only five
                    centuries,</p>
                  <p>Kane Williamson</p>
                </div>
              </div>
              <div className='box-container coaching-box-shadow margin-left'>
                <img src={BoxIcon} style={{width:'80px'}}/>
                <h3>What is Lorem Ipsum?</h3>
                <p className='font-proxima-nova'> is simply dummy text of the printing and typesetting industry. It has survived not only five
                  centuries,</p>
                <p>Kane Williamson</p>
              </div>
            </div>
          </Col>
          <Col md={6} className='card-col image-col'>
            <div>
              <h3>What is Lorem Ipsum?</h3>
              <p className='font-proxima-nova'> is simply dummy text of the printing and typesetting industry. It has survived not only five
                centuries,</p>
            </div>
          </Col>
        </Row>
        <Row className='card-row -margin-bottom -row-flex divider col-reverse' gutter={16}>
          <Col md={12} className='card-col -margin-right -margin-bottom'>
            <div className='box-container'>
              <h3>What is Lorem Ipsum?</h3>
              <p className='font-proxima-nova'> is simply dummy text of the printing and typesetting industry. It has survived not only five
                centuries,</p>
              <Button className='coaching-primary-purple-btn'><Link to={'/'}>Client</Link></Button>
            </div>
          </Col>
          <Col md={12} className='card-col image-col'>
            <div>
              <img src={TransformImg}/>
            </div>
          </Col>
        </Row>
        <Row className='card-row -margin-bottom -row-flex divider col-reverse' gutter={16}>
          <Col md={16} className='card-col -margin-right -margin-bottom'>
            <div className='below-img-section'>
              <div className='flex-container'>
                <div className='box-container coaching-box-shadow'>
                  <div className='flex-justify'>
                    <img src={MediumImg} width={100}/>
                    <img src={HeartImg} width={30}/>
                  </div>
                  <h3>What is Lorem Ipsum?</h3>
                  <p className='font-proxima-nova'> is simply dummy text of the printing and typesetting industry. It has survived not only five
                    centuries,</p>
                  <p>Kane Williamson</p>
                </div>
              </div>
              <div className='flex-container'>
                <div className='box-container coaching-box-shadow margin-left'>
                  <div className='flex-justify'>
                    <img src={MediumImg} width={100}/>
                    <img src={HeartImg} width={30}/>
                  </div>
                  <h3>What is Lorem Ipsum?</h3>
                  <p className='font-proxima-nova'> is simply dummy text of the printing and typesetting industry. It has survived not only five
                    centuries,</p>
                  <p>Kane Williamson</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} className='card-col image-col'>
            <div>
              <h3>What is Lorem Ipsum?</h3>
              <p className='font-proxima-nova'> is simply dummy text of the printing and typesetting industry. It has survived not only five
                centuries,</p>
            </div>
          </Col>
        </Row>
        <Row className='card-row -margin-bottom -row-flex divider client-main-section remove-margin' gutter={16}>
          <Col md={24} className='card-col -margin-right -margin-bottom'>
            <div className='below-img-section'>
              <div className='flex-container'>
                <div className='box-container coaching-box-shadow'>
                  <div className='flex-justify'>
                    <img src={MediumImg} width={100}/>
                    <img src={HeartImg} width={30}/>
                  </div>
                  <h3>What is Lorem Ipsum?</h3>
                  <p>Kane Williamson</p>
                </div>
              </div>
              <div className='flex-container margin-left'>
                <div className='box-container coaching-box-shadow'>
                  <div className='flex-justify'>
                    <img src={MediumImg} width={100}/>
                    <img src={HeartImg} width={30}/>
                  </div>
                  <h3>What is Lorem Ipsum?</h3>
                  <p>Kane Williamson</p>
                </div>
              </div>
              <div className='flex-container margin-left'>
                <div className='box-container coaching-box-shadow'>
                  <div className='flex-justify'>
                    <img src={MediumImg} width={100}/>
                    <img src={HeartImg} width={30}/>
                  </div>
                  <h3>What is Lorem Ipsum?</h3>
                  <p>Kane Williamson</p>
                </div>
              </div>
              <div className='flex-container margin-left'>
                <div className='box-container coaching-box-shadow'>
                  <div className='flex-justify'>
                    <img src={MediumImg} width={100}/>
                    <img src={HeartImg} width={30}/>
                  </div>
                  <h3>What is Lorem Ipsum?</h3>
                  <p>Kane Williamson</p>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: 20 }}>
              <Button className='coaching-primary-purple-btn'><Link to={'/'}>Client</Link></Button>
            </div>
          </Col>
        </Row>
        <Row className='card-row -margin-bottom -row-flex col-reverse' gutter={16}>
          <Col md={12} className='card-col -margin-right -margin-bottom'>
            <div className='box-container'>
              <h3>What is Lorem Ipsum?</h3>
              <p className='font-proxima-nova'> is simply dummy text of the printing and typesetting industry. It has survived not only five
                centuries,</p>
              <Button className='coaching-primary-purple-btn'><Link to={'/'}>Client</Link></Button>
            </div>
          </Col>
          <Col md={12} className='card-col image-col'>
            <div>
              <img src={LargeImg}/>
            </div>
          </Col>
        </Row>
      </section>
    </Fragment>
  )
}

export default LifeCoachClient
