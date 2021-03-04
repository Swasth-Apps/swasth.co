import React from "react";
import {Col, Row} from "antd";
import {ArrowRightOutlined} from "@ant-design/icons";

const CoachingOverview = props => {
    return (
        <div className="coaching-overview-container">
            <div className="coaching-overview">
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
                                        Evidence based <br/>Behavioral health care
                                    </h3>
                                    <div className='para-text black-18-font margin-bottom-25'>
                                        <p className="width-90 para-text">LEARN ABOUT OUR PROGRAMS </p>
                                    </div>

                                    <a href="https://coaching.resiliens.com/" target="_blank">
                                        <button className='request-demo-btn' style={{marginBottom: 20}}>
                                            Request a demo
                                        </button>
                                    </a>
                                </Col>
                                <Col md={12} className="-margin-right img-section" style={{textAlign: "center"}}>
                                    <img className='custom-image'
                                         src="https://v1.nitrocdn.com/aDQSgnHktaudvkmeJfPxNoEXBteJYlvY/assets/static/source/rev-5de672a/wp-content/uploads/2020/01/member-experience-hero1.png"
                                         alt='Therapy'/>
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


                <div className="coaching-overview-access-section">
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
                    <img src={require("../../assets/images/overview/care.jpg")} className="section-img"/>
                </div>

                <div className="coaching-overview-choose-section">
                    <h2 className="base-text">Choose how and where to meet,<br/> based on your lifestyle</h2>
                    <div className="sequence-sections">
                        <div className="section">
                            <img src={require("../../assets/images/overview/m-e-1.png")}/>
                            <p className="para-text title">In-person</p>
                            <p className="para-text desc">
                                Ideal for honoring member preference and treating complex needs
                            </p>
                        </div>
                        <div className="section">
                            <img src={require("../../assets/images/overview/m-e-2.png")}/>

                            <p className="para-text title">
                                Live-video
                            </p>
                            <p className="para-text desc">
                                Convenient for busy lifestyles and expanded access to specialists
                            </p>
                        </div>
                        <div className="section">
                            <img src={require("../../assets/images/overview/m-e-3.png")}/>

                            <p className="para-text title">Live-messaging</p>
                            <p className="para-text desc">
                                Private and flexible, great for connecting with support anywhere
                            </p>
                        </div>
                        <div className="section">
                            <img src={require("../../assets/images/overview/m-e-4.png")}/>

                            <p className="para-text title">
                                Self-led
                            </p>
                            <p className="para-text desc">
                                Digital CBT lessons and exercises for support anytime
                            </p>
                        </div>
                    </div>
                </div>

                <div className="coaching-overview-new-skills-section">
                    <Row className='-row-flex-center card-row bg-img'>
                        <Col md={24}>
                            <Row className='card-row'>
                                <Col md={12} className="content">
                                    <h3 className='bottom-space base-text program-grounded'>
                                        Develop new skills to <br/>overcome daily <br/>challenges
                                    </h3>
                                    <div className='para-text black-18-font margin-bottom-25'>
                                        <p className="width-90 para-text">
                                            With Lyra, your members receive support beyond 1-1 sessions with their
                                            provider, as they build and practice resiliency skills to meet the
                                            challenges of their daily lives. With 24/7 access to personalized digital
                                            exercises and direct messaging with their provider, members get better
                                            faster
                                        </p>
                                    </div>

                                    <a href="https://coaching.resiliens.com/" target="_blank">
                                        <button className='request-demo-btn' style={{marginBottom: 20}}>
                                            Learn more about our impact
                                        </button>
                                    </a>
                                </Col>
                                <Col md={12} className="-margin-right img-section" style={{textAlign: "center"}}>
                                    <img className='custom-image'
                                         src="https://v1.nitrocdn.com/aDQSgnHktaudvkmeJfPxNoEXBteJYlvY/assets/static/optimized/rev-5de672a/wp-content/uploads/2020/12/Lyra-Members-lessonsandvideos-1080px-201203-1024x831.png"
                                         alt='Therapy'/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                <div className="coaching-overview-track-progress-section">
                    <Row className='-row-flex-center card-row bg-img'>
                        <Col md={24}>
                            <Row className='card-row'>
                                <Col md={12} className="-margin-right img-section" style={{textAlign: "center"}}>
                                    <img
                                        className='custom-image'
                                        src="https://v1.nitrocdn.com/aDQSgnHktaudvkmeJfPxNoEXBteJYlvY/assets/static/optimized/rev-5de672a/wp-content/uploads/2020/01/Lyra-Members-Insights-1080px-v3-944x1024.png"
                                        alt='Therapy'
                                    />
                                </Col>
                                <Col md={12} className="content">
                                    <h3 className='bottom-space base-text program-grounded'>
                                        Track your progress, <br/> every step of the way
                                    </h3>
                                    <div className='para-text black-18-font margin-bottom-25'>
                                        <p className="width-90 para-text">
                                            Members complete assessments before, during, and at the completion of care
                                            to give providers insight into treatment progress and offer population
                                            insights about how Lyra works for your entire workforce.
                                        </p>
                                    </div>

                                    <a href="https://coaching.resiliens.com/" target="_blank" className="para-text">
                                        Our Methodology <ArrowRightOutlined/>
                                    </a>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </div>

            </div>
            {/* *********** For Everyone ************ */}



            {/* ****************** For Behavioral Health Professionals *****************  */}


            <div className="coaching-overview-bhp-container">
                <div
                    id='wrapper'
                    className={'coach-wrapper'}
                    style={{paddingBottom: 0}}
                >
                <h2 className="base-text">For Behavioral Health Professionals</h2>

                    {/* Left: Image and Right: Content*/}
                    <Row className='-row-flex-center card-row'>
                        <Col md={24}>
                            <Row className='card-row padded-view'>
                                <Col md={12} className="-margin-right img-section" style={{textAlign: "center"}}>
                                    <img
                                        className='custom-image'
                                        src={require("../../assets/images/overview/m-e-1.png")}
                                        alt='Therapy'
                                    />
                                </Col>
                                <Col md={10} className="content">
                                    <h3 className='bottom-space base-text program-grounded'>
                                        Navigating back-to-school
                                    </h3>
                                    <div className='para-text black-18-font margin-bottom-25'>
                                        <p className="width-90 para-text">
                                            Dr. Renee Schneider offers 8 strategies families can use to prioritize mental well-being for both parents and children.
                                        </p>
                                    </div>

                                    <a href="https://coaching.resiliens.com/" target="_blank" className="para-text">
                                        <button className='request-demo-btn' style={{marginBottom: 20}}>
                                            Read the blog post
                                        </button>
                                    </a>
                                </Col>

                            </Row>
                        </Col>
                    </Row>

                    {/* Left: Content and Right:Image */}
                    <Row className='-row-flex-center card-row bg-img'>
                        <Col md={24}>
                            <Row className='card-row padded-view'>
                                <Col md={12} className="content">
                                    <h3 className='bottom-space base-text program-grounded'>
                                        Help your employees cope with stress
                                    </h3>
                                    <div className='para-text black-18-font margin-bottom-25'>
                                        <p className="width-90 para-text">
                                            Often misunderstood, self-care is a powerful buffer against the mental and
                                            physical health impacts of stress and is even more essential tool as your teams deal with the emotional toll of the pandemic.
                                        </p>
                                    </div>

                                    <a href="https://coaching.resiliens.com/" target="_blank" className="para-text">
                                        <button className='request-demo-btn' style={{marginBottom: 20}}>
                                            Read the blog post
                                        </button>
                                    </a>
                                </Col>
                                <Col md={10} className="-margin-right img-section" style={{textAlign: "center"}}>
                                    <img
                                        className='custom-image'
                                        src={require("../../assets/images/overview/m-e-2.png")}
                                        alt='Therapy'
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>


                    {/* Left: Image and Right: Content*/}
                    <Row className='-row-flex-center card-row'>
                        <Col md={24}>
                            <Row className='card-row padded-view'>
                                <Col md={12} className="-margin-right img-section" style={{textAlign: "center"}}>
                                    <img
                                        className='custom-image'
                                        src={require("../../assets/images/overview/m-e-1.png")}
                                        alt='Therapy'
                                    />
                                </Col>
                                <Col md={10} className="content">
                                    <h3 className='bottom-space base-text program-grounded'>
                                        Navigating back-to-school
                                    </h3>
                                    <div className='para-text black-18-font margin-bottom-25'>
                                        <p className="width-90 para-text">
                                            Dr. Renee Schneider offers 8 strategies families can use to prioritize mental well-being for both parents and children.
                                        </p>
                                    </div>

                                    <a href="https://coaching.resiliens.com/" target="_blank" className="para-text">
                                        <button className='request-demo-btn' style={{marginBottom: 20}}>
                                            Read the blog post
                                        </button>
                                    </a>
                                </Col>

                            </Row>
                        </Col>
                    </Row>

                    {/* Left: Content and Right:Image */}
                    <Row className='-row-flex-center card-row bg-img'>
                        <Col md={24}>
                            <Row className='card-row padded-view'>
                                <Col md={12} className="content">
                                    <h3 className='bottom-space base-text program-grounded'>
                                        Help your employees cope with stress
                                    </h3>
                                    <div className='para-text black-18-font margin-bottom-25'>
                                        <p className="width-90 para-text">
                                            Often misunderstood, self-care is a powerful buffer against the mental and
                                            physical health impacts of stress and is even more essential tool as your teams deal with the emotional toll of the pandemic.
                                        </p>
                                    </div>

                                    <a href="https://coaching.resiliens.com/" target="_blank" className="para-text">
                                        <button className='request-demo-btn' style={{marginBottom: 20}}>
                                            Read the blog post
                                        </button>
                                    </a>
                                </Col>
                                <Col md={10} className="-margin-right img-section" style={{textAlign: "center"}}>
                                    <img
                                        className='custom-image'
                                        src={require("../../assets/images/overview/m-e-2.png")}
                                        alt='Therapy'
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>



                    <div className="coaching-overview-bhp-flex-section">
                        <div className="sequence-sections">
                            <div className="section bg-section">
                                <p className="para-text title">
                                    The Latest Coronavirus Resources
                                </p>
                                <p className="para-text desc">
                                    Guidance from Lyra clinicians on how to cope effectively with uncomfortable emotions provoked by the coronavirus
                                </p>
                            </div>
                            <div className="section">
                                <img src={require("../../assets/images/overview/m-e-3.png")}/>

                                <p className="para-text text">members</p>
                                <p className="para-text title">Mission Impossible: Learnings From 6 Working Parents in the Time of Coronavirus</p>
                                <a href="https://coaching.resiliens.com/" target="_blank" className="para-text">
                                    Read more <ArrowRightOutlined/>
                                </a>
                            </div>
                            <div className="section">
                                <img src={require("../../assets/images/overview/m-e-4.png")}/>
                                <p className="para-text text">members</p>
                                <p className="para-text title">
                                    Coping with Uncertainty in the Time of Covid-19
                                </p>
                                <a href="https://coaching.resiliens.com/" target="_blank" className="para-text">
                                    Read more <ArrowRightOutlined/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ****************** For Behavioral Health Professionals *****************  */}

        </div>
    )
};

export default CoachingOverview;
