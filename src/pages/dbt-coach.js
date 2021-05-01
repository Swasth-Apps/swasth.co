import React from 'react';
import Layout from '../components/Layout/layout';
import DBTCoach from '../components/DBTCoach';
import {Helmet} from "react-helmet";
class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
          <Helmet title="Resiliens">
              <meta charSet="utf-8" />
              <title>DBT Coach - A comprehensive app for Dialectical Behavior Therapy</title>
              <meta
                  name="keywords"
                  content="DBT App, Dialectical Behavior Therapy, DBT Diary Card, Mindfulness, Emotion Regulation, Interpersonal Effectiveness, Distress Tolerance, Emotions, BPD, Borderline Personality Disorder, Depression, Anxiety, Self Harm, Eating Disorders, Recovery, Anger, Relationships, PTSD, Chronic illness, OCD, PTSD, ADHD, Substance Abuse, Addiction, Stress"
              />
          </Helmet>
        <div
            id='wrapper'
            className={'coach-wrapper'}
            style={{paddingBottom: 0}}
        >
        <DBTCoach />
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
