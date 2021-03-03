import React from 'react'
import Layout from '../../components/layout'
import CoachingComponent from "../../components/Coaching";


class CoachingIndex extends React.Component {

    render() {
        return (
            <Layout extraHeader>
                <CoachingComponent />
            </Layout>
        )
    }
}

export default CoachingIndex
