import React from 'react';
import Layout from '../components/Layout/layout';
import {Helmet} from "react-helmet";
import MICoach from "../components/MICoach";

class HomeIndex extends React.Component {
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

export default HomeIndex
