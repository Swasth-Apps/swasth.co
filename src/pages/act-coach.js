import React from 'react';
import Layout from '../components/Layout/layout';
import ACTCoach from '../components/ACTCoach';
import {Helmet} from "react-helmet";
class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
          <Helmet title="Resiliens">
              <meta charSet="utf-8" />
              <title>ACT iCoach - A comprehensive app for Acceptance and Committment Therapy</title>
              <meta
                  name="keywords"
                  content="ACT iCoach - A comprehensive app for Acceptance and Committment Therapy, Mood Tracking, Emotions, CBT Exercises, Cognitive Behavioral Therapy Exercises, Depression, Anxiety, Self Harm, Eating Disorders, Recovery, Anger, Relationships, PTSD, Chronic illness, OCD, PTSD, ADHD, Substance Abuse, Addiction, Insomnia, Sleep disorder, phobia, psychosis, Social Anxiety, "
              />
              <meta property="og:type" content="article"/>
              <meta property="og:url" content="https://resiliens.com/act-coach/"/>
              <meta property="og:image" content="https://resiliens.netlify.app/static/ACT-splash-4e20838d8f7d3be55e7fc7d8cf9d1af7.png"/>
              <meta property="og:image:width" content="200" />
              <meta property="og:image:height" content="200" />
          </Helmet>
        <div
            id='wrapper'
            className={'coach-wrapper'}
            style={{paddingBottom: 0}}
        >
        <ACTCoach />
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
