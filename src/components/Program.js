import React from "react";
import { Link } from "gatsby";
import HtmlParser from "react-html-parser";
import {getCloudIDFromImageName} from "../helper/helper";
import CLImage from "../helper/CLImage";

const Program = props => {
    const program = props.program;
    return (
        <Link className="keen-slider__slide program-card" to={`${props.slug}`}>
            <CLImage
                className="program-img"
                cloudId={getCloudIDFromImageName(
                    program.image,
                    "bodhi",
                    'characters',
                )}
                imageHeight={400}
                imageWidth={600}
            />
            {program?.sessions?.session?.length ?
            <div className="sessions-length roman-text">
               {`${program?.sessions?.session?.length} Sessions`}
            </div> : null}
            <div className="program-detail">
                <div className="program-info">
                    <h4 className="medium-text">{program.title}</h4>

                    <p className="html-parser-description" >
                        {HtmlParser(program.overview)}
                    </p>
                    <div className="hours-text-row">
                        <img src={require("../assets/images/clock-time.png")}/>
                        <p className="medium-text hours-text">
                            {program?.sessions?.session?.length}{' Weeks'}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
};

export default Program;
