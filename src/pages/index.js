import React from 'react'
import Layout from '../components/layout'
import Home from './Home'


class HomeIndex extends React.Component {
    
    render() {
        return (
            <Layout extraHeader>
             <Home />
            </Layout>
        )
    }
}

export default HomeIndex