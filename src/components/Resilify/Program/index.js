import React from 'react';
import _ from "lodash";
import ReactHtmlParser from "react-html-parser";
import CLImage from "../../../helper/CLImage";
import {useSelector} from "react-redux";
import {Collapse, Tabs} from "antd";
import {getCloudIDFromImageName} from "./../common/helper";
import Program from "../../../components/Program";
import Loader from "../../../components/Loader";
import CoachBg from "../../../assets/images/resilify/coach-bg.jpg"

const {Panel} = Collapse;
const {TabPane} = Tabs;

const edges = ["Lessons", "Activities"];

const ResilifyProgram = (props) => {

    const tempProgram = useSelector(state => state.commonData.program);
    const loading = useSelector(state => state.commonData.resilifyLoading);

    const slugProgram = tempProgram?.[props.slug];
    const  program = slugProgram?.program || {};
    const  programs = slugProgram?.relatedPrograms || [];
    const relatedPrograms = _.filter(
        _.uniqBy(
            programs?.filter(({topics}) => _.some(program.topics, t => topics.includes(t))),
            "id"),
        ({id}) => id !== program.id
    );

    return (
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
                                                        return <Panel header={`${i + 1}. ${session.name}`} key={i}>
                                                            <Tabs className={`topic-tabs`}>
                                                                {edges?.map(item =>
                                                                    <TabPane tab={item} key={item}>
                                                                        {item === "Lessons" ?
                                                                            <p className="para-text white-text" style={{fontSize: 16}}>
                                                                                {session.lessonsOverview}
                                                                            </p>:
                                                                            <p className="para-text white-text" style={{fontSize: 16}}>
                                                                                {session.activitiesOverview}
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
    )
};

export default ResilifyProgram;
