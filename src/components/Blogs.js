import React from 'react'
import { Row } from 'antd'

class LiveCoachBlog extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { allMarkdownRemark = {} } = this.props.data
    return (
      <section className='feature-section-group'>
        <Row className='card-row'>
          <div className="wrap">
            <div className="content-sidebar-wrap">
              <main className="content" id="genesis-content">
                {allMarkdownRemark?.edges?.map(({ node:{html,frontmatter} }) =>
                  <article
                    className="post-1593 post type-post status-publish format-standard has-post-thumbnail category-certification-review tag-certification-review tag-dr-john-rusin tag-fitness-industry tag-john-rusin tag-myofascial-release tag-online-coaching tag-pain-free-performance-specialist tag-personal-training tag-physical-therapist tag-ppsc tag-programming tag-stretching tag-warm-ups entry"
                    itemScope="" itemType="https://schema.org/CreativeWork">
                    <header className="entry-header">
                      <h2 className="entry-title" itemProp="headline">
                        <a className="entry-title-link" rel="bookmark"
                           href="https://truecoach.co/thinking-remotely/less-science-more-purpose/">
                          {frontmatter?.title}
                        </a>
                      </h2>
                     {/* <p className="entry-meta">
                        <time className="entry-time" itemProp="datePublished" dateTime="2020-02-24T07:00:00+00:00">February
                          24, 2020
                        </time>
                        By <span className="entry-author" itemProp="author" itemScope=""
                                 itemType="https://schema.org/Person"><a
                        href="https://truecoach.co/thinking-remotely/author/lucy-hendricks/" className="entry-author-link"
                        rel="author" itemProp="url">
                        <span className="entry-author-name"
                                                          itemProp="name">Lucy Hendricks</span></a>
                        </span> <span className="entry-comments-link"><a
                        href="https://truecoach.co/thinking-remotely/less-science-more-purpose/#respond">Leave a Comment</a></span>
                      </p>*/}
                    </header>
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                  </article>,
                )}
              </main>
              <aside className="sidebar sidebar-primary widget-area q2w3-fixed-widget-container" role="complementary"
                     aria-label="Primary Sidebar" itemScope itemType="https://schema.org/WPSideBar"
                     id="genesis-sidebar-primary" style={{ height: '498px' }}>
                <h2 className="genesis-sidebar-title screen-reader-text">Primary Sidebar</h2>
                {/*<section id="text-25_clone" className="widget widget_text q2w3-widget-clone-sidebar" style={{ height: 418, visibility: 'hidden' }} />*/}
                <section id="text-25" className="widget widget_text">
                  <div className="widget-wrap">
                    <div className="textwidget">
                      <div style={{
                        marginTop: '10px',
                        background: '#fff',
                        padding: '20px 20px 0 20px',
                        border: '1px solid #eee',
                        borderRadius: '2px',
                        boxShadow: '0px 25px 50px -10px rgba(0,0,0,0.1)',
                      }}>
                        <h4 style={{ textAlign: 'center', marginBottom: '20px' }}>
                          <span style={{ fontSize: '.8em' }}>Sick and tired of email and spreadsheets?</span>
                        </h4>
                        <a href="https://truecoach.co/" title="Personal Trainer Software"
                           style={{ padding: 0, display: 'block', marginBottom: '10px', borderBottom: '0px' }}>
                          <img src="https://truecoach.co/thinking-remotely/wp-content/uploads/2018/10/tc_space_2.png"/></a>
                        <p style={{
                          marginBottom: '20px',
                          textAlign: 'center',
                          lineHeight: '1.5em',
                          fontSize: '.9em',
                        }}>Try
                          TrueCoach free for 14 days!</p>
                        <p style={{ textAlign: 'center' }}>
                          <a href="https://truecoach.co/" title="Personal Trainer Software"
                             className="button arrow-right">Get Started</a></p>
                      </div>
                    </div>
                  </div>
                </section>

              </aside>
            </div>
          </div>
        </Row>
      </section>
    )
  }
}

export default LiveCoachBlog