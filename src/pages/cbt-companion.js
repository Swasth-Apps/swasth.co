import React from 'react';
import Layout from '../components/Layout/layout';
import CBTCompanion from '../components/CBTCompanion';
class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <div
            id='wrapper'
            className={'coach-wrapper'}
            style={{paddingBottom: 0}}
        >
        <CBTCompanion />
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
