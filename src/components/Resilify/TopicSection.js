import React, {useState} from "react";
import {Button, Empty} from "antd";
import Slider from "./common/Slider";
import {generateRandomID} from "./common/helper";
import Program from "../Program";
import {Link} from "gatsby";
import {useSelector} from "react-redux";
import Loader from "../Loader";
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

                    <div className="program-section" id={`topic-tabs`}>
                        <h3 className="program-section-title base-text">Programs</h3>
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

                    <div style={{textAlign: "center", marginTop: 20}}>
                        <Link to={`/resilify/programs`}>
                            <Button className="request-demo-btn base-text">More
                                Programs</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div
                id='wrapper'
                className={'coach-wrapper'}
                style={{paddingBottom: 0}}
            >
                <div className="home-discover-section home-discover-right">
                    <div className="home-discover-inner-section">
                        <div className="content">
                            <div className="outer-div">
                                <h3 className="base-text">
                                    Access these programs anytime / anywhere
                                    <div className="divider"/>
                                </h3>
                                <ul className="para-text">
                                    <li className="para-text">Video-guided lessons</li>
                                    <li className="para-text">Intuitive Activities</li>
                                    <li className="para-text">Available on desktop, iPhone or Android</li>
                                    <li className="para-text">New programs added every month</li>
                                </ul>
                                <div className="apps">
                                    <img src={AppStoreIcon}/>
                                    <img src={PlayStoreIcon}/>
                                </div>
                                {/*<Button className="join-program-btn para-text" onClick={() => scrollToDiv("#topic-tabs")}>Browse Programs</Button>*/}
                            </div>
                        </div>
                        <div className="image">
                            <img src={ResiliensWithDevices}/>
                        </div>
                    </div>
                </div>

                {/*

                <div className="member-section" style={{
                    background: `url(${require("../../assets/images/resilify/coach-bg.png")}) no-repeat center center fixed`

                }}>
                    <div className="member-text">
                        <h1 className="base-text">
                            What members are saying
                            <div className="divider"/>
                        </h1>
                    </div>
                    <Slider perSlide={1} className="member-wrapper program-wrapper" key={generateRandomID()}>
                        {[1, 2, 31, 4, 5]?.map(() => <div className="keen-slider__slide member-card">
                            <div className="member-detail">
                                <div className="coach-info">
                                    <p className="para-text">
                                        “I've learned a positively immeasurable amount of things from Timbaland and
                                        Natalie
                                        Portman. It gave me this sense of possibility. Like I can actually do it. I can
                                        get
                                        a Billboard hit single, and it's not that far away.”
                                    </p>
                                    <h3 className="para-text">Micheal Clark </h3>
                                </div>
                            </div>
                        </div>)}
                    </Slider>

                </div>
 */}
            </div>
        </div>
    )
};
export default TopicSection;
