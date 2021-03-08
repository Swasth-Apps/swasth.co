import React from "react";
import {Col, Row} from "antd";
import TopicSection from "./TopicSection";
import {generateRandomID, getCloudIDFromImageName, scrollToDiv} from "./common/helper";
import CategoryTabs from "./common/CategoryTabs";
import FAQs from "./common/FAQs";
import {useSelector} from "react-redux";
import bannerGraphic from "../../assets/images/home-woman.jpeg";
import {CheckOutlined} from "@ant-design/icons";
import Slider from "./common/Slider";
import {Link} from "gatsby";
import CLImage from "../../helper/CLImage";
import RequestDemoModal from "../RequestDemoModal";

const ResilifyScreen = () => {
    const p = useSelector(state => state.commonData);
    const topics = p?.topics;
    const programs = p?.programs;

    return <div className="resilify-home-page">
        <div className="banner-img">
            <div className="home-top-banner">
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
                                                Self-guided Programs<br/>
                                            </h3>
                                            <div className='para-text black-18-font margin-bottom-25'>
                                                <p className="width-90 para-text">
                                                   Our Resilify Platform offers self-guided programs based on evidence-based treatment modalities that last anywhere from 6-12 weeks.
                                                </p>
                                            </div>

                                            <Link to="/resilify/programs">
                                                <button className='request-demo-btn' style={{marginBottom: 20}}>
                                                    Browse Programs
                                                </button>
                                            </Link>
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
            topics={topics}
            itemsPerSlider={programs?.itemsPerSlider}
        />
        <div
            id='wrapper'
            className={'coach-wrapper'}
            style={{paddingBottom: 0}}
        >
            <div className="learning-section">
                <div className="section">
                    <h2 className="base-text">Start learning from the best minds now</h2>
                    <ul>
                        <li className="para-text"><CheckOutlined /> All 100 classes and categories</li>
                        <li className="para-text"><CheckOutlined /> New classes added every month</li>
                        <li className="para-text"><CheckOutlined /> Download and watch offline</li>
                        <li className="para-text"><CheckOutlined /> PDF workbooks for every class</li>
                        <li className="para-text"><CheckOutlined /> Watch on your desktop, phone, or TV</li>
                        <li className="para-text"><CheckOutlined /> Available audio-only lessons</li>
                    </ul>
                    <RequestDemoModal>
                        Get Started
                    </RequestDemoModal>
                </div>
            </div>
            <div className="explore-more">
                <h2 className="base-text">Explore More</h2>
                <Slider className="program-wrapper" key={generateRandomID()}>
                    {topics?.map((t) => {
                        const slug = t?.name?.split(" ")?.join("-")?.toLowerCase();
                        return (
                            <Link to={`/resilify/category/${slug}`} className="category">
                                <CLImage
                                    className="program-img"
                                    cloudId={getCloudIDFromImageName(
                                        t.image,
                                        "bodhi",
                                        'tracks',
                                    )}
                                />
                                <h4 className="base-text">{t?.name}</h4>
                                <p className="para-text">{programs?.filter(({topics}) => topics?.includes(t?.id))?.length} {' '} Programs</p>
                            </Link>
                        )
                    })}
                </Slider>
            </div>
        </div>
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
