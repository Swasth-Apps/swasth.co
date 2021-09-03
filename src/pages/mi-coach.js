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
                    <meta property="og:image" content="https://resiliens.com/static/MI_Dashboard-b31da1eff7e705f2cfac26d90104d75c.png"/>

                    <meta property="og:description"
                          content="A platform built on evidence-based principles, delivered by licensed clinicians, coaches making care accessible, effective and scalable."/>
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
