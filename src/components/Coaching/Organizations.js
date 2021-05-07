import React from "react";
import {Col, Row} from "antd";
import {Link} from 'gatsby';
import {connect} from "react-redux";
import CourseCard from "./CourseCard";
import ProfessionalPage from "./ProfessionalsProgram";
import Amplify, {API, graphqlOperation} from "aws-amplify";
import graphql_endpoint from "../../aws-appsync-url";
import {getOrganizationsWithOwner, getOrganizationWithMembersAndPrograms} from "../../queries";
import {setMarketingLoading, setOrganizationById, setOrganizations} from "../../Redux/Actions/Programs";
import {getCloudIDFromImageName} from "../../helper/helper";
import CLImage from "../../helper/CLImage";
import _ from "lodash";
import {Helmet} from "react-helmet";


class Organizations extends React.Component {
    constructor(props) {
        super(props);
        const urlParams = typeof window !== 'undefined' ? window.location?.pathname?.split("/organizations/") : null;
        const splittedValue = urlParams && urlParams[1] && urlParams?.[1]?.split("/");
        console.log(splittedValue)
        this.state = {
            programs: [],
            organizationSlug: splittedValue?.[0],
            programSlug: splittedValue?.[2],
            tab: splittedValue?.[1]
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.location !== this.props.location){
            const urlParams = typeof window !== 'undefined' ? window.location?.pathname?.split("/organizations/") : null;
            const splittedValue = urlParams && urlParams[1] && urlParams?.[1]?.split("/");
            this.setState({
                organizationSlug: splittedValue?.[0],
                tab: splittedValue?.[1],
                programSlug: splittedValue?.[2]

            },() => this.componentDidMount())
        }
    }

    componentDidMount() {
        const { organizationSlug } = this.state;
        Amplify.configure({
            API: {
                graphql_endpoint: graphql_endpoint.COACHING_MARKETING,
            },
        });
        if(organizationSlug && !this.props.organization?.[organizationSlug]){
            this.props.setMarketingLoading(true);

            API.graphql(graphqlOperation(getOrganizationWithMembersAndPrograms,{organizationSlug}), {
                "x-api-key": graphql_endpoint.COACHING_API_KEY
            }).then(({data}) => {
                this.props.setOrganizationById(data?.getOrganizationWithMembersAndPrograms,organizationSlug);
                this.props.setMarketingLoading(false);
            }).catch(() => {
                this.props.setMarketingLoading(false);
            });
        }else if(!this.props.organizations?.length) {
            this.props.setMarketingLoading(true);

            API.graphql(graphqlOperation(getOrganizationsWithOwner), {
                "x-api-key": graphql_endpoint.COACHING_API_KEY
            }).then(({data}) => {
                this.props.setOrganizations(data?.getOrganizationsWithOwner);
                this.props.setMarketingLoading(false);
            }).catch(() => {
                this.props.setMarketingLoading(false);
            });
        }
    }

    render() {

        const {marketingPrograms, organizations, coachingLoading} = this.props;
        const featuredPrograms = _.filter(marketingPrograms, ({isFeatured}) => isFeatured);


        return (this.state.organizationSlug ?
                <ProfessionalPage
                    programSlug={this.state.programSlug}
                    organizationSlug={this.state.organizationSlug}
                    organization={this.props.organization}
                    selectedTab={this.state.tab || "overview"}
                /> :
                <>
                    <section className='coaching-programs-banner-section professionals-banner-section'>
                        <Helmet title="Resiliens">
                            <meta charSet="utf-8" />
                            <title>Resiliens - Evidence Based Programs for Health Professionals</title>
                            <meta
                                name="keywords"
                                content="burn out, nursing, health professionals, ce credits, icf credits, Behavioral Health Coaching, Evidence Based Coaching, Life Coach, Health Coaching, Mental Health Coach, anxiety, depression, financial anxiety, experts, breathing exercise, meditation, digital mental health, guided meditation, therapist training, coach training, lasting change, motivation, reframe, PTSD, relationships, resilience, peer coaching group, perfomance coaching, CBT, DBT, ACT, CFT, Compassion, social anxiety, Bipolar, Gratitude, Well being"
                            />
                        </Helmet>
                        <Row className='-row-flex-center' id='wrapper'>
                            <Col md={24} style={{width: '100%'}}>
                                <p style={{textAlign: 'center'}}
                                   className='bottom-space base-text tab-view'>
                                    Online Programs in Evidence-based modalities
                                    <br/>
                                    from world's leading Experts
                                </p>
                            </Col>
                        </Row>
                    </section>
                    <div
                        id='wrapper'
                        style={{paddingBottom: 0}}
                    >
                        {coachingLoading ?
                            <div className="clients-navigation-wrapper">
                                <div className="keen-slider">
                                    <div className="keen-slider__slide ">
                                        <div className="card-loader">
                                            <div className="card__image loading"/>
                                            <div className="card__title loading"/>
                                            <div className="card__description loading"/>
                                        </div>
                                    </div>
                                    <div className="keen-slider__slide ">
                                        <div className="card-loader">
                                            <div className="card__image loading"/>
                                            <div className="card__title loading"/>
                                            <div className="card__description loading"/>
                                        </div>
                                    </div>
                                    <div className="keen-slider__slide ">
                                        <div className="card-loader">
                                            <div className="card__image loading"/>
                                            <div className="card__title loading"/>
                                            <div className="card__description loading"/>
                                        </div>
                                    </div>
                                </div>
                            </div> : organizations?.length ? organizations?.map(org =>
                                <div className="coach-grid-view">
                                    <Link to={`/coaching/organizations/${org.slug}/overview`} className="coach-grid-view-card">
                                        <div style={{position:"relative"}}>
                                        <CLImage
                                            cloudId={getCloudIDFromImageName(
                                                org.image,
                                                "coaching",
                                                'png',
                                            )}
                                            options={{
                                            imageWidth: 1200,
                                                imageHeight: 800
                                            }}
                                        />
                                        <div className="coach-info">
                                            {org.name}
                                            <div>
                                                {'By '}{org.teamOwnerName}
                                            </div>
                                        </div>
                                        </div>
                                    </Link>
                                </div>) : null

                        }
                    </div>
                    {featuredPrograms?.length ?
                        <div className="clients-navigation-wrapper">
                            <div
                                id='wrapper'
                                className={'coach-wrapper'}
                                style={{paddingBottom: 0}}
                            >
                                <h2 className="base-text">Featured Programs</h2>

                                <div className="keen-slider">
                                    {featuredPrograms?.map((program, index) =>
                                        <CourseCard
                                            noPrice
                                            className="keen-slider__slide number-slide1"
                                            program={program}
                                            index={index}
                                        />
                                    )}
                                </div>
                            </div>
                        </div> : null}
                </>
        )
    }
}

const mapStateToProps = (state) => ({
    marketingPrograms: state.commonData.marketingPrograms,
    organizations: state.commonData.organizations,
    organization: state.commonData.organization,
    coachingLoading: state.commonData.coachingLoading,
});

export default connect(
    mapStateToProps,
    (dispatch) => ({
        setMarketingLoading: (loading) =>
            dispatch(setMarketingLoading(loading)),
        setOrganizations: (organizations) =>
            dispatch(setOrganizations(organizations)),
        setOrganizationById: (organizations,id) =>
            dispatch(setOrganizationById(organizations,id)),
    }),
)(Organizations);
