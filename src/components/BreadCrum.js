import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'
import { Tabs } from 'antd'

const { TabPane } = Tabs

class CategoryTabs extends React.Component {
  constructor(props){
    super(props);
  }
  handleChange = (e) =>{
    return navigate('/category')
  }
  render() {
    console.log(this.props);
    return (
      <Tabs
        defaultActiveKey="0"
        className={`category-tabs ${this.props.noTop ? 'no-top-space-tabs' : ''}`}
        onChange={this.handleChange}
      >
        <TabPane tab="All Category" key="0"/>
        <TabPane tab="Anxiety" key="1"/>
        <TabPane tab="Depression" key="2"/>
        <TabPane tab="Positive Psychology" key="4"/>
        <TabPane tab="Mindfullness" key="5"/>
        <TabPane tab="Gratitude" key="6"/>
        <TabPane tab="DBT" key="7"/>
        <TabPane tab="CBT" key="8"/>
        <TabPane tab="ACT" key="9"/>
      </Tabs>
    )
  }
}

export default CategoryTabs;
