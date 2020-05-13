import React from 'react'
import Layout from '../components/layout'
import Blogs from '../components/BlogLanding'
import { graphql, StaticQuery } from 'gatsby'


class BlogIndex extends React.Component {

  constructor(props) {
    const { blogList } = props.pageContext
    super(props);
    this.state ={
      blogs: blogList.slice(0, 2),
      active: 0,
      hasMore: blogList.length > 2,
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
      this.props.pageContext.blogList.slice(currentLength, currentLength + 2) : []
    console.log(nextBlogs,currentLength)
    this.setState({
      hasMore: more,
      blogs:[...blogs, ...nextBlogs]
    })
  }

  handleScroll = () => {
    const { hasMore } = this.state;
    if ( !hasMore ) return;
    if ( window && (
      window.innerHeight +
      document.documentElement.scrollTop >= document.documentElement.offsetHeight
    )){
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
        blogs:allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              html
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                squareimage
                image
                username
                categories {
                    category {
                      title
                      slug
                    }
                 }
              }
            }
          }
        }

        categories: allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "category-post" } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
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
