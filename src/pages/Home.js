import React, { Fragment,useEffect,useState } from 'react'
import { Link } from 'gatsby'
import { Col, Row, Tabs } from 'antd'
import { testimonials } from '../components/testimonialData'
//import therapyGraphic from '../assets/images/Therapy-section@3x.png'
import therapyGraphic from '../assets/images/therapy.jpg'
import MobileGraphic from '../assets/images/MobileView.png'
import appStore from '../assets/images/app-store.png'
import googlePay from '../assets/images/google-play.png'
import DBTCoach from '../assets/images/DBT-app-icon.png'
import ACTCoach from '../assets/images/ACT-app-icon.png'
import CBTCompanion from '../assets/images/CBT_app_icon.png'
import DBTCoachScreen from '../assets/images/DBT_coach_screen@2x.png'
import ACTCoachScreen from '../assets/images/ACT_coach_screen.png'
import CBTCompanionScreen from '../assets/images/CBT_companion_screen.png'
import skillsCoaching from '../assets/images/skillsCoaching.png'
import programs from '../assets/images/programs.png'
import ComprehensiveHealth from '../assets/images/comprehensiveHealth.png'
import ProgramAdapts from '../assets/images/program-adapts.jpg'
import Banner from '../components/Banner'

const { TabPane } = Tabs;
const Home = (props) => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize",() =>{
      setIsMobile(window.innerWidth < 768)
    })
  },[])

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
              isn't one size fits all
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
              <img className='custom-image' src={isMobile ? MobileGraphic : ComprehensiveHealth} alt='Therapy' />
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
              <Col md={12} className="program-adapts">
                <h3 className='bottom-space base-text'>Personalized programs for <span className='-highlighted-secondary-text'>specific </span>
                 conditions
                </h3>
                <div className='para-text'>
                  <p>Our treatment programs combines evidence-based therapy modalities (Dialectical Behavior Therapy / DBT, Cognitive Behavioral Therapy / CBT, Acceptance and Committment Therapy / ACT etc.) with nutritional psychology, sleep psychology, Heart Rate / HRV-biofeedback and Health Psychology.</p>
                  <p> This holistic approach to behavioral health helps our program participants to gain long-lasting transformational results.</p>
                </div>
              </Col>
              <Col md={12} className='-margin-right'>
                <img className='custom-image' src={ProgramAdapts} alt='Therapy' />
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
              <h2 style={{ textAlign: 'center' }} className='base-text'>Evidence-Based <span className='-highlighted-text'>Behavioral Health</span>{' '}Coaching
              </h2>
            </Row>
            <Row className='card-row '>
              <Col md={12} className='-margin-right'>
                <img className='custom-image' src={programs} alt='Therapy' />
              </Col>
              <Col md={12}>
                <h3 className='bottom-space base-text'>
                Programs grounded in
                  <span className='-highlighted-secondary-text'>
                    {' '} Proven Treatment Methods
                    </span>
                </h3>
                <div className='para-text'>
                <p>We offer effective care programs designed by clinical experts and grounded in evidence-based practices that are proven to work. </p>
                  The programs focus on:
                  <ul>
                    <li>Goal-focused treatment</li>
                    <li>New skill development</li>
                    <li> Practice between sessions</li>
                    <li>Track progress toward goals</li>
                    <li>Use an holistic approach</li>
                    <li>Short-term and long-lasting results</li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row className='card-row'>
              <Col md={12}>
              <h3 className='bottom-space base-text'>
                  <span className='-highlighted-secondary-text'>
                    On-Demand
                    </span>
                  {' '}
                Skills Coaching
                </h3>
                <div className='para-text'>
                With on-demand skills coaching you can get additional support - whether you  have currently enrolled or graduated from a program, or need
                immediate help due to a crisis.  These sessions include reviewing skills used, asking questions, discussing what work for your specific situation,
                and introducing new DBT skills to help manage your situation.
                </div>
              </Col>
              <Col md={12} className='-margin-right'>
                <img className='custom-image' src={skillsCoaching} alt='Therapy' />
              </Col>
            </Row>

            <Row>
              <Col md={24} style={{textAlign:'center',padding:'20px'}}>
              <a href="https://healthcoach.swasth.co">
                <button className='-btn-primary para-text'>
                  Learn more
                </button>
              </a>
                {/*<img src={findProvider}/>*/}
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
      <section className='home-section-group after-border-section'>
        <Row className='card-row -row-flex-center'></Row>
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
                    <div className='para-text' style={{fontSize: 22}}>
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
                    <div className='para-text' style={{fontSize: 22}}>
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
                    <div className='para-text' style={{fontSize: 22}}>
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
      <section className='after-border-section'>
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
              {testimonials?.slice(0,6)?.map((item, i) =>
                <div className={`card card--vertical card--starter pricing-relative life-coach-grid-section`}>
                  <div className='card-text'>
                    <img src={item.img} />
                    <p className='para-text navy-text line-clamp-para'>{item.desc}</p>
                    {/*<a className='para-text more-link-text' onClick={() => handleTestimonial(i)}>{i === testimonial ? 'READ LESS' :'READ MORE'}</a>*/}
                    <span className='-font-bold user-img navy-text'>
                      <div className="user-info"><img src={item.user} /><strong>{item.name}</strong></div>
                                        <strong>{item.userType}</strong>

                      </span>
                  </div>
                </div>)}
            </div>
          </div>
          {testimonials.length > 6 ?<div className="show-more-testimonial"> <Link to="/testimonial">
            Show More
          </Link></div> : null}
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
