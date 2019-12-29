import React from 'react'
import Layout from '../components/layout'
import MedicalAgreement from '../components/Medical-Agreement'


class HomeIndex extends React.Component {
    
    render() {
        return (
            <Layout>
                <MedicalAgreement />
            </Layout>
        )
    }
}

export default HomeIndex