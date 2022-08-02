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
              <meta property="og:type" content="article"/>
              <meta property="og:url" content="https://resiliens.com/dbt-coach/"/>
              <meta property="og:image" content="https://resiliens.netlify.app/static/DBT-splash_iphone-9a2cb9c73cde5fd7c361b60b409b2816.png"/>
              <meta property="og:image:width" content="200" />
              <meta property="og:image:height" content="200" />
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
