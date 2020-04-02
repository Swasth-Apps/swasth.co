import React from 'react'
import Layout from '../../../components/layout'
import CoachDownload from '../../../components/CoachDownload'


class HomeIndex extends React.Component {

  render() {
    return (
      <Layout show isContentWhite hideHomeImg>
        <CoachDownload />
      </Layout>
    )
  }
}

export default HomeIndex