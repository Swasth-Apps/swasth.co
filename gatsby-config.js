module.exports = {
  siteMetadata: {
    title: "Swasth Website",
    author: "Gana Pemmanda",
    description: "Home of of Swasth Inc."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/favico.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: 'swasth.co'
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
