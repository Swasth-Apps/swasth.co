import React from "react";
import {getItemsPerSlider} from "./helper";
import Slider from "react-slick";

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style}}
            onClick={onClick}
        >
            <img src={require("../../../assets/images/right.png")} />
        </div>
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style}}
            onClick={onClick}
        >
            <img src={require("../../../assets/images/left.png")} />
        </div>
    );
};


const items = getItemsPerSlider();
const SliderComponent = props => {
    const settings = {
        className: props.className,
        infinite: false,
        speed: 500,
        slidesToShow: props.perSlide || items,
        slidesToScroll: props.perSlide  || items,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: props.perSlide || 4,
                    slidesToScroll: props.perSlide  || 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: props.perSlide || 3,
                    slidesToScroll: props.perSlide  || 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: props.perSlide || 2,
                    slidesToScroll: props.perSlide  || 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: props.perSlide || 1,
                    slidesToScroll:props.perSlide  ||  1
                }
            }
        ],
        nextArrow: <NextArrow  />,
        prevArrow: <PrevArrow  />
    };
    return(
        <>
            <Slider {...settings} >
               {props.children}
            </Slider>
            </>
    )
};

export default SliderComponent;
