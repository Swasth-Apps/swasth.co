let env = process.env.NODE_ENV || 'development';

const graphQl_endPoints = {
  development: {
    RESILIFY: 'https://ciognbc4eraszaetlzqusuzbey.appsync-api.us-east-1.amazonaws.com/graphql',
    API_KEY: "da2-3hyo2q3rgrhjxcgtk33mc7e76i",
  },
  production: {
    RESILIFY: 'https://ciognbc4eraszaetlzqusuzbey.appsync-api.us-east-1.amazonaws.com/graphql',
    API_KEY: "da2-3hyo2q3rgrhjxcgtk33mc7e76i",
  },
};

export default graphQl_endPoints[env];
