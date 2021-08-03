import React from 'react'
import Slider from "./Resilify/common/Slider";
import {generateRandomID} from "./Resilify/common/helper";
import {Link} from "gatsby";
import {ArrowRightOutlined} from "@ant-design/icons";


class PressComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { coverages, releases } = this.props;
        console.log(coverages)
        return(
            <div className="press-page">
                <div
                    id='wrapper'
                    className={'coach-wrapper'}
                    style={{paddingBottom: 0}}
                >

                    <div className="press-page-top-section">
                        <h2 className="heavy-text center coverage-text">
                            Press Coverage
                        </h2>
                        <p className="book-text center">
                            If you want to get in touch with our press team, please email <a className="roman-text press-email">press@modernhealth.com.</a>
                        </p>
                    </div>
                    <div className="resilify-home-page-body">
                    <div className="press-coverage-carousel resilify-program-section">
                        <Slider maxSlideNum={3} className="program-wrapper" key={generateRandomID()}>

                            {coverages?.map(({node: {frontmatter, fields}}) => (
                                <a className="keen-slider__slide program-card" href={frontmatter.link}>
                                    <img
                                        className="program-img"
                                        src={frontmatter.image}
                                    />
                                    <div className="program-detail">
                                        <div className="program-info">
                                            <h4 className="medium-text">{frontmatter.title}</h4>
                                        </div>
                                    </div>
                                </a>
                            ))}

                        </Slider>
                    </div>
                    </div>
                    <div className="press-release-section">
                        <h2 className="heavy-text center release-text">
                            Press Release
                        </h2>
                        <div className="press-release-container">
                            {releases?.map(({node: {frontmatter, fields}}) => (
                                <Link to={`${fields.slug}`} className="release-card-link">
                                <div className="release-card">
                                    <h4 className="roman-text">{frontmatter?.title}</h4>
                                    <p className={"read-more-text roman-text"}>Read More <ArrowRightOutlined /></p>
                                </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PressComponent;