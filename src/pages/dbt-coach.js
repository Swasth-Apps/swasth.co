import React from 'react';
import Layout from '../components/layout';
import DBTCoach from '../components/DBTCoach';
class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <div
            id='wrapper'
            className={'coach-wrapper'}
            style={{paddingBottom: 0}}
        >
        <DBTCoach />
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
