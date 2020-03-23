import React from 'react'
import Layout from '../../../components/layout'
import Pricing from '../../../components/Pricing'


class HomeIndex extends React.Component {

  render() {
    return (
      <Layout
        show
      >
        <Pricing />
      </Layout>
    )
  }
}

export default HomeIndex