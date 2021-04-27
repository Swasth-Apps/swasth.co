import React from "react"

export default class HTML extends React.Component {
    render() {
        return (
            <html {...this.props.htmlAttributes} className="h-full" style={{height: "100%"}}>
            <head>
                {this.props.headComponents}
                <meta charSet="utf-8"/>
                <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                <meta httpEquiv="cache-control" content="no-cache"/>
                <meta httpEquiv="expires" content="0"/>
                <meta httpEquiv="pragma" content="no-cache"/>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=Edge"/>
                <meta name="theme-color" content="#000000"/>
              {/*  <meta
                    name="keywords"
                    content="abc,abc,etc..."
                />*/}
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
                <link rel="canonical" href="/"/>
                <meta name="robots" content="index,follow"/>

                <meta name="twitter:card" content=""/>
                <meta property="twitter:card" content=""/>
                <meta property="twitter:url" content="https://resiliens.com/"/>
                <meta property="twitter:title" content="Resiliens"/>
                <meta property="twitter:description"
                      content="A platform built on evidence-based principles, delivered by licensed clinicians, coaches making care accessible, effective and scalable."/>
                <meta property="twitter:image" content=""/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="/"/>
                <meta property="og:image" content="/assets/images/resilience-logo.png"/>
                <meta property="og:description"
                      content="A platform built on evidence-based principles, delivered by licensed clinicians, coaches making care accessible, effective and scalable."/>
                <meta property="og:image:width" content="200"/>
                <meta property="og:image:height" content="200"/>
                <meta property="og:site_name" content="Resiliens"/>

                <meta
                    name="google-site-verification"
                    content=""/>
                /* Site Verification id is required.. */


                <meta itemProp="image" content="/assets/images/resilience-logo.png"/>
                <link rel="manifest" href="/manifest.json"/>
                <link rel="icon" href="/assets/images/resilience-logo.png"/>

                {/*<script async src="https://www.googletagmanager.com/gtag/js?id=UA-63369087-1"/>*/}

                <meta name="theme-color" content="#ffffff"/>
            </head>
            <body className="h-full" style={{height: "100%"}}>
            {this.props.preBodyComponents}
            <div
                key="body"
                id="___gatsby"
                dangerouslySetInnerHTML={{__html: this.props.body}}
                style={{height: "100%"}}
            />
            {this.props.postBodyComponents}
            </body>
            </html>
        )
    }
}
