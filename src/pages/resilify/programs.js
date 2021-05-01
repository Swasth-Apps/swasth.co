import React from 'react'
import Layout from '../../components/Layout/layout'
import Programs from "../../components/Resilify/Programs";
import graphql_endpoint from "../../aws-appsync-url";
import {getTopics, getTracksList} from "../../queries";
import {connect} from "react-redux";
import Amplify, {API, graphqlOperation} from "aws-amplify";

import {setPrograms, setResilifyLoading, setTopics} from "../../Redux/Actions/Programs";
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

        if (!this.props.commonData?.topics?.length) {
            this.props.setResilifyLoading(true);
            Amplify.configure({
                API: {
                    graphql_endpoint: graphql_endpoint.RESILIFY_TRACKS
                }
            });
            API.graphql(graphqlOperation(getTopics), {
                "x-api-key": graphql_endpoint.TRACK_APIKEY
            }).then(({data}) => {
                this.props.setTopics(data?.getTopics);
                if (programs?.length) {
                    this.props.setResilifyLoading(false)
                }
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
                    <title>Resiliens - Our evidence-based self guided programs</title>
                    <meta
                        name="keywords"
                        content="Resiliens - Our evidence-based self guided programs"
                    />
                </Helmet>
                <Programs />
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
        setTopics: (topics) =>
            dispatch(setTopics(topics)),
        setResilifyLoading: (loading) =>
            dispatch(setResilifyLoading(loading)),
    }),
)(ResilifyPrograms);
