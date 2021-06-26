import React from "react";

import ReactPlayer from 'react-player';
import {getCloudIDFromImageName, getCoachingVideo} from "../../../helper/helper";
import CLImage from "../../../helper/CLImage";
import RegisterInterest from "../../RegisterInterestModal";
import ShowMore from "react-show-more";
import ArrowLeftOutlined from "@ant-design/icons/es/icons/ArrowLeftOutlined";
import ReactHtmlParser from "react-html-parser";
import SessionModulesImg from "../../../assets/images/coaching-session-modules.jpg";
import TopBanner from "../../../assets/images/program_detail_banner.png";
import BottomBanner from "../../../assets/images/program_detail_bottom_banner.png";
import ChartIcon from "../../../assets/images/chart-icon.png";
import {Col, Collapse, Row} from "antd";

const {Panel} = Collapse;

class CoachProgram extends React.Component {
    constructor(props) {
        super(props);
    }

    handleGoBack = (e) => {
        e.preventDefault();
        window.history.back();
    };

    render() {
        let {program} = this.props;
        program = program || {};
        return (
            <div className="coaching-program-page">
                <div className="programs-list-page-program-card">
                    <div
                        className="program-detail-top-bg"
                        style={{
                            backgroundImage: `url(${TopBanner})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div
                            id='wrapper'
                            className={'coach-wrapper'}
                            style={{paddingBottom: 0}}
                        >
                            <p className="para-medium-text back-arrow" onClick={this.handleGoBack}>
                                <ArrowLeftOutlined/> {this.props.isProfessional ? "Back" : "Back to Programs"}
                            </p>
                            <div className="flex-coloured-container peach-bg tm-100">
                                <div className="course-panel-text-wrapper">
                                    <h1 className="heading-32 ch-width-24 base-text">
                                        {program?.name}
                                    </h1>
                                    <p className="body-18 ch-width-50 light-text html-parser" style={{marginBottom: 40}}>
                                        {ReactHtmlParser(program?.overview)}
                                    </p>
                                    <div className="program-list-page-buttons tm-8">
                                        <div className="rm-16">
                                            <RegisterInterest
                                                program={program}
                                                programSlug={program?.slug}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="course-creator-details">
                                    <CLImage
                                        cloudId={getCloudIDFromImageName(
                                            program?.coachInfo?.picture,
                                            "coaching",
                                            'experts',
                                        )}
                                        transformation={[
                                            {gravity: "face", height: 800, width: 800, crop: "crop"},
                                            // {radius: "max"},
                                            {width: 150, height: 150, crop: "scale"}
                                        ]}
                                        className="image-18"
                                    />
                                    <div>
                                        <h3 className="heading-20 bm-8 medium-text">{program?.coachInfo?.name}</h3>
                                        <p className="body-14 para-text show-more-less-desc">
                                            <ShowMore
                                                lines={2}
                                                more='Show more'
                                                less='Show less'
                                                anchorClass=''
                                            >{program?.coachInfo?.title}</ShowMore>
                                        </p>
                                        {program?.featuredVideos?.[0] ?
                                            <ReactPlayer
                                                className='video-img'
                                                url={program?.featuredVideos?.[0]?.includes("http") ?
                                                    program?.featuredVideos?.[0] : getCoachingVideo(program?.featuredVideos?.[0])
                                                }
                                                fluid={false}
                                                resizeMode={"contain"}
                                                controls
                                                style={{
                                                    height: "100%"
                                                }}
                                            /> : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*                    <section className='banner-section'>
                        <Row className='-row-flex-center' id='wrapper'>
                            <Col md={24} style={{width: '100%'}}>
                                <p style={{textAlign: 'center'}}
                                   className='bottom-space tab-view'>
                                    Access across all platforms
                                    <br/>
                                </p>
                                <p className="para-text" style={{textAlign: "center"}}>
                                    Works seamlessly across all your devices: iPhone, iPad, Android phones and tablets,
                                    web etc.
                                </p>
                                <div className="devices-img">
                                    <img
                                        src={AllDevices}
                                        className="image-18"
                                    />
                                    <img
                                        src={Devices}
                                        className="image-18"
                                    />
                                </div>
                            </Col>

                        </Row>
                    </section>*/}
                    <div
                        id='wrapper'
                        className={'coach-wrapper'}
                        style={{paddingBottom: 0}}
                    >
                        {program?.marketingDescription ? <>
                            <div className="flex-coloured-container peach-bg tm-100">
                                <div className="course-panel-text-wrapper">
                                    <h3 className="ch-width-24 overview-title medium-text" style={{marginBottom: 0}}>
                                        Program Description
                                    </h3>
                                </div>
                            </div>
                            <p className="body-18 ch-width-50 light-text html-parser" style={{marginBottom: 40}}>
                                {ReactHtmlParser(program?.marketingDescription)}
                            </p></> : null}

                        {program?.objectiveGoals ? <>
                            <div className="flex-coloured-container peach-bg tm-100">
                                <div className="course-panel-text-wrapper">
                                    <h3 className="ch-width-24 overview-title medium-text" style={{marginBottom: 0}}>
                                        Program Objectives
                                    </h3>
                                </div>
                            </div>
                            <p className="body-18 ch-width-50 light-text html-parser" style={{marginBottom: 40}}>
                                {ReactHtmlParser(program?.objectiveGoals)}
                            </p> </> : null}

                        {program?.sessions ? <>
                            <div className="flex-coloured-container tm-100">
                                <div className="course-panel-text-wrapper">
                                    <h3
                                        className="ch-width-24 overview-title medium-text"
                                    >
                                        Program Modules
                                    </h3>
                                    <p className="body-18 ch-width-50 para-text html-parser" style={{marginBottom: 40}}>
                                        {ReactHtmlParser(program?.modulesOverview)}
                                    </p>
                                </div>
                            </div>
                            <div className="program-sessions-container">
                                <div className="img">
                                    {program?.programModuleImage ?
                                        <CLImage
                                            cloudId={getCloudIDFromImageName(
                                                program?.programModuleImage,
                                                "coaching",
                                                'programs',
                                            )}
                                            className="image-18"
                                        />
                                        :
                                        <img src={SessionModulesImg}/>}
                                </div>
                                <div className="course-modules program-sessions">
                                    <div className="max-width-class">
                                        <Collapse
                                            expandIconPosition="right"
                                            accordion
                                            bordered={false}
                                            className="coaching-program-collapsible"
                                        >
                                            {program?.sessions?.map((session, index) =>
                                                <Panel
                                                    header={
                                                        <div>
                                                            <p className="body-18 ch-width-50 book-text"
                                                               style={{margin: "0px 0 10px"}}>
                                                                {`Session ${index + 1} `}
                                                            </p>
                                                            <p className="para-medium-text">
                                                                {`${session.title}`}
                                                            </p>
                                                        </div>}
                                                    key={index + 1}
                                                >
                                                    <div
                                                        className="coaching-landing-page-tab coaching-program-collapse">
                                                        <div className="sessions-section html-parser">
                                                            {ReactHtmlParser(session.description)}
                                                        </div>
                                                    </div>
                                                </Panel>)}
                                        </Collapse>
                                    </div>
                                </div>
                            </div>
                        </> : null}
                    </div>

                    {program?.scheduled || program?.self_paced || program?.schedule_communicate ?
                        <section className='banner-section'>
                            <Row className='-row-flex-center' id='wrapper'>
                                <Col md={24} style={{width: '100%'}}>
                                    <p className='bottom-space tab-view program-schedule-title heavy-text'>
                                        Program Schedule
                                    </p>
                                    <div className="program-schedule-section">
                                        <div className="section">
                                            <div>
                                                <h4 className="para-medium-text">
                                                    Scheduled
                                                </h4>
                                                <div className="html-parser">
                                                    {ReactHtmlParser(program?.scheduled)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="section">
                                            <div>
                                                <h4 className="para-medium-text">
                                                    Self Paced
                                                </h4>
                                                <div className="html-parser">
                                                    {ReactHtmlParser(program?.self_paced)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="section">
                                            <div>
                                                <img
                                                    src={ChartIcon}
                                                />
                                                <div className="html-parser">
                                                    {ReactHtmlParser(program?.schedule_communicate)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Col>
                            </Row>
                        </section> : null}


                    {program?.tuition ?
                        <div
                            className="program-tuition-top-bg"
                            style={{
                                backgroundImage: `url(${BottomBanner})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <Row className='-row-flex-center' id='wrapper' style={{paddingTop: 50}}>
                                <Col md={24} style={{width: '100%'}}>
                                    <h3 className='bottom-space program-schedule-title heavy-text'>
                                        Program Tuition
                                    </h3>
                                    <div className="program-tuition">
                                        <div className="section">
                                            <div className="html-parser">
                                                {ReactHtmlParser(program?.tuition)}
                                            </div>
                                        </div>
                                        <div className="section">
                                            <div>
                                                <h3 className="book-text">
                                                    Ready to dive into learning some skills?
                                                </h3>
                                                <RegisterInterest program={program} programSlug={program?.slug}/>
                                            </div>
                                        </div>
                                    </div>

                                </Col>
                            </Row>
                        </div> : null}
                </div>
            </div>
        )
    }
};

export default CoachProgram;
