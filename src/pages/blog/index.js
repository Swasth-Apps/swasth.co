import React from 'react'
import Layout from '../../components/layout'
import Blogs from '../../components/BlogLanding'
import { graphql, StaticQuery } from 'gatsby'


class BlogIndex extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props
    return (
      <Layout
        show
        hideFooter
        categories={data.categories?.edges}
      >
        <Blogs data={data} />
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
