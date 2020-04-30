import React from 'react'
import { Col, Row } from 'antd'
import {  graphql, StaticQuery } from 'gatsby'
import img from '../assets/images/blogImg.png'
import CategoryTabs from '../components/BreadCrum'

class CategoryComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const edges = this.props?.data?.allMarkdownRemark?.edges;
    console.log(edges)
    return (
      <section className='feature-section-group blog-section-container'>
        <CategoryTabs/>
        <Row md={12}
             className='card-col
              image-col recent-story-container feeds-container
             all-category-section category-container'
             style={{ marginTop: 30 }}>
          <h3 className='base-text navy-blue -centered'>{this.props.title}</h3>
          <div className='recent-story'>
            {edges?.map(item =>
            <div className='story'>
              <img
                alt
                src={img}
              />
              <div className='story-content'>
                <p className='para-text category-text'>{this.props.title}</p>
                <h3 className='base-text navy-blue'>{item?.node?.frontmatter?.title}</h3>
                <p className='para-text'>By Greg Storey</p>
              </div>
            </div>
            )}
          </div>
        </Row>
        <Row
          className='card-row -margin-bottom -row-flex col-reverse category-section blog-section'
             gutter={16}>
          <Col md={12} className='card-col top-blog-section'>
            <img
              alt
              src={img}
              className='section-img'
            />

          </Col>
          <Col md={12} className='card-col image-col featured-blog-content'>
            <div className='ribbon ribbon-top-right ribbon-purple'><span>Featured</span></div>
            <p className='category-text'>CATEGORY 2</p>
            <h2 className='-font-bold margin-bottom-25 base-text base-text'>
              How Tia, one of the country’s hottest startups, launched with an InVision prototype.</h2>
          </Col>
        </Row>
        <Row md={12}
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
        </Row>


      </section>
    )
  }
}
export default () => (
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
                image
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <CategoryComponent data={data} count={count} />}
  />
)
