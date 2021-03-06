import React from 'react'
import { Tabs } from "antd";
import ClientsPrograms from "./ClientsPrograms";
import Experts from "./Experts";
import CoachingOverview from "./Overview";

const { TabPane } = Tabs;
const CoachingComponent = () => {
    return (
        <section className='coaching-section'>
                <Tabs defaultActiveKey="1" centered className="coaching-landing-page-tab">
                    <TabPane tab={<p className="para-text tab-title">
                        <img src={require("../../assets/images/coachingTabIcons/icons8-overview-64.png")}/>
                        <div className="tab-div-title">
                            Overview </div>
                    </p>} key="1">
                        <CoachingOverview />
                    </TabPane>
                    <TabPane tab={<p className="para-text tab-title">
                        <img src={require("../../assets/images/coachingTabIcons/icons8-person-48.png")}/>
                        <div className="tab-div-title">
                            For Everyone </div>
                    </p>} key="2">
                        <div
                            id='wrapper'
                            className={'coach-wrapper'}
                            style={{paddingBottom: 0}}
                        >
                        <ClientsPrograms />
                        </div>
                    </TabPane>
                    <TabPane tab={<p className="para-text tab-title">
                        <img src={require("../../assets/images/coachingTabIcons/icons8-experience-skill-48.png")}/>
                        <div className="tab-div-title">
                            For Professionals </div>
                        </p>} key="3">
                        <div
                            id='wrapper'
                            className={'coach-wrapper'}
                            style={{paddingBottom: 0}}
                        >
                        <ClientsPrograms />
                        </div>
                    </TabPane>
                    <TabPane tab={<p className="para-text tab-title">
                        <img src={require("../../assets/images/coachingTabIcons/icons8-mental-health-48.png")}/>
                        <div className="tab-div-title">
                           Experts </div>
                      </p>} key="4">
                        <div
                            id='wrapper'
                            className={'coach-wrapper'}
                            style={{paddingBottom: 0}}
                        >
                        <Experts />
                        </div>
                    </TabPane>
                </Tabs>
        </section>
    )
};

export default CoachingComponent
