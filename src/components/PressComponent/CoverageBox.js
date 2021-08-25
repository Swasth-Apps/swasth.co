import React from "react";
import { Link } from "gatsby";

const CoverageBox = props => {

    const { frontmatter } = props;
    return(
        <Link className="keen-slider__slide program-card" to={frontmatter.link}>
            <img
                className="program-img"
                src={frontmatter.image}
            />
            <div className="program-detail">
                <div className="program-info">
                    <h4 className="medium-text">{frontmatter.title}</h4>
                </div>
            </div>
        </Link>
    )
};

export default CoverageBox;
