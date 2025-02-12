import { Amplify } from 'aws-amplify';

export const configureAmplify = () => {
  Amplify.configure({
    API: {
      GraphQL: {
        endpoint: process.env.GRAPHQL_ENDPOINT,
        region: process.env.AWS_REGION,
      },
    },
    Storage: {
      S3: {
        bucket: process.env.S3_BUCKET,
        region: process.env.AWS_REGION,
      },
    }
  });
};