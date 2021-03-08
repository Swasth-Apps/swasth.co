import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import BlogComponent from '../components/BlogComponent'
import Content, { HTMLContent } from '../components/Content'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout/layout'


export const BlogPostTemplate = ({
  feature,
  content,
  contentComponent,
  title,
  helmet,
  isComponent
  }) => {
  const PostContent = contentComponent || Content;
  return (<BlogComponent
        hemet={helmet}
        content={content}
        PostContent={PostContent}
        feature={feature}
        isComponent={isComponent}
    />
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data = {} }) => {
  const { markdownRemark: post,categories } = data
  return (
    <Layout
      show
      hideFooter
      isContentWhite
      categories = {categories?.edges}
    >
      <div
          id='wrapper'
          className={'coach-wrapper'}
          style={{paddingBottom: 0}}
      >
      <BlogPostTemplate
        content={post?.html}
        feature={post.frontmatter}
        contentComponent={HTMLContent}
        isComponent
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post?.frontmatter?.title}`}</title>
            <meta
              name="description"
              content={`${post?.frontmatter?.description}`}
            />
          </Helmet>
        }
      />
      </div>
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields{
        slug
      }
      frontmatter {
        date
        title
        image
        username
        description
        featuredpost
        categories {
          category {
            title
            slug
          }
        }
        relatedpost{
          blog{
            title
            slug
          }
        }
        tags
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
            parent
            featuredcategory
            title
          }
        }
      }
    }
  }
`


