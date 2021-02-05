import React, {Fragment} from "react";
import {Link} from "gatsby";
import DBTCoachScreen from "../assets/images/DBT-app-icon@3x.png";
import {Icon} from "antd";
import CBTCompanionScreen from "../assets/images/CBT_app_icon@3x.png";
import ACTCoachScreen from "../assets/images/ACT-app-icon.png";
import {programs} from "../helper/programs";

class Programs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "resilify"
        }
    }

    render() {
        const {selectedTab} = this.state;
        const data = programs[selectedTab];
        return (
            <Fragment>
                <section
                    className='all-programs-page'
                >
                    <div
                        id='wrapper'
                        className={'coach-wrapper'}
                        style={{paddingBottom: 0}}
                    >
                        <div className="category-tabs-container">
                            <p
                                className={`tab-text base-text ${selectedTab === "coaching-app" ? "selected-category-tab" : ""}`}
                            > Live Coaching </p>
                            <p
                                className={`tab-text base-text ${selectedTab === "resilify" ? "selected-category-tab" : ""}`}
                            >
                                Self Help App
                            </p>
                        </div>
                        <div className="multi-modality-section programs-list">
                            {data?.map(d =>
                            <a className="section" href="/dbt-coach">
                                <div className="section-card">
                                    <img src={d.image}/>
                                    <h4 className="base-text">{d.title}</h4>
                                    <p className="para-text">
                                        {d.description} <Icon type="arrow-right"/>
                                    </p>
                                </div>
                            </a>
                            )}
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Programs;
