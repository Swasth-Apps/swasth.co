import React, {useState} from "react";
import {Link} from "gatsby";
import {Button, Empty} from "antd";
import {getCloudIDFromImageName, scrollToDiv} from "../common/helper";
import CategoryTabs from "../common/CategoryTabs";
import {cloudinary} from "../../../helper/CLImage";
import Program from "../../Program";
import {useSelector} from "react-redux";
import CategoryMobileTabs from "../CategoryMobileTabs";
import Loader from "../../Loader";
import Logo from "../../../assets/images/resilify/logo.png"

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
    const loading = useSelector(state => state.commonData.resilifyLoading);
    const data = useSelector(state => state.commonData);

    const toggleMore = () => {
        setShowMore(!showMore)
    };


    let temps = [];

    let topic = null;

    let category = typeof window !== 'undefined' ? window?.location?.pathname?.substring('/resilify/category/'.length) : 'all';
    category = category && category?.split("/")?.[0];

    const programs = data?.programs || [];
    const topics = data?.topics || [];

    if (category === "all") {
        temps = programs
    } else {
        topic = topics?.find(({name}) => name && name?.split(" ")?.join("-")?.toLowerCase() === category);
        temps = programs?.filter(({topics}) => topics?.includes(topic?.id))
    }
    const p = showMore ? temps?.filter((_, i) => i < 8) : temps;

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
                            <CategoryTabs topics={topics} category={category}/>
                        </div>
                        <CategoryMobileTabs topics={topics} category={category}/>
                    </div>
                </div>
                {/*      <div className="coaching-overview-container">
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
                </div>*/}
            </div>
        </div>
        <div className="category-page-body">
            <div className="program-section" id={`topic-tabs`}>
                <h3 className="program-section-title base-text">Programs</h3>
            </div>
            {loading ? <Loader/> : <>

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
            </>}

        </div>
    </div>;

};

export default CategoryPageScreen;
