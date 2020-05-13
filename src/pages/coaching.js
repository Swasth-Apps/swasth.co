import React from 'react'
import Layout from '../components/layout'
import CoachingComponent from '../components/Coaching'


class Coaching extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout
        show
        hideFooter
        minFooterHeight
      >
        <CoachingComponent />
      </Layout>
    )
  }
}

export default Coaching;