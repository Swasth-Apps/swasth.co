import React from 'react'
import {connect} from "react-redux";
import Header from './Header'
import Footer from './Footer'
import '../../assets/scss/main.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-multi-carousel/lib/styles.css'
import CategoryTabs from '../BreadCrum'
import graphql_endpoint from '../../aws-appsync-url'
import Amplify, {API, graphqlOperation} from "aws-amplify";
import {getMarketingPrograms, getTopics, getTracksList} from "../../queries";
import {
    setMarketingLoading,
    setMarketingPrograms,
    setPrograms,
    setResilifyLoading,
    setTopics
} from "../../Redux/Actions/Programs";
import {Helmet} from "react-helmet";

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuVisible: false,
            loading: 'is-loading',
            visible: true,
            resilifyLoader: false
        }
    }

    componentDidMount() {

        const programs = this.props.commonData?.programs;
        if (!programs?.length) {
            this.props.setResilifyLoading(true);
            Amplify.configure({
                API: {
                    graphql_endpoint: graphql_endpoint.RESILIFY_TRACKS
                }
            });
            API.graphql(graphqlOperation(getTracksList), {
                "x-api-key": graphql_endpoint.TRACK_APIKEY
            }).then(({data}) => {
                this.props.setPrograms(data?.getTracksList?.filter(({marketingImage}) => marketingImage));
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

        if (!(this.props.commonData?.marketingPrograms?.length)) {
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

        this.timeoutId = setTimeout(() => {
            this.setState({loading: ''})
        }, 100)
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId)
        }
    }

    render() {
        const {children} = this.props;
        console.log(this.props.noFooterMargin)
        return (
            <div
                className={`body ${this.state.loading} ${this.props.hideHomeImg ? 'light-body-bg' : ''}`}
            >
                <Helmet title="Resiliens">
                    <meta charSet="utf-8" />
                    <title>Resiliens</title>
                    <meta property="og:url" content='resiliens.com' />
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content='Resiliens' />
                    <link rel="canonical" href="http://resiliens.com/" />
                </Helmet>

                <div
                    id='coaching-header'
                    className={'coach-wrapper'}
                    style={{paddingBottom: 0}}
                >
                    <Header
                        aboutHeader={this.props.aboutHeader}
                        show={this.props.show}
                        isLogoWhite={this.props.isLogoWhite}
                        extraHeader={this.props.extraHeader}
                        onChangeTab={this.props.onChangeTab}
                    />
                </div>
                <div
                    id='wrapper'
                    className={'coach-wrapper'}
                    style={{paddingBottom: 0}}
                >
                    {this.props?.categories ? <CategoryTabs edges={this.props?.categories}/> : null}
                </div>

                {!this.props.rearrangeChildren ? children : null}

                {this.props.rearrangeChildren ? children : null}

                <Footer
                    minFooterHeight={this.props.minFooterHeight}
                    show={this.props.show}
                    hideFooter={this.props.hideFooter}
                    showCustomBottom={this.props.topBg || false}
                    noFooterMargin={this.props.noFooterMargin}
                />
            </div>
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
        setMarketingPrograms: (programs) =>
            dispatch(setMarketingPrograms(programs)),
        setMarketingLoading: (loading) =>
            dispatch(setMarketingLoading(loading)),
        setResilifyLoading: (loading) =>
            dispatch(setResilifyLoading(loading)),
    }),
)(Layout);
