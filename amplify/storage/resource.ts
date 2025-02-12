import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'translation-storage',
  access: {
    auth: {
      read: true,
      write: true,
    },
    unauth: {
      read: true,
      write: true,
    }
  },
  directory: {
    source: {
      operations: ['read', 'write'],
    },
    translated: {
      operations: ['read'],
    }
  },
  maxFileSize: 100 * 1024 * 1024, // 100MB
  fileTypes: ['application/pdf']
});
