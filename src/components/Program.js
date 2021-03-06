import React from "react";
import { Link } from "gatsby";
import HtmlParser from "react-html-parser";
import {getCloudIDFromImageName} from "../helper/helper";
import CLImage from "../helper/CLImage";

const Program = props => {
    const program = props.program;
    return (
        <Link className="keen-slider__slide program-card" to={`/resilify/program/${program.slug}`}>
            <CLImage
                className="program-img"
                cloudId={getCloudIDFromImageName(
                    program.marketingImage,
                    "bodhi",
                    'tracks',
                )}
                imageHeight={800}
                imageWidth={1200}
            />
            <div className="program-detail">
                <div className="program-info">
                    <h3 className="base-text">{program.name}</h3>
                    <p className="para-text">
                        {HtmlParser(program.description)}
                    </p>
                </div>
            </div>
        </Link>
    )
};

export default Program;
