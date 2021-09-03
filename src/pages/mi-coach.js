import React from 'react';
import Layout from '../components/Layout/layout';
import {Helmet} from "react-helmet";
import MICoach from "../components/MICoach";

class MICoachIndex extends React.Component {
    render() {
        return (
            <Layout>
                <Helmet title="Resiliens">
                    <meta charSet="utf-8" />
                    <title>MI Coach - A comprehensive app for Motivational Interviewing</title>
                    <meta
                        name="keywords"
                        content="MI Coach, Motivational Interviewing, Behavior Change, Behavior Tracking, Depression, Anxiety, Self Harm, Eating Disorders, Recovery, Anger, Relationships, PTSD, Chronic illness, OCD, PTSD, ADHD, Substance Abuse, Addiction, Stress"
                    />
                    <meta property="og:type" content="article"/>
                    <meta property="og:url" content="https://resiliens.com/mi-coach/"/>
                    <meta property="og:image" content="https://res.cloudinary.com/dbt/image/upload/v1630677105/resiliens/mi_og_img.png"/>
                    <meta property="og:image:width" content="200" />
                    <meta property="og:image:height" content="200" />
                </Helmet>
                <div
                    id='wrapper'
                    className={'coach-wrapper'}
                    style={{paddingBottom: 0}}
                >
                    <MICoach />
                </div>
            </Layout>
        )
    }
}

export default MICoachIndex
