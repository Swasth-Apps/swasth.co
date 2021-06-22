import React, {useState} from "react";
import {Link} from "gatsby";
import CategoryTabs from "./common/CategoryTabs";
import Program from "../Program";
import {Button, Col, Empty, Row} from "antd";
import {scrollToDiv} from "./common/helper";
import CategoryMobileTabs from "./CategoryMobileTabs";
import Logo from "../../assets/images/resilify/logo.png"
import _ from "lodash";

const ResilifyProgramsScreen = (props) => {
    const [showMore, setShowMore] = useState(true);

    const toggleMore = () => {
        setShowMore(!showMore)
    };

    const programs = props?.programs || [];
    const topics = _.map(_.uniqBy(props?.programs?.flatMap(({node:{frontmatter}}) => frontmatter?.categories?.category),"title"),"title") || [];

    const p = showMore ? programs?.filter((_, i) => i < 8) : programs;
    return <div className="resilify-category-page">
        <div className="banner-img">
            <div className="home-top-banner">
                <div className="top-section">
                    <div
                        id='wrapper'
                        className={'resilify-categories'}
                        style={{paddingBottom: 0}}
                    >
                        <Link to="/resilify" className="base-text product-title">
                            <img src={Logo}/> RESILIFY
                        </Link>
                        <div className="resilify-category-tabs">
                            <CategoryTabs topics={topics}/>
                        </div>
                       <CategoryMobileTabs topics={topics}/>
                    </div>
                </div>
            </div>
        </div>
        <section className='coaching-programs-banner-section' style={{marginTop: 20}}>
            <Row className='-row-flex-center' id='wrapper'>
                <Col md={24} style={{width: '100%'}}>
                    <p style={{textAlign: 'center'}}
                       className='bottom-space base-text tab-view'>
                        Self-guided Programs to help you live a happier life
                    </p>
                </Col>
            </Row>
        </section>
        <div className="category-page-body">
            <div className="program-section" id={`topic-tabs`}>
                <h3 className="program-section-title base-text">Programs</h3>
            </div>
            { <>

                <div className="program-wrapper">
                {p?.map(program =>
                    <Program program={program.node?.frontmatter} slug={program.node?.fields?.slug} onReload={() => this.forceUpdate()}/>
                )}
            </div>
            {p?.length ? null : <Empty description="No Programs available for this category."/>}
            {programs?.length > 8 ? showMore ?
                <div style={{textAlign: "center", margin: "20px 0 40px"}}>
                    <a rel="noreferrer" onClick={toggleMore}>
                        <Button className="request-demo-btn base-text" onClick={() => scrollToDiv("#topic-tabs")}>Show
                            More</Button>
                    </a>
                </div> : <div style={{textAlign: "center", margin: "20px 0 40px"}} onClick={toggleMore}>
                    <a rel="noreferrer">
                        <Button className="request-demo-btn base-text" onClick={() => scrollToDiv("#topic-tabs")}>Show
                            Less</Button>
                    </a>
                </div> : null}
            </>}
        </div>
    </div>;

};

export default ResilifyProgramsScreen;
