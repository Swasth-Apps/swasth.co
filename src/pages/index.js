import React from 'react'
import Layout from '../components/layout'
import LandingPage from "../components/LandingPage";

// import Home from './Home'


class HomeIndex extends React.Component {

    render() {
        return (
            <Layout extraHeader>
                {/*<Home />*/}
                <LandingPage/>
            </Layout>
        )
    }
}

export default HomeIndex
