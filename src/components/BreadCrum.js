import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'
import { Tabs } from 'antd'

const { TabPane } = Tabs

class CategoryTabs extends React.Component {
  constructor(props){
    super(props);
  }
  handleChange = (e) =>{
    return navigate(e)
  }
  render() {
    const { edges } = this.props;
    console.log(`${window.location.pathname}`+ window.location.pathname.slice(-1) === '/' ? '': '/')
    return (
      <Tabs
        className={`category-tabs ${this.props.noTop ? 'no-top-space-tabs' : ''}`}
        onChange={this.handleChange}
        activeKey={window.location.pathname.slice(-1) === '/' ? window.location.pathname : `${window.location.pathname}/` }
      >
        <TabPane tab="All Category" key="/blog/"/>
        {edges?.map(({node:{fields,frontmatter}}) =>
        <TabPane tab={frontmatter?.title} key={fields?.slug}/>)}
      </Tabs>
    )
  }
}

export default CategoryTabs;
