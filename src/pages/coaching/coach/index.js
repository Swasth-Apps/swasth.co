import React from 'react'
import Layout from '../../../components/layout'
import LifeCoachFeature from '../../../components/LifeCoachFeature'


class HomeIndex extends React.Component {

  render() {
    return (
      <Layout show hideHomeImg>
        <LifeCoachFeature />
      </Layout>
    )
  }
}

export default HomeIndex