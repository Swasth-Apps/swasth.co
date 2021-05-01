import React from 'react'
import Layout from '../../components/Layout/layout'
import ResilifyScreen from "../../components/Resilify";
import graphql_endpoint from "../../aws-appsync-url";
import {getTopics, getTracksList} from "../../queries";
import {connect} from "react-redux";
import Amplify, {API, graphqlOperation} from "aws-amplify";

import {
    setMarketingLoading,
    setMarketingPrograms,
    setPrograms,
    setResilifyLoading,
    setTopics
} from "../../Redux/Actions/Programs";
import {Helmet} from "react-helmet";


class ResilifyPrograms extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        Amplify.configure({
            API: {
                graphql_endpoint: graphql_endpoint.RESILIFY_TRACKS
            }
        });
        const programs = this.props.commonData?.programs;
        if (!programs?.length) {
            this.props.setResilifyLoading(true);

            API.graphql(graphqlOperation(getTracksList), {
                "x-api-key": graphql_endpoint.TRACK_APIKEY
            }).then(({data}) => {
                this.props.setPrograms(data?.getTracksList);
                this.props.setResilifyLoading(false)
            }).catch(error => {
                this.props.setResilifyLoading(false);
                console.log('error-------------', error);
            });
        }
    }


    render() {
        return (
            <Layout extraHeader>
                <Helmet title="Resiliens">
                    <meta charSet="utf-8" />
                    <title>Resiliens - Self guided Evidence-based programs (Resilify)</title>
                    <meta
                        name="keywords"
                        content="Resiliens - Self guided Evidence-based programs (Resilify), DBT, CBT, ACT, CFT, Compassion, Resilience, Motivational Interviewing, Cognitive Behavioral Therapy, Dialectic Behavior Therapy, Family therapy, Interpersonal psychotherapy, Exposure Therapy, MBSR, MBCT, Functional Family Therapy, Stress, Anxiety, Depression, Bipolar Disorder, Eating Disorder, PTSD, Paranoia, OCD, Obsessive compulsive disorder, Gratitude, Well being, Positive Psychology, Assertiveness, Health Anxiety, Self Compassion, Social Anxiety, Perfectionism, Self Esteem, Imposter syndrome, Panic Disorders, Worry and Rumination, Addiction, Substance Abuse, Anger, Sleep Disorder, Self harm"
                    />
                </Helmet>
                <ResilifyScreen />
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    commonData: state.commonData,
});

export default connect(
    mapStateToProps,
    (dispatch) => ({
        setPrograms: (programs) =>
            dispatch(setPrograms(programs)),
        setResilifyLoading: (loading) =>
            dispatch(setResilifyLoading(loading)),
    }),
)(ResilifyPrograms);
