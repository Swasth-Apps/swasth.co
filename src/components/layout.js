import React from 'react'
import {connect} from "react-redux";
import Header from './Header'
import Footer from './Footer'
import '../assets/scss/main.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-multi-carousel/lib/styles.css'
import CategoryTabs from './BreadCrum'
import graphql_endpoint from '../aws-appsync-url'
import Amplify, {API, graphqlOperation} from "aws-amplify";
import {getTopics, getTracksList} from "../queries";
import {setPrograms,setTopics} from "../Redux/Actions/Programs";

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuVisible: false,
            loading: 'is-loading',
            visible: true,
        }
    }

    componentDidMount() {

        const programs = this.props.programs;

        if(!programs?.programs?.length){
            Amplify.configure({
                API: {
                    graphql_endpoint: graphql_endpoint.RESILIFY_TRACKS
                }
            });
            API.graphql(graphqlOperation(getTracksList), {
                "x-api-key": graphql_endpoint.TRACK_APIKEY
            }).then(({data}) => {
                this.props.setPrograms(data?.getTracksList?.filter(({marketingImage}) => marketingImage))
            }).catch(error => {
                console.log('error-------------', error);
            });
        }

        if(!programs?.topics?.length){
            Amplify.configure({
                API: {
                    graphql_endpoint: graphql_endpoint.RESILIFY_TRACKS
                }
            });
            API.graphql(graphqlOperation(getTopics), {
                "x-api-key": graphql_endpoint.TRACK_APIKEY
            }).then(({data}) => {
                this.props.setTopics(data?.getTopics)
            }).catch(error => {
                console.log('error-------------', error);
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
        return (
            <div
                className={`body ${this.state.loading} ${this.props.hideHomeImg ? 'light-body-bg' : ''}`}

            >

                <div
                    id='coaching-header'
                    className={'coach-wrapper'}
                    style={{paddingBottom: 0}}
                >
                    <Header
                        aboutHeader={this.props.aboutHeader}
                        show={this.props.show}
                        isLogoWhite={this.props.isLogoWhite}
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
                    />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    programs: state.programs,
});

export default connect(
    mapStateToProps,
    (dispatch) => ({
        setPrograms: (programs) =>
            dispatch(setPrograms(programs)),
        setTopics: (topics) =>
            dispatch(setTopics(topics)),
    }),
)(Layout);
