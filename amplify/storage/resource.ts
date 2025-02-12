import { defineStorage } from '@aws-amplify/backend';

/**
 * Configure S3 storage for file uploads
 * Sets up public and private access rules
 */
export const storage = defineStorage({
  name: 'translatedStorage',
  authorization: {
    rules: [
      {
        allow: 'public',
        operations: ['read']
      },
      {
        allow: 'private',
        operations: ['create', 'read', 'update', 'delete']
      }
    ]
  }
});