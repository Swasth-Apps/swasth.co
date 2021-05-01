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
