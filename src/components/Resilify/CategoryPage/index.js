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
import _ from "lodash";

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

const CategoryPageScreen = (props) => {
    const [showMore, setShowMore] = useState(true);

    const toggleMore = () => {
        setShowMore(!showMore)
    };


    let topic = null;
    let temps = [];

    let topics = _.map(_.uniqBy(props?.programs?.flatMap(({node:{frontmatter}}) => frontmatter?.categories?.category),"title"),"title") || [];


    let category = typeof window !== 'undefined' ? window?.location?.pathname?.substring('/resilify/category/'.length) : 'all';
    category = category && category?.split("/")?.[0];

    const programs = props?.programs || [];

    if (category === "all") {
        temps = programs
    } else {
        topic = topics?.find((name) => name && name?.split(" ")?.join("-")?.toLowerCase() === category);
        temps = props?.programs?.filter(({node:{frontmatter}}) => _.some(frontmatter?.categories?.category,({title}) => title === topic))
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
            </div>
        </div>
        <div className="category-page-body">
 {/*           <div className="program-section" id={`topic-tabs`}>
                <h3 className="program-section-title base-text">Programs</h3>
            </div>*/}
            {<>

                <div className="program-wrapper">
                    {p?.map(program =>
                        <Program program={program.node?.frontmatter} slug={program.node?.fields?.slug} onReload={() => this.forceUpdate()}/>

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
