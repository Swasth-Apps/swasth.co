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
            <h2 className='-font-bold margin-bottom-25'>Start building a Life worth LIVING.</h2>
            <div className='subtitle font-proxima-nova'>
            Wherever you happen to be in life, whatever challenges you face, we have life-changing Coaches, Programs, and other resources to help you tap into your full potential so you can start building a life worth living.
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
                  <h3>Behavioral Health Coaching</h3>
                  <p className='font-proxima-nova'>Certified behavioral coaches are licensed psychologists, licensed clinical social workers, and master’s level mental health professionals who work with clients to facilitate healthy and sustainable changes in behaviors so they can increase their happiness and effectiveness at work, home, study, or in social situations.
                  </p>
                  </div>
                <div className='box-container coaching-box-shadow'>
                  <img src={BoxIcon} style={{width:'80px'}}/>
                  <h3>How does it work?</h3>
                  <p className='font-proxima-nova'>Behavioral coaches use the principles of positive psychology, philosophy, motivational interviewing, and goal setting to assist clients in altering their actions, reactions, and behavioral patterns. They use their knowledge and backgrounds to provide education and coaching for many mental health concerns and help you locate mental health treatment resources as needed.
                  </p>
                </div>
              </div>
              <div className='box-container coaching-box-shadow margin-left'>
                <img src={BoxIcon} style={{width:'80px'}}/>
                <h3>What is the Science behind?</h3>
                <p className='font-proxima-nova'> Behavioral Health coaching is based on research and evidence, you and your coach will use a proven system that significantly increases your chance of implementing behavioral changes that last a lifetime. Your coaches will tap into evidence-based treatment modalities such as Dialectical Behavior Therapy (DBT), Cognitive Behavioral Therapy (CBT), ACT etc. and Mindfulness Exercises. Together, you’ll assess your issues and determine the best plan of action, which may include referrals and coordination of care with other community resources.</p>
              </div>
            </div>
          </Col>
          <Col md={6} className='card-col image-col'>
            <div>
              <h3>What can I get help with?</h3>
              <p className='font-proxima-nova'>A behavioral coach can help you in many aspects of your life that affect your overall wellbeing, including:</p>
              <ul>
              <li>Work-life balance</li>
              <li>Emotional support</li>
              <li>Spirituality wellness</li>
              <li>Caregiver support</li>
              <li>Anger management</li>
              <li>Substance abuse</li>
              <li>Work-life balance</li>
              <li>Emotional support</li>
              <li> Spirituality wellness</li>
              <li>Caregiver support</li>
              <li>Anger management</li>
              <li>Substance abuse</li>
              <li>Mental health and lifestyle</li>
              <li>Eating disorders</li>
              <li>Depression, anxiety, physical health problems</li>
              <li>Alcohol use</li>
              <li>Gender identity, transgender, sexuality</li>
              <li>Sex life</li>
              <li>Relationships – family, friends, children</li>
              <li>Mindfulness and meditation</li>
              <li>ADHD</li>
              <li>Bipolar disorder</li>
              <li>Cognitive behavioral therapy coaching</li>
              <li>Dialectical behavioral therapy coaching</li>
              <li>Acceptance & Commitment therapy coaching</li>
              <li>Parenting skill</li>
              <li>Personality disorder</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className='card-row -margin-bottom -row-flex divider col-reverse' gutter={16}>
          <Col md={12} className='card-col -margin-right -margin-bottom'>
            <div className='box-container'>
              <h3>Are you ready to transform your life?</h3>
              <p className='font-proxima-nova'> is simply dummy text of the printing and typesetting industry. It has survived not only five
                centuries,</p>
              <Button className='coaching-primary-purple-btn'><Link to={'/'}>Get Started</Link></Button>
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
                  <h3>DBT for Teens</h3>
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
                  <h3>CBT For Depression</h3>
                  <p className='font-proxima-nova'> is simply dummy text of the printing and typesetting industry. It has survived not only five
                    centuries,</p>
                  <p>Kane Williamson</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} className='card-col image-col'>
            <div>
              <h3>Online Coaching</h3>
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
              <h3>Discover the secret of living life with Passion</h3>
              <p className='font-proxima-nova'> is simply dummy text of the printing and typesetting industry. It has survived not only five
                centuries,</p>
              <Button className='coaching-primary-purple-btn'><Link to={'/'}>Get Started</Link></Button>
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
