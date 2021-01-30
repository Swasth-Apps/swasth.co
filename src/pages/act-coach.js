import React from 'react';
import Layout from '../components/layout';
import ACTCoach from '../components/ACTCoach';
class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <div
            id='wrapper'
            className={'coach-wrapper'}
            style={{paddingBottom: 0}}
        >
        <ACTCoach />
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
