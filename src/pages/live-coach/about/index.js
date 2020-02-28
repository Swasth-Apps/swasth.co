import React from 'react'
import Layout from '../../../components/layout'
import LiveCoachAbout from '../../../components/LiveCoachAbout'


class HomeIndex extends React.Component {

  render() {
    return (
      <Layout show>
        <LiveCoachAbout />
      </Layout>
    )
  }
}

export default HomeIndex