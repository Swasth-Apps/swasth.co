import React from 'react'
import Layout from '../components/Layout/layout'
import Privacy from '../components/Privacy'


class HomeIndex extends React.Component {

    render() {
        return (
            <Layout>
                <div
                    id='wrapper'
                    className={'coach-wrapper'}
                    style={{paddingBottom: 0}}
                >
                <Privacy />
                </div>
            </Layout>
        )
    }
}

export default HomeIndex
