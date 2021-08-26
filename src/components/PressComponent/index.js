import React, {useEffect, useState} from 'react'
import Slider from "../Resilify/common/Slider";
import {generateRandomID} from "../Resilify/common/helper";
import {Link} from "gatsby";
import {ArrowRightOutlined} from "@ant-design/icons";
import CoverageBox from "./CoverageBox";


const PressComponent = (props) => {
    const [count,setCount] = useState(0);

    useEffect(()=>{
       setCount(count + 1)
    },[])

    const {coverages, releases} = props;

    return (
        <div className="resilify-home-page press-page">
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
                        If you want to get in touch with our press team, please email
                        <a className="roman-text press-email" href="mailto:media@resiliens.com"> media@resiliens.com</a>
                    </p>
                </div>
                <div className="resilify-home-page-body">
                    <div className="press-coverage-carousel resilify-program-section">
                        {coverages?.length && count > 0 ?
                            <Slider maxSlideNum={3} className="program-wrapper"  key={generateRandomID()}>
                                {coverages?.map(({node: {frontmatter}}) => (
                                    <CoverageBox frontmatter={frontmatter}  key={generateRandomID()} />
                                ))}
                            </Slider> : null}
                    </div>
                </div>
                <div className="press-release-section">
                    <h2 className="heavy-text center release-text">
                        Press Releases
                    </h2>
                    <div className="press-release-container">
                        {releases?.map(({node: {frontmatter, fields}}) => (
                            <Link to={`${fields.slug}`} className="release-card-link">
                                <div className="release-card">
                                    <h4 className="medium-text">{frontmatter?.title}</h4>
                                    <p className={"read-more-text roman-text"}>Read More <ArrowRightOutlined/></p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PressComponent;
