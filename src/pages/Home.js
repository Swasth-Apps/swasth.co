import React, { Fragment } from 'react'
import { Col, Row, Tabs, Progress } from 'antd'
import therapyGraphic from '../assets/images/Therapy-section@3x.png'
import Carousel from '../shared/carousel'
import appStore from '../assets/images/app-store.png'
import googlePay from '../assets/images/google-play.png'
import DBTCoach from '../assets/images/DBT-app-icon.png'
import ACTCoach from '../assets/images/ACT-app-icon.png'
import CBTCompanion from '../assets/images/CBT_app_icon.png'
import DBTCoachScreen from '../assets/images/DBT_coach_screen.png'
import ACTCoachScreen from '../assets/images/ACT_coach_screen.png'
import CBTCompanionScreen from '../assets/images/CBT_companion_screen.png'
import engagementTools from '../assets/images/360-degree-view-graphic@3x.png'
import rightProvider from '../assets/images/Right_provider_graphic@3x.png'
import evidenceGraphic from '../assets/images/Evidence_based_graphic@3x.png'
import UserImg1 from '../assets/images/UserIcons/1.jpg'
import UserImg2 from '../assets/images/UserIcons/2.jpeg'
import UserImg3 from '../assets/images/UserIcons/3.jpeg'
import UserImg4 from '../assets/images/UserIcons/4.jpeg'
import UserImg5 from '../assets/images/UserIcons/5.jpeg'
import UserImg6 from '../assets/images/UserIcons/6.jpeg'

import Quote from '../assets/images/quote-icon@3x.png'


import { home } from '../helper/helper'
import Banner from '../components/Banner'

const { TabPane } = Tabs;
const Home = (props) => {
  const testimonials = [
    {
      img: Quote,
      user: UserImg1,
      desc: 'I wish I had something like this when I started DBT. Would have saved thousands on therapists and saved myself the frustration of moving from one therapist to another. This app is so thorough that you don’t need anything else. I love the design, usability and how easy to access everything. Also, the most important me is the ability to share my entries with my therapist and constant feedback.',
      name: 'Janet Marshal'
    }, {
      img: Quote,
      user: UserImg2,
      desc: 'Wow! They have created a video for every skill. It is very easy to follow. I am learning DBT on my own and found this lot more easier than reading the manual and learning on the internet. Also I can access from anywhere. I don’t know all aspects of DBT yet , but I am sure this App will take me all the way there. Great job and thanks for saving my life. My nearest DBT Therapist is 100+ miles away.',
      name: 'Laura Sanders'
    }, {
      img: Quote,
      user: UserImg3,
      desc: 'I am a therapist that incorporates Evidence-Based therapy (specifically DBT) in my practice. I really love their platform since it helps me to be more engaged with my clients. I love that can assign homework and assessments and my clients can submit them through the app. I have recommended to other clinicians in my practice who love this too. If your are looking for a platform that enables to better incorporate Evidence-Based therapy in your practice, I highly recommend Swasth.',
      name: 'Nicole M'
    }, {
      img: Quote,
      user: UserImg4,
      desc: 'Excellent! This will be my go to app for DBT from now on. Have been frustrated with low usability of existing apps on playstore. There is so much detail in this. A skills group member told me today that I can do my worksheets on this app. Wow! I didn’t even realize that and I was still amazed by the app. The best thing about the app is, I can do all my homework from the skills group and one-on-one therapy in the app (which my therapist assigns) and she can see it in her clinician app. I rarely forget to do my diary entry and homework anymore.',
      name: 'Tracy D'
    }, {
      img: Quote,
      user: UserImg5,
      desc: 'WOW! Excellent app! I had been struggling to practice CBT because I didnt always have a pen & paper on hand... Since I DO always have my device handy, this will improve  tremendously my use of daily Diary cards. Further the content is so rich. I am a visual person - so the videos are perfect. There are so many features, I am just in love with it.    ',
      name: 'Kendra jackson'
    }, {
      img: Quote,
      user: UserImg6,
      desc: 'As a therapist who uses both client apps and the clincian platform, I can say that these apps are very comprehensive. They cover all the tools necessary to make Client Engagement and Behavioral Health Coaching a great experience. I highly recommend this platform to all Clinicians for better outcomes to their clients.',
      name: 'Michael Covey'
    }]
  const store = (
    <Row className='card-row' style={{ display: 'flex', flexDirection: 'row' }}>
      <Col md={8} style={{ marginRight: '10px' }}>
        <a href="https://itunes.apple.com/us/developer/swasth-inc/id1295868545">
          <img src={appStore} alt='{app} Therapy App' />
        </a>
      </Col>
      <Col md={8}>
        <a href="https://play.google.com/store/apps/developer?id=Swasth+Inc.">
          <img src={googlePay} alt='{app} Therapy App' />
        </a>
      </Col>
    </Row>
  )
  return (
    <Fragment>
      <section className='home-section-group'>
        <Banner />
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
        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <img className='custom-image' src={therapyGraphic} alt='Therapy' />
          </Col>
          <Col md={12}>
            <h2 className='bottom-space base-text'>
              <span className='-highlighted-text'>
                Therapy
                    </span>{' '}
              is not one size fits all
            </h2>
            <div className='para-text'>
              Treatment is not a one size fits all approach. Where you go for mental health care treatment depends
              on your situation and recovery needs. Knowing where to look and what to expect can help reduce
              confusion and stress.
            </div>
          </Col>
        </Row>
        <Row className='card-row -row-flex-center'>
          <Col md={24}>
            <Row>
              <h2 style={{ textAlign: 'center' }} className='base-text'>A Comprehensive <span className='-highlighted-text'>Behavioral Health</span>{' '} Platform
              </h2>
            </Row>
            <Row>
            <div className='para-text'>
              <p style={{ textAlign: 'center' }}>
              Swasth's Digital Health Platform offers treatment programs for Anxiety, Depression,
              Eating Disorders, Borderline Personality Disorder, PTSD, SUDs, etc. The Platform combines Technology, 
              Evidence-Based Therapy and Coaching from Licensed Clinicians and Coaches.             
              </p>
            </div>
            </Row>
            <Row>
              <img className='custom-image' src={therapyGraphic} alt='Therapy' />
            </Row>
          {/*
            <Row className='card-row '>
              <Col md={12} className='-margin-right'>
                <img className='custom-image' src={rightProvider} alt='Therapy' />
              </Col>
              <Col md={12}>
                <h2 className='bottom-space base-text'>
                  Better care with
                  <span className='-highlighted-secondary-text'>
                    {' '} Right Provider
                    </span>
                </h2>
                <div className='para-text'>
                  With Swasth's unique matching process, individuals get connected to the right clinician / provider at
                  no cost. Our evidence based platform enables individuals to obtain care in-person, live video call or
                  self guided digital care.
                </div>
              </Col>
            </Row>
            <Row className='provider-card-btn -row-flex-center'>
              <Col md={24} style={{ textAlign: 'center', padding: '20px' }}>
                <h4 className='bottom-space para-text'>
                  Connect with the right evidence-based clinician that fits with your values and preferences.
                </h4>
                <button className='-btn-primary para-text'>
                  Find Provider
                </button>
                <img src="" />
              </Col>
            </Row>
          */}
            <Row className='card-row'>
              <Col md={12}>
                <h2 className='bottom-space base-text'>Programs that adapt to <span className='-highlighted-secondary-text'>Individual </span>
                 needs
                </h2>
                <div className='para-text'>
                  Our digital therapeutic tools are built ground up using evidence based treatments like Cognitive Behavioral Therapy (CBT), Acceptance & Commitment Therapy (ACT), Dialetical Behavior Therapy (DBT) etc. Further, we partner with our therapists and coaches so they can enjoy a thriving evidence-based practice while devoting more time to care.
                </div>
              </Col>
              <Col md={12} className='-margin-right'>
                <img className='custom-image' src={evidenceGraphic} alt='Therapy' />
              </Col>
            </Row>
          </Col>
        </Row>
        {/*
          <Row className='card-row divider'>
                <Col md={12} className='-margin-right '>
                  <h2 className='bottom-space base-text'>
                    <span className='-highlighted-text'>{' '}Engagement</span>{' '}tools</h2>
                  <div className='para-text'>
                    Clinicians can engage better with clients by assigning homework, exercises, lessons and
                    practice ideas all through the clinician dashboard. Clinicians can see client engagement and gain insights all via the clinician dashboard.
                  </div>
                </Col>
                <Col md={12} className='card-col'>
                  <img className='custom-image' src={engagementTools}/>
                </Col>
              </Row>
        */}
      </section>
      <section className='border-section-group'>
      <Row className='card-row -row-flex-center'>
          <Col md={24}>
            <Row>
              <h2 style={{ textAlign: 'center' }} className='base-text'>COACHING <span className='-highlighted-text'>PLATFORM</span>{' '}
              </h2>
            </Row>

          
            <Row className='card-row '>
              <Col md={12} className='-margin-right'>
                <img className='custom-image' src={rightProvider} alt='Therapy' />
              </Col>
              <Col md={12}>
                <h2 className='bottom-space base-text'>
                  Better care with
                  <span className='-highlighted-secondary-text'>
                    {' '} Right Provider
                    </span>
                </h2>
                <div className='para-text'>
                  With Swasth's unique matching process, individuals get connected to the right clinician / provider at
                  no cost. Our evidence based platform enables individuals to obtain care in-person, live video call or
                  self guided digital care.
                </div>
              </Col>
            </Row>
          
            <Row className='card-row'>
              <Col md={12}>
                <h2 className='bottom-space base-text'>
                  <span className='-highlighted-secondary-text'>
                    On-Demand
                    </span>
                Skills Coaching
                </h2>
                <div className='para-text'>
                  Our digital therapeutic tools are built ground up using evidence based treatments like Cognitive Behavioral Therapy (CBT), Acceptance & Commitment Therapy (ACT), Dialetical Behavior Therapy (DBT) etc. Further, we partner with our therapists and coaches so they can enjoy a thriving evidence-based practice while devoting more time to care.
                </div>
              </Col>
              <Col md={12} className='-margin-right'>
                <img className='custom-image' src={evidenceGraphic} alt='Therapy' />
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
      <section className='home-section-group after-border-section'>
      <Row className='card-row -row-flex-center'>
          <Col md={24} style={{ width: '100%' }}>
            <Row>
              <h2 style={{ textAlign: 'center' }} className='base-text'>Multi-Modality <span className='-highlighted-text'>Evidence-Based Therapy</span>{' '} Apps
              </h2>
            </Row>
            <Tabs
              // className="over-custom-border bt_portal-tabs"
              className='bt_portal-tabs with_underline'
              defaultActiveKey="1"
              animated={false}
              size="large"
              tabBarGutter={5}
            >
              <TabPane
                tab={
                  <div className='-flex-align-item'>
                    <img className='custom-image tab-image' width={24} height={24} src={DBTCoach} />
                    <span className='-highlighted-secondary-text base-text' style={{ fontSize: '16px', marginLeft: '10px' }}>DBT Coach</span>
                  </div>
                }
                key="1"
              >
                <Row className='card-row divider'>
                  <Col md={12} className='-margin-right'>
                    <img className='custom-image' width='100%' src={DBTCoachScreen} alt='Therapy' />
                  </Col>
                  <Col md={12}>
                    <h2 className='bottom-space base-text'>
                      <span className='-highlighted-secondary-text'>
                        DBT Coach
                </span>{' '}
                    </h2>
                    <div className='para-text'>
                      A comprehensive app based on Dialetical Behavior Therapy (DBT), with over 100+ video lessons, exercises,
                      practice ideas and diary card tool for tracking DBT skills, targets and activites.
                  {store}
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane
                tab={
                  <div className='-flex-align-item'>
                    <img className='custom-image tab-image' width={24} height={24} src={CBTCompanion} />
                    <span className='-highlighted-secondary-text base-text' style={{ fontSize: '16px', marginLeft: '10px' }}>CBT Companion</span>
                  </div>
                }
                key="2"
              >
                <Row className='card-row'>
                  <Col md={12} className='-margin-right'>
                    <img className='custom-image' width='100%' src={CBTCompanionScreen} alt='Therapy' />
                  </Col>
                  <Col md={12}>
                    <h2 className='bottom-space'>
                      <span className='-highlighted-secondary-text base-text'>
                        CBT Companion
                    </span>{' '}
                    </h2>
                    <div className='para-text'>
                      Based on Cognitive Behavior Therapy, this enables you to track mood, emotions, activities journal etc.
                      Video lessons, exercises, ability to share with care team and more..
                      {store}
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane
                tab={
                  <div className='-flex-align-item'>
                    <img className='custom-image tab-image' width={24} height={24} src={ACTCoach} />
                    <span className='-highlighted-secondary-text base-text' style={{ fontSize: '16px', marginLeft: '10px' }}>ACT Coach</span>
                  </div>
                }
                key="3"
              >
                <Row className='card-row divider'>
                  <Col md={12} className='-margin-right '>
                    <img className='custom-image' width='100%' src={ACTCoachScreen} alt='Therapy' />
                  </Col>
                  <Col md={12}>
                    <h2 className='bottom-space'>
                      <span className='-highlighted-secondary-text base-text'>
                        ACT Coach
                    </span>{' '}
                    </h2>
                    <div className='para-text'>
                      Use Acceptance Commitment Therapy tools to record daily and weekly ACT Measures, stay mindful with ACT
                      Exercises, track mood, emotions, activities etc.
                      {store}
                    </div>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </section>
      <section className='home-section-group after-border-section'>
        <Row className='card-row -row-flex-center'>
          <Col md={24}>
            <div style={{ textAlign: 'center' }}>
              <h2 className='bottom-space base-text'>Check out what our
                <span className='-highlighted-secondary-text'>{' '}users </span>{' '} are saying about<span className='-highlighted-text'>{' '}Swasth</span> </h2>

            </div>
          </Col>
        </Row>
        <Row gutter={24} className='second-fold-row' style={{ marginTop: 20 }}>
          <div className='cell well user-testimonial'>
            <div className='grid grid--3 well--m mt4 pricing-relative'>
              {testimonials?.map((item, i) =>
                <div className={`card card--vertical card--starter pricing-relative life-coach-grid-section`}>
                  <div className='card-text'>
                    <img src={item.img} />
                    <p className='para-text navy-text line-clamp-para'>{item.desc}</p>
                    {/*<a className='para-text more-link-text' onClick={() => handleTestimonial(i)}>{i === testimonial ? 'READ LESS' :'READ MORE'}</a>*/}
                    <span className='-font-bold user-img navy-text'><img src={item.user} /><strong>{item.name}</strong> </span>
                  </div>
                </div>)}
            </div>
          </div>
        </Row>
        {/*       <div style={{textAlign:'center'}} className='all-testimonials divider'>
          <a className='-highlighted-secondary-text'>Check all testimonials</a>
        </div>
      <Row className='card-row -row-flex-center blog-container-card-row'>
          <Col md={24}>
            <Row className='card-row -row-flex-center'>
              <h2 className='bottom-space'>Read the latest from
                <span className='-highlighted-secondary-text'>{' '}Swasth</span></h2>
            </Row>
            <Row className='card-row -row-flex-space-between blog-container-row' style={{ display: 'flex'}}>
              <Col md={6} className='blog-container'>
                <img src={blogImg} style={{width:'100%'}}/>
                <div className='img-tag'>THERAPY</div>
                <h5>
                  Exposing our blind spots: How to Tackle Unconscious Bias as Therapist
                </h5>
                <div className='blog-user'>
                  William Hua, phD {'   -   '} Nov 19,2019
                </div>
              </Col>
              <Col md={6} className='blog-container'>
                <img src={blogImg2} style={{width:'100%'}}/>
                <div className='img-tag'>THERAPY</div>
                <h5>
                  Exposing our blind spots: How to Tackle Unconscious Bias as Therapist
                </h5>
                <div className='blog-user'>
                  William Hua, phD {'   -   '} Nov 19,2019
                </div>
              </Col>
              <Col md={6} className='blog-container'>
                <img src={blogImg3} style={{width:'100%'}}/>
                <div className='img-tag'>THERAPY</div>
                <h5>
                  Exposing our blind spots: How to Tackle Unconscious Bias as Therapist
                </h5>
                <div className='blog-user'>
                  William Hua, phD {'   -   '} Nov 19,2019
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      */}
      </section>
    </Fragment>
  )
}

export default Home
