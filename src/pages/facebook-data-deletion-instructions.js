import React from 'react'
import Layout from '../components/Layout/layout';
import FBImg1 from "../assets/images/fb_deletion_img_1.png";
import FBImg2 from "../assets/images/fb_deletion_img_2.png";
import FBImg3 from "../assets/images/fb_deletion_img_3.png";
import {Helmet} from "react-helmet";


class FBDataDeletionInstructions extends React.Component {

    render() {
        return (
            <Layout noFooterMargin>
                {/*<Home />*/}
                <Helmet title="Resiliens">
                    <meta charSet="utf-8" />
                    <title>Resiliens - Behavioral health care for everyone</title>
                    <meta
                        name="keywords"
                        content="Resiliens, Behavioral Health Platform, Evidence based therapy, Coaching, Collaborative Care, Digital Behavioral Health, Depression, Anxiety, therapy, counseling, telehealth, mental health, psychoeducation,  family therapy, therapist, ehr, integration, psychology, optimisim, altruistic, "
                    />
                </Helmet>

                <div className="fb-data-deletion-page">
                <div
                    id='wrapper'
                    className={'coach-wrapper'}
                    style={{paddingBottom: 0}}
                >
                    <div className="fb-data-deletion-section">
                        <h2 className="heavy-text">Data Deletion Instructions URL</h2>
                        <h5 className="book-text">According to the Facebook Apps and Websites Platform rules, we have to provide User Data Deletion Callback URL or Data Deletion Instructions URL. If you want to delete your activities for the Resiliens App, you can remove them by following the instructions below.</h5>
                        <div className="steps">
                            <div className="step">
                                <p className="roman-text">
                                    1.
                                </p>
                                <p className="roman-text">
                                    Go to Your Facebook Account’s “Settings & Privacy”, then click on ”Settings“.
                                </p>
                            </div>
                            <div className="step">
                                <p className="roman-text">
                                    2.
                                </p>
                                <p className="roman-text">
                                    Next, go to “Apps and Websites” where you will see all of the activity related to apps and websites that are linked to your Facebook account.
                                    <div style={{textAlign:"center"}}>
                                    <img
                                        src={FBImg1}
                                    />
                                    </div>
                                </p>
                            </div>
                            <div className="step">
                                <p className="roman-text">
                                    3.
                                </p>
                                <p className="roman-text">
                                    Select the option box for the Resiliens App and click on the “Remove” button.
                                    <div style={{textAlign:"center"}}>
                                        <img
                                            src={FBImg2}
                                        />
                                    </div>
                                </p>
                            </div>
                            <div className="step">
                                <p className="roman-text">
                                    4.
                                </p>
                                <p className="roman-text">
                                    Mark the option boxes according to your preference and click on the “Remove” button.
                                    <div style={{textAlign:"center"}}>
                                        <img
                                            src={FBImg3}
                                        />
                                    </div>
                                </p>
                            </div>
                            <div className="step">
                                <p className="roman-text">
                                    5.
                                </p>
                                <p className="roman-text">
                                    You’re done! You removed Resiliens from your activities successfully.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </Layout>
        )
    }
}

export default FBDataDeletionInstructions
