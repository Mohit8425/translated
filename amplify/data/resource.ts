import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  TranslationRequest: a
    .model({
      sourceLanguage: a.string(),
      targetLanguage: a.string(),
      status: a.enum(['PENDING', 'PROCESSING', 'COMPLETED', 'FAILED']),
      clientEmail: a.string(),
      notes: a.string().required(false),
      files: a.hasMany('TranslationFile'),
    })
    .authorization([a => a.allow.guest()]),

  TranslationFile: a
    .model({
      fileName: a.string(),
      fileUrl: a.string(),
      translatedFileUrl: a.string().required(false),
      request: a.belongsTo('TranslationRequest'),
      status: a.enum(['PENDING', 'TRANSLATED', 'FAILED']),
    })
    .authorization([a => a.allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam',
  },
});
