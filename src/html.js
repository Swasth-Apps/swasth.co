import React from "react"
import {Helmet} from "react-helmet";

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
                <meta property="og:site_name" content="Resiliens"/>
                <meta
                    name="google-site-verification"
                    content=""/>
                <meta property="og:description"
                      content="A platform built on evidence-based principles, delivered by licensed clinicians, coaches making care accessible, effective and scalable."/>

                <meta itemProp="image" content="/assets/images/resilience-logo.png"/>
                <link rel="manifest" href="/manifest.json"/>
                <link rel="icon" href="/assets/images/resilience-logo.png"/>

                <meta name="facebook-domain-verification" content="74eylemvkal03g10s7haulm4uc8jih" />
                <meta name="theme-color" content="#ffffff"/>

{/*                <script dangerouslySetInnerHTML= {{ __html:`
                !function (t, e, n, s, a, c, i, o, p) {
                        t.AppsFlyerSdkObject = a, t.AF = t.AF || function () {
                            (t.AF.q = t.AF.q || []).push([Date.now()].concat(Array.prototype.slice.call(arguments)))
                        }, t.AF.id = t.AF.id || i, t.AF.plugins = {}, o = e.createElement(n), p = e.getElementsByTagName(n)[0], o.async = 1, o.src = "https://websdk.appsflyer.com?" + (c.length > 0 ? "st=" + c.split(",").sort().join(",") + "&" : "") + (i.length > 0 ? "af_id=" + i : ""), p.parentNode.insertBefore(o, p)
                    }(window, document, "script", 0, "AF", "banners", {banners: {key: "4213623e-8b49-4d3c-8d51-a14a2712ca1a"}})
                        AF('banners', 'showBanner')`}} />*/}
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
