import React from "react";
import {Col, Row} from "antd";
import {ArrowRightOutlined} from "@ant-design/icons";
import {Link} from "gatsby";
import bannerGraphic from "../assets/images/home-woman.jpeg";

const expertsData = [{
    name:"Dennis Tirch",
    img:require("../assets/images/experts/tirch.jpeg"),
    description:"Dr Dennis Tirch founded the USA’s Center for Compassion Focused Therapy and is current President of The Compassionate Mind Foundation USA. He is in demand for international workshops and invited speeches.",
    expertise: "Founder of The Center for Compassion Focused Therapy",
    "slug":"dennis-tirch"
},{
    name:"Philip Zimbardo",
    img:require("../assets/images/experts/philip.jpg"),
    description:"Dr Philip Zimbardo is one of the most well known psychologists of the second half of the twentieth century. Best known for the Stanford Prison Experiment of 1971, his research has covered the psychology of evil, cult behavior, shyness and heroism.",
    expertise: "Emeritus Professor of Psychology at Stanford University and President of the Heroic Imagination Project",
    "slug":"philip-zimbardo"
},{
    name:"Dr. Yotam Heineberg",
    img:require("../assets/images/experts/yotam.png"),
    description:"After completing his doctorate at PGSP-Stanford Consortium, he did his post-doctoral training and acted as a healthcare Fellow at Stanford University (CCARE) where he developed various programs focused on resilience, team building and compassion.",
    expertise: "Clinical psychologist and a clinical faculty member at Palo Alto University",
    "slug":"yotam-heineberg"
}];


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
                                        <p className="width-90 para-text">A platform built on evidence-based principles, delivered by licensed clinicians, coaches making care accessible, effective and scalable.</p>
                                    </div>

                                    <a href="https://home-page.resiliens.com/" target="_blank">
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

                <div className="home-page-content-section">
                    <h3 className="base-text">A comprehensive behavioral health platform</h3>
                    <div className="home-page-content-bottom-section">
                        <div className="-flex">
                            <div className="home-page-content-flex-section">
                                <div className="flex-container">
                                    <h3 className="para-text">Coaching</h3>
                                    <p className="para-book-text">Only 24% of members who receive care through health
                                        plans demonstrate reliable clinical improvement.</p>
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
                    </div>
                </div>
                <div className="home-page-overview-new-skills-section home-page-improvement-section">
                    <Row className='-row-flex-center card-row bg-img'>
                        <Col md={24}>
                            <Row className='card-row'>
                                <Col md={12} className="content">
                                    <h3 className='bottom-space base-text program-grounded'>
                                        The gold standard of<br/>measuring improvement
                                    </h3>
                                    <h5 className="para-text">No vanity metrics. Only meaningful, measurable
                                        change.</h5>
                                    <div className='para-text black-18-font margin-bottom-25'>
                                        <p className="width-90 para-text">
                                            At Lyra, we use “reliable clinical improvement” to measure change,
                                            which means that an individual in treatment has improved enough on a
                                            measure of clinical symptoms that we don’t believe the change can be
                                            accounted for by normal variation in scores or measurement error.
                                        </p>
                                        <p className="width-90 para-text">
                                            Other companies often report a 1-point change, which represents normal
                                            variation in symptom scores over time and does not reflect a meaningful
                                            improvement in depression, anxiety or stress.
                                        </p>
                                    </div>

                                    <a href="https://home-page.resiliens.com/" target="_blank">
                                        <button className='request-demo-btn' style={{marginBottom: 20}}>
                                            Learn more about our impact
                                        </button>
                                    </a>
                                </Col>
                                <Col md={12} className="-margin-right img-section" style={{textAlign: "center"}}>
                                    <img className='custom-image'
                                         src={require("../assets/images/Home/girl-img.png")}
                                         alt='Therapy'/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

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
                {/*
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
                </div>*/}

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
                </div>
            </div>
            {/* *********** For Everyone ************ */
            }


            {/* ****************** For Behavioral Health Professionals *****************  */
            }

        </div>
    )
};
export default LandingPage;
