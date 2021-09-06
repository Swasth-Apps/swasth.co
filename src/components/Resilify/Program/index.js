import React from 'react';
import ReactHtmlParser from "react-html-parser";
import CLImage from "../../../helper/CLImage";
import {Collapse, Divider, Tabs} from "antd";
import {getCloudIDFromImageName} from "../../../helper/helper";
import Program from "../../../components/Program";
import {Link} from "gatsby";

const {Panel} = Collapse;
const {TabPane} = Tabs;

const edges = ["Overview", "Activities"];

const ResilifyProgram = (props) => {
    const  program = props?.program || [];
    const relatedPrograms = props.program?.relatedpost?.program;

    const sessions = program?.sessions?.session;
    console.log(program)
    return (
            <div className="resilify-program-page" style={{marginTop: 2}}>
                <h3 className="program-section-title base-text">{program.title}</h3>
                <div className="program-detail-section">
                    {sessions?.length ?
                        <div className="sessions-length roman-text">
                            {`${sessions?.length} Sessions`}
                        </div> : null}
                    <div className="program-overview-container">
                        <div className="program-overview-section scrollbar">
                            <div style={{textAlign: "center"}}>
                                <CLImage
                                    cloudId={getCloudIDFromImageName(
                                        program.image,
                                        "bodhi",
                                        'characters',
                                    )}
                                    imageHeight={800}
                                    imageWidth={1200}
                                    className="track-detail-img"
                                />
                            </div>
                            <div>
                                <div className="program-overview-container">
                                    <div className="row">
                                        <h4 className="medium-text">
                                            About this program
                                        </h4>
                                    </div>
                                </div>
                                <div className="html-parser-description" style={{textAlign: "left"}}>
                                    {ReactHtmlParser(program.overview)}
                                </div>
                                    <div className="hours-text-row">
                                        <img src={require("../../../assets/images/clock-time.png")}/>
                                            <p className="medium-text hours-text">
                                                {sessions?.length}{' Hours'}
                                            </p>
                                    </div>
                                <div>
                                    <Divider orientation={"center"} style={{fontSize: 18}} className="medium-text">Join from</Divider>
                                </div>
                                <div className="join-program-btns">
                                    <div className="btn">
                                        <img src={'https://itwire.com/media/k2/items/cache/401b2aa9924b13d9231c78fc00d6473e_XL.jpg'}/>
                                        <p className="medium-text">Google Play</p>
                                    </div>
                                    <div className="btn">
                                        <img src={'https://cdn.iconscout.com/icon/free/png-256/ios-apple-572947.png'}/>
                                        <p className="medium-text">Apple Store</p>
                                    </div>
                                    <div className="btn" onClick={()=> window.open(`http://localhost:3000?programId=`)}>
                                        <img src={require("../../../assets/images/website.png")}/>
                                        <p className="medium-text">Web</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="program-overview-container">
                        <div className="program-overview-section scrollbar">
                            <h4 className="base-text" style={{fontSize: 24}}>Sessions</h4>
                            <div className="faqs">
                                <Collapse
                                    accordion
                                    bordered={false}
                                    expandIconPosition="right"
                                >
                                    {sessions?.map((session, i) => (
                                        <Collapse.Panel
                                            header={
                                                <>
                                                    <h4 className="medium-text">{session.title}</h4>
                                                    <p className="roman-text">Session {i + 1}</p>
                                                </>
                                            }

                                            key={i + 1}>
                                            <Tabs className={`topic-tabs`}>
                                                {edges?.map(item =>
                                                    <TabPane tab={item} key={item}>
                                                        {item === "Overview" ?
                                                            <p className="para-text" style={{fontSize: 16}}>
                                                                {session.overview}
                                                            </p>:
                                                            <p className="para-text" style={{fontSize: 16}}>
                                                                {session.activityOverview}
                                                            </p>
                                                        }
                                                    </TabPane>
                                                )}
                                            </Tabs>
                                        </Collapse.Panel>))}
                                </Collapse>
                            </div>
                        </div>

                    </div>
                </div>


                {/*<div className="banner-img">*/}
                       {/* <div className="program-top-banner"
                             style={{
                                 background: `url(${CoachBg}) no-repeat center center fixed`
                             }}
                        >
                            <div className="banner-body-section">
                                <div className="banner-inner-body">
                                    <div className="program-title-section">
                                        <p className="base-text program-name">{program.title}</p>
                                    </div>
                                    <div className="banner-program">
                                        <div className="program-img-section">
                                            <CLImage
                                                className="program-img"
                                                cloudId={getCloudIDFromImageName(
                                                    program.image,
                                                    "bodhi",
                                                    'characters',
                                                )}
                                                imageHeight={800}
                                                imageWidth={1200}
                                            />
                                        </div>
                                        {program?.sessions?.session?.length ?
                                            <div className="program-session">
                                                <h5>{`${program?.sessions?.session?.length} SESSIONS`}</h5>
                                                <Collapse ghost expandIconPosition="right" accordion
                                                          className="scrollbar">
                                                    {program?.sessions?.session?.map((session, i) => {
                                                        return <Panel header={`${i + 1}. ${session.title}`} key={i}>
                                                            <Tabs className={`topic-tabs`}>
                                                                {edges?.map(item =>
                                                                    <TabPane tab={item} key={item}>
                                                                        {item === "Overview" ?
                                                                            <p className="para-text white-text" style={{fontSize: 16}}>
                                                                                {session.overview}
                                                                            </p>:
                                                                            <p className="para-text white-text" style={{fontSize: 16}}>
                                                                                {session.activityOverview}
                                                                            </p>
                                                                        }
                                                                    </TabPane>
                                                                )}
                                                            </Tabs>
                                                        </Panel>
                                                    })}
                                                </Collapse>
                                            </div> : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="resilify-program-description">
                        <div className="program-desc">
                            <div className="program-desc-text">
                                <h3 className="base-text">About This Program</h3>
                                <p>{ReactHtmlParser(program.overview)}</p>
                            </div>
                        </div>
                    </div>*/}

                <div className="category-page-body resilify-home-page-body">
                    <div className="program-section" id={`topic-tabs`}>
                        <h3 className="program-section-title base-text">Related Programs</h3>
                    </div>
                    <div className="program-wrapper">
                        {relatedPrograms?.map((p) => {
                            const program = props.allPrograms?.find(a => a?.node?.fields?.slug?.includes(p.slug));
                             return(   program ? <Program program={program?.node?.frontmatter} slug={program?.node?.fields?.slug}/> : null )
                            }
                        )}
                    </div>
                </div>
            </div>
    )
};

export default ResilifyProgram;
