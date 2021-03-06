import React from "react";
import {Col, Row} from "antd";
import TopicSection from "./TopicSection";
import {scrollToDiv} from "./common/helper";
import CategoryTabs from "./common/CategoryTabs";
import FAQs from "./common/FAQs";
import {useSelector} from "react-redux";
import bannerGraphic from "../../assets/images/home-woman.jpeg";

const ResilifyScreen = () => {
    const p = useSelector(state => state.commonData);
    const categories = p?.topics;
    const programs = p?.programs;

    return <div className="resilify-home-page">
        <div className="banner-img">
            <div className="home-top-banner">
                <div className="top-section">
                    <CategoryTabs topics={categories} />
                </div>
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
                                                Don’t Face Life’s<br/> Challenges Alone
                                            </h3>
                                            <div className='para-text black-18-font margin-bottom-25'>
                                                <p className="width-90 para-text">
                                                    Our online groups offer a safe space and the support
                                                    you need. Have honest conversation
                                                    with others going through a similar experience.
                                                </p>
                                            </div>

                                                <button className='request-demo-btn' onClick={() => scrollToDiv("#topic-tabs")} style={{marginBottom: 20}}>
                                                    Browse Programs
                                                </button>
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
                </div>
            </div>
        </div>
        <TopicSection
            programs={programs}
            topics={categories}
            itemsPerSlider={programs?.itemsPerSlider}
        />
        <div className="home-bottom-bg">
           {/* <div className="generalized-sections">
                <div className="sections">
                    <div className="section">
                        <h3 className="base-text"> 50+ Programs</h3>
                        <p className="para-text">From the masters</p>
                    </div>
                </div>  <div className="sections">
                <div className="section">
                    <h3 className="base-text"> 2 Lessons</h3>
                    <p className="para-text">Average per Program</p>
                </div>
            </div>  <div className="sections">
                <div className="section">
                    <h3 className="base-text"> 10 Minutes</h3>
                    <p className="para-text">Average per lesson</p>
                </div>
            </div>
            </div>*/}

            <FAQs/>
        </div>
    </div>;

}

export default ResilifyScreen;
