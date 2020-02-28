import React from 'react'
import { Row } from 'antd'

class LiveCoachAbout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className='feature-section-group'>
        <Row className='card-row'>
          <div className="cell">
            <div className="well well--l">
              <h1>About Us</h1>
              <div className="well ts-large">
                <p>
                  We're on a mission to help coaches save time, deliver a better
                  experience for their clients, and grow their training businesses. We
                  built TrueCoach to enable 1-to-1 coaching that scales, freeing up time
                  for coaches to get out of the gym and work on their businesses rather
                  than in their businesses.
                </p>
              </div>
              <div className="card card--horizontal card--message well">
                <div
                  className="card-image"
                  style={{
                    backgroundImage:
                      'url("https://truecoach.co/cdn-cgi/image/width=960,fit=scale-down,format=auto,quality=75/assets/images/staff/casey.jpg")'
                  }}
                />
                <div className="card-content">
                  <blockquote>
                    "Born out of the struggle I saw the coaches I worked with go through
                    and my pain points as a remote client, I founded TrueCoach in 2015
                    to bring coaching into the modern age and help coaches build
                    long-term sustainable careers."
                  </blockquote>
                  <h4 className="mb025 tc-navy">Gana Pemmanda</h4>
                  <div className="tc-gray">Swasth CO-Founder and CEO</div>
                </div>
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div className="row">
            <div className="cell well well--l">
              <div className="grid grid--split">
                <div className="grid-left">
                  <h2>The Team</h2>
                </div>
                <div className="grid grid--3 grid-right">
                  <div className="card card--profile card--vertical">
                    <div
                      className="card-image"
                      style={{
                        backgroundImage:
                          'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/casey_new_1.jpg")'
                      }}
                    >
                      <div
                        className="card-activity"
                        style={{
                          backgroundImage:
                            'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/casey-activity.jpg")'
                        }}
                      />
                    </div>
                    <div className="card-content">
                      <p>
                        <strong>Casey Jenks</strong>
                      </p>
                      <p>Co-Founder and CEO</p>
                    </div>
                  </div>
                  <div className="card card--profile card--vertical">
                    <div
                      className="card-image"
                      style={{
                        backgroundImage:
                          'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/robbie_new_2.jpg")'
                      }}
                    >
                      <div
                        className="card-activity"
                        style={{
                          backgroundImage:
                            'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/robbie-activity.jpg")',
                          backgroundPosition: "left center"
                        }}
                      />
                    </div>
                    <div className="card-content">
                      <p>
                        <strong>Robbie Jack</strong>
                      </p>
                      <p>Co-Founder and CMO</p>
                    </div>
                  </div>
                  <div className="card card--profile card--vertical">
                    <div
                      className="card-image"
                      style={{
                        backgroundImage:
                          'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/alex_new_1.jpg")'
                      }}
                    >
                      <div
                        className="card-activity"
                        style={{
                          backgroundImage:
                            'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/alex-activity.jpg")'
                        }}
                      />
                    </div>
                    <div className="card-content">
                      <p>
                        <strong>Alex Ford</strong>
                      </p>
                      <p>Lead Frontend Developer</p>
                    </div>
                  </div>
                  <div className="card card--profile card--vertical">
                    <div
                      className="card-image"
                      style={{
                        backgroundImage:
                          'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/emilie_new_1.jpg")'
                      }}
                    >
                      <div
                        className="card-activity"
                        style={{
                          backgroundImage:
                            'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/emilie-activity.jpg")'
                        }}
                      />
                    </div>
                    <div className="card-content">
                      <p>
                        <strong>Emilie Hester</strong>
                      </p>
                      <p>Engineering Manager</p>
                    </div>
                  </div>
                  <div className="card card--profile card--vertical">
                    <div
                      className="card-image"
                      style={{
                        backgroundImage:
                          'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/webb_new_1.jpg")'
                      }}
                    >
                      <div
                        className="card-activity"
                        style={{
                          backgroundImage:
                            'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/webb-activity.jpg")'
                        }}
                      />
                    </div>
                    <div className="card-content">
                      <p>
                        <strong>Webb Henderson</strong>
                      </p>
                      <p>Design Lead</p>
                    </div>
                  </div>
                  <div className="card card--profile card--vertical">
                    <div
                      className="card-image"
                      style={{
                        backgroundImage:
                          'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/kate_new_1.jpg")'
                      }}
                    >
                      <div
                        className="card-activity"
                        style={{
                          backgroundImage:
                            'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/kate-activity.jpg")'
                        }}
                      />
                    </div>
                    <div className="card-content">
                      <p>
                        <strong>Kate Alexander</strong>
                      </p>
                      <p>VP of Customer Success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cell">
              <h2 className="well">The TrueCoach Good Boys &amp; Good Girls Club</h2>
              <div className="grid grid--6 grid-right">
                <div className="card card--profile card--profileSmall card--vertical">
                  <div
                    className="card-image"
                    style={{
                      backgroundImage:
                        'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/cammi.jpg")'
                    }}
                  >
                    <div
                      className="card-activity"
                      style={{
                        backgroundImage:
                          'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/cammi-puppy.jpg")'
                      }}
                    />
                  </div>
                  <div className="card-content">
                    <p className="mbf">
                      <strong>Cammi</strong>
                    </p>
                  </div>
                </div>
                <div className="card card--profile card--profileSmall card--vertical">
                  <div
                    className="card-image"
                    style={{
                      backgroundImage:
                        'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/charlie.jpg")'
                    }}
                  >
                    <div
                      className="card-activity"
                      style={{
                        backgroundImage:
                          'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/charlie-nap.jpg")'
                      }}
                    />
                  </div>
                  <div className="card-content">
                    <p className="mbf">
                      <strong>Charlie</strong>
                    </p>
                  </div>
                </div>
                <div className="card card--profile card--profileSmall card--vertical">
                  <div
                    className="card-image"
                    style={{
                      backgroundImage:
                        'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/merley.jpg")'
                    }}
                  >
                    <div
                      className="card-activity cursor-grab"
                      style={{
                        backgroundImage:
                          'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/merley-heartthrob.jpg")'
                      }}
                    />
                  </div>
                  <div className="card-content">
                    <p className="mbf">
                      <strong>Merley</strong>
                    </p>
                  </div>
                </div>
                <div className="card card--profile card--profileSmall card--vertical">
                  <div
                    className="card-image"
                    style={{
                      backgroundImage:
                        'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/raea.jpg")'
                    }}
                  >
                    <div
                      className="card-activity"
                      style={{
                        backgroundImage:
                          'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/raea-2.jpg")'
                      }}
                    />
                  </div>
                  <div className="card-content">
                    <p className="mbf">
                      <strong>Raea</strong>
                    </p>
                  </div>
                </div>
                <div className="card card--profile card--profileSmall card--vertical">
                  <div
                    className="card-image"
                    style={{
                      backgroundImage:
                        'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/riggins.jpg")'
                    }}
                  >
                    <div
                      className="card-activity"
                      style={{
                        backgroundImage:
                          'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/riggins-boop.jpg")'
                      }}
                    />
                  </div>
                  <div className="card-content">
                    <p className="mbf">
                      <strong>Riggins</strong>
                    </p>
                  </div>
                </div>
                <div className="card card--profile card--profileSmall card--vertical">
                  <div
                    className="card-image"
                    style={{
                      backgroundImage:
                        'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/bailey-1.jpg")'
                    }}
                  >
                    <div
                      className="card-activity"
                      style={{
                        backgroundImage:
                          'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/bailey-2.jpg")'
                      }}
                    />
                  </div>
                  <div className="card-content">
                    <p className="mbf">
                      <strong>Bailey</strong>
                    </p>
                  </div>
                </div>
                <div className="card card--profile card--profileSmall card--vertical">
                  <div
                    className="card-image"
                    style={{
                      backgroundImage:
                        'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/pearly.jpg")'
                    }}
                  >
                    <div
                      className="card-activity"
                      style={{
                        backgroundImage:
                          'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/pearly.jpg")'
                      }}
                    />
                  </div>
                  <div className="card-content">
                    <p className="mbf">
                      <strong>Pearly</strong>
                    </p>
                  </div>
                </div>
                <div className="card card--profile card--profileSmall card--vertical">
                  <div
                    className="card-image"
                    style={{
                      backgroundImage:
                        'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/lily.jpg")'
                    }}
                  >
                    <div
                      className="card-activity"
                      style={{
                        backgroundImage:
                          'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/lily.jpg")'
                      }}
                    />
                  </div>
                  <div className="card-content">
                    <p className="mbf">
                      <strong>Lily</strong>
                    </p>
                  </div>
                </div>
                <div className="card card--profile card--profileSmall card--vertical">
                  <div
                    className="card-image"
                    style={{
                      backgroundImage:
                        'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/kuro.jpg")'
                    }}
                  >
                    <div
                      className="card-activity"
                      style={{
                        backgroundImage:
                          'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/kuro.jpg")'
                      }}
                    />
                  </div>
                  <div className="card-content">
                    <p className="mbf">
                      <strong>Kuro</strong>
                    </p>
                  </div>
                </div>
                <div className="card card--profile card--profileSmall card--vertical">
                  <div
                    className="card-image"
                    style={{
                      backgroundImage:
                        'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/nika_1.jpg")'
                    }}
                  >
                    <div
                      className="card-activity"
                      style={{
                        backgroundImage:
                          'url("https://truecoach.co/cdn-cgi/image/width=360,fit=scale-down,format=auto,quality=75/assets/images/staff/nika_2.jpg")'
                      }}
                    />
                  </div>
                  <div className="card-content">
                    <p className="mbf">
                      <strong>Nika</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </section>
  )}}

  export default LiveCoachAbout;