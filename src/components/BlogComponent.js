import React from 'react'
import { Col, Row,Icon } from 'antd'
import img from '../assets/images/blogImg.png'
import socialIcons from '../assets/images/socialIcons.png'

class LiveCoachBlog extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className='feature-section-group blog-section-container'>
        <Row className='card-row -margin-bottom -row-flex divider col-reverse blog-section'
             style={{ transform: 'translateY(10%)' }}
             gutter={16}>
          <Col md={12} className='card-col -margin-bottom top-blog-section'>
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
        <Row className='card-row -margin-bottom -row-flex divider col-reverse'
             style={{ alignItems:'flex-start', }}
             gutter={16}>
          <Col md={12} className='card-col -margin-right -margin-bottom'>
            <div className='subtitle base-text navy-blue para-text'>
              Historically, we’ve gained nuance and perspective into our coworkers and clients’ thoughts, feelings, and actions through working with them shoulder-to-shoulder in specially-designed studios, conference rooms, and even the occasional makeshift office corner. And when we’ve had design thinking workshops, we see these intangible connections become amplified. Through whiteboard, presentations, and dot voting, cross-functional teams bond while co-creating new ideas, making decisions, and aligning on future goals.
              <br />
              <br />
              But when getting together presents a bit of a challenge, things change. It’s often difficult to replicate that “magic” organically happens collaborating while co-located. At InVision, though, we’ve found it’s a challenge we can overcome. We’ve been a wholly distributed company since our inception, with employees from all over the globe working from their living rooms, bedrooms, home offices, converted garage, etc. Using reliable technology and, more importantly, mechanisms to establish trust as early as possible, we’ve not only run these workshops remotely, but also have recreated a bit of that “magic.”
              <br />
              <br />
              I’ve facilitated quite a few of these remote workshops in my time here, ranging as small as a group of five to as large as 100. Despite time zone differences and lack of experience with the tools and process for some participants, all of these workshops have concluded with positive outcomes so far (knock on wood). I’ve found that the key to a good remote workshop is creating a space for participants to freely communicate their inner thoughts and feelings. While that may come part and parcel IRL, it takes some planning when workshopping in a virtual setting.
              <br />
              <br />
              I’ve had several participants ask me to share my process recently, so I thought I’d create this post as a helpful tool to get people collaborating better. Here, the steps I take to facilitating a successful remote workshop:
              <br />
              <br />
              This article assumes that you have previous experience in facilitating design thinking-based workshops (or sprints). If you’re new to the process, I suggest reading Enterprise Design Sprints by Richard Banfield, even if you’re not working at an enterprise-level company. Also, consider Design Sprint: A Practical Guidebook for Building Great Digital Products co-authored by Richard, C. Todd Lombardo, and Trace Wax.
            </div>
            <div className='blog-tags'>
              <p className='para-text'>
                MindFulness
              </p>
              <p className='para-text'>
                MindFulness
              </p>
              <p className='para-text'>
                MindFulness
              </p>
              <p className='para-text'>
                MindFulness
              </p>
            </div>
            <div className='blog-user'>
              <div className='user-info para-text'>
              <img src={img}/>
                Gana Pemmanda
              </div>
              <div className='social-icons'>
                <Icon type='facebook' />
                <Icon type='twitter' />
                <Icon type='instagram' />
              </div>
            </div>
          </Col>
          <Col md={12} className='card-col image-col recent-story-container'>
            <h3 className='base-text navy-blue'>Recent Stories</h3>
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
          </Col>
        </Row>

        <Row md={12} className='card-col image-col recent-story-container all-category-section' style={{ transform: 'translateY(20%)' }}>
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

export default LiveCoachBlog