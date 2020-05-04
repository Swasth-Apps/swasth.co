import React from 'react'
import { Col, Icon, Row } from 'antd'
import sf from '../assets/images/user-icons/sf.jpeg'
import CategoryTabs from './BreadCrum'
import { HTMLContent }  from '../components/Content'
import { graphql, Link, StaticQuery } from 'gatsby'
import { FacebookShareCount, OKShareCount, PinterestShareCount, RedditShareCount,TumblrShareCount, VKShareCount} from "react-share";
import { FacebookShareButton, TwitterShareButton, PinterestShareButton, LinkedinShareButton, RedditShareButton} from "react-share";
import { EmailIcon,FacebookIcon,InstapaperIcon, LineIcon, LinkedinIcon, LivejournalIcon,MailruIcon, OKIcon,  PinterestIcon, PocketIcon,  RedditIcon, TelegramIcon, TumblrIcon,TwitterIcon, ViberIcon, WhatsappIcon,  WorkplaceIcon} from "react-share";

const currentPageUrl = typeof window !== 'undefined' ? window.location.href : '';

function getUserIcon(name) {
  var initials = name.match(/\b\w/g) || [];
  initials = ((initials.shift() || '') + (initials.pop() || ''));
  console.log('initials ', initials.toString().toLowerCase());
  return initials.toString().toLowerCase();
}
class BlogComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { image,title, description, tags,username,featuredpost,categories,relatedpost } = this.props.feature;
    let edges = this.props?.data?.blogs?.edges;
    const relatedPosts = [];
    for(var i=0;i< relatedpost?.blog?.length ; i++){
      relatedPosts.push(edges?.find(({node:{fields}}) =>fields.slug === `/blog/${relatedpost?.blog?.[i]?.slug}/` ))
    }
    return (
      <section className='feature-section-group blog-section-container' style={{transform:'translateY(1%)'}}>
        {this.props.helmet || ''}
        <CategoryTabs noTop edges={this.props?.data?.categories?.edges}/>

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
            <h2 className='-font-bold margin-bottom-25 base-text base-text'>
              {title}</h2>
            <p className='para-text'>{description}</p>
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
                    <PinterestShareButton url={currentPageUrl} quote={title} className="social__share-button">
                      <PinterestIcon size={32} round />
                    </PinterestShareButton>
                    <div>
                      <PinterestShareCount url={currentPageUrl} className="social__share-count">
                        {count => count}
                      </PinterestShareCount>
                    </div>
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
          <Col md={12} className='card-col image-col recent-story-container'>
            <h3 className='base-text navy-blue'>Related Stories</h3>
            <div className='recent-story recent-stories-section'>
              {relatedPosts?.map(({node:{frontmatter,fields}}) =>
              <div className='story'>
                <img
                  alt
                  src={frontmatter?.image}
                />
                <div className='story-content'>
                  <div className='category-tags'>
                    {frontmatter?.categories?.category?.slice(0,1).map(({title,slug}) =>
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
                templateKey
                date(formatString: "MMMM DD, YYYY")
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
    render={(data, count) => <BlogComponent {...props} data={data} count={count} />}
  />
)