import React from 'react'
import {Icon} from 'antd'
import img from '../assets/images/Image(2).png'
import {Link} from 'gatsby'
import moment from "moment";
import {colors} from "../helper/helper";

class BlogLanding extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let blogs = this.props?.data
        const latestBlog = blogs?.[0];
        const featuredPost = blogs?.find(({node: {frontmatter}}) => frontmatter?.featuredpost);
        return (
            <section className='feature-section-group blog-section-group'>
                <div className="initial-blog">
                    <Link to={latestBlog?.node?.fields?.slug}>
                        <div className="horizontal-card">
                            <div className="blog-img-flex">
                                <img
                                    alt
                                    src={latestBlog?.node?.frontmatter?.image}
                                    className='section-img'
                                />
                            </div>
                            <div className="blog-text">
                                <div className='category-tags para-text'>
                                    {latestBlog?.node?.frontmatter?.categories?.category?.map(({title, slug}, i) =>
                                        <Link to={`/category/${slug}`} className={colors[i % 3]}>
                                            <p className='para-text'>
                                                {title}
                                            </p>
                                        </Link>,
                                    )}
                                </div>
                                <p className='para-text blog-date'>
                                    {moment(latestBlog?.node?.frontmatter?.date).format("MMMM DD, YYYY")}
                                </p>
                                <h3 className='-font-bold base-text navy-blue base-text'>
                                    {latestBlog?.node?.frontmatter?.title}</h3>
                                <div className='subtitle base-text navy-blue para-text horizontal-card-description'>
                                    {latestBlog?.node?.excerpt}
                                </div>
                                <p className='para-text blog-date user-name'>{latestBlog?.node?.frontmatter?.username}</p>
                            </div>

                        </div>
                    </Link>
                </div>
                <div className="initial-blog">
                    <h3 className="base-text blog-page-recent-stories-text">Recent Stories</h3>
                    <div className="recent-stories-section">
                        {blogs?.slice(0, 5)?.map(({node: {frontmatter, fields, excerpt}}) =>
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
                            </div>
                        )}
                    </div>
                </div>
                {/* <Row className='initial-section card-row -margin-bottom -row-flex divider col-reverse'
                     style={{alignItems: 'flex-start'}}
                     gutter={16}>
                    <Col
                        md={12}
                        style={{maxHeight: 600}}
                        className='card-col -margin-bottom top-blog-section padd-sec landing-top-section'
                    >
                        <Link to={latestBlog?.node?.fields?.slug}>

                            <img
                                alt
                                src={latestBlog?.node?.frontmatter?.image}
                                className='section-img'
                            />
                            <div className='category-tags para-text'>
                                {latestBlog?.node?.frontmatter?.categories?.category?.map(({title, slug}) =>
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
                            {blogs?.slice(0, 5)?.map(({node: {frontmatter, fields}}) =>
                                <Link to={fields?.slug}>

                                    <div className='story'>

                                        <img
                                            alt
                                            src={frontmatter?.squareimage}
                                        />
                                        <div className='story-content'>
                                            <div className='category-tags para-text'>
                                                {frontmatter?.categories?.category.map(({title, slug}) =>
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
                </Row>*/}
                {/*     {featuredPost ?
                    <Row
                        style={{background: "transparent", alignItems: "flex-start"}}
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
                            <div className='ribbon ribbon-top-right ribbon-purple'><span className="para-text">Featured</span></div>
                            <div className='category-tags para-text'>
                                {featuredPost?.node?.frontmatter?.categories?.category?.map(({title, slug}) =>
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
                    </Row> : null}*/}
                <div className="initial-blog">
                    <div className="all-stories-section" id="all_posts">
                        {blogs?.map(({node: {frontmatter, fields}}) =>
                            <div className="horizontal-blog-card">
                                <Link to={fields?.slug}>
                                    <div className="horizontal-card">
                                        <div className="blog-img-flex">
                                            <img
                                                alt
                                                src={frontmatter?.squareimage}
                                            />
                                        </div>
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
                                            <h3 className='base-text navy-blue card-title'>{frontmatter?.title}</h3>
                                            <p className='para-text blog-date user-name'>{frontmatter.username}</p>
                                        </div>
                                            <Icon type="right" className="arrow-icon"/>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

              {/*  <Row
                    md={12}
                    className='card-col image-col recent-story-container all-category-section'
                >
                    <div id='all_posts' className='recent-story' style={{maxHeight: 'unset'}}>
                        {blogs?.map(({node: {frontmatter, fields}}) =>
                            <div className='story'>
                                <Link to={fields?.slug}>
                                    <img
                                        alt
                                        src={frontmatter?.squareimage}
                                    />
                                </Link>
                                <Link to={fields?.slug}>
                                    <div className='story-content'>
                                        <div className='category-tags para-text'>
                                            {frontmatter?.categories?.category?.slice(0, 1).map(({title, slug}) =>
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
                </Row>*/}
            </section>
        )
    }
}

export default BlogLanding
