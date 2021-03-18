import React from "react";
import { Link } from "gatsby";
import {expertsData, getCloudIDFromImageName} from "../../helper/helper";
import CLImage from "../../helper/CLImage";


const experts = expertsData;

class Experts extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="experts-navigation-wrapper">
                <div className="keen-slider">
                    {experts?.map(expert =>
                        <Link to={`/expert/${expert.slug}`} className="expert-container">
                            <div className="info">
                                <div className="img">
                                    <CLImage
                                        cloudId={getCloudIDFromImageName(
                                            expert.img,
                                            "coaching",
                                            'png',
                                        )}
                                    />
                                    <div>
                                        <p className="name base-text">{expert.name}</p>
                                        <p className="expertise para-text">{expert.expertise}</p>
                                    </div>
                                </div>

                                <p className="description para-text">{expert.description}</p>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        )
    }
}

export default Experts;
