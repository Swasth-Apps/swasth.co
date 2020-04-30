import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import CategoryComponent from '../components/CategoryComponent'


export const CategoryTemplate = ({
                                   feature,
                                   helmet,
                                   content,
                                   contentComponent
                                 }) => {
  const {  title, featuredimage } = feature;
  const PostContent = contentComponent || Content;
  return (
    <CategoryComponent
      hemet={helmet}
      title={title}
      content={content}
      featuredimage={featuredimage}
    />
  )
}

CategoryTemplate.propTypes = {
  helmet: PropTypes.object,
  feature: PropTypes.object,
  content: PropTypes.node,
  contentComponent: PropTypes.func,
}

const Feature = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout
      show
      hideFooter
    >
      <CategoryTemplate
        feature={post.frontmatter}
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Feature">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
      />
    </Layout>
  )
}

Feature.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Feature

export const pageQuery = graphql`
  query CategoryByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        featuredimage
      }
    }
  }
`
