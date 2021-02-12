let env = process.env.NODE_ENV || 'development';

const graphQl_endPoints = {
  development: {
    // API_KEY: "da2-fas3whsgbzd4pnkownqnygc5z4",
    // COACHING_MARKETING: 'https://juleqc2ztbgzxe2ujek6wdv7uu.appsync-api.us-east-1.amazonaws.com/graphql',
    // BUCKET_URL: "https://coachingapp-userfiles-mobilehub-1299275089.s3.amazonaws.com/public/"
    COACHING_MARKETING: 'https://pweihk6hhvfwtnmbw42d43uecy.appsync-api.us-east-1.amazonaws.com/graphql',
    API_KEY: "da2-iv4jsoxdtzh4xfsngcpncoqeny",
    BUCKET_URL: "https://lifecoach-userfiles-mobilehub-332859420.s3.amazonaws.com/public/"
  },
  production: {
    COACHING_MARKETING: 'https://pweihk6hhvfwtnmbw42d43uecy.appsync-api.us-east-1.amazonaws.com/graphql',
    API_KEY: "da2-iv4jsoxdtzh4xfsngcpncoqeny",
    BUCKET_URL: "https://lifecoach-userfiles-mobilehub-332859420.s3.amazonaws.com/public/"
  },
};

export default graphQl_endPoints[env];
