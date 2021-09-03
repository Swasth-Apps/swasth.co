import React from 'react';
import Layout from '../components/Layout/layout';
import {Helmet} from "react-helmet";
import MICoach from "../components/MICoach";
import {MetaTags} from "../components/Resilify/common/MetaTags";

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
                    {MetaTags("https://resiliens.com/mi-coach/", "https://res.cloudinary.com/dbt/image/upload/v1630677105/resiliens/mi_og.png")}
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
