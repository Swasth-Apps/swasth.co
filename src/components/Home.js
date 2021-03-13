import React, {useEffect, useState} from "react";
import {Col, Row} from "antd";
import {Link} from "gatsby";
import bannerGraphic from "../assets/images/home-woman.jpeg";
import ComprehensiveHealth from "../assets/images/comprehensiveHealth.png";
import programs from "../assets/images/Proven-Treatment-Methods-Img.png";
import SelfHelpImg from "../assets/images/Self-Health-Coach-Section.png";
import ProgramAdapts from "../assets/images/pexels-kaboompics-com-6335.jpg";
import {ArrowRightOutlined} from "@ant-design/icons";
import RequestDemoModal from "./RequestDemoModal";
import MobileGraphic from "../assets/images/MobileView.png";
import Telecommuting from "../assets/images/Telecommuting.png"
import ClickHere from "../assets/images/Click_here.png"
import GroupTherapy from "../assets/images/Group_therapy.png"
import CeCredits from "../assets/images/ce-credits.jpeg"
const Home = () => {

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", () => {
            setIsMobile(window.innerWidth < 768)
        })
    }, []);

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

                                    <RequestDemoModal/>
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
                    <Row className="align-center" style={{marginTop: 20}}>
                        <img
                            className='custom-image'
                            src={isMobile ? MobileGraphic : ComprehensiveHealth}
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

                                    <Link to="/coaching" target="_blank">
                                        <button className='request-demo-btn' style={{marginBottom: 20}}>
                                            Get Started
                                        </button>
                                    </Link>
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
                                    <Link to="/resilify" target="_blank">
                                        <button className='request-demo-btn' style={{marginBottom: 20}}>
                                            Get Started
                                        </button>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

            </div>
            <div className="home-page-overview-bhp-container">

                <div
                    id='wrapper'
                    className={'coach-wrapper'}
                    style={{paddingBottom: 0}}
                >
                    <h2 className="base-text">For Behavioral Health Professionals</h2>

                    <div className="home-page-overview-bhp-flex-section">
                        <div className="sequence-sections">
                            <div className="section">
                                <img
                                    src={Telecommuting}
                                />

                                <p className="para-medium-text title">Live Courses from leading experts in evidence-based modalities</p>
                                <p className="para-text text">Our courses are designed to have the best learning experience for clinicians. They also teach clinicians to deliver effective treatment by combining technology with evidence based therapies. </p>
                            </div>
                            <div className="section">
                                <img
                                    src={ClickHere}
                                />

                                <p className="para-medium-text title">Interactive programs to further hone your therapeutic skills</p>
                                <p className="para-text text">These programs are designed keeping flexibility in mind. The programs have beautiful videos, activities and other tools that created by leading experts and make learning at your convenience enjoyable.</p>
                            </div>
                            <div className="section">
                                <img
                                    src={GroupTherapy}
                                />

                                <p className="para-medium-text title">An extensive network of like-minded practictioners</p>
                                <p className="para-text text">When you join the Resiliens network, you become a part of a community of clinicians, coaches and physicians who have a deep-rooted interest or expertise in evidence-based therapy.</p>
                            </div>
                        </div>
                    </div>

                    {/* Left: Content and Right:Image */}
                    <Row className='-row-flex-center card-row bg-img' style={{marginBottom: 150}}>
                        <Col md={24}>
                            <Row className='card-row padded-view'>
                                <Col md={12} className="content">
                                    <h3 className='bottom-space base-text program-grounded'>
                                        Collaborate with us to scale your programs
                                    </h3>
                                    <div className='para-text black-18-font margin-bottom-25'>
                                        <p className="width-90 para-text">
                                           Create programs on our Behavioral Health Platform that enables you to deliver psychoeducation digitally to clients. These include video-guided lessons, exercises (digitized worksheets), standardized assessments. Further, you can get a 360-degree view of your program participants by having visibility to their data (tracking tools, exercises, sleep etc.) that they have shared.
                                        </p>
                                    </div>
                                   <Link to="/coaching" target="_blank">
                                        <button className='request-demo-btn' style={{marginBottom: 20}}>
                                            Get Started
                                        </button>
                                    </Link>
                                </Col>
                                <Col md={10} className="-margin-right img-section" style={{textAlign: "center"}}>
                                    <img
                                        className='custom-image'
                                        src={CeCredits}
                                        alt='Therapy'
                                        style={{opacity: 0.75}}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                {/* Left: Image and Right: Content*/}
                {/*
                        <Row className='-row-flex-center card-row'>
                            <Col md={24}>
                                <Row className='card-row padded-view'>
                                    <Col md={12} className="-margin-right img-section" style={{textAlign: "center"}}>
                                        <img
                                            className='custom-image'
                                            src="https://v1.nitrocdn.com/aDQSgnHktaudvkmeJfPxNoEXBteJYlvY/assets/static/optimized/rev-5de672a/wp-content/uploads/2021/01/hp-ui-with-3-phones-628x1024.png"
                                            alt='Therapy'
                                        />
                                    </Col>
                                    <Col md={10} className="content">
                                        <h3 className='bottom-space base-text program-grounded'>
                                            Smarter mental health benefits, better outcomes
                                        </h3>
                                        <div className='para-text black-18-font margin-bottom-25 content-grounded'>
                                            <p className="para-medium-text content-subtitle">
                                                7x more members receive effective care
                                            </p>
                                            <p className="width-90 para-text content-desc">
                                                Dr. Renee Schneider offers 8 strategies families can use to prioritize mental well-being for both parents and children.
                                            </p>
                                        </div>
                                        <div className='para-text black-18-font margin-bottom-25 content-grounded'>
                                            <p className="para-medium-text content-subtitle">
                                                83% of members improve or recover
                                            </p>
                                            <p className="width-90 para-text content-desc">
                                                Providers within traditional networks only help 24% of members improve, if they measure effectiveness at all. With Lyra, more people receive care and get better.
                                            </p>
                                        </div>

                                        <a href="https://coaching.resiliens.com/" target="_blank" className="para-text">
                                            Read the blog post <ArrowRightOutlined/>
                                        </a>
                                    </Col>

                                </Row>
                            </Col>
                        </Row>
*/}


            </div>

        </div>
    )
};
export default Home;
