import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout/layout'
import ResilifyProgram from "../components/Resilify/Program";
import _ from "lodash";

export const ResilifyProgramTemplate = ({
  feature,
  content,
  contentComponent,
  title,
  helmet,
                                          allPrograms
  }) => {
  const PostContent = contentComponent || Content;
  return (<ResilifyProgram
        hemet={helmet}
        content={content}
        PostContent={PostContent}
        program={feature}
        allPrograms={allPrograms}
    />
  )
}

ResilifyProgramTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data = {} }) => {
  const { markdownRemark: post,programs } = data
  return (
    <Layout
        noFooterMargin
    >
      <div
          id='wrapper'
          className={'coach-wrapper'}
          style={{paddingBottom: 0}}
      >
          <Helmet titleTemplate="%s | Blog">
              <title>{`${post?.frontmatter?.title}`}</title>
              <meta
                  name="description"
                  content={`${post?.frontmatter?.description}`}
              />
              <meta
                  name="keywords"
                  content={`${post?.frontmatter?.title}`}
              />
          </Helmet>
      <ResilifyProgramTemplate
          content={post?.html}
        feature={post.frontmatter}
        contentComponent={HTMLContent}
          allPrograms={_.sortBy(programs?.edges,({node:{frontmatter}}) => frontmatter.sequence)}
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
  query ResilifyProgram($id: String!) {
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
        overview
        programId
        categories {
          category {
            title
          }
        }
        relatedpost{
          program{
            title
            slug
          }
        }
        references{
                    reference
                    title
                    image
        }
        sessions{
          session{
            title
            overview
            activityOverview
          }
        }
        tags
      }
    }
      programs: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "resilify-program" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            parent
            image
            tags
            title
            sequence    
            overview
            sessions{
                session{
                    title
                }
            }
          }
        }
      }
    }
  }
`


