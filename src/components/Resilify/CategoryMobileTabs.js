import React from "react";
import {Link} from "gatsby";
import {Popover} from "antd";

const CategoryMobileTabs = (props) => {
    return(
            <div className='resilify-category-tabs-more'>
                <Popover
                    content={<div className='resilify-category-tabs-more-content'>
                        <div className='parent-container'>
                            <Link
                                to="/resilify/category/all/"
                                className={`category-tab para-medium-text ${props.category === "all" ? "selected-category" : ""}`}
                            >
                                All Categories
                            </Link>
                            {props.topics?.map(topic => {
                                    const slug = topic?.name?.split(" ")?.join("-")?.toLowerCase();
                                    return (<Link
                                        to={`/resilify/category/${slug}/`}
                                        className={`category-tab para-medium-text ${props.category === slug ? "selected-category" : ""}`}
                                    >
                                        {topic.name}
                                    </Link>)
                                }
                            )}
                        </div>
                    </div>}
                    overlayClassName='resilify-category-tabs-overlay'
                    placement='bottomLeft'
                >
                    <a className='base-text'>Categories</a>
                </Popover>
            </div>
    )
};

export default CategoryMobileTabs;
