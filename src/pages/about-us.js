import React from 'react'
import Layout from '../components/layout'
import AboutUsComponent from "../components/AboutUs"

class AboutUs extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Layout
                    aboutHeader
                    rearrangeChildren
                    hideFooter
                >
                <AboutUsComponent/>
                </Layout>
            </React.Fragment>
        )
    }
}

export default AboutUs
