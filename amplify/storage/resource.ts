import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'translation-storage',
  authorization: {
    authenticated: {
      read: true,
      write: true,
    },
    guest: {
      read: true,
      write: true,
    }
  },
  folders: {
    source: {
      access: ['read', 'write'],
    },
    translated: {
      access: ['read'],
    }
  },
  uploadConstraints: {
    maxFileSize: 100 * 1024 * 1024, // 100MB max file size
    allowedFileTypes: [
      'application/pdf',
    ]
  }
});
