import React, {useState} from "react";
import {Col, Row, Slider as AntdSlider} from "antd";
import TopicSection from "./TopicSection";
import {useSelector} from "react-redux";
import bannerGraphic from "../../assets/images/resilify-woman.png";
import OrganizationIssue from "../../assets/images/resilify/organization.png";
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
import breathingExercise from "../../assets/images/resilify/resilify-breathing-exercise.png";
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
        title: "Tailored Programs",
        description: "Our Resilify Platform offers programs based on evidence-based treatment modalities that last anywhere from 6-12 weeks.",
        "image": programImg
    },
     {
        title: "Self-guided",
        description: "All our programs are self-guided with intuitive digital tools that enable you to work on the programs at your convenience anytime, anywhere.",
        "image": exerciseImg
    },
    {
        title: "Progress Monitoring",
        description: "Follow your journey to better behavioral health with personalized symptom and lifestyle habit tracking.",
        "image": insightsImg
    },
    {
        title: "Video-guided Lessons",
        description: "All our programs contain video-guided lessons along with comprehensive text-based microlessons to enable you to grasp the concepts quickly and retain them longer.",
        "image": lessonImg
    },
    {
        title: "Daily Checkin",
        description: "Reduce stress and manage your symptoms with specifically designed check-in tools such as mood, emotion, activity, sleep, etc., along with exercise practices.",
        "image": dailyCheckinImg
    },
    {
        title: "Digital Tools",
        description: "Quickly access mindfulness and program-specific tools that you can do daily to uplift your mental health.",
        "image": toolsImg
    },
    {
        title: "Meditations",
        description: "Access meditations by leading meditation teachers from around the world that are relevant to the programs you are working on.",
        "image": meditationImg
    },
    {
        title: "Breathing",
        description: "Use our state-of-the-art breathing tool that you can customize for your use. It contains specific evidence-based practices for different situations.",
        "image": breathingExercise
    },
    {
        title: "Community",
        description: "Be part of the Resilify community where you can learn from others as well as get support from peers for whatever situation you are in.",
        "image": communityImg
    },
    /*
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
        "image": breathingExercise
    }
    */
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
                                                Effective Digital Programs<br/>
                                            </h3>
                                            <div className='para-text black-18-font margin-bottom-25'>
                                                <p className="width-90 description-text">
                                                    Resilify provides accessible, personalized programs that transform behavioral health and restore mental wellbeing.
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
                        to better behavioral health
                    </p>
                    <div className='book-text black-18-font'>
                        <p className="description-text">
                            Resilify’s programs are built on evidence-based treatment modalities such as Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), Acceptance and Commitment Therapy (ACT), Motivational Interviewing (MI), etc. Resilify provides a comprehensive digital platform for individual when and where they need it.
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
                <p className="description-text center"> Combining technology and data science developed in collaboration with leading experts in 
                    <br/>
                    evidence-based techniques (CBT, DBT, ACT, CFT, MI, etc.), Resilify is a care path to
                    <br/>
                    long-lasting symptom relief within weeks.</p>
                <div className="overview-bhp-flex-section">
                    <div className="sequence-sections">
                        <div className="flex-section">
                            <div className="section">
                                <img
                                    src={ResultStat2}
                                />

                                <p className="medium-text title">
                                    Improved wellness </p>
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

                                <p className="medium-text title">Boost Resilience</p>
                                <p className="book-text text">
                                    Providing the strength and the tools to deal with life’s ups and downs.
                                </p>
                            </div>
                        </div>
                        <div className="flex-section">
                            <div className="section">
                                <img
                                    src={ResultStat1}
                                />

                                <p className="medium-text title">Better overall health</p>
                                <p className="book-text text">
                                    Through a personalized journey with individual health assessments
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
                            Reduce your staff healthcare costs and improve employee mental wellness by introducing Resilify to your team.
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
                                    American adults affected by Mental Health Issues
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
                            Generating long-lasting outcomes, Resilify can save over 20% of spend for employers and payers in the first year
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
