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
import {getTopics, getTracksList} from "../../queries";
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
            <Helmet title="Resiliens">
                <meta charSet="utf-8" />
                <title>Resiliens - Behavioral health care for everyone</title>
                <meta name="description" content="A platform built on evidence-based principles, delivered by licensed clinicians, coaches making care accessible, effective and scalable." />
                <meta property="og:url" content='resiliens.com' />
                <meta property="og:title" content="Resiliens" />
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


export default Layout;
