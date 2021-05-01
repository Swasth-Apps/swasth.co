import React from "react";
import About from "./About";
import Education from "./Education";
import HonorsAwards from "./HonorsAwards";
import {getCloudIDFromImageName} from "../../../helper/helper";
import CLImage from "../../../helper/CLImage";

class ProfileData extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {provider} = this.props;
        const links = provider?.resources?.filter(r => r.type === "link");
        const books = provider?.resources?.filter(r => r.type === "book");
        return (
            <div className="profile-data">

                <div className="profile-data-section-1">
                    <div className="profile-section">
                        <About provider={provider}/>
                        <Education provider={provider}/>
                        <HonorsAwards provider={provider}/>
                    </div>
                </div>

                <div className="profile-data-section-2">
                    <div className="profile-section">
                        <div className="location-section">
                            <div className="profile-data-content">
                                {links?.length ?
                                <div className="profile-content-box">
                                    <p className="base-text title">
                                        Links
                                    </p>
                                    <ul className="links">
                                        {links?.map(l =>
                                            <li className="para-text">
                                                <a
                                                    className="para-text"
                                                    target="_blank"
                                                    href={l.resource}
                                                >
                                                    {l.title}
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                </div> : null}
                                {books?.length ?
                                <div className="profile-content-box">
                                    <p className="base-text title">
                                        Books
                                    </p>
                                    <ul style={{paddingLeft: 0, paddingTop: 10,}} className="books">
                                        {books?.map(book =>
                                            <a href={book.resource} className="para-text">
                                                <CLImage
                                                    className="program-img"
                                                    cloudId={getCloudIDFromImageName(
                                                        book?.image,
                                                        "coaching",
                                                        'png',
                                                    )}
                                                />
                                                <div style={{marginBottom: 30,marginTop: 10}}>
                                                    <a
                                                        className="para-text"
                                                        style={{fontSize: 18}}
                                                        href={book.resource}
                                                        target="_blank"
                                                    >
                                                        {book.title}
                                                    </a>
                                                    <p className="para-text">
                                                        {book.description}
                                                    </p>
                                                </div>
                                            </a>
                                        )}
                                    </ul>
                                </div> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileData;
