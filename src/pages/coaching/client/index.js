import React from 'react'
import Layout from '../../../components/layout'
import LifeCoach from '../../../components/LifeCoachClient'


class ClientIndex extends React.Component {
    
    render() {
        return (
            <Layout
              show
              isLogoWhite
              increaseFooterMargin
              topBg
            >
                <LifeCoach />
            </Layout>
        )
    }
}

export default ClientIndex