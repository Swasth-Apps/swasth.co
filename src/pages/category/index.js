import React from 'react'
import Layout from '../../components/Layout/layout'
import Category from '../../components/CategoryComponent'


export default class CategoryIndex extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    return (
      <Layout
        show
        hideFooter
      >
        <Category data={data} />
      </Layout>
    )
  }
}

