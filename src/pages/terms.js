import React from 'react'
import Layout from '../components/Layout/layout'
import Terms from '../components/Terms'


class HomeIndex extends React.Component {

    render() {
        return (
            <Layout>
                <div
                    id='wrapper'
                    className={'coach-wrapper'}
                    style={{paddingBottom: 0}}
                >
                <Terms />
                </div>
            </Layout>
        )
    }
}

export default HomeIndex
