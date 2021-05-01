import React from 'react'
import Layout from '../components/Layout/layout'
import AboutUsComponent from "../components/AboutUs"
import {Helmet} from "react-helmet";

class AboutUs extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Helmet title="Resiliens">
                    <meta charSet="utf-8" />
                    <title>Resiliens - Mission, Approach and Leadership</title>
                    <meta
                        name="keywords"
                        content="Resiliens - Mission, Approach and Leadership"
                    />
                </Helmet>
                <Layout
                    aboutHeader
                    rearrangeChildren
                >
                <AboutUsComponent/>
                </Layout>
            </React.Fragment>
        )
    }
}

export default AboutUs
