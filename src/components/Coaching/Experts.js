import React from "react";
import {Link} from "gatsby";
import {getCloudIDFromImageName} from "../../helper/helper";
import CLImage from "../../helper/CLImage";
import {Helmet} from "react-helmet";
import {Col, Row} from "antd";


class Experts extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const experts = this.props.experts;
        return (
            <div className="experts-navigation-wrapper">
                <Helmet title="Resiliens">
                    <meta charSet="utf-8"/>
                    <title>Resilens - Experts in Evidence Based Therapy</title>
                    <meta
                        name="keywords"
                        content="Resilens - Experts in Evidence Based Therapy, DBT, CBT, ACT, CFT, Compassion, Resilience, Motivational Interviewing, Cognitive Behavioral Therapy, Dialectic Behavior Therapy, Family therapy, Interpersonal psychotherapy, Exposure Therapy, MBSR, MBCT, Functional Family Therapy"
                    />
                </Helmet>
                <Row className='-row-flex-center'>
                    <Col md={24} style={{width: '100%'}}>
                        <h1 style={{textAlign: 'center'}}
                           className='base-text experts-title-text'>
                            World's leading experts in Evidence Based Therapy
                        </h1>
                    </Col>
                </Row>
                <div className="keen-slider">
                    {experts?.map(({node:{frontmatter,fields}}) =>
                        <Link to={`/expert/${fields.slug}`} className="expert-container">
                            <div className="info">
                                <div className="img">
                                    <div className="expert-img">
                                        <CLImage
                                            cloudId={getCloudIDFromImageName(
                                                frontmatter.profileImage,
                                                "coaching",
                                                'experts',
                                            )}
                                            options={{
                                                imageWidth: 400,imageHeight: 500
                                            }}
                                        />
                                        <div className="expert-info-section">
                                            <p className="name base-text">{frontmatter.name}</p>
                                            <p className="expertise medium-text">{frontmatter.title}</p>
                                        </div>
                                    </div>

                                </div>

                                {/*<p className="description para-text">{expert.description}</p>*/}
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        )
    }
}

export default Experts;
