import React from 'react'
import Layout from '../../components/layout'
import Blogs from '../../components/BlogLanding'


export default class BlogIndex extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props
    return (
      <Layout
        show
        hideFooter
      >
        <Blogs data={data} />
      </Layout>
    )
  }
}

/*export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
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
                featuredimage
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <HomeIndex data={data} count={count} />}
  />
)*/
