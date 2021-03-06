import React from "react";
import {Col, Row} from "antd";
import {Link} from "gatsby";
import bannerGraphic from "../assets/images/home-woman.jpeg";
import ComprehensiveHealth from "../assets/images/comprehensiveHealth.png";
import programs from "../assets/images/Proven-Treatment-Methods-Img.png";
import SelfHelpImg from "../assets/images/Self-Health-Coach-Section.png";
import DotsIcon from "../assets/images/dots.png";
import {testimonials} from "./testimonialData";
import ProgramAdapts from "../assets/images/pexels-kaboompics-com-6335.jpg";

const helpData = [
    {
        title: "Anxiety",
        image: require("../assets/images/programs/anxiety_new.jpeg")
    }, {
        title: "Depression",
        image: require("../assets/images/programs/depression_new.jpeg")
    }, {
        title: "Eating Disorders",
        image: require("../assets/images/programs/Eating-Disorder_new.jpeg")
    }, {
        title: "Insomnia",
        image: require("../assets/images/programs/Insomnia_new.jpeg")
    }, {
        title: "Panic Disorders",
        image: require("../assets/images/programs/Panic-Disorder_new.jpeg")
    },
];
const LandingPage = props => {
    return (
        <div className="home-page-overview-container">
            <div className="home-page-overview">
                <div
                    id='wrapper'
                    className={'coach-wrapper'}
                    style={{paddingBottom: 0}}
                >
                    <Row className='-row-flex-center card-row bg-img'>
                        <Col md={24}>
                            <Row className='card-row'>
                                <Col md={12} className="content">
                                    <h3 className='bottom-space base-text program-grounded'>
                                        Behavioral health care <br/> for everyone
                                    </h3>
                                    <div className='para-text black-18-font margin-bottom-25'>
                                        <p className="width-90 para-text">A platform built on evidence-based principles,
                                            delivered by licensed clinicians, coaches making care accessible, effective
                                            and scalable.</p>
                                    </div>

                                    <a href="https://home-page.resiliens.com/" target="_blank">
                                        <button className='request-demo-btn' style={{marginBottom: 20}}>
                                            Request a demo
                                        </button>
                                    </a>
                                </Col>
                                <Col md={12} className="-margin-right img-section" style={{textAlign: "center"}}>
                                    <img
                                        className='custom-image'
                                        src={bannerGraphic}
                                        alt='Therapy'
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </div>
            </div>

            {/* *********** For Everyone ************ */}

            <div
                id='wrapper'
                className={'coach-wrapper'}
                style={{paddingBottom: 0}}
            >

                <div className="home-page-content-section">
                    <h3 className="base-text center margin-bottom-25 comprehensive-text">A Comprehensive Behavioral
                        Health Platform</h3>
                    <p className="para-book-text center" style={{fontSize: 18}}> Resiliens's Digital Health Platform
                        offers treatment programs for Anxiety,
                        Depression, Eating Disorders, Borderline Personality Disorder, PTSD, SUDs, etc.
                        The Platform
                        combines Technology, Evidence-Based Therapy and Coaching from Licensed
                        Clinicians and Coaches.</p>
                    {/*<div className="home-page-content-bottom-section">
                        <div className="-flex">
                            <div className="home-page-content-flex-section">
                                <div className="flex-container">
                                    <h3 className="para-text">Coaching</h3>

                                </div>
                                <div className="flex-container">
                                    <h3 className="para-text">Self-guided Programs</h3>
                                    <p className="para-book-text">71% of members see reliable clinical improvement. 75%
                                        of members recover. A total of 83% of members improve or recover.</p>
                                </div>
                            </div>
                            <div className="home-page-content-flex-section">
                                <h3 className="para-text">How is improvement measured?</h3>
                                <p className="para-book-text">
                                    Lyra uses validated clinical measures, such as the PHQ-9 and the GAD-7, to assess
                                    symptom improvement for anxiety, depression,
                                    and other common mental health issues. Reliable clinical change is a 6-point
                                    difference
                                    on the PHQ-9 and and a 4-point change on the GAD-7.
                                </p>
                                <a href="https://resiliens.com/" target="_blank" className="para-text">
                                    Learn more about our impact <ArrowRightOutlined/>
                                </a>
                            </div>
                        </div>
                    </div>*/}
                    <Row className="align-center" style={{marginTop: 20}}>
                        <img
                            className='custom-image'
                            src={ComprehensiveHealth}
                            alt='Therapy'
                        />
                    </Row>
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


                </div>

                <h3 className="base-text center margin-bottom-25 health-coaching-text">Behavioral Health Coaching</h3>
                <div className="home-page-overview-new-skills-section home-page-improvement-section">
                    <Row className='-row-flex-center card-row bg-img'>
                        <Col md={24}>
                            <Row className='card-row'>
                                <Col md={12} className="content">
                                    <h3 className='bottom-space base-text program-grounded'>
                                        Live Coaching for<br/>Groups and Individuals
                                    </h3>
                                    <p className="para-medium-text width-90" style={{fontSize: 18}}>
                                        We offer effective care programs grounded in proven treatment methods designed
                                        by clinical experts and grounded in evidence-based practices that are proven to
                                        work.
                                    </p>
                                    <div className='para-text' style={{marginTop: 40}}>
                                        <p className="para-text para-medium-text">
                                            The programs focus on :
                                        </p>
                                        <ul>
                                            <li className="para-book-text">Goal-focused treatment</li>
                                            <li className="para-book-text">New skill development</li>
                                            <li className="para-book-text">Practice between sessions</li>
                                            <li className="para-book-text">Track progress toward goals</li>
                                            <li className="para-book-text">Short-term and long-lasting results</li>
                                        </ul>
                                    </div>

                                    <a href="https://home-page.resiliens.com/" target="_blank">
                                        <button className='request-demo-btn' style={{marginBottom: 20}}>
                                            Learn more about our impact
                                        </button>
                                    </a>
                                </Col>
                                <Col md={12} className="-margin-right img-section" style={{textAlign: "center"}}>
                                    <img className='custom-image'
                                         src={programs}
                                         alt='Therapy'/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className="home-page-overview-new-skills-section home-page-self-guided">
                    <Row className='-row-flex-center card-row bg-img'>
                        <Col md={24}>
                            <Row className='card-row'>
                                <Col md={12} className="-margin-right img-section" style={{textAlign: "center"}}>
                                    <img className='custom-image'
                                         src={SelfHelpImg}
                                         alt='Therapy'/>
                                </Col>
                                <Col md={12} className="content">
                                    <h3 className='bottom-space base-text program-grounded'>
                                        Self Guided Programs
                                    </h3>
                                    <p className="para-text width-90" style={{fontSize: 18}}>
                                        Finding effective behavioral healthcare is hard. Through our self-guided app
                                        (Resilify), you have access to over 50+ self-guided programs, organized by
                                        symptoms / conditions, treatment modalities.
                                        <br/>
                                        <br/>
                                        These contain video-guided lessons,
                                        exercises, activities and tools that were created by experts in behavioral
                                        health
                                        using evidence-based techniques, to improve your mental well-being.
                                    </p>
                                    <a href="https://home-page.resiliens.com/" target="_blank">
                                        <button className='request-demo-btn' style={{marginTop: 20}}>
                                            Get Started
                                        </button>
                                    </a>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </div>

            </div>
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
                                className='-highlighted-secondary-text'>help people with</span>
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
                                    <span className='-highlighted-secondary-text'>{' '}users </span>{' '} are saying
                                    about<span className='-highlighted-secondary-text'>{' '}Resiliens</span></p>

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

            {/*
                <div className="home-page-content-section">
                    <h3 className="title base-text">Grounded in proven treatment methods</h3>
                    <div className="home-page-content-bottom-section">
                        <div className="-flex">
                            <div className="home-page-content-flex-section">
                                <div className="flex-container">
                                    <p className="para-book-text">Evidence-based treatments, or EBTs, are methods that
                                        have been proven effective at reducing symptoms and overall functioning, as
                                        defined by the Division of Clinical Psychology of the APA (Chambless & Hollon,
                                        1998; Tolin et al., 2015). Lyra only works with providers who provide these
                                        treatments.</p>
                                </div>
                                <div className="flex-container">
                                    <h3 className="para-text">Common characteristics of EBTs</h3>
                                    <ul>
                                        <li className="para-book-text">Goal-focused treatment</li>
                                        <li className="para-book-text">New skill development</li>
                                        <li className="para-book-text">Practice between sessions</li>
                                        <li className="para-book-text">Track progress toward goals</li>
                                        <li className="para-book-text">Short-term and long-lasting results</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="home-page-content-flex-section">
                                <h3 className="para-text" style={{marginBottom: 25}}>How is improvement measured?</h3>
                                <div className="div">
                                    <p className="para-text">
                                        Frontiers in Psychology
                                    </p>
                                    <a href="https://resiliens.com/" target="_blank" className="para-text">
                                        Beyond the Lab: Empirically Supported Treatments in the Real
                                        World <ArrowRightOutlined/>
                                    </a>
                                </div>
                                <div className="div">
                                    <p className="para-text">
                                        Journal of Medical Internet Research
                                    </p>
                                    <a href="https://resiliens.com/" target="_blank" className="para-text">
                                        Blended Care-Cognitive Behavioral Therapy for Depression and Anxiety in
                                        Real-World Settings: Pragmatic Retrospective Study <ArrowRightOutlined/>
                                    </a>
                                </div>
                                <div className="div">
                                    <p className="para-text">
                                        Telemedicine and e-Health
                                    </p>
                                    <a href="https://resiliens.com/" target="_blank" className="para-text">
                                        Effectiveness of a Cognitive Behavioral Coaching Program Delivered Via Video in
                                        Real
                                        World Settings <ArrowRightOutlined/>
                                    </a>
                                </div>
                                <h3 className="para-text" style={{margin: "50px 0px 25px"}}>Supporting Clinical
                                    Literature</h3>
                                <div className="div">
                                    <p className="para-text">
                                        Journal of Consulting and Clinical Psychology
                                    </p>
                                    <a href="https://resiliens.com/" target="_blank" className="para-text">
                                        Cognitive–behavioral therapy for adult anxiety disorders in clinical practice: A
                                        meta-analysis of effectiveness studies. <ArrowRightOutlined/>
                                    </a>
                                </div>
                                <div className="div">
                                    <p className="para-text">
                                        Clinical Psychology Review
                                    </p>
                                    <a href="https://resiliens.com/" target="_blank" className="para-text">
                                        Is cognitive-behavioral therapy more effective than other therapies? A
                                        meta-analytic review<ArrowRightOutlined/>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="home-page-overview-access-section">
                    <h2 className="base-text">Access care through our<br/> innovative Coaching Platform</h2>
                    <div className="divider"/>
                    <div className="sequence-sections">
                        <div className="section">
                            <h3>1</h3>
                            <p className="para-text title">Receive personalized care options</p>
                            <p className="para-text desc">Review recommendations tailored to each member’s symptoms,
                                severity, and lifestyle.</p>
                        </div>
                        <div className="section">
                            <h3>2</h3>
                            <p className="para-text title">Book real-time appointments</p>
                            <p className="para-text desc">Schedule appointments online and choose to meet in-person or
                                via live video.</p>
                        </div>
                        <div className="section">
                            <h3>3</h3>
                            <p className="para-text title">Learn and practice new real-life skills</p>
                            <p className="para-text desc">Develop new coping skills from your provider and through
                                proven digital lessons and exercises.</p>
                        </div>
                        <div className="section">
                            <h3>4</h3>
                            <p className="para-text title">Track and measure progress</p>
                            <p className="para-text desc">Complete ongoing clinical assessments to understand how
                                treatment and recovery progress.</p>
                        </div>
                    </div>
                    <div className="divider"/>
                    <img src={require("../assets/images/overview/care.jpg")} className="section-img"/>
                </div>

                <div className="home-page-overview-choose-section">
                    <h2 className="base-text">Results from Lyra’s latest clinical research</h2>
                    <div className="sequence-sections">
                        <div className="section">
                            <div className="box">
                                <img src={require("../assets/images/Home/img-2.png")}/>
                                <p className="para-text title">ESTs effective in real-world settings</p>
                                <p className="para-book-text desc">
                                    Results from the study of more than 1,200 Lyra clients showed that
                                    evidence-supported therapies (ESTs) are effective at treating anxiety and depression
                                    – even outside of highly controlled laboratory settings.
                                </p>
                            </div>
                        </div>
                        <div className="section">
                            <div className="box">
                                <img src={require("../assets/images/Home/img-2.png")}/>

                                <p className="para-text title">
                                    Blended Care Therapy helps clients recover faster
                                </p>
                                <p className="para-book-text desc">
                                    A study of Lyra’s Blended Care Therapy program, that combines video therapy sessions
                                    with personalized digital tools, reveals it’s effective for treating depression and
                                    anxiety and can help clients recover two to three times faster than CBT alone.
                                </p>
                            </div>
                        </div>
                        <div className="section">
                            <div className="box">
                                <img src={require("../assets/images/Home/img-3.png")}/>

                                <p className="para-text title">Coaching effective for treating stress</p>
                                <p className="para-book-text desc">
                                    Study published in the journal Telemedicine and eHealth shows Lyra’s Cognitive
                                    Behavioral Coaching program is effective at reducing stress and that participants
                                    who started with particularly high stress improved at even higher rates.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home-page-overview-bhp-flex-section">
                    <div className="sequence-sections">
                        <div className="section bg-section">
                            <p className="para-text title">
                                The Latest Coronavirus Resources
                            </p>
                            <p className="para-book-text desc">
                                Guidance from Lyra clinicians on how to cope effectively with uncomfortable emotions
                                provoked by the coronavirus
                            </p>
                        </div>
                        <div className="section">
                            <img src={require("../assets/images/overview/m-e-3.png")}/>

                            <p className="para-text text">members</p>
                            <p className="para-text title">Mission Impossible: Learnings From 6 Working Parents in
                                the Time of Coronavirus</p>
                            <a href="https://home-page.resiliens.com/" target="_blank" className="para-text">
                                Read more <ArrowRightOutlined/>
                            </a>
                        </div>
                        <div className="section">
                            <img src={require("../assets/images/overview/m-e-4.png")}/>
                            <p className="para-text text">members</p>
                            <p className="para-text title">
                                Coping with Uncertainty in the Time of Covid-19
                            </p>
                            <a href="https://home-page.resiliens.com/" target="_blank" className="para-text">
                                Read more <ArrowRightOutlined/>
                            </a>
                        </div>
                    </div>
                </div>

                <Row className='-row-flex-center card-row bg-img'>
                    <Col md={24}>
                        <Row className='card-row'>
                            <Col md={12} className="-margin-right img-section" style={{textAlign: "center",paddingRight: 40}}>
                                <img className='custom-image'
                                     src={require("../assets/images/Home/girl-img.png")}
                                     alt='Therapy'/>
                            </Col>
                            <Col md={12} className="content">
                                <h3 className='bottom-space base-text program-grounded margin-bottom-25'>
                                    Our nationwide network, built with the highest quality standards
                                </h3>
                                <div className='para-text black-18-font margin-bottom-25'>
                                    <p className="para-book-text">
                                        Thousands of providers across all 50 states offer evidence-based treatments and
                                        are specifically recruited to give your employees the highest quality care and
                                        diverse options for race/ethnicity, LGBTQ sensitivity, and clinical focus.
                                    </p>
                                </div>

                                <a className="para-text" href="https://home-page.resiliens.com/" target="_blank" style={{fontSize: 18}}>
                                        Learn more about our impact <ArrowRightOutlined/>
                                </a>
                            </Col>

                        </Row>
                    </Col>
                </Row>

                <div className="home-page-clinician-section">
                    <h3 className="title base-text">Designed by the brightest clinical experts</h3>
                    <p className="para-book-text desc">
                        Our mission and vision is guided and designed by leading clinical experts in evidence-based
                        methods who collectively have 60 years of experience, dozens published academic papers, and serve
                        on prestigious committees in their field.
                    </p>
                    <div className="experts-navigation-wrapper">
                        <div className="keen-slider">
                            {expertsData?.map(expert =>
                                <a className="expert-container">
                                    <div className="info">
                                        <div className="img">
                                            <img src={expert.img}/>
                                            <div>
                                                <p className="name base-text">{expert.name}</p>
                                                <p className="expertise para-text">{expert.expertise}</p>
                                            </div>
                                        </div>

                                        <p className="description para-text">{expert.description}</p>
                                    </div>
                                </a>
                            )}
                        </div>
                    </div>
                </div>*/}

            {/* *********** For Everyone ************ */
            }


            {/* ****************** For Behavioral Health Professionals *****************  */
            }

        </div>
    )
};
export default LandingPage;
