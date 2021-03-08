import React from 'react';
import Layout from '../components/Layout/layout';
import DBTDaily from '../components/DBTDaily';
class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <DBTDaily />
      </Layout>
    )
  }
}

export default HomeIndex
