import React from "react";
import HtmlParser from "react-html-parser";
import {getCloudIDFromImageName} from "../helper/helper";
import CLImage from "../helper/CLImage";

const Program = props => {
    const program = props.program;
    return (
        <a className="keen-slider__slide program-card" href={`https://resilify.org/program-detail/${program.slug}`}>
            <CLImage
                className="program-img"
                cloudId={getCloudIDFromImageName(
                    program.image,
                    "bodhi",
                    'tracks',
                )}
                imageHeight={800}
                imageWidth={1200}
            />
            <div className="program-detail">
                <div className="program-info">
                    <h3 className="base-text">{program.title}</h3>
                    <p className="para-text">
                        {HtmlParser(program.description)}
                    </p>
                </div>
            </div>
        </a>
    )
};

export default Program;
