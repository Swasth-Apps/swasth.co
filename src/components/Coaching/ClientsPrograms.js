import React from "react";
import CourseCard from "./CourseCard";
import Amplify, {API, graphqlOperation} from 'aws-amplify'
import graphql_endpoint from '../../aws-appsync-url'
import {getMarketingPrograms} from "../../queries";
import {Col, Row} from "antd";
import {connect} from "react-redux";
import {setMarketingLoading, setMarketingPrograms} from "../../Redux/Actions/Programs";
import {Helmet} from "react-helmet";


class ClientsPrograms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            programs: []
        }
    }

    componentDidMount() {
        if (!(this.props?.marketingPrograms?.length) && !this.props.coachingLoading) {
            this.props.setMarketingLoading(true);
            Amplify.configure({
                API: {
                    graphql_endpoint: graphql_endpoint.COACHING_MARKETING,
                },
            });
            API.graphql(graphqlOperation(getMarketingPrograms), {
                "x-api-key": graphql_endpoint.COACHING_API_KEY
            }).then(({data}) => {
                this.props.setMarketingPrograms(data?.getMarketingPrograms);
                this.props.setMarketingLoading(false);
            }).catch(() => {
                this.props.setMarketingLoading(false);
            });
        }
    }

    render() {
        const {coachingLoading,marketingPrograms} = this.props;
        return (
            <>
                <Helmet title="Resiliens">
                    <meta charSet="utf-8" />
                    <title>Resiliens - Evidence Based Coaching for everyone</title>
                    <meta
                        name="keywords"
                        content="Behavioral Health Coaching, Evidence Based Coaching, Life Coach, Health Coaching, Mental Health Coach, anxiety, depression, financial anxiety, experts, breathing exercise, meditation, digital mental health, guided meditation, therapist training, coach training, lasting change, motivation, reframe, PTSD, relationships, resilience, peer coaching group, perfomance coaching, CBT, DBT, ACT, CFT, Compassion, social anxiety, Bipolar, Gratitude, Well being"
                    />
                </Helmet>
                <section className='coaching-programs-banner-section'>
                    <Row className='-row-flex-center' id='wrapper'>
                        <Col md={24} style={{width: '100%'}}>
                            <p style={{textAlign: 'center'}}
                               className='bottom-space base-text tab-view'>
                                Programs to boost your mental wellness and resilience.
                            </p>
                        </Col>
                    </Row>
                </section>
            <div className="clients-navigation-wrapper">
            <div
                    id='wrapper'
                    className={'coach-wrapper'}
                    style={{paddingBottom: 0}}
                >
                {coachingLoading ? <div className="keen-slider">
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
                </div> : null}
                <div className="keen-slider">
                    {marketingPrograms?.map((program, index) =>
                        <CourseCard
                            className="keen-slider__slide number-slide1"
                            program={program}
                            index={index}
                        />
                    )}
                </div>
                </div>
            </div>
                </>
        )
    }
}
const mapStateToProps = (state) => ({
    marketingPrograms: state.commonData.marketingPrograms,
    coachingLoading: state.commonData.coachingLoading,
});

export default connect(
    mapStateToProps,
    (dispatch) =>({
        setMarketingPrograms: (programs) =>
            dispatch(setMarketingPrograms(programs)),
        setMarketingLoading: (loading) =>
            dispatch(setMarketingLoading(loading)),
    })
)(ClientsPrograms);
