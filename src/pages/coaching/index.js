import React from 'react'
import Layout from '../../components/layout'
import LifeCoach from '../../components/LifeCoach'


class HomeIndex extends React.Component {
    
    render() {
        return (
            <Layout
              show
              isLogoWhite
              increaseFooterMargin
            >
                <LifeCoach />
            </Layout>
        )
    }
}

export default HomeIndex