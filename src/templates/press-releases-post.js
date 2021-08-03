import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import Layout from '../components/Layout/layout'
import {HTMLContent} from '../components/Content'
import PressReleaseComponent from '../components/PressReleaseComponent'


export const PressReleaseTemplate = ({
                                     feature,
                                     helmet,
                                     content,
                                     contentComponent,
                                     slug
                                 }) => {

    return (
        <PressReleaseComponent
            hemet={helmet}
            slug={slug}
            content={content}
            {...feature}
        />
    )
}

PressReleaseTemplate.propTypes = {
    helmet: PropTypes.object,
    feature: PropTypes.object,
    content: PropTypes.node,
    contentComponent: PropTypes.func,
}

const Feature = ({data}) => {
    const {markdownRemark: post, categories} = data
    return (
        <Layout
            show
            hideFooter
            isContentWhite
            categories={categories?.edges}
        >
                <Helmet titleTemplate="%s | Blog">
                    <title>{`${post?.frontmatter?.title}`}</title>
                    <meta
                        name="description"
                        content={`${post?.frontmatter?.title}`}
                    />
                    <meta
                        name="keywords"
                        content={`${post?.frontmatter?.title}`}
                    />
                </Helmet>
                <PressReleaseTemplate
                    feature={post.frontmatter}
                    content={post.html}
                    slug={post.fields?.slug}
                    contentComponent={HTMLContent}
                    helmet={
                        <Helmet titleTemplate="%s | Feature">
                            <title>{`${post.frontmatter.title}`}</title>
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
  query PressReleaseByID($id: String!) {
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
        description
      }
    }
  }
`
