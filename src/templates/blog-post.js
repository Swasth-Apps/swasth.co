import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import BlogComponent from '../components/BlogComponent'
import Content, { HTMLContent } from '../components/Content'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { Col, Row } from 'antd'


export const BlogPostTemplatePreview = ({
  feature,
  content,
  contentComponent,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  const { image,title, description, tags,featuredpost,categories,date } = feature;
  return (
    <section className='feature-section-group blog-section-container blog-section-group'>
      {this.props.helmet || ''}
      <Row className='initial-section card-row -margin-bottom -row-flex col-reverse blog-section'
           style={{paddingRight:0 }}
           gutter={16}>
        <Col md={12} className='card-col top-blog-section'>
          <img
            alt
            src={image}
            className='section-img'
          />

        </Col>
        <Col md={12} className='card-col image-col featured-blog-content'>
          {featuredpost ? <div className='ribbon ribbon-top-right ribbon-purple'><span>Featured</span></div> : null}
          <div className='category-tags'>
            {categories?.category?.map(({title,slug}) =>
              <Link to={`/category/${slug}`}>
                <p className='para-text'>
                  {title}
                </p>
              </Link>
            )}
          </div>
          {/*{categories?.category?.map(({title,slug}) =><span className='category-text'>{title}</span>)}*/}
          <p className='para-text blog-date'>{date}</p>
          <h2 className='-font-bold base-text base-text'>
            {title}</h2>
          <p className='para-text'>
            {description}</p>
        </Col>
      </Row>
      <Row className='card-row -margin-bottom -row-flex divider col-reverse'
           style={{ alignItems:'flex-start', }}
           gutter={16}>
        <Col md={24} className='card-col -margin-right -margin-bottom'>
          <div className='subtitle navy-blue blogs-fonts'>
            <HTMLContent className='blog-content' content={this.props.content} />
          </div>
          <div className='blog-tags'>
            {tags?.map(tag =>
              <p className='para-text'>
                {tag}
              </p>
            )}
          </div>
          <div />
        </Col>
      </Row>
    </section>
  )
}

BlogPostTemplatePreview.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

export const BlogPostTemplate = ({
  feature,
  content,
  contentComponent,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <BlogComponent
      hemet={helmet}
      content={content}
      feature={feature}
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
      <BlogPostTemplate
        content={post?.html}
        feature={post.frontmatter}
        contentComponent={HTMLContent}
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
        date(formatString: "MMMM DD, YYYY")
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


