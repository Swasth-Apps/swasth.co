import React from 'react'
import Layout from '../components/Layout/layout'
import {Helmet} from "react-helmet";
import {Button} from "antd";

// import Home from './Home'


class ResiEmdr extends React.Component {

    render() {
        return (
            <Layout noFooterMargin>
                {/*<Home />*/}
                <Helmet title="ResiEMDR">
                    <meta charSet="utf-8"/>
                    <title>ResiEMDR</title>
                    <meta
                        name="keywords"
                        content="ResiEMDR, Resiliens, Behavioral Health Platform, Evidence based therapy, Coaching, Collaborative Care, Digital Behavioral Health, Depression, Anxiety, therapy, counseling, telehealth, mental health, psychoeducation,  family therapy, therapist, ehr, integration, psychology, optimisim, altruistic, "
                    />
                </Helmet>
                <div
                    className={"emdr-top-banner"}
                    style={{
                        backgroundImage: `url(${require("../assets/images/resi-emdr-bg-img.png")})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}
                >
                    <div
                        id='wrapper'
                        className={'coach-wrapper'}
                        style={{paddingBottom: 0}}
                    >
                        <div className={"half-side"}>
                            <div className={"logo-section"}>
                                <img src={require("../assets/images/emdr-logo.png")}/>
                                <h2 className={"heavy-text"}>
                                    ResiEMDR
                                </h2>
                            </div>
                            <h1 className={"medium-text main-title"}>
                                A Comprehensive Platform for
                                <br/>
                                <span className={"heavy-text"}>
                           EMDR Therapy
                       </span>
                            </h1>
                            <p className={"roman-text"}>
                                Practice EMDR anytime, anywhere. As a Clinician use the integrated ResiEMDR Platform to deliver the best EMDR therapy.
                            </p>
                            <Button className="request-demo-btn" onClick={() => window?.open("https://emdr.resiliens.com", "_blank")}>
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default ResiEmdr
