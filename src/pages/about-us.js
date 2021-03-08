import React from 'react'
import Layout from '../components/Layout/layout'
import AboutUsComponent from "../components/AboutUs"

class AboutUs extends React.Component {

    render() {
        return (
            <React.Fragment>
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
