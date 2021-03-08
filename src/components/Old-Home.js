import React, {Fragment, useEffect, useState} from 'react'
import {Link} from 'gatsby'
import {Col, Icon, Row} from 'antd'
import {testimonials} from './testimonialData'
//import therapyGraphic from '../assets/images/Therapy-section@3x.png'
import therapyGraphic from '../assets/images/therapy-image.png'
import MobileGraphic from '../assets/images/MobileView.png'
import appStore from '../assets/images/app-store.png'
import googlePay from '../assets/images/google-play.png'
import DBTCoachScreen from '../assets/images/DBT-app-icon@3x.png'
import ACTCoachScreen from '../assets/images/ACT-app-icon.png'
import CBTCompanionScreen from '../assets/images/CBT_app_icon@3x.png'
import SelfHelpImg from '../assets/images/Self-Health-Coach-Section.png'
import programs from '../assets/images/Proven-Treatment-Methods-Img.png'
import ComprehensiveHealth from '../assets/images/comprehensiveHealth.png'
import ProgramAdapts from '../assets/images/pexels-kaboompics-com-6335.jpg'
import DotsIcon from '../assets/images/dots.png';


import Banner from './Banner'

/*
const helpData = [
    {
        title: "Anxiety",
        image: require("../assets/images/programs/Anxiety-icon.png")
    },{
        title: "Depression",
        image: require("../assets/images/programs/Depression-icon.png")
    },{
        title: "Eating Disorders",
        image: require("../assets/images/programs/Eating Disorders-icon.png")
    },{
        title: "Insomnia",
        image: require("../assets/images/programs/Insomnia-icon.png")
    },{
        title: "Panic Disorders",
        image: require("../assets/images/programs/Panic-Disorders-icon.png")
    },
];
*/

const helpData = [
    {
        title: "Anxiety",
        image: require("../assets/images/programs/Anxiety.jpg")
    }, {
        title: "Depression",
        image: require("../assets/images/programs/Depression.jpg")
    }, {
        title: "Eating Disorders",
        image: require("../assets/images/programs/Eating-Disorder.jpg")
    }, {
        title: "Insomnia",
        image: require("../assets/images/programs/Insomnia.jpg")
    }, {
        title: "Panic Disorders",
        image: require("../assets/images/programs/Panic-Disorder.jpg")
    },
];

const OldHome = () => {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
        window.addEventListener("resize", () => {
            setIsMobile(window.innerWidth < 768)
        })
    }, [])

    const store = (
        <Row style={{display: 'flex', flexDirection: 'row', marginTop: 20}}>
            <Col md={8} style={{marginRight: '10px'}} className="store-icon">
                <a href="https://itunes.apple.com/us/developer/swasth-inc/id1295868545">
                    <img src={appStore} alt='{app} Therapy App'/>
                </a>
            </Col>
            <Col md={8} className="store-icon">
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
                <div
                    id='wrapper'
                    className={'coach-wrapper'}
                    style={{paddingBottom: 0}}
                >
                    <Row className='card-row divider section-gap'>
                        <Col md={12} className='-margin-right'>
                            <img className='custom-image updated-home-image' src={therapyGraphic} alt='Therapy'/>
                        </Col>
                        <Col md={12}>
                            <h2 className='bottom-space base-text'>
              <span className='-highlighted-text'>
                Therapy
                    </span>
                                <br/>
                                isn't one size fits all
                            </h2>
                            <div className='para-text black-18-font'>
                                Treatment is not a one size fits all approach. Where you go for mental health care
                                treatment
                                depends
                                on your situation and recovery needs. Knowing where to look and what to expect can help
                                reduce
                                confusion and stress.
                            </div>
                        </Col>
                    </Row>
                    <Row className='card-row -row-flex-center'>
                        <Col md={24}>
                            <Row>
                                <p style={{textAlign: 'center'}} className='base-text section-title'>A
                                    Comprehensive <span
                                        className='-highlighted-text'>Behavioral Health</span>{' '} Platform
                                </p>
                            </Row>
                            <Row>
                                <div className='para-text'>
                                    <p style={{textAlign: 'center'}} className="black-18-font">
                                        Resiliens's Digital Health Platform offers treatment programs for Anxiety,
                                        Depression, Eating Disorders, Borderline Personality Disorder, PTSD, SUDs, etc.
                                        The Platform
                                        combines Technology, Evidence-Based Therapy and Coaching from Licensed
                                        Clinicians and Coaches.
                                    </p>
                                </div>
                            </Row>
                            <Row className="align-center">
                                <img
                                    className='custom-image'
                                    src={isMobile ? MobileGraphic : ComprehensiveHealth}
                                    alt='Therapy'
                                />
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
                  With Resiliens's unique matching process, individuals get connected to the right clinician / provider at
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
                            <Row className='section-gap program-row-adapts'>
                                <Col md={12} className="program-adapts">
                                    <p className='bottom-space base-text'>
                                        <span className='-highlighted-text'>Personalized Programs</span>
                                        <br/>
                                        for Specific Conditions
                                    </p>
                                    <div className='para-text black-18-font'>
                                        <p>Our treatment programs combines evidence-based therapy modalities
                                            (Dialectical Behavior Therapy / DBT, Cognitive Behavioral Therapy / CBT,
                                            Acceptance and Committment Therapy / ACT etc.) with nutritional psychology,
                                            sleep psychology, Heart Rate / HRV-biofeedback and Health Psychology.</p>
                                        <p> This holistic approach to behavioral health helps our program participants
                                            to gain long-lasting transformational results.</p>
                                    </div>
                                </Col>
                                <Col md={12} className='-margin-right align-right'>
                                    <img className='custom-image updated-home-image' src={ProgramAdapts} alt='Therapy'/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
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
                <Row className='-row-flex-center card-row'>
                    <Col md={24}>
                        <Row className="card-row" style={{justifyContent: "center"}}>
                            <p style={{textAlign: 'center'}} className='base-text bottom-space'>Evidence-Based <span
                                className='-highlighted-text'>Behavioral Health</span>{' '}Coaching
                            </p>
                        </Row>
                        <Row className='card-row'>
                            <Col md={12}>
                                <h3 className='bottom-space base-text program-grounded'>
                                    Live Coaching for<br/>
                                    <span className='-highlighted-text'>
                    {' '} Groups and Individuals
                    </span>
                                </h3>
                                <div className='para-text black-18-font margin-bottom-25'>
                                    <p className="width-90">We offer effective care programs grounded in proven
                                        treatment methods designed by
                                        clinical experts and grounded in evidence-based practices that are proven to
                                        work. </p>
                                    <b>The programs focus on :</b>
                                    <ul className="black-18-font">
                                        <li className="para-text">Goal-focused treatment</li>
                                        <li className="para-text">New skill development</li>
                                        <li className="para-text"> Practice between sessions</li>
                                        <li className="para-text">Track progress toward goals</li>
                                        <li className="para-text">Use an holistic approach</li>
                                        <li className="para-text">Short-term and long-lasting results</li>
                                    </ul>
                                </div>

                                <a href="https://coaching.resiliens.com/" target="_blank">
                                    <button className='request-demo-btn' style={{marginBottom: 20}}>
                                        Get Started
                                    </button>
                                </a>
                            </Col>
                            <Col md={12} className="-margin-right">
                                <img className='custom-image' src={programs} alt='Therapy'/>
                            </Col>
                        </Row>
                        <Row className='card-row reverse-flex-column'>
                            <Col md={12} className='-margin-right'>
                                <img className='custom-image' src={SelfHelpImg} alt='Therapy'/>
                            </Col>
                            <Col md={12}>
                                <p className='bottom-space base-text'>
                                    Self Guided {' '}
                                    <span className='-highlighted-text'>
                    Programs
                    </span>

                                </p>
                                <div className='para-text margin-bottom-25 black-18-font width-90'>
                                    Finding effective behavioral healthcare is hard. Through our self-guided app
                                    (Resilify), you have access to over 50+ self-guided programs,
                                    organized by symptoms / conditions, treatment modalities. These contain video-guided
                                    lessons, exercises, activities and tools that were created by
                                    experts in behavioral health using evidence-based techniques, to improve your mental
                                    well-being.
                                </div>
                                <a
                                    href="https://resilify.org"
                                    target="_blank"
                                >
                                    <button className='request-demo-btn'>
                                        Get Started
                                    </button>
                                </a>
                            </Col>

                        </Row>

                        {/* <Row>
                            <Col md={24} style={{textAlign: 'center', padding: '20px'}}>
                                <a href="https://healthcoach.Resiliens.co">
                                    <button className='request-demo-btn'>
                                        Learn more
                                    </button>
                                </a>
                                <img src={findProvider}/>
                            </Col>
                        </Row>*/}


                        {/* ------------ Engage with Community Section ---------  */}

                        {/* <Row className="card-row" style={{justifyContent: "center"}}>
                            <div>
                                <p
                                    style={{textAlign: 'center'}}
                                    className='base-text section-title'
                                >Engage with <span
                                    className='-highlighted-text'>Community</span></p>
                                <div className='para-text'>
                                    <p style={{textAlign: 'center'}} className="black-18-font">
                                        We’ve got you. Our communities talk each day about more than<br/>
                                        6,000 topics - from health conditions to weekly challenges
                                    </p>
                                </div>
                            </div>
                        </Row>
                        <Row className="align-center card-row -row-flex-center engage-community-row">
                            <div className="engage-community-section">
                                <div className="engage-community-card">
                                    <img src={require("../assets/images/community-img.png")}
                                         className="community-image"/>
                                    <div className="card-content">
                                        <p className="base-text card-title">Check in with</p>
                                        <div className="users-list">
                                            <img src={require("../assets/images/Oval@3x.png")}/>
                                            <img src={require("../assets/images/Oval@3x.png")}/>
                                            <img src={require("../assets/images/Oval@3x.png")}/>
                                        </div>
                                        <p className="para-text community-msg">Send and receive daily support by using
                                            the hashtag #CheckInWithMe. This is a safe space to talk about what you’re
                                            going through.</p>
                                    </div>
                                </div>
                                <div className="engage-community-card">
                                    <img src={require("../assets/images/community-img.png")}
                                         className="community-image"/>
                                    <div className="card-content">
                                        <p className="base-text card-title">Check in with</p>
                                        <div className="users-list">
                                            <img src={require("../assets/images/Oval@3x.png")}/>
                                            <img src={require("../assets/images/Oval@3x.png")}/>
                                            <img src={require("../assets/images/Oval@3x.png")}/>
                                        </div>
                                        <p className="para-text community-msg">Send and receive daily support by using
                                            the hashtag #CheckInWithMe. This is a safe space to talk about what you’re
                                            going through.</p>
                                    </div>
                                </div>
                                <div className="engage-community-card">
                                    <img src={require("../assets/images/community-img.png")}
                                         className="community-image"/>
                                    <div className="card-content">
                                        <p className="base-text card-title">Check in with</p>
                                        <div className="users-list">
                                            <img src={require("../assets/images/Oval@3x.png")}/>
                                            <img src={require("../assets/images/Oval@3x.png")}/>
                                            <img src={require("../assets/images/Oval@3x.png")}/>
                                        </div>
                                        <p className="para-text community-msg">Send and receive daily support by using
                                            the hashtag #CheckInWithMe. This is a safe space to talk about what you’re
                                            going through.</p>
                                    </div>
                                </div>
                            </div>
                        </Row>*/}
                    </Col>
                </Row>
            </section>
            <div
                id='wrapper'
                className={'coach-wrapper'}
                style={{paddingBottom: 0}}
            >
                <section className="help-people-section">
                    <Row className='-row-flex-center'/>
                    <Row className='-row-flex-center'>
                        <Col md={24} style={{width: '100%'}}>
                            <p style={{textAlign: 'center'}}
                               className='bottom-space base-text tab-view'>We <span
                                className='-highlighted-text'>help people with</span>
                            </p>

                            <div className="multi-modality-section programs-list">
                                {helpData?.map(data =>
                                    <div className="section">
                                        <div className="section-card" style={{
                                            backgroundImage: `url(${data.image})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat",
                                        }}>
                                            <div className="content">
                                                <h4 className="base-text">{data.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <Link className="section" to="/programs">
                                    <div className="section-card">
                                        <img src={DotsIcon} className="dots-image"/>
                                        <div className="more-content">
                                            <h4 className="base-text more-text">More</h4>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>

            <section className='home-section-group after-border-section modality-section'>
                <Row className='-row-flex-center'/>
                <Row className='-row-flex-center' id='wrapper'>
                    <Col md={24} style={{width: '100%'}}>
                        <p style={{textAlign: 'center'}}
                           className='bottom-space base-text tab-view'>Multi-Modality <span
                            className='-highlighted-text'>Evidence-Based Therapy</span>{' '} Apps
                        </p>
                        {/* <Tabs
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
                                            <img className='custom-image tab-image' width={24} height={24}
                                                 src={DBTCoach}/>
                                            <span
                                                className='base-text tab-title'
                                                style={{marginLeft: '10px'}}
                                            >DBT Coach</span>
                                        </div>
                                    }
                                    key="1"
                                >
                                    <Row className='divider card-row'>
                                        <Col md={12} className='-margin-right'>
                                            <img className='custom-image' width='100%' src={DBTCoachScreen}
                                                 alt='Therapy'/>
                                        </Col>
                                        <Col md={12}>
                                            <h2 className='bottom-space base-text' style={{fontSize: 30}}>
                                            <span className='-highlighted-secondary-text base-text'>
                                                    DBT Coach
                                            </span>{' '}
                                            </h2>
                                            <div className='para-text black-18-font'>
                                                A comprehensive app based on Dialetical Behavior Therapy (DBT), with
                                                over
                                                100+ video lessons, exercises,
                                                practice ideas and diary card tool for tracking DBT skills, targets and
                                                activites.
                                                {store}
                                            </div>
                                        </Col>
                                    </Row>
                                </TabPane>

                                <TabPane
                                    tab={
                                        <div className='-flex-align-item'>
                                            <img className='custom-image tab-image' width={24} height={24}
                                                 src={CBTCompanion}/>
                                            <span className='base-text tab-title'
                                                  style={{marginLeft: '10px'}}>CBT Companion</span>
                                        </div>
                                    }
                                    key="2"
                                >
                                    <Row className='divider card-row'>
                                        <Col md={12} className='-margin-right'>
                                            <img className='custom-image' width='100%' src={CBTCompanionScreen}
                                                 alt='Therapy'/>
                                        </Col>
                                        <Col md={12}>
                                            <h2 className='bottom-space' style={{fontSize: 30}}>
                                              <span className='base-text -highlighted-secondary-text'>
                                                CBT Companion
                                            </span>{' '}
                                            </h2>
                                            <div className='para-text black-18-font'>
                                                Based on Cognitive Behavior Therapy, this enables you to track mood,
                                                emotions, activities journal etc.
                                                Video lessons, exercises, ability to share with care team and more..
                                                {store}
                                            </div>
                                        </Col>
                                    </Row>
                                </TabPane>

                                <TabPane
                                    tab={
                                        <div className='-flex-align-item'>
                                            <img className='custom-image tab-image' width={24} height={24}
                                                 src={ACTCoach}/>
                                            <span className='base-text tab-title'
                                                  style={{marginLeft: '10px'}}>ACT Coach</span>
                                        </div>
                                    }
                                    key="3"
                                >
                                    <Row className='card-row divider'>
                                        <Col md={12} className='-margin-right '>
                                            <img className='custom-image' width='100%' src={ACTCoachScreen}
                                                 alt='Therapy'/>
                                        </Col>
                                        <Col md={12}>
                                            <h2 className='bottom-space' style={{fontSize: 30}}>
                                              <span className='base-text -highlighted-secondary-text'>
                                                ACT Coach
                                            </span>{' '}
                                            </h2>
                                            <div className='para-text black-18-font'>
                                                Use Acceptance Commitment Therapy tools to record daily and weekly ACT
                                                Measures, stay mindful with ACT
                                                Exercises, track mood, emotions, activities etc.
                                                {store}
                                            </div>
                                        </Col>
                                    </Row>
                                </TabPane>

                            </Tabs>*/}

                        <div className="multi-modality-section">
                            <Link className="section" to="/dbt-coach">
                                <div className="section-card">
                                    <img src={DBTCoachScreen}/>
                                    <h4 className="base-text">DBT Coach</h4>
                                    <p className="para-text">
                                        Read More <Icon type="arrow-right"/>
                                    </p>
                                </div>
                            </Link>
                            <Link className="section" to="/cbt-companion">
                                <div className="section-card">
                                    <img src={CBTCompanionScreen}/>
                                    <h4 className="base-text">CBT Companion</h4>
                                    <p className="para-text">
                                        Read More <Icon type="arrow-right"/>
                                    </p>
                                </div>
                            </Link>
                            <Link className="section" to="/act-coach">
                                <div className="section-card">
                                    <img src={ACTCoachScreen}/>
                                    <h4 className="base-text">ACT Coach</h4>
                                    <p className="para-text">
                                        Read More <Icon type="arrow-right"/>
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </section>

            <div
                id='wrapper'
                className={'coach-wrapper'}
                style={{paddingBottom: 0}}
            >
                <section className='after-border-section'>
                    <Row className='card-row -row-flex-center'>
                        <Col md={24}>
                            <div style={{textAlign: 'center'}}>
                                <p className='bottom-space base-text'>Check out what our
                                    <span className='-highlighted-text'>{' '}users </span>{' '} are saying
                                    about<span className='-highlighted-text'>{' '}Resiliens</span></p>

                            </div>
                        </Col>
                    </Row>
                    <Row gutter={24} className='second-fold-row' style={{marginTop: 20}}>
                        <div className='cell well user-testimonial'>
                            <div className='grid grid--3 well--m mt4 pricing-relative'>
                                {testimonials?.slice(0, 6)?.map((item, i) =>
                                    <div
                                        className={`card card--vertical card--starter pricing-relative life-coach-grid-section`}>
                                        <div className='card-text'>
                                            <img src={item.img}/>
                                            <p className='para-text navy-text line-clamp-para'>{item.desc}</p>
                                            {/*<a className='para-text more-link-text' onClick={() => handleTestimonial(i)}>{i === testimonial ? 'READ LESS' :'READ MORE'}</a>*/}
                                            <span className='-font-bold user-img navy-text'>
                      <div className="user-info">
                          <img src={item.user}/>
                          <strong className="para-text">
                              {item.name}
                              <br/>
                              <strong className="para-text -highlighted-secondary-text">{item.userType}</strong>
                          </strong>
                      </div>

                      </span>
                                        </div>
                                    </div>)}
                            </div>
                        </div>
                        {testimonials.length > 6 ?
                            <div className="show-more-testimonial base-text"><Link to="/testimonial">
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
                <span className='-highlighted-secondary-text'>{' '}Resiliens</span></h2>
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
            </div>
        </Fragment>
    )
}

export default OldHome
