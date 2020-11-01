import React, {Fragment, useEffect, useState} from 'react'
import {Button, Tabs} from 'antd'
//import therapyGraphic from '../assets/images/Therapy-section@3x.png'

const {TabPane} = Tabs;

const img1 = <svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(-66 -2818)" fill="none" fill-rule="evenodd">
        <path d="M66 2818h420v300H66z" fill="#96D5CC"></path>
        <path fill="#7CCBBF" d="M66 2967h420v151H66z"></path>
        <path
            d="M278.044 3033c36.385 0 72.036-22 106.956-66-34.92-44-70.571-66-106.956-66-36.384 0-73.066 22-110.044 66 36.978 44 73.66 66 110.044 66z"
            fill="#FFF" opacity=".5"></path>
        <ellipse fill="#7CCBBF" cx="277.5" cy="2967" rx="37.5" ry="38"></ellipse>
    </g>
</svg>

const Home = (props) => {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
        window.addEventListener("resize", () => {
            setIsMobile(window.innerWidth < 768)
        })
    }, []);

    const findIdAndScroll = (id) => {
        if(document.getElementById(id)) {
            document.getElementById(id).scrollIntoView()
        }
    };

    return (
        <Fragment>
            <section className='about-us-banner-section'>
                <div className="about-us-banner-content">
                    <h1>We are bringing evidence-based behavioral healthcare to everyone.</h1>
                    <h4>
                        Join us in building a healthy world
                    </h4>
                    {/*<Button className="-btn-primary"> See open positions </Button>   */}
                </div>
            </section>
            <section>
                <div className="about-us-tabs-container">
                    <div className="about-us-tabs">
                        <h4 onClick={()=>findIdAndScroll("whoWeAre")}><a>Who We Are</a></h4>
                        <h4 onClick={()=>findIdAndScroll("probSol")}><a>Our Mission</a></h4>
                        <h4 onClick={()=>findIdAndScroll("leaderTeam")}><a>Leadership Team</a></h4>
                        <h4 onClick={()=>findIdAndScroll("joinTeam")}><a>Open Position</a></h4>
                    </div>
                </div>
            </section>
            <section>
                <div className="about-us-mission-container" id="whoWeAre">
                    <div className="mission-content">
                        <h5>Why We Work</h5>
                        <h3>
                            Our mission is to transform behavioral health care through technology with a human touch, to
                            help people feel emotionally healthy at work and at home.
                        </h3>
                    </div>
                    <div className="mission-img">
                        <img src={require("../assets/images/mission.jpg")}/>
                    </div>
                </div>
            </section>
            <section className="about-us-prob-sol" id="probSol">
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
                        <h5>In fact, Lyra helps people get care 21x faster and experience 3x better outcomes, which
                            means they feel better, faster.</h5>
                    </div>
                </div>
            </section>
            <section className="about-us-values">
                <div className="values-container">
                    <div>
                        <h3>What do employees value about Swasth?</h3>
                        <h6>
                            We asked Lyrians what they love most about working here. Here’s what they told us.
                        </h6>
                    </div>
                    <div className="card-section">
                        <div className="card">
                            <img src={"/img/purple_yellow_gradient.jpg"}/>
                            <div className="content">
                                <h4>We are mission-driven</h4>
                                <p>No matter your role at Lyra, you’ll hear real-life stories of how your work is
                                    improving people’s lives and see it at scale in the results we share with our
                                    customers. We are proud of what we’re doing.</p>
                                <h4>In Practice</h4>
                                <p>People often tell us Lyra is life-changing and we share those stories in daily
                                    standups, Slack channels, and more.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={"/img/purple_yellow_gradient.jpg"}/>
                            <div className="content">
                                <h4>We are mission-driven</h4>
                                <p>No matter your role at Lyra, you’ll hear real-life stories of how your work is
                                    improving people’s lives and see it at scale in the results we share with our
                                    customers. We are proud of what we’re doing.</p>
                                <h4>In Practice</h4>
                                <p>People often tell us Lyra is life-changing and we share those stories in daily
                                    standups, Slack channels, and more.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={"/img/purple_yellow_gradient.jpg"}/>
                            <div className="content">
                                <h4>We are mission-driven</h4>
                                <p>No matter your role at Lyra, you’ll hear real-life stories of how your work is
                                    improving people’s lives and see it at scale in the results we share with our
                                    customers. We are proud of what we’re doing.</p>
                                <h4>In Practice</h4>
                                <p>People often tell us Lyra is life-changing and we share those stories in daily
                                    standups, Slack channels, and more.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="about-us-leadership">
                <h3 id="leaderTeam">Our Leadership team</h3>
                <p>Our technologists, mental health experts, and business leaders driving the strategy behind Lyra.</p>
                <div className="leader-section">
                    <div className="user">
                        <img src={require("../assets/images/gana.png")}/>
                        <p className="name"> Gana Pemmanda </p>
                        <p className="title">Co-founder & CEO</p>
                        <p>Gana founded Swasth to transform behavioral health by bringing evidence-based therapy to everyone.
                            Having seen friends and family affected by mental health challenges and personally seen the benefits, he is passionate about a holistic approach
                            for behavioral health care. Prior to founding Swasth, he led product and technology teams at startups and Fortune 100 companies.
                             Gana holds a MS in Computer Science from University of Missouri and a MSE/MBA from Wharton / UPenn.</p>
                    </div>
                    <div className="user">
                        <img src={require("../assets/images/yotam.png")}/>
                        <p className="name">Dr. Yotam Heineberg </p>
                        <p className="title">Chief Clinical Officer</p>
                        <p>Yotam leads research, clinician operations and implementation of evidence-based therapy models at Swasth.
                            Yotam is a licensed clinical psychologist and a clinical faculty member at Palo Alto University.
                            After completing his doctorate at PGSP-Stanford Psy.D Consortium, he did his post-doctoral training and acted as a healthcare Fellow
                            at Stanford University (CCARE) where developed various programs focused on resilience, team building and compassion. </p>
                    </div>
                { <div className="user">
                    <img src={require("../assets/images/brian.jpg")}/>
                        <p className="name"> Brian Thomas </p>
                        <p className="title">COO & Advisor</p>
                        <p>Brian supports operations and finance at Swasth. Brian spent fourteen years as a corporate executive at Equinix where he served as Chief of Staff
                            in the Office of the CEO, Vice President of Global Corporate Planning, and Executive Sponsor for Corporate Sustainability and Leadership
                            Development. Before Equinix, Brian was an investment banker with Citi for nine years. He received an M.Phil. in the Economics from the University of Cambridge and a BA in from Willamette University.</p>
                    </div> }
                </div>
            </section>
            <section className="about-us-join-team">
                <div id="joinTeam">
                    <p>Ready to join our team ?</p>
                    <Button className="-btn-primary"> See open positions </Button>
                </div>
            </section>
            <section className="about-us-contact-us" >
                <div className="support">
                    <h3>
                        Member Support
                    </h3>
                    <p>
                        Access care <a>online</a> or contact our care team at <a>care@lyrahealth.com</a> and <a>(877) 505–7147</a>.
                    </p>
                </div>
                <div className="support">
                    <h3>
                        Sales
                    </h3>
                    <p>
                        Contact our partnerships team at <a>partners@lyrahealth.com</a> and (800) 505-5972..
                    </p>
                </div>
                <div className="support">
                    <h3>
                        Providers
                    </h3>
                    <p>
                        Learn more about <a>how we work with providers</a> and contact the provider relations team at <a>providers@lyrahealth.com.</a>
                    </p>
                </div>
                <div className="support">
                    <h3>
                        Press
                    </h3>
                    <p>
                        For press and media inquires, please contact us at <a>press@lyrahealth.com.</a>
                    </p>
                </div>
            </section>
        </Fragment>
    )
};

export default Home
