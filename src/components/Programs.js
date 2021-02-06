import React, {Fragment} from "react";
import {Icon} from "antd";
import {helpData} from "../helper/programs";

class Programs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "resilify"
        }
    }

    changeTab = (tab) => {
        this.setState({
            selectedTab: tab
        })
    };

    refToWebapp = (slug) => {
        if (this.state.selectedTab === "resilify") {
            window.open(`https://resilify.org/program-detail/${slug}`)
        } else {
            window.open(`https://resilify.org/program-detail/${slug}`)
        }
    }

    render() {
        const {selectedTab} = this.state;
        const data = helpData?.filter(({type}) => type === selectedTab);
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
                                className={`tab-text base-text ${selectedTab === "coaching" ? "selected-category-tab" : ""}`}
                                onClick={() => this.changeTab("coaching")}
                            > Live Coaching </p>
                            <p
                                className={`tab-text base-text ${selectedTab === "resilify" ? "selected-category-tab" : ""}`}
                                onClick={() => this.changeTab("resilify")}
                            >
                                Self Help App
                            </p>
                        </div>
                        <div className="multi-modality-section programs-list">
                            {data?.map(d =>
                                <a
                                    className="section"
                                    onClick={() => this.refToWebapp(d.slug)}
                                >
                                    <div className="section-card" style={{
                                        backgroundImage: `url(${d.image})`,
                                        backgroundSize: "contain"
                                    }}>
                                        <div className="content">
                                            <h4 className="base-text">{d.title}</h4>
                                            <p className="para-text">
                                                {/*{d.description ? d.description : "Read More"}
                                        {d.description ? "" : <Icon type="arrow-right"/>}*/}
                                                Read More <Icon type="arrow-right"/>
                                            </p>
                                        </div>
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
