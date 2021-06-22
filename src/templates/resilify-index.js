import React from 'react'
import Layout from '../components/Layout/layout'
import ResilifyScreen from '../components/Resilify'
import {graphql, StaticQuery} from 'gatsby'
import {Helmet} from "react-helmet";


class ResilifyIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            programs: props.data?.programs?.edges || []
        }
    }

    render() {
        return (
            <Layout
                extraHeader
            >
                <Helmet title="Resiliens">
                    <meta charSet="utf-8"/>
                    <title>Resiliens - Self guided Evidence-based programs (Resilify)</title>
                    <meta
                        name="keywords"
                        content="Resiliens - Self guided Evidence-based programs (Resilify), DBT, CBT, ACT, CFT, Compassion, Resilience, Motivational Interviewing, Cognitive Behavioral Therapy, Dialectic Behavior Therapy, Family therapy, Interpersonal psychotherapy, Exposure Therapy, MBSR, MBCT, Functional Family Therapy, Stress, Anxiety, Depression, Bipolar Disorder, Eating Disorder, PTSD, Paranoia, OCD, Obsessive compulsive disorder, Gratitude, Well being, Positive Psychology, Assertiveness, Health Anxiety, Self Compassion, Social Anxiety, Perfectionism, Self Esteem, Imposter syndrome, Panic Disorders, Worry and Rumination, Addiction, Substance Abuse, Anger, Sleep Disorder, Self harm"
                    />
                </Helmet>
                    <ResilifyScreen programs={this.state.programs}/>
            </Layout>
        )
    }
}

export default (props) => (
    <StaticQuery
        query={graphql`
      query AllResilifyPrograms {
        programs: allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "resilify-program" } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                overview
                title
                sessions {
                  session {
                    activityOverview
                    overview
                    title
                  }
                }
                description
                image
                categories {
                  category {
                    title
                  }
                }
              }
            }
          }
        }
      }
    `}
        render={(data, count) => <ResilifyIndex {...props} data={data} count={count}/>}
    />
)
