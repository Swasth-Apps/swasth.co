import React from 'react';
import Layout from '../components/Layout/layout';
import CBTCompanion from '../components/CBTCompanion';
import {Helmet} from "react-helmet";
class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
          <Helmet title="Resiliens">
              <meta charSet="utf-8" />
              <title>CBT Companion - A comprehensive app for Cognitive Behavioral Therapy</title>
              <meta
                  name="keywords"
                  content="CBT App, Cognitive Behavioral Therapy, Mood Tracking, Emotions, CBT Exercises, Cognitive Behavioral Therapy Exercises, Depression, Anxiety, Self Harm, Eating Disorders, Recovery, Anger, Relationships, PTSD, Chronic illness, OCD, PTSD, ADHD, Substance Abuse, Addiction, Insomnia, Sleep disorder, phobia, psychosis"
              />
              <meta property="og:type" content="article"/>
              <meta property="og:url" content="https://resiliens.com/cbt-companion/"/>
              <meta property="og:image" content="https://resiliens-dev.netlify.app/static/CBT-splash-752866355cd41216ce4b128dfc690110.png"/>
              <meta property="og:image:width" content="200" />
              <meta property="og:image:height" content="200" />
          </Helmet>
        <div
            id='wrapper'
            className={'coach-wrapper'}
            style={{paddingBottom: 0}}
        >
        <CBTCompanion />
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
