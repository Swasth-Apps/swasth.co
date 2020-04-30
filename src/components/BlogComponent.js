import React from 'react'
import { Col, Icon, Row } from 'antd'
import img from '../assets/images/blogImg.png'
import CategoryTabs from './BreadCrum'
import { HTMLContent }  from '../components/Content'
import { graphql, Link, StaticQuery } from 'gatsby'


class LiveCoachBlog extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { image,title,tags,username,featuredpost,categories,relatedpost } = this.props.feature;
    let edges = this.props?.data?.blogs?.edges;
    console.log(relatedpost?.blog,edges)
    const relatedPosts = [];
    for(var i=0;i< relatedpost?.blog?.length ; i++){
      relatedPosts.push(edges?.find(({node:{fields}}) =>fields.slug === `/blog/${relatedpost?.blog?.[i]?.slug}/` ))
    }
    return (
      <section className='feature-section-group blog-section-container'>
        {this.props.helmet || ''}
        <CategoryTabs noTop edges={this.props?.data?.categories?.edges}/>

        <Row className='card-row -margin-bottom -row-flex col-reverse blog-section'
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
            <div className='blog-tags'>
              {categories?.category?.map(({title,slug}) =>
                <Link to={`/category/${slug}`}>
                <p className='para-text'>
                  {title}
                </p>
                </Link>
              )}
            </div>
            {/*{categories?.category?.map(({title,slug}) =><span className='category-text'>{title}</span>)}*/}
            <h2 className='-font-bold margin-bottom-25 base-text base-text'>
              {title}</h2>
          </Col>
        </Row>
        <Row className='card-row -margin-bottom -row-flex divider col-reverse'
             style={{ alignItems:'flex-start', }}
             gutter={16}>
          <Col md={relatedPosts?.length ? 12 : 24} className='card-col -margin-right -margin-bottom'>
            <div className='subtitle base-text navy-blue para-text'>
              <HTMLContent className='blog-content' content={this.props.content} />
            </div>
            <div className='blog-tags'>
              {tags?.map(tag =>
              <p className='para-text'>
                {tag}
              </p>
              )}
            </div>
            <div className='blog-user'>
              <div className='user-info para-text'>
              <img src={img}/>
                {username}
              </div>
              <div className='social-icons'>
                <Icon type='facebook' />
                <Icon type='twitter' />
                <Icon type='instagram' />
              </div>
            </div>
            <div />
          </Col>
          {relatedPosts?.length ?
          <Col md={12} className='card-col image-col recent-story-container'>
            <h3 className='base-text navy-blue'>Recent Stories</h3>
            <div className='recent-story'>
              {relatedPosts?.map(({node:{frontmatter,fields}}) =>
              <div className='story'>
                <img
                  alt
                  src={frontmatter?.image}
                />
                <div className='story-content'>
                  <div className='blog-tags'>
                    {frontmatter?.categories?.category?.map(({title,slug}) =>
                      <Link to={`/category/${slug}`}>
                        <p className='para-text'>
                          {title}
                        </p>
                      </Link>
                    )}
                  </div>
                  <Link to={fields?.slug}>
                  <h3 className='base-text navy-blue'>{frontmatter?.title}</h3>
                  </Link>
                  <p className='para-text'>{frontmatter?.username}</p>
                </div>
              </div>
              )}
            </div>
          </Col> : null}
        </Row>

        <Row md={12}
             className='card-col image-col recent-story-container feeds-container all-category-section'
             style={{ transform: 'translateY(20%)' }}>
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

export default (props) => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
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
    render={(data, count) => <LiveCoachBlog {...props} data={data} count={count} />}
  />
)