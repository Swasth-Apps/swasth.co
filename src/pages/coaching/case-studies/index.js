import React from 'react'
import Layout from '../../../components/layout'
import CaseStudies from '../../../components/CaseStudies'


class HomeIndex extends React.Component {

  render() {
    return (
      <Layout
        show
        coachingFooter
      >
        <CaseStudies />
      </Layout>
    )
  }
}

export default HomeIndex