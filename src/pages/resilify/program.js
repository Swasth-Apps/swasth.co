import React from 'react';
import _ from "lodash";
import ReactHtmlParser from "react-html-parser";
import Layout from '../../components/Layout/layout';
import CLImage from "../../helper/CLImage";
import {useSelector} from "react-redux";
import {Collapse, Tabs} from "antd";
import {getParseDetails} from "../../helper/helper";
import {getCloudIDFromImageName, getCloudIDFromImageURL} from "../../components/Resilify/common/helper";
import Program from "../../components/Program";
import Loader from "../../components/Loader";
import CoachBg from "../../assets/images/resilify/coach-bg.jpg"
import VideoIcon from "../../assets/images/video.png"

const {Panel} = Collapse;
const {TabPane} = Tabs;

const edges = ["Lessons", "Activities"];

const ResilifyProgram = () => {

    const programs = useSelector(state => state.commonData.programs);
    const loading = useSelector(state => state.commonData.resilifyLoading);

    let slug = typeof window !== 'undefined' ? window?.location?.pathname?.substring('/resilify/program/'.length) : '';
    slug = slug?.split("/")?.[0];

    const program = programs?.find(({slug: s}) => s === slug) || {};

    const relatedPrograms = _.filter(
        _.uniqBy(
            programs?.filter(({topics}) => _.some(program.topics, t => topics.includes(t))),
            "id"),
        ({id}) => id !== program.id
    );

    return (
        <Layout noFooterMargin>
            <div className="resilify-program-page">
                {loading ? <Loader/> : <>

                    <div className="banner-img">
                        <div className="program-top-banner"
                             style={{
                                 background: `url(${CoachBg}) no-repeat center center fixed`
                             }}
                        >
                            <div className="banner-body-section">
                                <div className="banner-inner-body">
                                    <div className="program-title-section">
                                        <p className="base-text program-name">{program.name}</p>
                                    </div>
                                    <div className="banner-program">
                                        <div className="program-img-section">
                                            <CLImage
                                                className="program-img"
                                                cloudId={getCloudIDFromImageName(
                                                    program.marketingImage,
                                                    "bodhi",
                                                    'tracks',
                                                )}
                                                imageHeight={800}
                                                imageWidth={1200}
                                            />
                                        </div>
                                        {program?.sessions?.length ?
                                            <div className="program-session">
                                                <h5>{`${program?.sessions?.length} SESSIONS`}</h5>
                                                <Collapse ghost expandIconPosition="right" accordion
                                                          className="scrollbar">
                                                    {program?.sessions?.map((session, i) => {
                                                        const lessons = getParseDetails(session?.lessons?.[0]);
                                                        const activities = session.activityGroups?.flatMap(({activities}) => activities);
                                                        return <Panel header={`${i + 1}. ${session.name}`} key={i}>
                                                            <Tabs className={`topic-tabs`}>
                                                                {edges?.map(item =>
                                                                    <TabPane tab={item} key={item}>
                                                                        {item === "Lessons" ?
                                                                            <ul>
                                                                                {lessons?.cards?.map(({title}) =>
                                                                                    <li><img
                                                                                        src={VideoIcon}/>{title}
                                                                                    </li>)}
                                                                            </ul> : <ul>
                                                                                {activities?.map(activity =>
                                                                                    <li>
                                                                                        <CLImage
                                                                                            cloudId={getCloudIDFromImageURL(
                                                                                                activity.icon || 'Behavioral-activation.png',
                                                                                                'bodhi',
                                                                                                'icons',
                                                                                            )}
                                                                                            options={{
                                                                                                format: 'png',
                                                                                                background: 'transparent',
                                                                                                color:"white"
                                                                                            }}
                                                                                        />
                                                                                        {activity.name}
                                                                                    </li>)}
                                                                            </ul>
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
                                <p>{ReactHtmlParser(program.description)}</p>
                            </div>
                        </div>
                    </div>
                </>}

                <div className="category-page-body">
                    <div className="program-section" id={`topic-tabs`}>
                        <h3 className="program-section-title base-text">Related Programs</h3>
                    </div>
                    <div className="program-wrapper">
                        {relatedPrograms?.map(program =>
                            <Program program={program}/>
                        )}
                    </div>
                </div>
                <div style={{padding: "20px 0 20px", marginTop: 50}}>
                    {/*<FAQs/>*/}
                </div>
            </div>
        </Layout>
    )
};

export default ResilifyProgram;
