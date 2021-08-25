import React from "react";
import {getItemsPerSlider} from "./helper";
import Slider from "react-slick";
import RightIcon from "../../../assets/images/right.png"
import LeftIcon from "../../../assets/images/left.png"






const SliderComponent = props => {
    let items = getItemsPerSlider();
    items = props.maxSlideNum && (items > props.maxSlideNum) ? props.maxSlideNum : items;
    const returnNum = num => props.maxSlideNum && (num > props.maxSlideNum) ? props.maxSlideNum : num


    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style}}
                onClick={onClick}
            >
                <img src={RightIcon} />
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
                <img src={LeftIcon} />
            </div>
        );
    };

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
                    slidesToShow: props.perSlide || returnNum(4),
                    slidesToScroll: props.perSlide  || returnNum(4),
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: props.perSlide || returnNum(3),
                    slidesToScroll: props.perSlide  || returnNum(3),
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: props.perSlide || returnNum(2),
                    slidesToScroll: props.perSlide  || returnNum(2),
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: props.perSlide || returnNum(1),
                    slidesToScroll:props.perSlide  || returnNum( 1)
                }
            }
        ],
        nextArrow: <NextArrow  />,
        prevArrow: <PrevArrow  />
    };

    console.log("==== Settingd ====",settings)

    return(
        <>
            <Slider {...settings}>
               {props.children}
            </Slider>
            </>
    )
};

export default SliderComponent;
