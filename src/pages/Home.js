import React, { Fragment, useState } from 'react'
import { Col, Row } from 'antd'
import therapyGraphic from '../assets/images/Therapy_graphic.png'
import Carousel from '../shared/carousel'
import appStore from '../assets/images/app-store.png'
import googlePay from '../assets/images/google-play.png'
import DBTCoach from '../assets/images/DBT-app-icon.png'
import ACTCoach from '../assets/images/ACT-coach-app-icon.png'
import CBTCompanion from '../assets/images/CBT_app_icon.png'
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
import Banner from '../components/Banner'

const Home = (props) => {
  const [app, setApp] = useState('dbt')
  const store = (
    <Row className='card-row' style={{display:'flex'}}>
      <Col md={8} style={{marginRight:'10px'}}>
        <img src={appStore} alt='{app} Therapy App'/>
      </Col>
      <Col md={8}>
        <img src={googlePay} alt='{app} Therapy App'/>
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
            <h2 className='bottom-space'>
                    <span className='-highlighted-text'>
                        Therapy
                    </span>{' '}
              is not one size fits all
            </h2>
            <div >
              Treatment is not a one size fits all approach. Where you go for mental health care treatment depends
              on your situation and recovery needs. Knowing where to look and what to expect can help reduce
              confusion and stress.
            </div>
          </Col>
        </Row>
        <Row className='card-row -row-flex-center divider'>
          <Col md={24} style={{width:'100%'}}>
            <Row>
              <h2 style={{ textAlign: 'center' }}>An app for each <br/><span className='-highlighted-text'>Evidence Based Treatment</span>{' '} modality
              </h2>
            </Row>
            <Row className='card-row -row-flex-space-between' style={{display:'flex'}}>
              <Col md={4} style={{ textAlign: 'center',marginRight:'10px' }} onClick={() => setApp('dbt')}>
                <img className='custom-image' src={DBTCoach}/>
                <div className={`${app === 'dbt' ? '-highlighted-text' : '-highlighted-secondary-text'}`}>DBT Coach
                </div>
              </Col>
              <Col md={4} style={{ textAlign: 'center' ,marginRight:'10px' }} onClick={() => setApp('cbt')}>
                <img className='custom-image' src={CBTCompanion}/>
                <div className={`${app === 'cbt' ? '-highlighted-text' : '-highlighted-secondary-text'}`}>CBT
                  Companion
                </div>
              </Col>
              <Col md={4} style={{ textAlign: 'center' }} onClick={() => setApp('act')}>
                <img className='custom-image' src={ACTCoach}/>
                <div className={`${app === 'act' ? '-highlighted-text' : '-highlighted-secondary-text'}`}>ACT Coach
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        {app === 'dbt' ?
          <Row className='card-row divider'>
            <Col md={8} className='-margin-right'>
              <img className='custom-image' src={DBTCoachScreen} alt='Therapy'/>
            </Col>
            <Col md={6}>
              <h2 className='bottom-space'>
                    <span className='-highlighted-secondary-text'>
                        DBT Coach
                    </span>{' '}
              </h2>
              <div >
                A comprehensive app based on Dialetical Behavior Therapy (DBT), with over 100+ video lessons, exercises,
                practice ideas and diary card tool for tracking DBT skills, targets and activites.
                {store}
              </div>
            </Col>
          </Row> :
          ''
        }
        {app === 'cbt' ?
          <Row className='card-row divider'>
            <Col md={8} className='-margin-right'>
              <img className='custom-image' src={CBTCompanionScreen} alt='Therapy'/>
            </Col>
            <Col md={6}>
              <h2 className='bottom-space'>
                    <span className='-highlighted-secondary-text'>
                        CBT Companion
                    </span>{' '}
              </h2>
              <div >
                Based on Cognitive Behavior Therapy, this enables you to track mood, emotions, activities journal etc.
                Video lessons, exercises, ability to share with care team and more..
                {store}
              </div>
            </Col>
          </Row> :
          ''
        }
        {app === 'act' ?
          <Row className='card-row divider'>
            <Col md={8} className='-margin-right'>
              <img className='custom-image' src={ACTCoachScreen} alt='Therapy'/>
            </Col>
            <Col md={6}>
              <h2 className='bottom-space'>
                    <span className='-highlighted-secondary-text'>
                        ACT Coach
                    </span>{' '}
              </h2>
              <div >
                Use Acceptance Commitment Therapy tools to record daily and weekly ACT Measures, stay mindful with ACT
                Exercises, track mood, emotions, activities etc.
                {store}
              </div>
            </Col>
          </Row> :
          ''
        }
        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <h2 className='bottom-space'>
              <span className='-highlighted-text'>{' '}Engagement</span>{' '}tools</h2>
            <div >
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
              <h2 style={{ textAlign: 'center' }}>HOW <span className='-highlighted-text'>OUR SERVICE</span>{' '} WORKS
              </h2>
            </Row>
           
            <Row className='card-row'>
              <Col md={12} className='-margin-right'>
                <img className='custom-image' src={rightProvider} alt='Therapy'/>
              </Col>
              <Col md={12}>
                <h2 className='bottom-space'>
                  Better care with
                  <span className='-highlighted-secondary-text'>
                        {' '} Right Provider
                    </span>
                </h2>
                <div >
                  With Swasth's unique matching process, individuals get connected to the right clinician / provider at
                  no cost. Our evidence based platform enables individuals to obtain care in-person, live video call or
                  self guided digital care.
                </div>
              </Col>
            </Row>
            <Row className='provider-card-btn -row-flex-center'>
              <Col md={24} style={{textAlign:'center',padding:'20px'}}>
                <h4 className='bottom-space'>
                 Connect with the right evidence-based clinician that fits with your values and preferences.
                </h4>
                <button className='-btn-primary'>
                  Find Provider
                </button>
                {/*<img src={findProvider}/>*/}
              </Col>
            </Row>
            <Row className='card-row'>
              <Col md={12}>
                <h2 className='bottom-space'>
                  <span className='-highlighted-secondary-text'>
                    Evidence-
                    </span>
                based
                </h2>
                <div >
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
      <section className='home-section-group'>
        <Row className='card-row' />
        <Row className='card-row -row-flex-center'>
          <Col md={24}>
            <Row className='card-row -row-flex-center'>
              <div style={{textAlign:'center'}}>
              <h2 className='bottom-space'>Check out what our
                <span className='-highlighted-secondary-text'>{' '}users </span>{' '} are saying about<span className='-highlighted-text'>{' '}Swasth</span> </h2>
                
              </div>
            </Row>
          </Col>
        </Row>
        <Carousel reviews={home} />
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
