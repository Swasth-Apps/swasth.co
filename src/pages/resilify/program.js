import React from 'react'
import Layout from '../../components/Layout/layout'
import graphql_endpoint from "../../aws-appsync-url";
import {getMarketingTrackDetail, getRelatedPrograms} from "../../queries";
import {connect} from "react-redux";
import Amplify, {API, graphqlOperation} from "aws-amplify";

import {setProgram, setPrograms, setRelatedProgram, setResilifyLoading, setTopics} from "../../Redux/Actions/Programs";
import ResilifyProgram from "../../components/Resilify/Program";
import {Helmet} from "react-helmet";


class ResilifyPrograms extends React.Component {

    constructor(props){
        super(props);
        let slug = typeof window !== 'undefined' ? window?.location?.pathname?.substring('/resilify/program/'.length) : '';
        slug = slug ? slug?.split("/")?.[0] : "";
        this.state = {
            slug: slug
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.location !== this.props.location){
            let slug = typeof window !== 'undefined' ? window?.location?.pathname?.substring('/resilify/program/'.length) : '';
            slug = slug ? slug?.split("/")?.[0] : "";
            this.setState({
                slug
            },() => this.componentDidMount())
        }
    }

    componentDidMount() {
        const { slug } = this.state;
        Amplify.configure({
            API: {
                graphql_endpoint: graphql_endpoint.RESILIFY_TRACKS
            }
        });
        const program = this.props.commonData?.program;
        if (slug && !program?.[slug]) {
            this.props.setResilifyLoading(true);

            API.graphql(graphqlOperation(getMarketingTrackDetail,{slug}), {
                "x-api-key": graphql_endpoint.TRACK_APIKEY
            }).then(({data}) => {
                this.props.setResilifyLoading(false);
                this.props.setProgram(data?.getMarketingTrackDetail,slug);
                API.graphql(graphqlOperation(getRelatedPrograms,{slug}), {
                    "x-api-key": graphql_endpoint.TRACK_APIKEY
                }).then(({data}) => {
                    this.props.setRelatedProgram(data?.getRelatedPrograms, slug);
                }).catch(() => {
                    this.props.setResilifyLoading(false);
                });
            }).catch(() => {
                this.props.setResilifyLoading(false);
            });


        }
    }


    render() {
        const { slug } = this.state;
        const program = this.props.commonData?.program;
        return (
            <Layout noFooterMargin>
                {program?.[slug] ?
                <Helmet title="Resiliens">
                    <meta charSet="utf-8" />
                    <title>{program?.[slug]?.name}</title>
                    <meta
                        name="keywords"
                        content={program?.[slug]?.name}
                    />
                </Helmet>:null}
                <ResilifyProgram slug={this.state.slug}/>
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
        setProgram: (programs,slug) =>
            dispatch(setProgram(programs,slug)),
        setRelatedProgram: (programs,slug) =>
            dispatch(setRelatedProgram(programs,slug)),
        setTopics: (topics) =>
            dispatch(setTopics(topics)),
        setResilifyLoading: (loading) =>
            dispatch(setResilifyLoading(loading)),
    }),
)(ResilifyPrograms);
