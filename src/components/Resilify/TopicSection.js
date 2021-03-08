import React, {useState} from "react";
import {Button, Empty} from "antd";
import Slider from "./common/Slider";
import {generateRandomID} from "./common/helper";
import Program from "../Program";
import {Link} from "gatsby";

const TopicSection = props => {
    const [key, setKey] = useState("All");
    const [count, setCount] = useState(0);

    let programs = key === "All" ? props.programs : props?.programs?.filter(({topics}) => topics?.includes(key));

    programs = programs?.filter(({marketingImage}) => marketingImage);
    return (
        <div className="resilify-home-page-body">
            <div className="resilify-program-section">
                <div className="program-section" id={`topic-tabs`}>
                    <h3 className="program-section-title base-text">Programs</h3>
                </div>
                {programs?.length ?
                    <Slider className="program-wrapper" key={generateRandomID()}>
                        {programs?.map((program) => <Program program={program} onReload={() => setCount(count + 1)}/>)}
                    </Slider> : <Empty description="No programs available for this categories"/>}
                <div style={{textAlign: "center", marginTop: 20}}>
                    <Link to={`/resilify/category/all`}>
                        <Button className="request-demo-btn base-text">More
                            Programs</Button>
                    </Link>
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
                                   Acess these programs anytime / anywhere
                                    <div className="divider"/>
                                </h3>
                                <ul className="para-text">
                                    <li className="para-text">Download and watch offline</li>
                                    <li className="para-text">PDF workbooks for every program</li>
                                    <li className="para-text">Watch on desktop, phone, or TV</li>
                                    <li className="para-text">New programs added every month</li>
                                </ul>
                                <div className="apps">
                                    <img src={require("../../assets/images/app-store.png")}/>
                                    <img src={require("../../assets/images/play-store.png")}/>
                                </div>
                                {/*<Button className="join-program-btn para-text" onClick={() => scrollToDiv("#topic-tabs")}>Browse Programs</Button>*/}
                            </div>
                        </div>
                        <div className="image">
                            <img src={require("../../assets/images/resiliens_with_devices.png")}/>
                        </div>
                    </div>
                </div>
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
            </div>
        </div>
    )
};
export default TopicSection;
