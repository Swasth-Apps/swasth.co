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
      <section className='feature-section-group'>
        <CategoryTabs edges={this.props?.data?.categories?.edges}/>
        {/* <Row className='card-row blog-padding-0 '>
          <div
            id="featured-section"
            className="featured-articles"
          >
            <div
              className="featured-story"
            >
              <a
                href="/inside-design/our-newest-book-remote-work-for-design-teams-is-out-now-and-its-free/?itm_campaign=default&itm_source=homefeatured&itm_medium=website&itm_content=default}"
                target="_self"
                rel
                className="image-wrapper"
                data-pistanos="article-link"
              >
                <div className="curl" />
                <img
                  alt
                  src="https://s3.amazonaws.com/www-inside-design/uploads/2020/04/1620x1620-3-810x810.png"
                />
              </a>
              <div className="copy-wrapper">
                <a
                  href="/inside-design/category/books/"
                  target="_self"
                  rel
                  data-pistanos="category-link"
                >
                  <h5>books</h5>
                </a>
                <a
                  href="/inside-design/our-newest-book-remote-work-for-design-teams-is-out-now-and-its-free/?itm_campaign=default&itm_source=homefeatured&itm_medium=website&itm_content=default}"
                  target="_self"
                  rel
                  data-pistanos="article-link"
                >
                  <h2>
          <span>
            Our newest book ‘Remote Work for Design Teams’ is out now—and it’s
            free
          </span>
                  </h2>
                  <div>
                    <p>
                      More than likely, you and your team had to suddenly transition to
                      working remotely full-time amid the pandemic. And while […]
                    </p>
                  </div>
                </a>
                <h6>
                  By&nbsp;
                  <a
                    href="/inside-design/author/abbysinnott/"
                    target="_self"
                    rel
                    data-pistanos="author-link"
                  >
                    Abby Sinnott
                  </a>
                </h6>
              </div>
            </div>
            <div className="recent-stories margin-bottom-25" data-e2e="recent-stories">
              <h3>Recent Stories</h3>
              <div id="articles-wrapper">
                <div
                  className="styled-article-block"
                  data-e2e="article-block"
                  data-pistanos="article-block"
                >
                  <div className="styled-article-hover">
                    <a
                      href="/inside-design/design-diet-luis-gonzalez/"
                      target="_self"
                      rel
                      data-pistanos="article-link"
                    >
                      <div className="image-wrapper">
                        <img
                          src="https://s3.amazonaws.com/www-inside-design/uploads/2020/04/design-digest-hero-300x300.jpg"
                          alt="The 4 things that are inspiring InVision designer Luis Gonzalez right now"
                        />
                        <div
                          className="styled-image-bg"
                          style={{
                            backgroundImage:
                              'url("https://s3.amazonaws.com/www-inside-design/uploads/2020/04/design-digest-hero-300x300.jpg")'
                          }}
                        />
                        <div className="styled-page-curl" />
                      </div>
                    </a>
                    <div className="text">
                      <a
                        href="/inside-design/category/inspiration/"
                        target="_self"
                        rel
                        data-pistanos="category-link"
                      >
                        <h5 className="hover-fade">Inspiration</h5>
                      </a>
                      <a
                        href="/inside-design/design-diet-luis-gonzalez/"
                        target="_self"
                        rel
                        data-pistanos="article-link"
                      >
                        <h5>
                <span className="hover-line">
                  The 4 things that are inspiring InVision designer Luis
                  Gonzalez right now
                </span>
                        </h5>
                      </a>
                      <h6>
                        By&nbsp;
                        <a
                          href="/inside-design/author/luis-gonzalez/"
                          target="_self"
                          rel
                          data-pistanos="author-link"
                        >
                          Luis Gonzalez
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  className="styled-article-block"
                  data-e2e="article-block"
                  data-pistanos="article-block"
                >
                  <div className="styled-article-hover">
                    <a
                      href="/inside-design/design-diet-luis-gonzalez/"
                      target="_self"
                      rel
                      data-pistanos="article-link"
                    >
                      <div className="image-wrapper">
                        <img
                          src="https://s3.amazonaws.com/www-inside-design/uploads/2020/04/design-digest-hero-300x300.jpg"
                          alt="The 4 things that are inspiring InVision designer Luis Gonzalez right now"
                        />
                        <div
                          className="styled-image-bg"
                          style={{
                            backgroundImage:
                              'url("https://s3.amazonaws.com/www-inside-design/uploads/2020/04/design-digest-hero-300x300.jpg")'
                          }}
                        />
                        <div className="styled-page-curl" />
                      </div>
                    </a>
                    <div className="text">
                      <a
                        href="/inside-design/category/inspiration/"
                        target="_self"
                        rel
                        data-pistanos="category-link"
                      >
                        <h5 className="hover-fade">Inspiration</h5>
                      </a>
                      <a
                        href="/inside-design/design-diet-luis-gonzalez/"
                        target="_self"
                        rel
                        data-pistanos="article-link"
                      >
                        <h5>
                <span className="hover-line">
                  The 4 things that are inspiring InVision designer Luis
                  Gonzalez right now
                </span>
                        </h5>
                      </a>
                      <h6>
                        By&nbsp;
                        <a
                          href="/inside-design/author/luis-gonzalez/"
                          target="_self"
                          rel
                          data-pistanos="author-link"
                        >
                          Luis Gonzalez
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  className="styled-article-block"
                  data-e2e="article-block"
                  data-pistanos="article-block"
                >
                  <div className="styled-article-hover">
                    <a
                      href="/inside-design/design-diet-luis-gonzalez/"
                      target="_self"
                      rel
                      data-pistanos="article-link"
                    >
                      <div className="image-wrapper">
                        <img
                          src="https://s3.amazonaws.com/www-inside-design/uploads/2020/04/design-digest-hero-300x300.jpg"
                          alt="The 4 things that are inspiring InVision designer Luis Gonzalez right now"
                        />
                        <div
                          className="styled-image-bg"
                          style={{
                            backgroundImage:
                              'url("https://s3.amazonaws.com/www-inside-design/uploads/2020/04/design-digest-hero-300x300.jpg")'
                          }}
                        />
                        <div className="styled-page-curl" />
                      </div>
                    </a>
                    <div className="text">
                      <a
                        href="/inside-design/category/inspiration/"
                        target="_self"
                        rel
                        data-pistanos="category-link"
                      >
                        <h5 className="hover-fade">Inspiration</h5>
                      </a>
                      <a
                        href="/inside-design/design-diet-luis-gonzalez/"
                        target="_self"
                        rel
                        data-pistanos="article-link"
                      >
                        <h5>
                <span className="hover-line">
                  The 4 things that are inspiring InVision designer Luis
                  Gonzalez right now
                </span>
                        </h5>
                      </a>
                      <h6>
                        By&nbsp;
                        <a
                          href="/inside-design/author/luis-gonzalez/"
                          target="_self"
                          rel
                          data-pistanos="author-link"
                        >
                          Luis Gonzalez
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  className="styled-article-block"
                  data-e2e="article-block"
                  data-pistanos="article-block"
                >
                  <div className="styled-article-hover">
                    <a
                      href="/inside-design/design-diet-luis-gonzalez/"
                      target="_self"
                      rel
                      data-pistanos="article-link"
                    >
                      <div className="image-wrapper">
                        <img
                          src="https://s3.amazonaws.com/www-inside-design/uploads/2020/04/design-digest-hero-300x300.jpg"
                          alt="The 4 things that are inspiring InVision designer Luis Gonzalez right now"
                        />
                        <div
                          className="styled-image-bg"
                          style={{
                            backgroundImage:
                              'url("https://s3.amazonaws.com/www-inside-design/uploads/2020/04/design-digest-hero-300x300.jpg")'
                          }}
                        />
                        <div className="styled-page-curl" />
                      </div>
                    </a>
                    <div className="text">
                      <a
                        href="/inside-design/category/inspiration/"
                        target="_self"
                        rel
                        data-pistanos="category-link"
                      >
                        <h5 className="hover-fade">Inspiration</h5>
                      </a>
                      <a
                        href="/inside-design/design-diet-luis-gonzalez/"
                        target="_self"
                        rel
                        data-pistanos="article-link"
                      >
                        <h5>
                <span className="hover-line">
                  The 4 things that are inspiring InVision designer Luis
                  Gonzalez right now
                </span>
                        </h5>
                      </a>
                      <h6>
                        By&nbsp;
                        <a
                          href="/inside-design/author/luis-gonzalez/"
                          target="_self"
                          rel
                          data-pistanos="author-link"
                        >
                          Luis Gonzalez
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  className="styled-article-block"
                  data-e2e="article-block"
                  data-pistanos="article-block"
                >
                  <div className="styled-article-hover">
                    <a
                      href="/inside-design/design-diet-luis-gonzalez/"
                      target="_self"
                      rel
                      data-pistanos="article-link"
                    >
                      <div className="image-wrapper">
                        <img
                          src="https://s3.amazonaws.com/www-inside-design/uploads/2020/04/design-digest-hero-300x300.jpg"
                          alt="The 4 things that are inspiring InVision designer Luis Gonzalez right now"
                        />
                        <div
                          className="styled-image-bg"
                          style={{
                            backgroundImage:
                              'url("https://s3.amazonaws.com/www-inside-design/uploads/2020/04/design-digest-hero-300x300.jpg")'
                          }}
                        />
                        <div className="styled-page-curl" />
                      </div>
                    </a>
                    <div className="text">
                      <a
                        href="/inside-design/category/inspiration/"
                        target="_self"
                        rel
                        data-pistanos="category-link"
                      >
                        <h5 className="hover-fade">Inspiration</h5>
                      </a>
                      <a
                        href="/inside-design/design-diet-luis-gonzalez/"
                        target="_self"
                        rel
                        data-pistanos="article-link"
                      >
                        <h5>
                <span className="hover-line">
                  The 4 things that are inspiring InVision designer Luis
                  Gonzalez right now
                </span>
                        </h5>
                      </a>
                      <h6>
                        By&nbsp;
                        <a
                          href="/inside-design/author/luis-gonzalez/"
                          target="_self"
                          rel
                          data-pistanos="author-link"
                        >
                          Luis Gonzalez
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3>All Blog Stories</h3>
          <div className='all-styled-stories'>
            <div className='all-styled-book'>
              <div className="styled-article-hover">
                <a
                  href="/inside-design/design-diet-luis-gonzalez/"
                  target="_self"
                  rel
                  data-pistanos="article-link"
                >
                  <div className="image-wrapper">
                    <img
                      src="https://s3.amazonaws.com/www-inside-design/uploads/2020/04/design-digest-hero-300x300.jpg"
                      alt="The 4 things that are inspiring InVision designer Luis Gonzalez right now"
                    />
                    <div
                      className="styled-image-bg"
                      style={{
                        backgroundImage:
                          'url("https://s3.amazonaws.com/www-inside-design/uploads/2020/04/design-digest-hero-300x300.jpg")'
                      }}
                    />
                    <div className="styled-page-curl" />
                  </div>
                </a>
                <div className="text">
                  <a
                    href="/inside-design/category/inspiration/"
                    target="_self"
                    rel
                    data-pistanos="category-link"
                  >
                    <h5 className="hover-fade">Inspiration</h5>
                  </a>
                  <a
                    href="/inside-design/design-diet-luis-gonzalez/"
                    target="_self"
                    rel
                    data-pistanos="article-link"
                  >
                    <h5>
                <span className="hover-line">
                  The 4 things that are inspiring InVision designer Luis
                  Gonzalez right now
                </span>
                    </h5>
                  </a>
                  <h6>
                    By&nbsp;
                    <a
                      href="/inside-design/author/luis-gonzalez/"
                      target="_self"
                      rel
                      data-pistanos="author-link"
                    >
                      Luis Gonzalez
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className='all-styled-book'>
              <div className="styled-article-hover">
                <a
                  href="/inside-design/design-diet-luis-gonzalez/"
                  target="_self"
                  rel
                  data-pistanos="article-link"
                >
                  <div className="image-wrapper">
                    <img
                      src="https://s3.amazonaws.com/www-inside-design/uploads/2020/04/design-digest-hero-300x300.jpg"
                      alt="The 4 things that are inspiring InVision designer Luis Gonzalez right now"
                    />
                    <div
                      className="styled-image-bg"
                      style={{
                        backgroundImage:
                          'url("https://s3.amazonaws.com/www-inside-design/uploads/2020/04/design-digest-hero-300x300.jpg")'
                      }}
                    />
                    <div className="styled-page-curl" />
                  </div>
                </a>
                <div className="text">
                  <a
                    href="/inside-design/category/inspiration/"
                    target="_self"
                    rel
                    data-pistanos="category-link"
                  >
                    <h5 className="hover-fade">Inspiration</h5>
                  </a>
                  <a
                    href="/inside-design/design-diet-luis-gonzalez/"
                    target="_self"
                    rel
                    data-pistanos="article-link"
                  >
                    <h5>
                <span className="hover-line">
                  The 4 things that are inspiring InVision designer Luis
                  Gonzalez right now
                </span>
                    </h5>
                  </a>
                  <h6>
                    By&nbsp;
                    <a
                      href="/inside-design/author/luis-gonzalez/"
                      target="_self"
                      rel
                      data-pistanos="author-link"
                    >
                      Luis Gonzalez
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className='all-styled-book'>
              <div className="styled-article-hover">
                <a
                  href="/inside-design/design-diet-luis-gonzalez/"
                  target="_self"
                  rel
                  data-pistanos="article-link"
                >
                  <div className="image-wrapper">
                    <img
                      src="https://s3.amazonaws.com/www-inside-design/uploads/2020/04/design-digest-hero-300x300.jpg"
                      alt="The 4 things that are inspiring InVision designer Luis Gonzalez right now"
                    />
                    <div
                      className="styled-image-bg"
                      style={{
                        backgroundImage:
                          'url("https://s3.amazonaws.com/www-inside-design/uploads/2020/04/design-digest-hero-300x300.jpg")'
                      }}
                    />
                    <div className="styled-page-curl" />
                  </div>
                </a>
                <div className="text">
                  <a
                    href="/inside-design/category/inspiration/"
                    target="_self"
                    rel
                    data-pistanos="category-link"
                  >
                    <h5 className="hover-fade">Inspiration</h5>
                  </a>
                  <a
                    href="/inside-design/design-diet-luis-gonzalez/"
                    target="_self"
                    rel
                    data-pistanos="article-link"
                  >
                    <h5>
                <span className="hover-line">
                  The 4 things that are inspiring InVision designer Luis
                  Gonzalez right now
                </span>
                    </h5>
                  </a>
                  <h6>
                    By&nbsp;
                    <a
                      href="/inside-design/author/luis-gonzalez/"
                      target="_self"
                      rel
                      data-pistanos="author-link"
                    >
                      Luis Gonzalez
                    </a>
                  </h6>
                </div>
              </div>
            </div>

          </div>

        </Row>*/}
        <Row className='card-row -margin-bottom -row-flex divider col-reverse'
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
            {featuredPost?.node?.frontmatter?.categories?.category?.map(({title,slug}) =>
              <Link to={`/category/${slug}`}>
                <p className='para-text'>
                  {title}
                </p>
              </Link>
            )}
            <h3 className='-font-bold margin-bottom-25 base-text navy-blue base-text'>
              {featuredPost?.node?.frontmatter?.title}</h3>
            <div className='subtitle base-text navy-blue para-text'>
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