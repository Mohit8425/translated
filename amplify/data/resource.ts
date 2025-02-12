import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  TranslationRequest: a
    .model({
      sourceLanguage: a.string(),
      targetLanguage: a.string(),
      status: a.enum(['PENDING', 'PROCESSING', 'COMPLETED', 'FAILED']),
      clientEmail: a.string(),
      notes: a.string().optional(),
      files: a.hasMany('TranslationFile'),
    })
    .authorization([allow => allow.guest()]),

  TranslationFile: a
    .model({
      fileName: a.string(),
      fileUrl: a.string(),
      translatedFileUrl: a.string().optional(),
      request: a.belongsTo('TranslationRequest'),
      status: a.enum(['PENDING', 'TRANSLATED', 'FAILED']),
    })
    .authorization([allow => allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam',
  },
});
