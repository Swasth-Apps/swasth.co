import React, {useState} from 'react'
import {Tabs} from "antd";
import EveryoneActive from "../../assets/images/coachingTabIcons/Everyone-active-icon.png";
import ProfessionalActive from "../../assets/images/coachingTabIcons/professional-active-icon.png";
import OverviewActive from "../../assets/images/coachingTabIcons/overview-active-icon.png";
import ExpertActive from "../../assets/images/coachingTabIcons/experts-active-icon.png";
import ClientsPrograms from "./ClientsPrograms";
import Experts from "./Experts";
import CoachingOverview from "./Overview";
import ProfessionalPrograms from "./ProfessionalPrograms";
import Logo from "../../assets/images/coachingProgram/logo.png"
const { TabPane } = Tabs;
const CoachingComponent = () => {
    const [key, setKey] = useState("1");
    return (
        <section className='coaching-section'>
            <div className="coaching-product-section">
                <h3 className="base-text product-title">
                    <img src={Logo} />
                    Coaching</h3>
            </div>
                <Tabs
                    centered
                    defaultActiveKey="1"
                    className="coaching-landing-page-tab"
                    onChange={key => setKey(key)}
                >
                    <TabPane tab={<p className={`para-text tab-title ${key !== "1" ? "unselected-tab" : ""}`}>
                        <img src={OverviewActive}/>
                        <div className="tab-div-title">
                            Overview
                        </div>
                    </p>} key="1">
                        <CoachingOverview />
                    </TabPane>
                    <TabPane tab={<p className={`para-text tab-title ${key !== "2" ? "unselected-tab" : ""}`}>
                        <img src={EveryoneActive}/>
                        <div className="tab-div-title">
                            For Everyone
                        </div>
                    </p>} key="2">
                        <ClientsPrograms />
                    </TabPane>
                    <TabPane tab={<p className={`para-text tab-title ${key !== "3" ? "unselected-tab" : ""}`}>
                        <img src={ProfessionalActive} />
                        <div className="tab-div-title">
                            For Professionals
                        </div>
                        </p>} key="3">
                        <ProfessionalPrograms />
                    </TabPane>
                    <TabPane tab={<p className={`para-text tab-title ${key !== "4" ? "unselected-tab" : ""}`}>
                        <img src={ExpertActive}/>
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
