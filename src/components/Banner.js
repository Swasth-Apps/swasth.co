import React, { useState, Fragment } from 'react'
import { Button, Card, Col, Row } from 'antd'
import bannerGraphic from '../assets/images/Banner_graphic.png'
import therapyGraphic from '../assets/images/Therapy_graphic.png'
import logo1 from '../assets/images/logo - 1.png'
import logo2 from '../assets/images/logo - 2.png'
import logo3 from '../assets/images/logo - 3.png'
import logo4 from '../assets/images/logo - 4.png'
import logo5 from '../assets/images/logo - 5.png'
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
import findProvider from '../assets/images/Find_provider_bg.png'
import signupBtn from '../assets/images/signup_btn.png'
import blogImg from '../assets/images/Blog_img01.png'
import evidenceGraphic from '../assets/images/Evidence_based_graphic.png'

const Banner = (props) => {
  const [app, setApp] = useState('dbt')
  const store = (
    <Row className='card-row'>
      <Col md={8}>
        <img src={appStore} alt='Therapy'/>
      </Col>
      <Col md={8}>
        <img src={googlePay} alt='Therapy'/>
      </Col>
    </Row>
  )
  return (
    <Fragment>
      <section className='home-section-group'>
        <Row className='card-row'>
          <Col md={8} className='card-col -margin-right'>
            <h2 className='bottom-space'>Driving towards better
              <span className='-highlighted-text'>{' '}Behavioral</span> Health.</h2>
            <div className='-justified-text'>
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
        <Row className='card-row -row-flex-space-evenly'>
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
        </Row>
        <Row className='card-row'>
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
            <div className='-justified-text'>
              Treatment is not a one size fits all approach. Where you go for mental health care treatment depends
              on your situation and recovery needs. Knowing where to look and what to expect can help reduce
              confusion and stress.
            </div>
          </Col>
        </Row>
        <Row className='card-row -row-flex-center'>
          <Col md={24}>
            <Row>
              <h2 style={{ textAlign: 'center' }}>An app for each <br/><span className='-highlighted-text'>Evidence Based Treatment</span>{' '} modality
              </h2>
            </Row>
            <Row className='card-row -row-flex-space-between'>
              <Col md={4} style={{ textAlign: 'center' }} onClick={() => setApp('dbt')}>
                <img className='custom-image' src={DBTCoach}/>
                <div className={`${app === 'dbt' ? '-highlighted-text' : '-highlighted-secondary-text'}`}>DBT Coach
                </div>
              </Col>
              <Col md={4} style={{ textAlign: 'center' }} onClick={() => setApp('cbt')}>
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
          <Row className='card-row'>
            <Col md={8} className='-margin-right'>
              <img className='custom-image' src={DBTCoachScreen} alt='Therapy'/>
            </Col>
            <Col md={6}>
              <h2 className='bottom-space'>
                    <span className='-highlighted-secondary-text'>
                        DBT Coach
                    </span>{' '}
              </h2>
              <div className='-justified-text'>
                A comprehensive app based on Dialetical Behavior Therapy (DBT), with over 100+ video lessons, exercises,
                practice ideas and diary card tool for tracking DBT skills, targets and activites.
                {store}
              </div>
            </Col>
          </Row> :
          ''
        }
        {app === 'cbt' ?
          <Row className='card-row'>
            <Col md={8} className='-margin-right'>
              <img className='custom-image' src={CBTCompanionScreen} alt='Therapy'/>
            </Col>
            <Col md={6}>
              <h2 className='bottom-space'>
                    <span className='-highlighted-secondary-text'>
                        CBT Companion
                    </span>{' '}
              </h2>
              <div className='-justified-text'>
                Based on Cognitive Behavior Therapy, this enables you to track mood, emotions, activities journal etc.
                Video lessons, exercises, ability to share with care team and more..
                {store}
              </div>
            </Col>
          </Row> :
          ''
        }
        {app === 'act' ?
          <Row className='card-row'>
            <Col md={8} className='-margin-right'>
              <img className='custom-image' src={ACTCoachScreen} alt='Therapy'/>
            </Col>
            <Col md={6}>
              <h2 className='bottom-space'>
                    <span className='-highlighted-secondary-text'>
                        ACT Coach
                    </span>{' '}
              </h2>
              <div className='-justified-text'>
                Use Acceptance Commitment Therapy tools to record daily and weekly ACT Measures, stay mindful with ACT
                Exercises, track mood, emotions, activities etc.
                {store}
              </div>
            </Col>
          </Row> :
          ''
        }
        <Row className='card-row'>
          <Col md={12} className='-margin-right'>
            <h2 className='bottom-space'>
              <span className='-highlighted-text'>{' '}Engagement</span>{' '}tools</h2>
            <div className='-justified-text'>
              These apps help clinicians to engage better with clients by assigning homework exercises, lessons and
              practice ideas and get insights using a linician dashboard.
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
            <Row className='card-row -row-flex-space-between'>
              <Col md={8} style={{ textAlign: 'center' }} onClick={() => setApp('dbt')}>
                When you need a kickstart in your business and you have no time for coding for your website, swasth will
                take that job for you and will build a great looking website in minutes.
              </Col>
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
                <div className='-justified-text'>
                  With Swasth's unique matching process, individuals get connected to the right clinician / provider at
                  no cost. Our evidence based platform enables individuals to obtain care in-person, live video call or
                  self guided digital care.
                </div>
              </Col>
            </Row>
            <Row className='provider-card-btn -row-flex-center'>
              <Col md={24} style={{textAlign:'center',padding:'20px'}}>
                <h4 className='bottom-space'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry
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
                    Evidence
                    </span>
                  {' '}based
                </h2>
                <div className='-justified-text'>
                  Our digital therapeutic tools ground up using evidence based treatments like Cognitive Behavior Therapy (CBT), Acceptance Commitment Therapy, Dialetical Behavior Therapy etc. Further, we partner with our therapists and coaches so they can enjoy a thriving evidence-based practice while devoting more time to care.
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
        <Row className='card-row'>
          <Col md={8} className='card-col -margin-right'>
            <h2 className='bottom-space'>Driving towards better
              <span className='-highlighted-text'>{' '}Behavioral</span> Health.</h2>
            <div className='-justified-text'>
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
        <Row className='card-row -row-flex-center'>
          <Col md={24}>
            <Row className='card-row -row-flex-center'>
              <h2 className='bottom-space'>Read the latest from
                <span className='-highlighted-secondary-text'>{' '}Swasth</span></h2>
            </Row>
            <Row className='card-row -row-flex-space-between'>
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
                <img src={blogImg} style={{width:'100%'}}/>
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
        <div className='btn-class'>
        <Row className='card-row -row-flex-space-between'>
          <Col md={8} className='card-col -margin-right'>
            <h2 className='bottom-space'>
              <span className='-highlighted-secondary-text'>Learn more about Swasth</span> {' '} <br />

              </h2>
            <div className='-justified-text'>
              Get in touch or create an account.
            </div>
          </Col>
          <Col md={8} className='card-col'>
            <img src={signupBtn}/>
          </Col>
        </Row>
        </div>

      </section>
</Fragment>
)
}

export default Banner
