import React from 'react'
import { Col, Row } from 'antd'
import img from '../assets/images/Image(2).png'
import CategoryTabs from './BreadCrum'
import { graphql, Link, StaticQuery } from 'gatsby'

class LiveCoachBlog extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let edges = this.props?.data?.blogs?.edges
    const latestBlog = edges[0];
    const featuredPost = edges?.find(({node : {frontmatter}}) => frontmatter?.featuredpost);
    return (
      <section className='feature-section-group' style={{transform:'translateY(3%)'}}>
        <CategoryTabs edges={this.props?.data?.categories?.edges}/>
        <Row className='initial-section card-row -margin-bottom -row-flex divider col-reverse'
             style={{ alignItems: 'flex-start' }}
             gutter={16}>
          <Col
            md={12}
            style={{ maxHeight: 600 }}
            className='card-col -margin-right -margin-bottom top-blog-section'
          >
            <img
              alt
              src={latestBlog?.node?.frontmatter?.image}
              className='section-img'
            />
            <div className='blog-tags'>
              {latestBlog?.node?.frontmatter?.categories?.category?.map(({ title, slug }) =>
                <Link to={`/category/${slug}`}>
                  <p className='para-text'>
                    {title}
                  </p>
                </Link>,
              )}
            </div>
            <Link to={latestBlog?.node?.fields?.slug}>
              <h3 className='-font-bold margin-bottom-25 base-text navy-blue base-text'>
                {latestBlog?.node?.frontmatter?.title}</h3>
            </Link>
            <div className='subtitle base-text navy-blue para-text'>
              {latestBlog?.node?.excerpt}
            </div>
          </Col>
          <Col md={12} className='card-col image-col recent-story-container'>
            <h3 className='base-text navy-blue'>Recent Stories</h3>
            <div className='recent-story'>
              {edges?.slice(0, 5)?.map(({ node: { frontmatter, fields } }) =>
                <div className='story'>
                  <img
                    alt
                    src={frontmatter?.image}
                  />
                  <div className='story-content'>
                    <div className='blog-tags'>
                      {frontmatter?.categories?.category?.map(({ title, slug }) =>
                        <Link to={`/category/${slug}`}>
                          <p className='para-text'>
                            {title}
                          </p>
                        </Link>,
                      )}
                    </div>
                    <Link to={fields?.slug}>
                      <h3 className='base-text navy-blue'>{frontmatter?.title}</h3>
                    </Link>
                    <p className='para-text'>{frontmatter.username}</p>
                  </div>
                </div>,
              )}
            </div>
          </Col>
        </Row>
        {featuredPost?
        <Row className='card-row -margin-bottom -row-flex divider col-reverse featured-section'
             gutter={16}>
          <Col md={12} className='card-col -margin-right -margin-bottom top-blog-section'>
            <img
              alt
              src={featuredPost?.node?.frontmatter?.image}
              className='section-img'
            />

          </Col>
          <Col md={12} className='card-col image-col featured-blog-content'>
            <div className='blog-tags'>
            {featuredPost?.node?.frontmatter?.categories?.category?.map(({title,slug}) =>
              <Link to={`/category/${slug}`}>
                <p className='para-text'>
                  {title}
                </p>
              </Link>
            )}
            </div>
            <Link to={featuredPost?.node?.fields?.slug}>
            <h3 className='-font-bold margin-bottom-25 base-text navy-blue base-text'>
              {featuredPost?.node?.frontmatter?.title}</h3>
            </Link>
            <div className='subtitle base-text navy-blue para-text line-clamp-3'>
              {featuredPost?.node?.excerpt}
            </div>
          </Col>
        </Row> : null}
        <Row md={12} className='card-col image-col recent-story-container all-category-section'
             style={{ marginTop: 50 }}>
          <div className='recent-story' style={{ maxHeight: 'unset' }}>
            {edges?.map(({node : {frontmatter,fields}}) =>
              <div className='story'>
                <img
                  alt
                  src={frontmatter?.image}
                />
                <div className='story-content'>
                  <div className='blog-tags'>
                    {frontmatter?.categories?.category?.map(({ title, slug }) =>
                      <Link to={`/category/${slug}`}>
                        <p className='para-text'>
                          {title}
                        </p>
                      </Link>,
                    )}
                  </div>
                  <Link to={fields?.slug}>
                    <h3 className='base-text navy-blue'>{frontmatter?.title}</h3>
                  </Link>
                  <p className='para-text'>{frontmatter.username}</p>
                </div>
              </div>
            )}
          </div>
        </Row>
      </section>
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
    render={(data, count) => <LiveCoachBlog {...props} data={data} count={count}/>}
  />
)