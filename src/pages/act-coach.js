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
