import React, {useState} from "react";
import {Button, Empty} from "antd";
import Slider from "./common/Slider";
import {generateRandomID} from "./common/helper";
import Program from "../Program";
import {Link} from "gatsby";
import AppStoreIcon from "../../assets/images/app-store.png"
import PlayStoreIcon from "../../assets/images/play-store.png"
import ResiliensWithDevices from "../../assets/images/resiliens_with_devices.png"

const TopicSection = props => {
    const [key, setKey] = useState("All");
    const [count, setCount] = useState(0);

    let programs = key === "All" ? props.programs : props?.programs?.filter(({node: {frontmatter}}) => frontmatter?.categories?.includes(key));

    return (
        <div className="resilify-home-page-body">
            <div
                id='wrapper'
                className={'coach-wrapper'}
                style={{paddingBottom: 0}}
            >
                <div className="resilify-program-section">

                    <div className="program-section same-line" id={`topic-tabs`}>
                        <h3 className="program-section-title base-text">Programs</h3>
                        {props.viewAll ?
                            <div style={{textAlign: "center"}}>
                                <Link to={`/resilify/programs`}>
                                    <a className="medium-text">View All</a>
                                </Link>
                            </div> : null}
                    </div>

                    {programs?.length ?
                        <Slider className="program-wrapper" key={generateRandomID()}>

                            {programs?.map(({node: {frontmatter, fields}}) => <Program
                                program={frontmatter}
                                slug={fields.slug}
                                onReload={() => setCount(count + 1)}
                            />)}

                        </Slider> :
                        <Empty description="No programs available for this categories"/>}

                    {!props.viewAll ?
                    <div style={{textAlign: "center", marginTop: 20}}>
                        <Link to={`/resilify/programs`}>
                            <Button className="request-demo-btn base-text">More
                                Programs</Button>
                        </Link>
                    </div> : null}
                </div>
            </div>
        </div>
    )
};
export default TopicSection;
