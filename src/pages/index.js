import React from 'react'
import Layout from '../components/Layout/layout'
import Home from "../components/Home";

// import Home from './Home'


class HomeIndex extends React.Component {

    render() {
        return (
            <Layout noFooterMargin>
                {/*<Home />*/}
                <Home/>
            </Layout>
        )
    }
}

export default HomeIndex
