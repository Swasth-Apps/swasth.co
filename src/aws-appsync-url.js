let env = process.env.NODE_ENV || 'development';

const graphQl_endPoints = {
  development: {
    RESILIFY: 'https://ciognbc4eraszaetlzqusuzbey.appsync-api.us-east-1.amazonaws.com/graphql',
    API_KEY: "da2-3hyo2q3rgrhjxcgtk33mc7e76i",

    RESILIFY_TRACKS: "https://ciognbc4eraszaetlzqusuzbey.appsync-api.us-east-1.amazonaws.com/graphql",
    TRACK_APIKEY: "da2-3hyo2q3rgrhjxcgtk33mc7e76i",


    COACHING_DEV_MARKETING: 'https://2iytwnhpanhevbcif4vtbgb5re.appsync-api.us-east-1.amazonaws.com/graphql',
    COACHING_DEV_API_KEY: "da2-a3lvko7r7jeivfhhcgj3dfcfpe",

    COACHING_MARKETING: 'https://pweihk6hhvfwtnmbw42d43uecy.appsync-api.us-east-1.amazonaws.com/graphql',
    COACHING_API_KEY: "da2-iv4jsoxdtzh4xfsngcpncoqeny",

    BUCKET_URL: "https://lifecoach-userfiles-mobilehub-332859420.s3.amazonaws.com/public/"
  },
  production: {
    RESILIFY: 'https://ciognbc4eraszaetlzqusuzbey.appsync-api.us-east-1.amazonaws.com/graphql',
    API_KEY: "da2-3hyo2q3rgrhjxcgtk33mc7e76i",

    RESILIFY_TRACKS: "https://ciognbc4eraszaetlzqusuzbey.appsync-api.us-east-1.amazonaws.com/graphql",
    TRACK_APIKEY: "da2-3hyo2q3rgrhjxcgtk33mc7e76i",


    COACHING_DEV_MARKETING: 'https://2iytwnhpanhevbcif4vtbgb5re.appsync-api.us-east-1.amazonaws.com/graphql',
    COACHING_DEV_API_KEY: "da2-a3lvko7r7jeivfhhcgj3dfcfpe",

    COACHING_MARKETING: 'https://pweihk6hhvfwtnmbw42d43uecy.appsync-api.us-east-1.amazonaws.com/graphql',
    COACHING_API_KEY: "da2-iv4jsoxdtzh4xfsngcpncoqeny",

    BUCKET_URL: "https://lifecoach-userfiles-mobilehub-332859420.s3.amazonaws.com/public/"
  },
};

export default graphQl_endPoints[env];
