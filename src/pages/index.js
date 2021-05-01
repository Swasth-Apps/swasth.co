import React from 'react'
import Layout from '../components/Layout/layout'
import Home from "../components/Home";
import {Helmet} from "react-helmet";

// import Home from './Home'


class HomeIndex extends React.Component {

    render() {
        return (
            <Layout noFooterMargin>
                {/*<Home />*/}
                <Helmet title="Resiliens">
                    <meta charSet="utf-8" />
                    <title>Resiliens - Behavioral health care for everyone</title>
                    <meta
                        name="keywords"
                        content="Resiliens, Behavioral Health Platform, Evidence based therapy, Coaching, Collaborative Care, Digital Behavioral Health, Depression, Anxiety, therapy, counseling, telehealth, mental health, psychoeducation,  family therapy, therapist, ehr, integration, psychology, optimisim, altruistic, "
                    />
                </Helmet>

                <Home/>
            </Layout>
        )
    }
}

export default HomeIndex
