require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Swasth Website",
    author: "Swasth Inc",
    description: "Home Page of Resiliens Inc.",
    siteUrl: `https://www.resiliens.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/resilience-logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        // [required] - path to your createStore module
        pathToCreateStoreModule: './src/Redux/store',
        // [optional] - options passed to `serialize-javascript`
        // info: https://github.com/yahoo/serialize-javascript#options
        // will be merged with these defaults:
        serialize: {
          space: 0,
          isJSON: true,
          unsafe: false,
        },
        // [optional] - if true will clean up after itself on the client, default:
        cleanupOnClient: true,
        // [optional] - name of key on `window` where serialized state will be stored, default:
        windowKey: '__PRELOADED_STATE__',
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          //bucketName: 'resiliens.com'
          bucketName: 'swasth-website'
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-offline'
  ],
}
