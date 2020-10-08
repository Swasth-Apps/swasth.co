import React from 'react'
import { Col, Row } from 'antd'
import img from '../assets/images/Image(2).png'
import { Link } from 'gatsby'
import moment from "moment";

class BlogLanding extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let blogs = this.props?.data
    const latestBlog = blogs?.[0];
    const featuredPost = blogs?.find(({node : {frontmatter}}) => frontmatter?.featuredpost);
    return (
      <section className='feature-section-group blog-section-group'>
        <Row className='initial-section card-row -margin-bottom -row-flex divider col-reverse'
             style={{ alignItems: 'flex-start' }}
             gutter={16}>
          <Col
            md={12}
            style={{ maxHeight: 600 }}
            className='card-col -margin-bottom top-blog-section padd-sec landing-top-section'
          >
          <Link to={latestBlog?.node?.fields?.slug}>

            <img
              alt
              src={latestBlog?.node?.frontmatter?.image}
              className='section-img'
            />
            <div className='category-tags'>
              {latestBlog?.node?.frontmatter?.categories?.category?.map(({ title, slug }) =>
                <Link to={`/category/${slug}`}>
                  <p className='para-text'>
                    {title}
                  </p>
                </Link>,
              )}
            </div>
            <p className='para-text blog-date'>
              {moment(latestBlog?.node?.frontmatter?.date).format("MMMM DD, YYYY")}
            </p>
            <h3 className='-font-bold margin-bottom-25 base-text navy-blue base-text'>
                {latestBlog?.node?.frontmatter?.title}</h3>
            <div className='subtitle base-text navy-blue para-text'>
              {latestBlog?.node?.excerpt}
            </div>
            </Link>

          </Col>

          <Col md={12} className='card-col image-col recent-story-container landing-top-section'>
            <h3 className='base-text navy-blue'>Recent Stories</h3>
            <div className='recent-story recent-stories-section'>
              {blogs?.slice(0, 5)?.map(({ node: { frontmatter, fields } }) =>
                                                    <Link to={fields?.slug}>

                <div className='story'>

                  <img
                    alt
                    src={frontmatter?.squareimage}
                  />
                  <div className='story-content'>
                    <div className='category-tags'>
                      {frontmatter?.categories?.category.map(({ title, slug }) =>
                        <Link to={`/category/${slug}`}>
                          <p className='para-text'>
                            {title}
                          </p>
                        </Link>,
                      )}
                    </div>
                    <p className='para-text blog-date'>{moment(frontmatter?.date).format("MMMM DD, YYYY")}</p>
                    <h3 className='base-text navy-blue'>{frontmatter?.title}</h3>
                    <p className='para-text blog-date'>{frontmatter.username}</p>
                  </div>
                </div>
                </Link>
              )}
            </div>
          </Col>
        </Row>
        {featuredPost?
        <Row
          style={{background : "transparent",alignItems: "flex-start"}}
             className='card-row -margin-bottom -row-flex divider col-reverse'
             gutter={16}>
          <Col md={12} style={{paddingRight: 0}} className='card-col top-blog-section'>
          <Link to={featuredPost?.node?.fields?.slug}>
            <img
              alt
              src={featuredPost?.node?.frontmatter?.image}
              className='section-img'
            />
          </Link>
          </Col>
          <Col md={12} className='card-col image-col featured-blog-content featured-section'>
            <div className='ribbon ribbon-top-right ribbon-purple'><span>Featured</span></div>
            <div className='category-tags'>
            {featuredPost?.node?.frontmatter?.categories?.category?.map(({title,slug}) =>
              <Link to={`/category/${slug}`}>
                <p className='para-text'>
                  {title}
                </p>
              </Link>
            )}
            </div>
            <Link to={featuredPost?.node?.fields?.slug}>
              <p className='para-text blog-date'>
                {moment(featuredPost?.node?.frontmatter?.date).format("MMMM DD, YYYY")}
              </p>
              <h3 className='-font-bold margin-bottom-25 base-text navy-blue base-text'>
              {featuredPost?.node?.frontmatter?.title}</h3>
            <div className='subtitle base-text navy-blue para-text line-clamp-3'>
              {featuredPost?.node?.excerpt}
            </div>
            </Link>
          </Col>
        </Row> : null}
        <Row
          md={12}
             className='card-col image-col recent-story-container all-category-section'
             >
          <div id='all_posts' className='recent-story' style={{ maxHeight: 'unset' }}>
            {blogs?.map(({node : {frontmatter,fields}}) =>
              <div className='story'>
                <Link to={fields?.slug}>
                <img
                  alt
                  src={frontmatter?.squareimage}
                />
                </Link>
                <Link to={fields?.slug}>
                <div className='story-content'>
                  <div className='category-tags'>
                    {frontmatter?.categories?.category?.slice(0,1).map(({ title, slug }) =>
                      <Link to={`/category/${slug}`}>
                        <p className='para-text'>
                          {title}
                        </p>
                      </Link>
                    )}
                  </div>
                  <p className='para-text blog-date'>{moment(frontmatter?.date).format("MMMM DD, YYYY")}</p>
                  <h3 className='base-text navy-blue'>{frontmatter?.title}</h3>
                  <p className='para-text blog-date'>{frontmatter.username}</p>
                </div>
                </Link>
              </div>
            )}
          </div>
        </Row>
      </section>
    )
  }
}

export default BlogLanding
