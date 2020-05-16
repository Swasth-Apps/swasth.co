import React from 'react'
import { navigate,parsePath } from 'gatsby'
import { Popover, Tabs } from 'antd'
import { Location } from '@reach/router';


const { TabPane } = Tabs

class CategoryTabs extends React.Component {
  constructor(props){
    super(props);
  }
  handleChange = (e) =>{
    return navigate(e)
  }

  content = () =>(
    <div className='breadcrum-more-content'>
      <div className='parent-container'>
        <h3>Parent</h3>
        <ul>
          <li><a>child 1</a></li>
          <li><a>child 2</a></li>
          <li><a>child 2</a></li>
        </ul>
      </div>
      <div className='parent-container'>
        <h3>Parent</h3>
        <ul>
          <li><a>child 1</a></li>
          <li><a>child 2</a></li>
          <li><a>child 2</a></li>
        </ul>
      </div>
      <div className='parent-container'>
        <h3>Parent</h3>
        <ul>
          <li><a>child 1</a></li>
          <li><a>child 2</a></li>
          <li><a>child 2</a></li>
        </ul>
      </div>
      <div className='parent-container'>
        <h3>Parent</h3>
        <ul>
          <li><a>child 1</a></li>
          <li><a>child 2</a></li>
          <li><a>child 2</a></li>
        </ul>
      </div>
      <div className='parent-container'>
        <h3>Parent</h3>
        <ul>
          <li><a>child 1</a></li>
          <li><a>child 2</a></li>
          <li><a>child 2</a></li>
        </ul>
      </div>
    </div>
  )

  render() {
    const { edges } = this.props;
    return (
      <Location>
        {location =>
          <Tabs
            className={`category-tabs ${this.props.noTop ? 'no-top-space-tabs' : ''}`}
            onChange={this.handleChange}
            activeKey={location?.location.pathname.slice(-1) === '/' ? location?.location.pathname : `${location?.location.pathname}/`}
            tabBarExtraContent={<div className='breadcrum-more'>
              <Popover
                content={this.content()}
                overlayClassName='breadcrum-more-overlay'
                placement='bottomLeft'
              >
              <a className='para-text'>Get More</a>
              </Popover>
            </div>}
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
