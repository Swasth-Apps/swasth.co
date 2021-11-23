import React from "react";
import HtmlParser from "react-html-parser";

const About = ({provider}) => {

    return (
        <div className="profile-data-content">
            <div className="profile-content-box">
                <div className="-flex">
                    <p className="title base-text">About</p>
                </div>
               <p className="para-text desc-text">
                   {HtmlParser(provider?.about)}
               </p>

            </div>
        </div>
    )
};

export default About;
