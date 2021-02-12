import React, {Fragment} from "react";
import {Icon, Row} from "antd";
import {helpData} from "../helper/programs";
import _ from "lodash";
import Program from "./Program";
import graphql_endpoint from '../aws-appsync-url';
import Amplify, {API, graphqlOperation} from 'aws-amplify';

const getProgramsByTag = `query getProgramsByTag($tag: String) {
  getProgramsByTag(tag: $tag ) {
 id
    coachId
    coach{
        userId
        name
        email
        picture
    }
    duration{
        interval
        period
    }
    name
    description
    image
    type
    app
    gradient
    isFeatured
    isFree
    payment
    tags
    shortDescription
  }
}`;


class Programs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "resilify",
            path: "",
            data: []
        }
    }

    componentDidMount() {
        const path = window.location.pathname.substring('/programs/'.length);
        if (path) {
            if(path.includes("coaching/")){
                this.setState({
                    loading: true
                });
                Amplify.configure({
                    API: {
                        graphql_endpoint: graphql_endpoint.COACHING_MARKETING,
                    },
                });
                API.graphql(graphqlOperation(getProgramsByTag, { tag: path?.toLowerCase() }), {
                    "x-api-key": graphql_endpoint.API_KEY
                }).then(({ data }) => {
                    this.setState({
                        programs: data?.getProgramsByTag,
                        loading: false
                    })
                }).catch(e => this.setState({
                    loading: false
                }));
            }else {
                console.log(path.substring('self-guided/'.length))
                this.setState({
                    path: path.substring('self-guided/'.length)
                })
            }
        }

    }

    changeTab = (tab) => {
        this.setState({
            selectedTab: tab
        })
    };

    refToWebapp = (slug) => {
        if (this.state.selectedTab === "resilify") {
            window.open(`/programs/self-guided/${slug}`, "_self")
        } else {
            window.open(`/programs/coaching/${slug}`, "_self")
        }
    };

    render() {
        const {selectedTab, path, loading} = this.state;
        let data = [];
        if (!path) {
            data = helpData?.filter(({type}) => type === selectedTab);
        } else {
            data = _.find(helpData, ({slug}) => slug === path);
        }

        console.log(process.env.GATSBY_AWS_EMAIL);
        return (
            <Fragment>
                <section
                    className='all-programs-page'

                >
                    {loading ? <div className="loader-component">
                        <svg className="isoContentLoader" viewBox="0 0 50 50">
                            <circle
                                className="isoContentLoaderCircle"
                                cx="25"
                                cy="25"
                                r="20"
                                fill="none"
                                strokeWidth="3.6"
                            />
                        </svg>
                    </div> : !path ?
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
