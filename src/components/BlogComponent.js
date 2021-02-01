import React from 'react'
import { Col, Row } from 'antd'
import sf from '../assets/images/user-icons/sf.jpeg'
import { graphql, Link, StaticQuery } from 'gatsby'
import {
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  RedditShareCount,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share'
import ShowMoreText from 'react-show-more-text'
import moment from 'moment'
import {colors} from "../helper/helper";
import img from "../assets/images/Image(2).png";

const currentPageUrl = typeof window !== 'undefined' ? window.location.href : '';

function getUserIcon(name) {
  var initials = name.match(/\b\w/g) || [];
  initials = ((initials.shift() || '') + (initials.pop() || ''));
  return initials.toString().toLowerCase();
}
class BlogComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { image,title, description, tags,username,featuredpost,categories,relatedpost,date } = this.props.feature;
    const { PostContent } = this.props;
    let edges = this.props?.data?.blogs?.edges;
    // edges = edges?.sort((a,b) => new Date(a.node.frontmatter.date) > new Date(b.node.frontmatter.date))
    const relatedPosts = [];
    if(this.props.isComponent) {
      for (let i = 0; i < relatedpost?.blog?.length; i++) {
        relatedPosts.push(edges?.find(({ node: { fields } }) => fields.slug === `/blog/${relatedpost?.blog?.[i]?.slug}/`))
      }
    }
    return (
      <section className='feature-section-group blog-section-container blog-section-group'>
        {this.props.helmet || ''}
        <div className="initial-blog">
            <div className="horizontal-card">
              {featuredpost ? <div className='ribbon ribbon-top-right ribbon-purple'><span>Featured</span></div> : null}
              <div className="blog-img-flex">
                <img
                    alt
                    src={image}
                    className='section-img'
                />
              </div>
              <div className="blog-text">
                <div className='category-tags para-text'>
                  {categories?.category?.map(({title, slug}, i) =>
                      <Link to={`/category/${slug}`} className={colors[i % 3]}>
                        <p className='para-text'>
                          {title}
                        </p>
                      </Link>,
                  )}
                </div>
                <p className='para-text blog-date'>
                  {moment(date).format("MMMM DD, YYYY")}
                </p>
                <h3 className='-font-bold base-text navy-blue base-text'>
                  {title}</h3>
                <div className='subtitle base-text navy-blue para-text horizontal-card-detail-description'>
                  {description}
                </div>
                {/**/}
                {/*  {excerpt}*/}
                {/*</div>*/}
                <div className='blog-top-section-user'>
                  <div className='user-info'>
                    <img src={sf}/>
                    <p className='para-text blog-date user-name'>{username}</p>
                  </div>
                  <div className='social-icons'>
                    <div className="social-button">
                      <FacebookShareButton url={currentPageUrl} quote={title} className="social__share-button">
                        <FacebookIcon size={32} round />
                      </FacebookShareButton>

                      <div>
                        <FacebookShareCount url={currentPageUrl} className="social__share-count">
                          {count => count}
                        </FacebookShareCount>
                      </div>
                    </div>
                    <div className="social-button">
                      <TwitterShareButton url={currentPageUrl} quote={title} className="social__share-button">
                        <TwitterIcon size={32} round />
                      </TwitterShareButton>
                    </div>
                    <div className="social-button">
                      <LinkedinShareButton url={currentPageUrl} quote={title} className="social__share-button">
                        <LinkedinIcon size={32} round />
                      </LinkedinShareButton>
                    </div>
                    <div className="social-button">
                      <RedditShareButton url={currentPageUrl} quote={title} className="social__share-button">
                        <RedditIcon size={32} round />
                      </RedditShareButton>

                      <div>
                        <RedditShareCount url={currentPageUrl} className="social__share-count">
                          {count => count}
                        </RedditShareCount>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
        </div>


{/*
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
            <div className='category-tags para-text'>
              {categories?.category?.map(({title,slug},i) =>
                <Link to={`/category/${slug}`} className={colors[i % 3]}>
                <p className='para-text'>
                  {title}
                </p>
                </Link>
              )}
            </div>
            {categories?.category?.map(({title,slug}) =><span className='category-text'>{title}</span>)}
            <p className='para-text blog-date'>{moment(date).format("MMMM DD, YYYY")}</p>
            <h2 className='-font-bold base-text base-text'>
              {title}</h2>
            <p className='para-text'>
            <ShowMoreText
              lines={3}
              more='Show more'
              less='Show less'
              anchorClass=''
              expanded={false}
            > {description}</ShowMoreText></p>
            <div className='blog-top-section-user'>
              <div className='user-info'>
                <img src={sf}/>
                {username}
              </div>
              <div className='social-icons'>
                <div className="social-button">
                  <FacebookShareButton url={currentPageUrl} quote={title} className="social__share-button">
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>

                  <div>
                    <FacebookShareCount url={currentPageUrl} className="social__share-count">
                      {count => count}
                    </FacebookShareCount>
                  </div>
                </div>
                <div className="social-button">
                  <TwitterShareButton url={currentPageUrl} quote={title} className="social__share-button">
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                </div>
                <div className="social-button">
                  <LinkedinShareButton url={currentPageUrl} quote={title} className="social__share-button">
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                </div>
                <div className="social-button">
                  <RedditShareButton url={currentPageUrl} quote={title} className="social__share-button">
                    <RedditIcon size={32} round />
                  </RedditShareButton>

                  <div>
                    <RedditShareCount url={currentPageUrl} className="social__share-count">
                      {count => count}
                    </RedditShareCount>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        */}

        <div className="after-section initial-blog">
        <Row className='card-row -margin-bottom -row-flex divider col-reverse'
             style={{ alignItems:'flex-start', }}
             gutter={16}>
          <Col md={14} className='card-col -margin-right -margin-bottom'>
            <div className='subtitle navy-blue blogs-fonts'>
              <PostContent className='blog-content' content={this.props.content} />
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
              <img src={sf}/>
                {username}
              </div>
              <div className='social-icons'>
                <div className="social-button">
                    <FacebookShareButton url={currentPageUrl} quote={title} className="social__share-button">
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>

                    <div>
                      <FacebookShareCount url={currentPageUrl} className="social__share-count">
                        {count => count}
                      </FacebookShareCount>
                    </div>
                </div>
                <div className="social-button">
                    <TwitterShareButton url={currentPageUrl} quote={title} className="social__share-button">
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                </div>
                <div className="social-button">
                    <LinkedinShareButton url={currentPageUrl} quote={title} className="social__share-button">
                      <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                </div>
                <div className="social-button">
                    <RedditShareButton url={currentPageUrl} quote={title} className="social__share-button">
                      <RedditIcon size={32} round />
                    </RedditShareButton>

                    <div>
                      <RedditShareCount url={currentPageUrl} className="social__share-count">
                        {count => count}
                      </RedditShareCount>
                    </div>
                </div>
               </div>
            </div>
            <div />
          </Col>
          {relatedPosts?.length ?
          <Col md={10} className='card-col image-col recent-story-container'>
            <h3 className='base-text navy-blue related-story-title'>Related Stories</h3>
            <div className='recent-story recent-stories-section'>
              {relatedPosts?.map(({node:{frontmatter,fields}}) =>
              <div className='story'>
                                  <Link to={fields?.slug}>

                <img
                  alt
                  src={frontmatter?.squareimage}
                />
                </Link>
                <div className='story-content'>
                  <div className='category-tags para-text'>
                    {frontmatter?.categories?.category?.slice(0,1).map(({title,slug},i) =>
                      <Link to={`/category/${slug}`} className={colors[i % 3]}>
                        <p className='para-text'>
                          {title}
                        </p>
                      </Link>
                    )}
                  </div>
                  <p className='para-text blog-date'>{moment(frontmatter?.date).format("MMMM DD, YYYY")}</p>
                  <Link to={fields?.slug}>
                    <h3 className='base-text navy-blue'>{frontmatter?.title}</h3>
                  </Link>
                  <p className='para-text blog-date'>{frontmatter?.username}</p>
                </div>
              </div>
              )}
            </div>
          </Col> : null}
        </Row>
        </div>

        {/*<Row md={12}
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
        </Row>*/}
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
                description
                templateKey
                date
                featuredpost
                image
                squareimage
                username
                categories{
                category{
                slug
                title
                }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogComponent {...props} data={data} count={count} />}
  />
)
