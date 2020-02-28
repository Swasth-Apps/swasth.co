import React from 'react'
import Layout from '../../../components/layout'
import LiveCoachFeature from '../../../components/LiveCoachFeature'


class HomeIndex extends React.Component {

  render() {
    return (
      <Layout show>
        <LiveCoachFeature />
      </Layout>
    )
  }
}

export default HomeIndex