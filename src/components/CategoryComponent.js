import React from 'react'
import { Col, Row } from 'antd'
import { graphql, Link, StaticQuery } from 'gatsby'
import img from '../assets/images/blogImg.png'

class CategoryComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let edges = this.props?.data?.blogs?.edges;
    // edges = edges?.sort((a,b) => new Date(a.node.frontmatter.date) > new Date(b.node.frontmatter.date))
    edges = edges?.filter(({node : {frontmatter}}) =>
      frontmatter?.categories?.category?.some(el => `/category/${el.slug}/` === this.props.slug));

    console.log(edges)
    const featuredPost = edges?.find(({node : {frontmatter}}) => frontmatter?.featuredpost);
    return (
      <section className='feature-section-group blog-section-container blog-section-group'>
        {this.props.helmet || ''}
        <Row md={12}
             className='card-col
              image-col recent-story-container feeds-container
             all-category-section category-container initial-section'
             >
          <h2 className='base-text navy-blue -centered'>{this.props.title}</h2>
          <div className='recent-story'>
            {edges?.map(({node : {frontmatter,fields}}) =>
            <div className='story'>
                              <Link to={fields?.slug}>

              <img
                alt
                src={frontmatter?.squareimage}
              />
              <div className='story-content'>
                <div className='category-tags para-text'>
                {frontmatter?.categories?.category?.map(({ title, slug }) =>
                  <Link to={`/category/${slug}`}>
                    <p className='para-text'>
                      {title}
                    </p>
                  </Link>
                )}
                </div>
                <h3 className='base-text navy-blue'>{frontmatter?.title}</h3>
                <p className='para-text blog-date'>{frontmatter?.username}</p>
              </div>
              </Link>
            </div>)}
          </div>
        </Row>
        {featuredPost?
        <Row
          className='card-row -margin-bottom -row-flex col-reverse category-section blog-section'
             gutter={16}>
          <Link to={featuredPost?.node?.fields?.slug}>

          <Col md={12} className='card-col top-blog-section'>
            <img
              alt
              src={featuredPost?.node?.frontmatter?.image}
              className='section-img'
            />

          </Col>
          <Col md={12} className='card-col image-col featured-blog-content'>
            <div className='ribbon ribbon-top-right ribbon-purple'><span>Featured</span></div>
            <div className='category-tags para-text'>
              {featuredPost?.node?.frontmatter?.categories?.category?.map(({title,slug}) =>
                <Link to={`/category/${slug}`}>
                  <p className='para-text'>
                    {title}
                  </p>
                </Link>
              )}
            </div>
            <h3 className='-font-bold margin-bottom-25 base-text base-text'>
              {featuredPost?.node?.frontmatter?.title}
            </h3>
            <div className='subtitle base-text navy-blue para-text line-clamp-3'>
              {featuredPost?.node?.excerpt}
            </div>
          </Col>
          </Link>
        </Row> : null}

        {/*<Row md={12}
             className='card-col
             image-col recent-story-container feeds-container
             all-category-section category-feed-section'
             >
          <h3 className='base-text navy-blue'>FEEDS</h3>
          <div className='recent-story'>
            <div className='story'>
              <img
                alt
                src={img}
              />
              <div className='story-content'>
                <p className='para-text category-text'>category 2</p>
                <h3 className='base-text navy-blue'>Key Learning Concepts Visualized</h3>
                <p className='para-text'>By Greg Storey</p>
              </div>
            </div>
            <div className='story'>
              <img
                alt
                src={img}
              />
              <div className='story-content'>
                <p className='para-text category-text'>category 2</p>
                <h3 className='base-text navy-blue'>Key Learning Concepts Visualized</h3>
                <p className='para-text'>By Greg Storey</p>
              </div>
            </div>
            <div className='story'>
              <img
                alt
                src={img}
              />
              <div className='story-content'>
                <p className='para-text category-text'>category 2</p>
                <h3 className='base-text navy-blue'>Key Learning Concepts Visualized</h3>
                <p className='para-text'>By Greg Storey</p>
              </div>
            </div>
            <div className='story'>
              <img
                alt
                src={img}
              />
              <div className='story-content'>
                <p className='para-text category-text'>category 2</p>
                <h3 className='base-text navy-blue'>Key Learning Concepts Visualized</h3>
                <p className='para-text'>By Greg Storey</p>
              </div>
            </div>
          </div>
        </Row>*/}
      </section>
    )
  }
}
export default (props) => (
  <StaticQuery
    query={graphql`
      query BlogQuery {
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
                date
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
      }
    `}
    render={(data, count) => <CategoryComponent {...props} data={data} count={count} />}
  />
)
