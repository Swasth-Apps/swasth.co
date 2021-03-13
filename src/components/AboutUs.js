import React, {Fragment, useEffect, useState} from 'react'
import {Button,Row,Col} from 'antd'
import topBg from "../assets/images/about-us-banner-3.jpg";
import AboutUsMission  from "../assets/images/aboutus-mission.jpg"
import AboutUsApproach from "../assets/images/about-us-approach.jpg"
import bannerGraphic from "../assets/images/aboutUs.jpeg";
import Gana2 from "../assets/images/gana-2.jpg"
import Yotam from "../assets/images/yotam.png"
import Brian from "../assets/images/brian.jpg"
import Zimbardo from "../assets/images/zimbardo.jpg"
import Linkedin from "../assets/images/linkedin.png"
import Website from "../assets/images/website.png"
import Dennis from "../assets/images/dennis.png"
import Daniel from "../assets/images/daniel.jpeg"
//import therapyGraphic from '../assets/images/Therapy-section@3x.png'
const Home = (props) => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", () => {
            setIsMobile(window.innerWidth < 768)
        })
    }, []);

    const findIdAndScroll = (id) => {
        if (document.getElementById(id)) {
            document.getElementById(id).scrollIntoView({behavior: "smooth"})
        }
    };

    return (
        <Fragment>
            <div className="about-us-banner-section">
                <div
                    id='wrapper'
                    className={'coach-wrapper'}
                    style={{paddingBottom: 0}}
                >
                    <Row className='-row-flex-center card-row bg-image-container'>
                        <Col md={24}>
                            <Row className='card-row'>
                                <Col md={12} className="content">
                                <h3 className='bottom-space base-text program-grounded'>
                                        We are bringing <br /><span
                                className="-highlighted-text">Evidence-based </span><br />Behavioral Healthcare <br/> to everyone.
                                        </h3>
                                </Col>
                                <Col md={12} className="-margin-right img-section" style={{textAlign: "center"}}>
                                <img className='custom-image'
                                            src={bannerGraphic}
                                            alt='Therapy'/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </div>
            </div>
    
            <section className="padding-20">
                <div className="about-us-tabs-container padding-10">
                    <div className="about-us-tabs">
                        {/*<h4 onClick={()=>findIdAndScroll("whoWeAre")}><a>Who We Are</a></h4> */}
                        <h4 onClick={() => findIdAndScroll("missionStatement")}><a className="base-text">Mission</a></h4>
                        <h4 onClick={() => findIdAndScroll("ourApproach")}><a className="base-text">Approach</a></h4>
                        <h4 onClick={() => findIdAndScroll("leaderTeam")}><a className="base-text">Leadership</a></h4>
                        <h4 onClick={() => findIdAndScroll("boardTeam")}><a className="base-text">Board</a></h4>
                        {/*<h4 onClick={()=>findIdAndScroll("joinTeam")}><a>Open Position</a></h4>*/}
                    </div>
                </div>
            </section>
            <section className="mission-bg">
                <div className="about-us-mission-container padding-20" id="missionStatement">
                    <div className="mission-content">
                        <h2 className="base-text">Our Mission</h2>
                        <div className="para-text">
                            Our mission is to transform behavioral health care through technology, evidence-based
                            therapy and give everyone the tools, resources and clinical support when they need it.
                        </div>
                    </div>
                    <div className="mission-img">
                        <img src={AboutUsMission}/>
                    </div>
                </div>
            </section>
            <section  className="approach-bg">
                <div className="about-us-mission-container about-us-approach-container padding-20" id="ourApproach">
                    <div className="mission-img">
                        <img src={AboutUsApproach}/>
                    </div>
                    <div className="mission-content ml-2">
                        <h2 className="base-text">Our Approach</h2>
                        <div className="para-text">
                            We focus on evidence-based behavioral health care and psychoeducation, guided by experts and coaches to empower people improve their mental-health.
                            <p style={{marginBottom: 10}} />
                            In addition to comprehensive digital health tools for self-care, our platforms assist clinicians and specialists to achieve better outcomes by delivering effective behavioral health care at scale.
                        </div>
                    </div>

                </div>
            </section>
            {/*<section className="about-us-prob-sol" id="probSol">
                <div className="problem-section comm-section">
                    <div className="inner">
                        <h5 className="title">The Problem</h5>
                        <h3>For most people, great mental health care is really hard to find.</h3>
                        <h5>We connect companies and their employees to mental health care that is effective,
                            convenient, and personalized to their needs.</h5>
                    </div>
                </div>
                <div className="solution-section comm-section">
                    <div className="inner">
                        <h5 className="title">The Solution</h5>
                        <h3>We are revolutionizing how people find and receive care.</h3>
                        <h5>In fact, Resiliens helps people get care 21x faster and experience 3x better outcomes, which
                            means they feel better, faster.</h5>
                    </div>
                </div>
            </section>
            <section className="about-us-values padding-10">
                <div className="values-container">
                    <div>
                        <h3>What do employees value about Resiliens?</h3>
                        <h6>
                            We asked Lyrians what they love most about working here. Here’s what they told us.
                        </h6>
                    </div>
                    <div className="card-section">
                        <div className="card">
                            <img src={"/img/purple_yellow_gradient.jpg"}/>
                            <div className="content">
                                <h4>We are mission-driven</h4>
                                <p>No matter your role at Resiliens, you’ll hear real-life stories of how your work is
                                    improving people’s lives and see it at scale in the results we share with our
                                    customers. We are proud of what we’re doing.</p>
                                <h4>In Practice</h4>
                                <p>People often tell us Resiliens is life-changing and we share those stories in daily
                                    standups, Slack channels, and more.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={"/img/purple_yellow_gradient.jpg"}/>
                            <div className="content">
                                <h4>We are mission-driven</h4>
                                <p>No matter your role at Resiliens, you’ll hear real-life stories of how your work is
                                    improving people’s lives and see it at scale in the results we share with our
                                    customers. We are proud of what we’re doing.</p>
                                <h4>In Practice</h4>
                                <p>People often tell us Resiliens is life-changing and we share those stories in daily
                                    standups, Slack channels, and more.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={"/img/purple_yellow_gradient.jpg"}/>
                            <div className="content">
                                <h4>We are mission-driven</h4>
                                <p>No matter your role at Resiliens, you’ll hear real-life stories of how your work is
                                    improving people’s lives and see it at scale in the results we share with our
                                    customers. We are proud of what we’re doing.</p>
                                <h4>In Practice</h4>
                                <p>People often tell us Resiliens is life-changing and we share those stories in daily
                                    standups, Slack channels, and more.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}
            <section className="about-us-leadership padding-20">
                <h2 id="leaderTeam" className="base-text">Leadership Team</h2>
                {/*<p>Our technologists, mental health experts, and business leaders driving the strategy behind Resiliens.</p>  */}
                <div className="leader-section para-text">
                    <div className="user section-border">
                        <img src={Gana2}/>
                        <p className="name base-text"> Gana Pemmanda </p>
                        <p className="title para-text">Co-founder & CEO</p>
                        <p className="para-book-text">Gana co-founded Resiliens to transform behavioral health using technology and
                            evidence-based
                            models.
                            Having seen friends and family affected by mental health challenges and having personally
                            seen the benefits, he is passionate about scaling
                            behavioral health care. Prior to founding Resiliens, he led product and technology teams at
                            startups and Fortune 100 companies.
                            Gana holds a MS in CS from the University of Missouri and a MSE/MBA from Wharton / University
                            of Pennsylvania.</p>
                    </div>
                    <div className="user section-border">
                        <img src={Yotam}/>
                        <p className="name base-text">Dr. Yotam Heineberg </p>
                        <p className="title para-text">Chief Clinical Officer</p>
                        <p className="para-book-text">Yotam leads research, clinician operations and implementation of
                            evidence-based therapy
                            models at Resiliens.
                            Yotam is a licensed clinical psychologist and a clinical faculty member at Palo Alto
                            University.
                            After completing his doctorate at PGSP-Stanford Consortium, he did his post-doctoral
                            training and acted as a healthcare Fellow
                            at Stanford University (CCARE) where he developed various programs focused on resilience,
                            team building and compassion. </p>
                    </div>
                    {<div className="user section-border">
                        <img src={Brian}/>
                        <p className="name base-text"> Brian Thomas </p>
                        <p className="title para-text">Advisor</p>
                        <p className="para-book-text">Brian spent fourteen years as a corporate executive at Equinix where he
                            served as Chief of Staff in the Office of the CEO, Vice President of Global Corporate Planning, and Executive Sponsor
                            for Corporate Sustainability and Leadership Development. Before Equinix, Brian was an investment banker with Citi for nine years. He
                            received an M.Phil. in the Economics from the University of Cambridge and a BA in from
                            Willamette University.</p>
                    </div>}
                </div>
            </section>
            <section className="about-us-leadership padding-20">
                <h2 id="boardTeam" className="base-text">Board of Directors and Advisors</h2>
                {/*<p>Our technologists, mental health experts, and business leaders driving the strategy behind Resiliens.</p>  */}
                <div className="leader-section board-member-section para-text">
                    <div className="user">
                        <img src={Zimbardo}/>
                        <p className="name base-text">Dr. Philip Zimbardo </p>
                        <p className="title para-text">Professor Emeritus @ Stanford</p>
                        <p className="para-text social-icons">
                            <a href="https://www.linkedin.com/in/philzimbardo/">
                                <img src={Linkedin}/>
                            </a> <a href="http://www.zimbardo.com/">
                            <img src={Website}/>
                        </a>
                        </p>
                    </div>
                    <div className="user">
                        <img src={Dennis}/>
                        <p className="name base-text">Dr. Dennis Tirch </p>
                        <p className="title para-text">Founder @ Center for Compassion Focused Therapy </p>
                        <p className="para-text social-icons">
                            <a href="https://www.linkedin.com/in/dennis-tirch-663420b/">
                                <img src={Linkedin}/>
                            </a> <a href="http://www.mindfulcompassion.com/dr-dennis-tirch">
                            <img src={Website}/>
                        </a>
                        </p>
                    </div>
 {/*                    <div className="user">
                        <img src={require("../assets/images/image-placeholder.png")}/>
                        <p className="name base-text">TBA</p>
                        <p className="title para-text">TBA</p>
                        <p className="para-text social-icons">
                            <a href="">
                                <img src={Linkedin}/>
                            </a>
                        </p>
                    </div>
                    <div className="user">
                        <img src={require("../assets/images/image-placeholder.png")}/>
                        <p className="name base-text">TBA</p>
                        <p className="title para-text">TBA</p>
                        <p className="para-text social-icons">
                            <a href="">
                                <img src={require("../assets/images/linkedin.png")}/>
                            </a>
                        </p>
                    </div> */}
                    <div className="user">
                        <img src={Brian}/>
                        <p className="name base-text">Brian Thomas</p>
                        <p className="title para-text">Business Executive</p>
                        <p className="para-text social-icons">
                            <a href="https://www.linkedin.com/in/brianthomas70/">
                                <img src={Linkedin}/>
                            </a>
                        </p>
                    </div>
                    <div className="user">
                        <img src={Daniel}/>
                        <p className="name base-text">Daniel Blanaru</p>
                        <p className="title para-text">Executive @ Hippo Insurance</p>
                        <p className="para-text social-icons">
                            <a href="https://www.linkedin.com/in/danielblanaru/">
                                <img src={Linkedin}/>
                            </a>
                        </p>
                    </div>
{/*                     <div className="user">
                        <img src={require("../assets/images/image-placeholder.png")}/>
                        <p className="name base-text">TBA</p>
                        <p className="title para-text">TBA</p>
                        <p className="para-text social-icons">
                            <a href="">
                                <img src={require("../assets/images/linkedin.png")}/>
                            </a>
                        </p>
                    </div> */}
                    <div className="user">
                        <img src={Gana2}/>
                        <p className="name base-text"> Gana Pemmanda </p>
                        <p className="title para-text">Co-founder & CEO</p>
                        <p className="para-text social-icons">
                            <a href="https://www.linkedin.com/in/ganapemmanda/">
                                <img src={Linkedin}/>
                            </a>
                        </p>
                    </div>
                    <div className="user">
                        <img src={Yotam}/>
                        <p className="name base-text">Dr. Yotam Heineberg </p>
                        <p className="title para-text">Chief Clinical Officer</p>
                        <p className="para-text social-icons">
                            <a href="">
                                <img src={Linkedin}/>
                            </a>
                        </p>
                    </div>

  {/*                   <div className="user">
                        <img src={require("../assets/images/image-placeholder.png")}/>
                        <p className="name base-text">TBA</p>
                        <p className="title para-text">TBA</p>
                        <p className="para-text social-icons">
                            <a href="">
                                <img src={require("../assets/images/linkedin.png")}/>
                            </a>
                        </p>
                    </div> */}
                </div>
            </section>
            <section className="about-us-join-team">
                <div id="joinTeam">
                    <p className="base-text">Ready to join our team ?</p>
                    <a href="mailto:jobs@resiliens.com">
                        <Button className="request-demo-btn" style={{margin: "20px 0"}}>Email Us</Button>
                    </a>
                </div>
            </section>
            <section className="about-us-contact-us padding-20">
                <div className="support">
                    <h3 className="base-text">
                        Members
                    </h3>
                    <p className="para-text">
                        Contact our support team at <a>help@resiliens.com</a>.
                    </p>
                </div>
                <div className="support">
                    <h3 className="base-text">
                        Sales
                    </h3>
                    <p className="para-text">
                        Contact our partnerships team at <a>info@resiliens.com.</a>
                    </p>
                </div>
                <div className="support">
                    <h3 className="base-text">
                        Providers
                    </h3>
                    <p className="para-text">
                        Contact the provider relations team at <a>providers@resiliens.com.</a>
                    </p>
                </div>
                <div className="support">
                    <h3 className="base-text">
                        Press
                    </h3>
                    <p className="para-text">
                        For press and media inquires, please contact us at <a>media@resiliens.com.</a>
                    </p>
                </div>
            </section>
        </Fragment>
    )
};

export default Home
