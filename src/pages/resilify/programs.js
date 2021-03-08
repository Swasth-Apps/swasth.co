import React from 'react'
import Layout from '../../components/Layout/layout'
import Programs from "../../components/Resilify/Programs";


class ResilifyPrograms extends React.Component {

    render() {
        return (
            <Layout extraHeader>
                <Programs />
            </Layout>
        )
    }
}

export default ResilifyPrograms;
