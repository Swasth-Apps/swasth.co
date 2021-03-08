import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "gatsby";
import CategoryTabs from "./common/CategoryTabs";
import Program from "../Program";
import {Button, Empty} from "antd";
import {scrollToDiv} from "./common/helper";

const ResilifyProgramsScreen = () => {
    const [showMore, setShowMore] = useState(true);
    const data = useSelector(state => state.commonData);

    const toggleMore = () => {
        setShowMore(!showMore)
    };

    const programs = data?.programs || [];
    const topics = data?.topics || [];

    const p = showMore ? programs?.filter((_, i) => i < 8) : programs;
    return <div className="resilify-category-page">
        <div className="banner-img">
            <div className="home-top-banner">
                <div className="top-section">
                    <div
                        id='wrapper'
                        className={'coach-wrapper'}
                        style={{paddingBottom: 0}}
                    >
                        <div className="resilify-category-tabs">
                            <div style={{width: "10%", textAlign: "right"}}>
                                <Link to="/resilify" className="base-text product-title">
                                    <img src={require("../../assets/images/resilify/logo.png")}/>RESILIFY
                                </Link>
                            </div>
                            <CategoryTabs topics={topics}/>
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
        </div>
    </div>;

};

export default ResilifyProgramsScreen;
