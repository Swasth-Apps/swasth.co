import React, { Fragment } from 'react'
import { Col, Row, Tabs } from 'antd'
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
import UserImg from '../assets/images/5@3x.png'
import Quote from '../assets/images/quote-icon@3x.png'


import { home } from '../helper/helper'
import Banner from '../components/Banner'

const { TabPane } = Tabs;
const Home = (props) => {
  const testimonials = [
    {
      img: Quote,
      user: UserImg,
      desc: 'Life Coaching with Michele changed my life. I was at a standstill for over 10 years working a Corporate job I didnt like. After 1 month of working with her I found a school to attend, my confidence increased in making a decision and I was able to move forward. I ended taking the package from Corporate and now I have the job of my dreams. I am a Holistic Health Counselor. I see clients privately and I do cooking classes and seminars. I never imagined what working with Michele would have done. A great experience but also a necessary one to make things happen in my life. I cannot thank her enough.    ',
    }, {
      img: Quote,
      user: UserImg,
      desc: 'Life Coaching with Michele changed my life. I was at a standstill for over 10 years working a Corporate job I didnt like. After 1 month of working with her I found a school to attend, my confidence increased in making a decision and I was able to move forward. I ended taking the package from Corporate and now I have the job of my dreams. I am a Holistic Health Counselor. I see clients privately and I do cooking classes and seminars. I never imagined what working with Michele would have done. A great experience but also a necessary one to make things happen in my life. I cannot thank her enough.    ',
    }, {
      img: Quote,
      user: UserImg,
      desc: 'Life Coaching with Michele changed my life. I was at a standstill for over 10 years working a Corporate job I didnt like. After 1 month of working with her I found a school to attend, my confidence increased in making a decision and I was able to move forward. I ended taking the package from Corporate and now I have the job of my dreams. I am a Holistic Health Counselor. I see clients privately and I do cooking classes and seminars. I never imagined what working with Michele would have done. A great experience but also a necessary one to make things happen in my life. I cannot thank her enough.    ',
    }, {
      img: Quote,
      user: UserImg,
      desc: 'Life Coaching with Michele changed my life. I was at a standstill for over 10 years working a Corporate job I didnt like. After 1 month of working with her I found a school to attend, my confidence increased in making a decision and I was able to move forward. I ended taking the package from Corporate and now I have the job of my dreams. I am a Holistic Health Counselor. I see clients privately and I do cooking classes and seminars. I never imagined what working with Michele would have done. A great experience but also a necessary one to make things happen in my life. I cannot thank her enough.    ',
    }, {
      img: Quote,
      user: UserImg,
      desc: 'Life Coaching with Michele changed my life. I was at a standstill for over 10 years working a Corporate job I didnt like. After 1 month of working with her I found a school to attend, my confidence increased in making a decision and I was able to move forward. I ended taking the package from Corporate and now I have the job of my dreams. I am a Holistic Health Counselor. I see clients privately and I do cooking classes and seminars. I never imagined what working with Michele would have done. A great experience but also a necessary one to make things happen in my life. I cannot thank her enough.    ',
    }, {
      img: Quote,
      user: UserImg,
      desc: 'Life Coaching with Michele changed my life. I was at a standstill for over 10 years working a Corporate job I didnt like. After 1 month of working with her I found a school to attend, my confidence increased in making a decision and I was able to move forward. I ended taking the package from Corporate and now I have the job of my dreams. I am a Holistic Health Counselor. I see clients privately and I do cooking classes and seminars. I never imagined what working with Michele would have done. A great experience but also a necessary one to make things happen in my life. I cannot thank her enough.    ',
    }]
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
      <section className='home-section-group'>
        <Banner/>
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
            <img className='custom-image' src={therapyGraphic} alt='Therapy'/>
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
          <Col md={24} style={{width:'100%'}}>
            <Row>
              <h2 style={{ textAlign: 'center' }} className='base-text'>An app for each <br/><span className='-highlighted-text'>Evidence Based Treatment</span>{' '} modality
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
                <img className='custom-image tab-image' width={24} height={24} src={DBTCoach}/>
               <span className='-highlighted-secondary-text base-text' style={{fontSize:'16px',marginLeft:'10px'}}>DBT Coach</span>
              </div>
            }
            key="1"
          >
            <Row className='card-row divider'>
              <Col md={12} className='-margin-right'>
                <img className='custom-image' width='100%'  src={DBTCoachScreen} alt='Therapy'/>
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
                    <img className='custom-image tab-image' width={24} height={24} src={CBTCompanion}/>
                    <span className='-highlighted-secondary-text base-text' style={{fontSize:'16px',marginLeft:'10px'}}>CBT Companion</span>
                  </div>
                }
                key="2"
              >
                <Row className='card-row'>
                  <Col md={12} className='-margin-right'>
                    <img className='custom-image' width='100%' src={CBTCompanionScreen} alt='Therapy'/>
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
                    <img className='custom-image tab-image' width={24} height={24} src={ACTCoach}/>
                    <span className='-highlighted-secondary-text base-text' style={{fontSize:'16px',marginLeft:'10px'}}>ACT Coach</span>
                  </div>
                }
                key="3"
              >
                <Row className='card-row divider'>
                  <Col md={12} className='-margin-right '>
                    <img className='custom-image' width='100%' src={ACTCoachScreen} alt='Therapy'/>
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
      </section>
      <section className='border-section-group'>
        <Row className='card-row -row-flex-center'>
          <Col md={24}>
            <Row>
              <h2 style={{ textAlign: 'center' }} className='base-text'>HOW <span className='-highlighted-text'>OUR SERVICE</span>{' '} WORKS
              </h2>
            </Row>
           
            <Row className='card-row '>
              <Col md={12} className='-margin-right'>
                <img className='custom-image' src={rightProvider} alt='Therapy'/>
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
              <Col md={24} style={{textAlign:'center',padding:'20px'}}>
                <h4 className='bottom-space para-text'>
                 Connect with the right evidence-based clinician that fits with your values and preferences.
                </h4>
                <button className='-btn-primary para-text'>
                  Find Provider
                </button>
                {/*<img src={findProvider}/>*/}
              </Col>
            </Row>
            <Row className='card-row'>
              <Col md={12}>
                <h2 className='bottom-space base-text'>
                  <span className='-highlighted-secondary-text'>
                    Evidence-
                    </span>
                based
                </h2>
                <div className='para-text'>
                  Our digital therapeutic tools are built ground up using evidence based treatments like Cognitive Behavioral Therapy (CBT), Acceptance & Commitment Therapy (ACT), Dialetical Behavior Therapy (DBT) etc. Further, we partner with our therapists and coaches so they can enjoy a thriving evidence-based practice while devoting more time to care.
                </div>
              </Col>
              <Col md={12} className='-margin-right'>
                <img className='custom-image' src={evidenceGraphic} alt='Therapy'/>
              </Col>
            </Row>
      </Col>
    </Row>
      </section>
      <section className='home-section-group after-border-section'>
        <Row className='card-row' />
        <Row className='card-row -row-flex-center'>
          <Col md={24}>
            <Row className='card-row -row-flex-center'>
              <div style={{textAlign:'center'}}>
              <h2 className='bottom-space base-text'>Check out what our
                <span className='-highlighted-secondary-text'>{' '}users </span>{' '} are saying about<span className='-highlighted-text'>{' '}Swasth</span> </h2>
                
              </div>
            </Row>
          </Col>
        </Row>
        <Row gutter={24} className='second-fold-row' style={{marginTop: 20}}>
          <div className='testimonials-title'><h3 className='base-text'>User Testimonials</h3></div>
          <div className='cell well user-testimonial'>
            <div className='grid grid--3 well--m mt4 pricing-relative'>
              {testimonials?.map((item,i) =>
                <div className={`card card--vertical card--starter pricing-relative life-coach-grid-section`}>
                  <div className='card-text'>
                    <img src={item.img}/>
                    <p className='para-text navy-text line-clamp-para'>{item.desc}</p>
                    {/*<a className='para-text more-link-text' onClick={() => handleTestimonial(i)}>{i === testimonial ? 'READ LESS' :'READ MORE'}</a>*/}
                    <p className='-font-bold user-img navy-text'><img src={item.user}/> MARK PETER </p>
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
