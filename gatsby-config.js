module.exports = {
  siteMetadata: {
    title: "Swasth Website",
    author: "Swasth Inc",
    description: "Home Page of Swasth Inc."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
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
      resolve: `gatsby-plugin-s3`,
      options: {
          //bucketName: 'swasth.co'
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
