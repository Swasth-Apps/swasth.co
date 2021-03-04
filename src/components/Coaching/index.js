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
                    <TabPane tab="Overview" key="1">
                        <CoachingOverview />
                    </TabPane>
                    <TabPane tab="For Everyone" key="2">
                        <div
                            id='wrapper'
                            className={'coach-wrapper'}
                            style={{paddingBottom: 0}}
                        >
                        <ClientsPrograms />
                        </div>
                    </TabPane>
                    <TabPane tab="For Behavioral Health Professionals" key="3">
                        <div
                            id='wrapper'
                            className={'coach-wrapper'}
                            style={{paddingBottom: 0}}
                        >
                        <ClientsPrograms />
                        </div>
                    </TabPane>
                    <TabPane tab="Experts" key="4">
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
