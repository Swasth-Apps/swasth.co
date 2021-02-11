import React, {Fragment} from "react";
import {Icon, Row} from "antd";
import {helpData} from "../helper/programs";
import _ from "lodash";
import Program from "./Program";

class Programs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "resilify",
            path: ""
        }
    }

    componentDidMount() {
        const path = window.location.pathname.substring('/programs/'.length);
        if (path) {
            this.setState({
                path
            })
        }

    }

    changeTab = (tab) => {
        this.setState({
            selectedTab: tab
        })
    };

    refToWebapp = (slug) => {
        if (this.state.selectedTab === "resilify") {
            window.open(`/programs/${slug}`, "_self")
        } else {
            window.open(`https://resilify.org/program-detail/${slug}`)
        }
    };

    render() {
        const {selectedTab, path} = this.state;
        let data = [];
        if (!path) {
            data = helpData?.filter(({type}) => type === selectedTab);
        } else {
            data = _.find(helpData, ({slug}) => slug === path);
        }

        console.log(process.env.GATSBY_AWS_EMAIL)
        return (
            <Fragment>
                <section
                    className='all-programs-page'

                >
                    {!path ?
                        <div
                            id='wrapper'
                            className={'coach-wrapper'}
                            style={{paddingBottom: 0}}
                        >
                            <div className="category-tabs-container">
                                <p
                                    className={`tab-text base-text ${selectedTab === "coaching" ? "selected-category-tab" : ""}`}
                                    onClick={() => this.changeTab("coaching")}
                                > Live Coaching</p>
                                <p
                                    className={`tab-text base-text ${selectedTab === "resilify" ? "selected-category-tab" : ""}`}
                                    onClick={() => this.changeTab("resilify")}
                                >
                                    Self Guided
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
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat",
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
                        </div> : <div className="category-page-body"

                        >
                            <div className="program-section" id={`topic-tabs`}>
                                <h3 className="program-section-title base-text">
                                    <Icon onClick={() => window.history.back()} type="arrow-left" className="arrow-icon" style={{marginRight: 20}}/>
                                    {data?.title}
                                </h3>
                            </div>
                            <div className="program-wrapper">
                                {data?.programs?.map(program =>
                                    <Program program={program} onReload={() => this.forceUpdate()}/>
                                )}
                            </div>
                        </div>}
                </section>
            </Fragment>
        )
    }
}

export default Programs;
