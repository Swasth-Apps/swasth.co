import React, {useState} from 'react'
import {Tabs} from "antd";
import {Link} from 'gatsby';

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
const CoachingComponent = (props) => {
    return (
        <section className='coaching-section'>
            <div className="coaching-product-section">
                <h3 className="base-text product-title">
                    <img src={Logo} />
                    Coaching</h3>
            </div>
                <Tabs
                    centered
                    activeKey={props.tab}
                    className="coaching-landing-page-tab"
                >
                    <TabPane tab={<Link to={`/coaching/overview`} className={`para-text tab-title ${props.tab !== "overview" ? "unselected-tab" : ""}`}>
                        <img src={OverviewActive}/>
                        <div className="tab-div-title">
                            Overview
                        </div>
                    </Link>} key="overview">
                        <CoachingOverview />
                    </TabPane>
                    <TabPane tab={<Link to={`/coaching/everyone`} className={`para-text tab-title ${props.tab !== "everyone" ? "unselected-tab" : ""}`}>
                        <img src={EveryoneActive}/>
                        <div className="tab-div-title">
                            For Everyone
                        </div>
                    </Link>} key="everyone">
                        <ClientsPrograms />
                    </TabPane>
                    <TabPane tab={<Link to={`/coaching/professionals`} className={`para-text tab-title ${props.tab !== "professionals" ? "unselected-tab" : ""}`}>
                        <img src={ProfessionalActive} />
                        <div className="tab-div-title">
                            For Professionals
                        </div>
                    </Link>} key="professionals">
                        <ProfessionalPrograms location={props.location}/>
                    </TabPane>
                    <TabPane tab={<Link to={`/coaching/experts`} className={`para-text tab-title ${props.tab !== "experts" ? "unselected-tab" : ""}`}>
                        <img src={ExpertActive}/>
                        <div className="tab-div-title">
                           Experts </div>
                    </Link>} key="experts">
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
