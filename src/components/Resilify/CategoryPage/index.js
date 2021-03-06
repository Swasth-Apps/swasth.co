import React, {useState} from "react";
import { Link } from "gatsby";
import {Button, Col, Empty, Row} from "antd";
import {generateRandomID, getCloudIDFromImageName, scrollToDiv} from "../common/helper";
import CategoryTabs from "../common/CategoryTabs";
import CLImage, {cloudinary} from "../../../helper/CLImage";
import Slider from "../common/Slider";
import Program from "../../Program";
import {CheckOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";


const getCLImageUrl = image => {
    const img = getCloudIDFromImageName(
        image,
        "bodhi",
        'tracks',
    );
    let opts = {};
    Object.assign(
        opts,
        {
            crop: 'fill',
            gravity: 'face',
            format: 'jpg',
            quality: 75,
            secure: true,
        },
    );
    opts.width = 1200;
    opts.height = 800;
    return cloudinary.url(img, opts);
};

const CategoryPageScreen = () => {
    const [showMore, setShowMore] = useState(true);
    const data = useSelector(state => state.commonData);

    const toggleMore = () => {
        setShowMore(!showMore)
    };


    let temps = [];

    let topic = null;

    let category = typeof window !== 'undefined' ? window.location.pathname.substring('/resilify/category/'.length) : 'all';
    category = category?.split("/")?.[0];

    const programs = data?.programs || [];
    const topics = data?.topics || [];

    if (category === "all") {
        temps = programs
    } else {
        topic = topics?.find(({name}) => name?.split(" ")?.join("-")?.toLowerCase() === category);
        temps = programs?.filter(({topics}) => topics?.includes(topic?.id))
    }
    const p = showMore ? temps?.filter((_, i) => i < 8) : temps;

    return <div className="resilify-category-page">
        <div className="banner-img">
            <div className="home-top-banner">
                <div className="top-section">
                    <CategoryTabs topics={topics} category={category}/>
                </div>
                <div className="coaching-overview-container">
                    <div className="coaching-overview">
                        <div
                            id='wrapper'
                            className={'coach-wrapper'}
                            style={{paddingBottom: 0}}
                        >
                            <Row className='-row-flex-center card-row bg-img'>
                                <Col md={24}>
                                    <Row className='card-row'>
                                        <Col md={12} className="content">
                                            <h3 className='bottom-space base-text program-grounded'>
                                                {topic ? topic.name : "All Categories"}
                                            </h3>
                                            <div className='para-text black-18-font margin-bottom-25'>
                                                <p className="width-90 para-text">
                                                    {topic?.description}
                                                </p>
                                            </div>
                                        </Col>
                                        <Col md={12} className="-margin-right img-section"
                                             style={{textAlign: "center"}}>
                                            <img
                                                className='custom-image'
                                                src={getCLImageUrl(topic?.image) || require("../../../assets/images/resilify/all-categories.jpg")}
                                                alt='Therapy'
                                                style={{maxWidth: "100%"}}
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="category-page-body">
            <div className="program-section" id={`topic-tabs`}>
                <h3 className="program-section-title base-text">Programs</h3>
            </div>
            <div className="program-wrapper">
                {p?.map(program =>
                    <Program program={program} onReload={() => this.forceUpdate()}/>
                )}
            </div>
            {p?.length ? null : <Empty description="No Programs available for this category."/>}
            {temps?.length > 8 ? showMore ?
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
        </div>

        <div
            id='wrapper'
            className={'coach-wrapper'}
            style={{paddingBottom: 0}}
        >
            <div className="learning-section">
                <div className="section">
                    <h2 className="base-text">Start learning from the best minds now</h2>
                    <ul>
                        <li className="para-text"><CheckOutlined /> All 100 classes and categories</li>
                        <li className="para-text"><CheckOutlined /> New classes added every month</li>
                        <li className="para-text"><CheckOutlined /> Download and watch offline</li>
                        <li className="para-text"><CheckOutlined /> PDF workbooks for every class</li>
                        <li className="para-text"><CheckOutlined /> Watch on your desktop, phone, or TV</li>
                        <li className="para-text"><CheckOutlined /> Available audio-only lessons</li>
                    </ul>
                    <button className='request-demo-btn' style={{marginBottom: 20}}>
                        Get Started
                    </button>
                </div>
            </div>
            <div className="explore-more">
                <h2 className="base-text">Explore More</h2>
                <Slider className="program-wrapper" key={generateRandomID()}>
                    {topics?.map((t) => {
                        const slug = t?.name?.split(" ")?.join("-")?.toLowerCase();
                        return (
                            <Link to={`/resilify/category/${slug}`} className="category">
                                <CLImage
                                    className="program-img"
                                    cloudId={getCloudIDFromImageName(
                                        t.image,
                                        "bodhi",
                                        'tracks',
                                    )}
                                />
                                <h4 className="base-text">{t?.name}</h4>
                                <p className="para-text">{programs?.filter(({topics}) => topics?.includes(t?.id))?.length} {' '} Programs</p>
                            </Link>
                        )
                    })}
                </Slider>
            </div>
        </div>
    </div>;

};

export default CategoryPageScreen;
