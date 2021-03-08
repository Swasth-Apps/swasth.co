import React from 'react'
import Layout from '../../../components/Layout/layout'
import CategoryPageScreen from "../../../components/Resilify/CategoryPage";


class ResilifyCategory extends React.Component {

    render() {
        return (
            <Layout extraHeader>
                <CategoryPageScreen />
            </Layout>
        )
    }
}

export default ResilifyCategory
