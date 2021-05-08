import React from "react";
import {CalendarOutlined, ClockCircleOutlined, HighlightOutlined} from '@ant-design/icons'
import {Collapse} from "antd";
import RegisterInterest from "../../RegisterInterestModal";
import {getCloudIDFromImageName} from "../../../helper/helper";
import CLImage from "../../../helper/CLImage";
import HtmlParser from "react-html-parser";
import CECredit from "../../../assets/images/ce-credits-icon.png";
import AllDevices from "../../../assets/images/all-devices.png";

const {Panel} = Collapse;
const OrgProgramDetail = (props) => {
    const {program} = props;
    return (
        <>
            <div className="individual-course-container individual-program-container">
                <div className="max-width-class">
                    <section className='course-section'>
                        <div className="main-course-col">
                            <h2 className="base-text">{program?.name}</h2>
                        </div>
                    </section>
                    <div className="program-img-container">
                        <div className="program-img-section">
                            <CLImage
                                cloudId={getCloudIDFromImageName(
                                    program?.marketingImg,
                                    "coaching",
                                    'png',
                                )}
                                className={"program-img"}
                                options={{
                                    imageWidth: 1200,
                                    imageHeight: 800
                                }}
                            />
                        </div>
                        <div className="payment-card">
                            <h3 className="para-text">{program?.shortTitle || program?.name}</h3>
                            <h1 className="base-text">$545</h1>
                            <a>
                                <RegisterInterest program={program} programSlug={props.programSlug}/>
                            </a>
                            <div className="separator-content">
                                <p className="divider"/>
                                <h3 className="para-text">Access across all platforms</h3>
                                <p className="para-text">
                                    Works seamlessly across all your devices: iPhone, iPad, Android phones and tablets, web etc.
                                </p>
                                <img src={AllDevices}/>
                            </div>
                        </div>
                    </div>
                    <div className="course-basics-info">
                        <div className="course-basics">
                            <p className="para-medium-text">
                                <CalendarOutlined/>
                                <span>Starts 1st June</span>
                            </p>
                            <p className="para-medium-text">
                                <ClockCircleOutlined/>
                                <span>
                                        {`${program?.duration?.interval} ${program?.duration?.period?.toLowerCase()}`}
                                    </span>
                            </p>
                            <p className="para-medium-text">
                                <HighlightOutlined/>
                                <span>For Mental Health Professionals</span>
                            </p>
                            <p className="para-medium-text">
                                <img src={CECredit}/>
                                <span>TBA CE/CME Credits</span>
                            </p>
                        </div>

                    </div>
                    <div className="program-description">
                        {HtmlParser(program?.marketingDescription)}
                    </div>

                    <div className="course-modules program-sessions">
                        <div className="max-width-class">
                            <h3 className="base-text">Course Modules</h3>
                            <Collapse expandIconPosition="right" accordion bordered={false}
                                      className="coaching-program-collapsible">
                                {program?.sessions?.map((session, index) =>
                                    <Panel
                                        header={
                                            <div style={{display: "flex", alignItems: "flex-start"}}>
                                                <p className="para-text">
                                                    {`Session ${index + 1}. `}
                                                </p>
                                                <p className="para-text">
                                                    {`${session.name}`}
                                                </p>
                                            </div>} key={index + 1}
                                    >
                                        <div className="coaching-landing-page-tab coaching-program-collapse">
                                            <div className="sessions-section">
                                                {HtmlParser(session.description)}
                                            </div>
                                        </div>
                                    </Panel>)}
                            </Collapse>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default OrgProgramDetail;
