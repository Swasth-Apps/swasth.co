let env = process.env.NODE_ENV || 'development';

const graphQl_endPoints = {
  development: {
    RESILIFY_TRACKS: "https://ciognbc4eraszaetlzqusuzbey.appsync-api.us-east-1.amazonaws.com/graphql",
    TRACK_APIKEY: "da2-3hyo2q3rgrhjxcgtk33mc7e76i",

    COACHING_MARKETING: 'https://pweihk6hhvfwtnmbw42d43uecy.appsync-api.us-east-1.amazonaws.com/graphql',
    COACHING_API_KEY: "da2-iv4jsoxdtzh4xfsngcpncoqeny",

    BUCKET_URL: "https://lifecoach-userfiles-mobilehub-332859420.s3.amazonaws.com/public/"
  },
  production: {
    RESILIFY_TRACKS: "https://pgcm3zihm5d4vnuulp3oo6muyq.appsync-api.us-east-1.amazonaws.com/graphql",
    TRACK_APIKEY: "da2-csl22c3qijad5fusk3tscxgyhy",

    COACHING_MARKETING: 'https://pweihk6hhvfwtnmbw42d43uecy.appsync-api.us-east-1.amazonaws.com/graphql',
    COACHING_API_KEY: "da2-iv4jsoxdtzh4xfsngcpncoqeny",

    BUCKET_URL: "https://lifecoach-userfiles-mobilehub-332859420.s3.amazonaws.com/public/"

  },
};

export default graphQl_endPoints[env];
