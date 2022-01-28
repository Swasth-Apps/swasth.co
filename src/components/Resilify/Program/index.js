import React from 'react';
import ReactHtmlParser from "react-html-parser";
import CLImage from "../../../helper/CLImage";
import {Collapse, Divider, Tabs} from "antd";
import {getCloudIDFromImageName} from "../../../helper/helper";
import Program from "../../../components/Program";

const {TabPane} = Tabs;

const edges = ["Overview", "Activities"];

const ResilifyProgram = (props) => {

    const openApp = (isIOS = false) => {
        window.location.replace(`resilify://programDetail/${program.programId}`);
        setTimeout(() => {
            window.location.replace(isIOS ? 'itms-apps://itunes.apple.com/app/dbt-coach/id1452264969' : 'market://details?id=co.swasth.dbtcoach');
        }, 250);

    }

    const program = props?.program || [];
    const relatedPrograms = props.program?.relatedpost?.program;
    const sessions = program?.sessions?.session;
    return (
        <div className="resilify-program-page" style={{marginTop: 2}}>
            <h3 className="program-section-title base-text">{program.title}</h3>
            <div className="program-detail-section">
                <div className="box-content">
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
                                    <div className="hours-text-row">
                                        <img src={require("../../../assets/images/clock-time.png")}/>
                                        <p className="medium-text hours-text">
                                            {sessions?.length}{' Weeks'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="html-parser-description" style={{textAlign: "left"}}>
                                {ReactHtmlParser(program.overview)}
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
                                        <p className="overview-title medium-text">Overview</p>
                                        <p className="para-text" style={{fontSize: 16}}>
                                            {session.overview}
                                        </p>
                                        <p className="overview-title medium-text">Activities</p>
                                        <p className="para-text" style={{fontSize: 16}}>
                                            {session.activityOverview}
                                        </p>
                                    </Collapse.Panel>))}
                            </Collapse>
                        </div>
                    </div>

                </div>
                </div>
                <div className="bottom-section">
                    <div className="divider-container">
                        <Divider orientation={"center"} style={{fontSize: 18}} className="medium-text">Join
                            from</Divider>
                    </div>
                    <div className="join-program-btns" >
                        <div className="btn" onClick={() => openApp()}>
                            <img
                                src={'https://itwire.com/media/k2/items/cache/401b2aa9924b13d9231c78fc00d6473e_XL.jpg'}/>
                            <p className="medium-text">Google Play</p>
                        </div>
                        <div className="btn" onClick={() => openApp(true)}>
                            <img src={'https://cdn.iconscout.com/icon/free/png-256/ios-apple-572947.png'}/>
                            <p className="medium-text">Apple Store</p>
                        </div>
                        <div className="btn"
                             onClick={() => window.open(`https://resilify-dev.resiliens.com/app/explore?programId=${program.programId}`)}>
                            <img src={require("../../../assets/images/website.png")}/>
                            <p className="medium-text">Web</p>
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
            {program?.references?.length ?
            <div className="category-page-body resilify-home-page-body">
                <div className="program-section" id={`topic-tabs`}>
                    <h3 className="reference-title base-text">Selected Scientific Literature</h3>
                    <p className="reference-descr light-text">
                        Built with leading experts, our approach is proven and recognised <br /> through decades of clinical and academic research.
                    </p>
                </div>
                <ul className="references-container">
                    {program?.references?.map(({reference}) =><li>{ReactHtmlParser(reference)}</li>)}
                {/*    <div className="reference">
                        <div className="box">
                            <img src='https://static.wixstatic.com/media/52f234_819421fd237b440f9a4684ae7b875f6f~mv2.png/v1/crop/x_0,y_6,w_1050,h_775/fill/w_306,h_226,al_c,q_85,usm_0.66_1.00_0.01/Cards.webp' />
                            <h4 className="medium-text">
                                Randomized Clinical Trial of a Digital CBT App for IBS
                            </h4>
                            <p className="book-text">
                                Zemedy is an effective modality to deliver CBT for individuals with IBS, and could increase the accessibility of this evidence-based treatment.
                            </p>
                        </div>
                    </div>
                    <div className="reference">
                        <div className="box">
                            <img src='https://static.wixstatic.com/media/52f234_ab4a92b14b784bc79e437246962c9d0b~mv2.png/v1/fill/w_306,h_226,al_c,q_85,usm_0.66_1.00_0.01/Cards-2.webp' />
                            <h4 className="medium-text">
                                Brief Cognitive-Behavioral Internet Therapy for IBS
                            </h4>
                            <p className="book-text">
                                Treatment completers have shown statistically and clinically significant declines in IBS symptoms and improvements in quality of life.
                            </p>
                        </div>
                    </div>
                    <div className="reference">
                        <div className="box">
                            <img src='https://static.wixstatic.com/media/52f234_73b3a384d4ab46cca8b75766875be2c3~mv2.png/v1/fill/w_306,h_226,al_c,q_85,usm_0.66_1.00_0.01/Cards-1.webp' />
                            <h4 className="medium-text">
                                Empirical Support for a Self-help Treatment for IBS
                            </h4>
                            <p className="book-text">
                                This study represents a move towards wider dissemination of and access to empirically supported self-help treatments for IBS.
                            </p>
                        </div>
                    </div>
                    <div className="reference">
                        <div className="box">
                            <img src='https://static.wixstatic.com/media/52f234_73b3a384d4ab46cca8b75766875be2c3~mv2.png/v1/fill/w_306,h_226,al_c,q_85,usm_0.66_1.00_0.01/Cards-1.webp' />
                            <h4 className="medium-text">
                                Empirical Support for a Self-help Treatment for IBS
                            </h4>
                            <p className="book-text">
                                This study represents a move towards wider dissemination of and access to empirically supported self-help treatments for IBS.
                            </p>
                        </div>
                    </div>*/}
                </ul>
            </div> : null}
            <div className="category-page-body resilify-home-page-body">
                <div className="program-section" id={`topic-tabs`}>
                    <h3 className="program-section-title base-text">Related Programs</h3>
                </div>
                <div className="program-wrapper">
                    {relatedPrograms?.map((p) => {
                            const program = props.allPrograms?.find(a => a?.node?.fields?.slug?.includes(p.slug));
                            return (program ?
                                <Program program={program?.node?.frontmatter} slug={program?.node?.fields?.slug}/> : null)
                        }
                    )}
                </div>
            </div>
        </div>
    )
};

export default ResilifyProgram;
