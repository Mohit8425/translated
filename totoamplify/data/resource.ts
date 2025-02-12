import { defineData, type ClientSchema } from '@aws-amplify/backend';

/**
 * Define the data schema and API configuration
 */
export const data = defineData({
  ClientSchema: ClientSchema.fromModel('translationRequests', {
      type: 'model',
      attributes: {
        primaryKey: ['id']
      },
      fields: {
        id: 'ID!',
        fileKey: 'String!',
        inputLanguage: 'String!',
        outputLanguage: 'String!',
        pages: 'Int!',
        status: 'String!',
        createdAt: 'AWSDateTime!'
      }
    })
});