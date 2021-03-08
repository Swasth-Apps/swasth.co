import React from "react";
import {Col, Row} from "antd";
import {ArrowRightOutlined} from "@ant-design/icons";
import bannerGraphic from "../../assets/images/home-woman.jpeg";

const CoachingOverview = () => {
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
                                        Evidence based <br/>Behavioral Health Coaching
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
                                         src={bannerGraphic}
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
                    <h2 className="base-text">Access care through our innovative Coaching Platform</h2>
                    <div className="divider"/>
                    <div className="sequence-sections">
                        <div className="section">
                            <p className="para-medium-text title">Programs for specific conditions and lifestyle</p>
                            <p className="para-text desc">The programs are created by experts in evidence-based therapies treating these conditions with peer-reviewed research.</p>
                        </div>
                        <div className="section">
                            <p className="para-medium-text title">Supported by licensed clinicians and coaches</p>
                            <p className="para-text desc">The programs typically run between 6-14 weeks with a weekly live session and supported by coaches for continuous support.</p>
                        </div>
                        <div className="section">
                            <p className="para-medium-text title">Digital library to aid skill practice</p>
                            <p className="para-text desc">Develop skills by accessing a comprehensive library of video-guided lessons and exercises that accompany the sessions.</p>
                        </div>
                        <div className="section">
                            <p className="para-medium-text title">Tracking tools to see how you are doing</p>
                            <p className="para-text desc">You can measure your progress with comprehensive set of tools and clinician assessments specific to the condition.</p>
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
                            <p className="para-medium-text title">In-person</p>
                            <p className="para-text desc">
                                Ideal for honoring member preference and treating complex needs
                            </p>
                        </div>
                        <div className="section">
                            <img src={require("../../assets/images/overview/m-e-2.png")}/>

                            <p className="para-medium-text title">
                                Live-video
                            </p>
                            <p className="para-text desc">
                                Convenient for busy lifestyles and expanded access to specialists
                            </p>
                        </div>
                        <div className="section">
                            <img src={require("../../assets/images/overview/m-e-3.png")}/>

                            <p className="para-medium-text title">Live-messaging</p>
                            <p className="para-text desc">
                                Private and flexible, great for connecting with support anywhere
                            </p>
                        </div>
                        <div className="section">
                            <img src={require("../../assets/images/overview/m-e-4.png")}/>

                            <p className="para-medium-text title">
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
