import React, {useState} from "react";
import {Col, Row, Slider as AntdSlider} from "antd";
import TopicSection from "./TopicSection";
import {useSelector} from "react-redux";
import bannerGraphic from "../../assets/images/resilify-woman.png";
import OrganizationIssue from "../../assets/images/resilify/organization.webp";
import SavingsCalculator from "../../assets/images/resilify/Saving-Calculator.png";
import gratitudeImg from "../../assets/images/resilify/resilify-daily-gratitude.png";
import dashboardImg from "../../assets/images/resilify/resilify-dashboard.png";
import toolsImg from "../../assets/images/resilify/resilify-tools.png";
import communityImg from "../../assets/images/resilify/resilify-community.png";
import exerciseImg from "../../assets/images/resilify/resilify-exercise.png";
import insightsImg from "../../assets/images/resilify/resilify-insights.png";
import lessonImg from "../../assets/images/resilify/resilify-lesson.png";
import meditationImg from "../../assets/images/resilify/resilify-meditation.png";
import moreImg from "../../assets/images/resilify/resilify-more.png";
import programImg from "../../assets/images/resilify/resilify-program.png";
import dailyCheckinImg from "../../assets/images/resilify/resilify-daily-checkin.png";
import {Link} from "gatsby";
import ProgramAdapts from "../../assets/images/pexels-kaboompics-com-6335.jpg";
import Slider from "./common/Slider";
import {generateRandomID} from "./common/helper";
import ResultStat1 from "../../assets/images/resilify/result-stat1.png";
import ResultStat2 from "../../assets/images/resilify/result-stat2.png";
import ResultStat3 from "../../assets/images/resilify/result-stat3.png";
import IssueImg1 from "../../assets/images/resilify/business-issue-img-1.png";
import IssueImg2 from "../../assets/images/resilify/business-issue-img-2.png";
import IssueImg3 from "../../assets/images/resilify/business-issue-img-3.png";
import IssueImg4 from "../../assets/images/resilify/business-issue-img-4.png";
import ResilifyBottomSection from "../ResilifyBottomSection";
import TopBg from "../../assets/images/top-bg.png";

const features = [
    {
        title: "Guided IBS care toolkit",
        description: "Reduce stress and manage your IBS symptoms with specifically designed exercise practices.",
        "image": gratitudeImg
    },

    {
        title: "Progress monitoring",
        description: "Follow your journey to better gut health with personalized symptom and lifestyle habit tracking.",
        "image": dashboardImg
    },

    {
        title: "Tailored CBT program",
        description: "Reduce stress and manage your IBS symptoms with specifically designed exercise practices.",
        "image": toolsImg
    },

    {
        title: "Tailored CBT program",
        description: "Reduce stress and manage your IBS symptoms with specifically designed exercise practices.",
        "image": communityImg
    },

    {
        title: "Tailored CBT program",
        description: "Reduce stress and manage your IBS symptoms with specifically designed exercise practices.",
        "image": exerciseImg
    },

    {
        title: "Tailored CBT program",
        description: "Reduce stress and manage your IBS symptoms with specifically designed exercise practices.",
        "image": insightsImg
    },

    {
        title: "Tailored CBT program",
        description: "Reduce stress and manage your IBS symptoms with specifically designed exercise practices.",
        "image": lessonImg
    },

    {
        title: "Tailored CBT program",
        description: "Reduce stress and manage your IBS symptoms with specifically designed exercise practices.",
        "image": meditationImg
    },

    {
        title: "Tailored CBT program",
        description: "Reduce stress and manage your IBS symptoms with specifically designed exercise practices.",
        "image": moreImg
    },

    {
        title: "Tailored CBT program",
        description: "Reduce stress and manage your IBS symptoms with specifically designed exercise practices.",
        "image": programImg
    },

    {
        title: "Tailored CBT program",
        description: "Reduce stress and manage your IBS symptoms with specifically designed exercise practices.",
        "image": dailyCheckinImg
    }
]

const numberFormat = num => num?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const ResilifyScreen = (props) => {
    const [noOfEmployees, setNoOfEmployees] = useState(1000);
    const p = useSelector(state => state.commonData);
    const topics = p?.topics;
    const programs = props?.programs;


    return <div className="resilify-home-page">
        <div className="banner-img"
             style={{
                 backgroundImage: `url(${TopBg})`,
                 backgroundSize: "cover"
             }}
        >
            <div className="home-top-banner">
                <div className="coaching-overview-container">
                    <div className="coaching-overview">
                        <div
                            id='wrapper'
                            className={'coach-wrapper'}
                            style={{paddingBottom: 0}}
                        >
                            <Row className='-row-flex-center card-row bg-img'
                            >
                                <Col md={24}>
                                    <Row className='card-row'>
                                        <Col md={12} className="content">
                                            <h3 className='bottom-space heavy-text program-grounded' style={{color: "#fff"}}>
                                                Self-guided Programs<br/>
                                            </h3>
                                            <div className='para-text black-18-font margin-bottom-25'>
                                                <p className="width-90 description-text">
                                                    Our Resilify Platform offers self-guided programs based on
                                                    evidence-based treatment modalities that last anywhere from 6-12
                                                    weeks.
                                                </p>
                                            </div>

                                            <Link to="/resilify/programs">
                                                <button className='request-demo-btn'
                                                        style={{marginBottom: 20, height: "auto", fontSize: 18}}>
                                                    Browse Programs
                                                </button>
                                            </Link>
                                        </Col>
                                        <Col md={12} className="-margin-right img-section resilify-banner-image"
                                             style={{textAlign: "center"}}>
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
       {/* <div className="resilify-partners-list">
            <div className={'outer-box'}>
                <img src={partner3}/>
                <img src={partner4}/>
                <img src={partner3}/>
                <img src={partner4}/>
                <img src={partner3}/>
                <img src={partner4}/>
            </div>
        </div>*/}
        <div id='wrapper' className={'coach-wrapper divider'}>
            <Row className='program-row-adapts'>

                <Col md={12} className='-margin-right align-center'>
                    <img className='custom-image updated-home-image' src={ProgramAdapts} alt='Therapy'/>
                </Col>
                <Col md={12} className="program-adapts">
                    <p className='bottom-space heavy-text'>
                        <span className='-highlighted-text'>
                            Empowering individuals</span>
                        <br/>
                        to better gut health
                    </p>
                    <div className='book-text black-18-font'>
                        <p className="description-text">
                            Cognitive behavioral therapy (CBT) generates on average the highest clinical outcomes for
                            IBS, improving both physical symptoms and overall wellbeing. Zemedy provides a comprehensive
                            digital CBT-based program for individuals with IBS when and where they need it.
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
        <div className="resilify-home-programsList ">
            <TopicSection
                programs={programs}
                viewAll
            />
        </div>
        <div className="resilify-features">
            <div id='wrapper' className={'coach-wrapper'}>
                <Slider
                    coloredArrow
                    perSlide={1}
                    infinite={true}
                    className="features-wrapper program-wrapper"
                    key={generateRandomID()}
                >
                    {features?.map(f => <div className="feature-div">
                        <Row className='feature-row'>
                            <Col md={12} className="content-col">
                                <p className='heavy-text title'>
                                    {f.title}
                                </p>
                                <div className='black-18-font'>
                                    <p className="description-text">
                                        {f.description}
                                    </p>
                                </div>
                            </Col>
                            <Col md={12} className='align-center'>
                                <img className='custom-image' src={f.image} alt='Therapy'/>
                            </Col>
                        </Row>
                    </div>)}

                </Slider>
            </div>
        </div>
        <div
            id='wrapper'
            className={'coach-wrapper'}
            style={{paddingBottom: 0}}
        >

            <div className="resilify-result-content-section divider">
                <h3 className="heavy-text center margin-bottom-25 comprehensive-text">Results that last</h3>
                <p className="description-text center"> Combining data science and CBT techniques
                    developed at
                    <br/>
                    the University of Pennsylvania, Resilify is a carepath to
                    <br/>
                    long-lasting symptom relief within weeks.</p>
                <div className="overview-bhp-flex-section">
                    <div className="sequence-sections">
                        <div className="flex-section">
                            <div className="section">
                                <img
                                    src={ResultStat1}
                                />

                                <p className="medium-text title">
                                    Better overall health </p>
                                <p className="book-text text">
                                    Through a personalized journey with individual health assessments
                                </p>
                            </div>
                        </div>
                        <div className="flex-section">
                            <div className="section">
                                <img
                                    src={ResultStat2}
                                />

                                <p className="medium-text title">Improved mental wellbeing</p>
                                <p className="book-text text">
                                    Restoring the balance between mind and body through mindfulness exercises
                                </p>
                            </div>
                        </div>
                        <div className="flex-section">
                            <div className="section">
                                <img
                                    src={ResultStat3}
                                />

                                <p className="medium-text title">Boosted productivity</p>
                                <p className="book-text text">
                                    Providing the strength to live a limitless life unaffected by a chronic condition
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Row className='addressing-issue-container divider'>

                <Col md={12}>
                    <p className='bottom-space heavy-text'>
                        <span className='-highlighted-text'>
                            Address a significant issue</span>
                        <br/>
                        in your organization
                    </p>
                    <div className='book-text black-18-font'>
                        <p className="description-text">
                            Reduce your staff healthcare costs and minimize the impact of IBS on your business by
                            introducing Zemedy to your team.
                        </p>
                    </div>
                    <div className="statistic-container">
                        <div className="statistic-section">
                            <div className="statistic-box">
                                <img src={IssueImg1}/>
                                <h2 className="medium-text">
                                    30%
                                </h2>
                                <p className="book-text">
                                    American adults affected by IBS
                                </p>
                            </div>
                        </div>
                        <div className="statistic-section">
                            <div className="statistic-box">
                                <img src={IssueImg2}/>
                                <h2 className="medium-text">
                                    $100bn+
                                </h2>
                                <p className="book-text">
                                    Annual medical claims in the US
                                </p>
                            </div>
                        </div>
                        <div className="statistic-section">
                            <div className="statistic-box">
                                <img src={IssueImg3}/>
                                <h2 className="medium-text">
                                    27%+
                                </h2>
                                <p className="book-text">
                                    Experience anxiety and depression
                                </p>
                            </div>
                        </div>
                        <div className="statistic-section">
                            <div className="statistic-box">
                                <img src={IssueImg4}/>
                                <h2 className="medium-text">
                                    1st
                                </h2>
                                <p className="book-text">
                                    Most common cause of work absenteeism
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={2} className='align-center' />
                <Col md={10}>
                    <img className='custom-image' src={OrganizationIssue} alt='Therapy'/>
                </Col>
            </Row>

            <div className='Savings-calculator'>

                <div className="left-content">
                    <p className='bottom-space heavy-text'>
                        How much can you save?
                    </p>
                    <div className='book-text black-18-font'>
                        <p className="description-text">
                            Generating long-lasting outcomes, Zemedy can save over 20% of spend for employers and payers in the first year
                        </p>
                    </div>
                    <button className='request-demo-btn'
                            style={{marginBottom: 20, height: "auto", fontSize: 18}}>
                        Partner with us
                    </button>
                    <img className='custom-image' src={SavingsCalculator} alt='Therapy'/>
                </div>
                <div className='right-section'>
                <div className='right-content'>
                    <div className="info">
                        <p className="medium-text">
                            Number of employees
                        </p>
                       <AntdSlider
                           tooltipPlacement={"bottom"}
                           min={0}
                           max={20000}
                           defaultValue={noOfEmployees}
                           onAfterChange={v => setNoOfEmployees(v)}
                           className="business-calculator-slider"
                       />
                    </div>
                    <div className="info">
                        <p className="medium-text">
                            Cost savings on medical claims and productivity loss
                        </p>
                        <h1 className="heavy-text">
                            ${numberFormat(noOfEmployees*73)}
                        </h1>
                    </div>
                    <div className="info">
                        <p className="medium-text">
                            Days of work missed
                        </p>
                        <h1 className="heavy-text">
                            {numberFormat(noOfEmployees*28)}
                        </h1>
                    </div>
                    <div className="info">
                        <p className="medium-text">
                            Members suffering
                        </p>
                        <h1 className="heavy-text">
                            {numberFormat(parseInt(noOfEmployees*0.191, 10))}
                        </h1>
                    </div>
                </div>
                </div>
            </div>
        </div>
        {/*<div className="resilify-testimonials">
            <div id='wrapper' className={'coach-wrapper'}>
                <h3 className="heavy-text center title">Trusted by people who know what <br /> you’re going through</h3>

                <Slider
                    coloredArrow
                    className="features-wrapper program-wrapper"
                    key={generateRandomID()}
                >
                    <div className="feature-div">
                        <div className='black-18-font'>
                            <p className="book-text">
                                I had never heard of IBS before so not sure where to find help. This app is the best app I have used for IBS.
                            </p>
                            <div className='user'>
                                <img src={testimonialMale}/>
                                <h4 className="medium-text">
                                    Zomer
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="feature-div">
                        <div className='black-18-font'>
                            <p className="book-text">
                                I had never heard of IBS before so not sure where to find help. This app is the best app I have used for IBS.
                            </p>
                            <div className='user'>
                                <img src={testimonialMale}/>
                                <h4 className="medium-text">
                                    Zomer
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="feature-div">
                        <div className='black-18-font'>
                            <p className="book-text">
                                I had never heard of IBS before so not sure where to find help. This app is the best app I have used for IBS.
                            </p>
                            <div className='user'>
                                <img src={testimonialMale}/>
                                <h4 className="medium-text">
                                    Zomer
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="feature-div">
                        <div className='black-18-font'>
                            <p className="book-text">
                                I had never heard of IBS before so not sure where to find help. This app is the best app I have used for IBS.
                            </p>
                            <div className='user'>
                                <img src={testimonialMale}/>
                                <h4 className="medium-text">
                                    Zomer
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="feature-div">
                        <div className='black-18-font'>
                            <p className="book-text">
                                I had never heard of IBS before so not sure where to find help. This app is the best app I have used for IBS.
                            </p>
                            <div className='user'>
                                <img src={testimonialMale}/>
                                <h4 className="medium-text">
                                    Zomer
                                </h4>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>*/}
        <ResilifyBottomSection />
    </div>

}

export default ResilifyScreen;
