import React from 'react'
import Layout from '../components/layout'
import Blogs from '../components/BlogLanding'
import { graphql, StaticQuery } from 'gatsby'
import { initialBlogsCount } from '../helper/helper'


class BlogIndex extends React.Component {

  constructor(props) {
    let { blogList } = props.pageContext
    // blogList = blogList?.sort((a,b) => new Date(a.node.frontmatter.date) > new Date(b.node.frontmatter.date))
    super(props);
    this.state ={
      blogs: blogList.slice(0, initialBlogsCount),
      active: 0,
      hasMore: blogList.length > initialBlogsCount,
      blogLength: blogList?.length
    }
  }

  componentDidMount() {
    window && window.addEventListener('scroll', this.handleScroll)
  }

  loadBlogs = () => {
    const { blogs,blogLength } = this.state;
    const currentLength = blogs.length
    const more = currentLength < blogLength
    const nextBlogs = more ?
      this.props.pageContext.blogList.slice(currentLength, currentLength + initialBlogsCount) : []
    this.setState({
      hasMore: more,
      blogs:[...blogs, ...nextBlogs]
    })
  }

  handleScroll = () => {
    const { hasMore } = this.state;
    if ( !hasMore ) return;
    const element = document.querySelector('#all_posts');
    const rect = element && element.getBoundingClientRect();
    if (rect.bottom + rect.height < document.documentElement.scrollTop){
      this.loadBlogs()
    }
  }


  render() {
    const { data } = this.props
    return (
      <Layout
        show
        hideFooter
        categories={data.categories?.edges}
      >
        <Blogs data={this.state.blogs} />
      </Layout>
    )
  }
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query AllBlogs {
        categories: allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "category-post" } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
              parent
              featuredcategory
              title
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogIndex {...props} data={data} count={count}/>}
  />
)
