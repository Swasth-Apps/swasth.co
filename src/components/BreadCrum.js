import React from 'react'
import { navigate,parsePath } from 'gatsby'
import { Tabs } from 'antd'
import { Location } from '@reach/router';


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
    return (
      <Location>
        {location =>
          <Tabs
            className={`category-tabs ${this.props.noTop ? 'no-top-space-tabs' : ''}`}
            onChange={this.handleChange}
            activeKey={location?.location.pathname.slice(-1) === '/' ? location?.location.pathname : `${location?.location.pathname}/`}
          >
            <TabPane tab="All Categories" key="/blog/"/>
            {edges?.map(({ node: { fields, frontmatter } }) =>
              <TabPane tab={frontmatter?.title} key={fields?.slug}/>)}
          </Tabs>
        }
      </Location>
    )
  }
}

export default CategoryTabs;
