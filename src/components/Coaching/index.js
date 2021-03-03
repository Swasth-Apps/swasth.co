import React from 'react'
import { Tabs } from "antd";
import ClientsPrograms from "./ClientsPrograms";
import Experts from "./Experts";

const { TabPane } = Tabs;
const CoachingComponent = () => {
    return (
        <section className='coaching-section'>
            <div
                id='wrapper'
                className={'coach-wrapper'}
                style={{paddingBottom: 0}}
            >
                <Tabs defaultActiveKey="1" centered className="coaching-landing-page-tab">
                    <TabPane tab="For Client" key="1">
                        <ClientsPrograms />
                    </TabPane>
                    <TabPane tab="For Clinician / Coach" key="2">
                        <ClientsPrograms />
                    </TabPane>
                    <TabPane tab="Experts" key="3">
                        <Experts />
                    </TabPane>
                </Tabs>
            </div>
        </section>
    )
};

export default CoachingComponent
