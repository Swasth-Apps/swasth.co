import React from 'react'
import { navigate,parsePath } from 'gatsby'
import { Popover, Tabs } from 'antd'
import { Location } from '@reach/router';


const { TabPane } = Tabs;

class CategoryTabs extends React.Component {
  constructor(props){
    super(props);
  }
  handleChange = (e) =>{
    return navigate(e)
  };

  content = (parents = {},location) =>{
    const selectedPath = location?.location.pathname.slice(-1) === '/' ? location?.location.pathname : `${location?.location.pathname}/`
    return(
      <div className='breadcrum-more-content'>
        {Object.entries(parents)?.map(([key,val]) =>(
          <div className='parent-container'>
            <h3 className="base-text">{key}</h3>
            <ul>
              {val?.map(value => <li
                  className={value?.fields?.slug === selectedPath ? 'active-breadcrum' : ''}
                  onClick={() => this.handleChange(value?.fields?.slug)}
              ><a>{value.title}</a></li>)}
            </ul>
          </div>))}
      </div>
    )
  };



  render() {
    let { edges } = this.props;
    /****** Grouping Categories by their parents *****/
    let parents = edges?.map(({node:{frontmatter,fields}}) => ({...frontmatter,fields}));
      parents = parents?.reduce((r, a) => {
      if(a.parent) {
        r[a.parent] = [...r[a.parent] || [], a];
      }
      return r
    }, {});
    /***************/
    edges = edges?.filter(({node:{frontmatter}}) => frontmatter.featuredcategory);
    return (
      <Location>
        {location =>
          <Tabs
            className={`category-tabs ${this.props.noTop ? 'no-top-space-tabs' : ''}`}
            onChange={this.handleChange}
            activeKey={location?.location.pathname.slice(-1) === '/' ? location?.location.pathname : `${location?.location.pathname}/`}
            tabBarExtraContent={<div className='breadcrum-more'>
              <Popover
                content={this.content(parents,location)}
                overlayClassName='breadcrum-more-overlay'
                placement='bottomLeft'
              >
              <a className='base-text'>More</a>
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
