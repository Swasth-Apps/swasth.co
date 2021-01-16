import React from 'react'
import {Col, Row} from 'antd'
import {graphql, Link, StaticQuery} from 'gatsby'
import img from '../assets/images/blogImg.png'
import {colors} from "../helper/helper";
import moment from "moment";

class CategoryComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let edges = this.props?.data?.blogs?.edges;
        // edges = edges?.sort((a,b) => new Date(a.node.frontmatter.date) > new Date(b.node.frontmatter.date))
        edges = edges?.filter(({node: {frontmatter}}) =>
            frontmatter?.categories?.category?.some(el => `/category/${el.slug}/` === this.props.slug));

        const featuredPost = edges?.find(({node: {frontmatter}}) => frontmatter?.featuredpost);
        return (
            <section className='feature-section-group blog-section-container blog-section-group'>
                {this.props.helmet || ''}
                <div className="initial-blog">
                    <div className="recent-stories-section">
                        {edges?.map(({node: {frontmatter, fields,excerpt}}) =>
                            <div className="vertical-blog-card">
                                <div className="vertical-card">
                                    {featuredPost?.node?.fields?.slug === fields.slug ?
                                        <div className='ribbon ribbon-top-right ribbon-purple'><span
                                            className="para-text">Featured</span></div> : null}
                                    <Link to={fields?.slug}>
                                        <div className='story'>
                                            <img
                                                alt
                                                src={frontmatter?.squareimage}
                                            />
                                            <div className='story-content'>
                                                <div className='category-tags para-text'>
                                                    {frontmatter?.categories?.category.map(({title, slug}, i) =>
                                                        <Link to={`/category/${slug}`} className={colors[i % 3]}>
                                                            <p className='para-text'>
                                                                {title}
                                                            </p>
                                                        </Link>,
                                                    )}
                                                </div>
                                                <p className='para-text blog-date'>{moment(frontmatter?.date).format("MMMM DD, YYYY")}</p>
                                                <h3 className='base-text navy-blue vertical-card-title'>{frontmatter?.title}</h3>
                                                <div
                                                    className='subtitle base-text navy-blue para-text vertical-card-description'>
                                                    {excerpt}
                                                </div>
                                                <p className='para-text blog-date user-name'>{frontmatter.username}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>)}
                    </div>
                </div>
                {featuredPost ?
                    <div className="initial-blog">
                        <Link to={featuredPost?.node?.fields?.slug}>
                            <div className="horizontal-card">
                                <div className='ribbon ribbon-top-right ribbon-purple'><span
                                    className="para-text">Featured</span></div>
                                <div className="blog-img-flex">
                                    <img
                                        alt
                                        src={featuredPost?.node?.frontmatter?.image}
                                        className='section-img'
                                    />
                                </div>
                                <div className="blog-text">
                                    <div className='category-tags para-text'>
                                        {featuredPost?.node?.frontmatter?.categories?.category?.map(({title, slug}, i) =>
                                            <Link to={`/category/${slug}`} className={colors[i % 3]}>
                                                <p className='para-text'>
                                                    {title}
                                                </p>
                                            </Link>,
                                        )}
                                    </div>
                                    <p className='para-text blog-date'>
                                        {moment(featuredPost?.node?.frontmatter?.date).format("MMMM DD, YYYY")}
                                    </p>
                                    <h3 className='-font-bold base-text navy-blue base-text'>
                                        {featuredPost?.node?.frontmatter?.title}</h3>
                                    <div className='subtitle base-text navy-blue para-text horizontal-card-description'>
                                        {featuredPost?.node?.excerpt}
                                    </div>
                                    <p className='para-text blog-date user-name'>{featuredPost?.node?.frontmatter?.username}</p>
                                </div>

                            </div>
                        </Link>
                    </div> : null}

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
        render={(data, count) => <CategoryComponent {...props} data={data} count={count}/>}
    />
)
