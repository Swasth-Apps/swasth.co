import React from "react";
import {Link} from "gatsby";
import {generateRandomID} from "../helper";
import Slider from "react-slick";

const CategoryTabs = (props) => {
    const topics = props?.topics || [];
    return (

            <SliderComponent className="categories-wrapper" key={generateRandomID()}>
                <Link
                    to="/resilify/category/all/"
                    className={`category-tab base-text ${props.category === "all" ? "selected-category" : ""}`}
                >
                    All Categories
                </Link>
                {topics?.map(topic => {
                        const slug = topic?.name?.split(" ")?.join("-")?.toLowerCase();
                        return (<Link
                            to={`/resilify/category/${slug}/`}
                            className={`category-tab base-text ${props.category === slug ? "selected-category" : ""}`}
                        >
                            {topic.name}
                        </Link> )
                    }
                )}
            </SliderComponent>
    )
};


const NextArrow = (props) => {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style}}
            onClick={onClick}
        >
            <img src={require("../../../../assets/images/right.png")}/>
        </div>
    );
};

const PrevArrow = (props) => {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style}}
            onClick={onClick}
        >
            <img src={require("../../../../assets/images/left.png")}/>
        </div>
    );
};


const items = 6;
const SliderComponent = props => {
    const settings = {
        className: props.className,
        infinite: false,
        speed: 500,
        dots: false,
        slidesToShow: items,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
    };
    return (
        <>
            <Slider {...settings} >
                {props.children}
            </Slider>
        </>
    )
};

export default CategoryTabs;
