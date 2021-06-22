import React from "react";
import { Link } from "gatsby";
import HtmlParser from "react-html-parser";
import {getCloudIDFromImageName} from "../helper/helper";
import CLImage from "../helper/CLImage";

const Program = props => {
    const program = props.program;
    console.log("========",program.sessions)
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
               Sessions {' '} {program?.sessions?.session?.length}
            </div> : null}
            <div className="program-detail">
                <div className="program-info">
                    <h4 className="base-text">{program.title}</h4>
                    {/*<div className="program-tags">
                        {program?.tags?.map(tag => <p className="tag">{tag}</p>)}
                    </div>*/}
                    <p className="html-parser-description" >
                        {HtmlParser(program.overview)}
                    </p>
                </div>
            </div>
        </Link>
    )
};

export default Program;
