import { defineBackend } from '@aws-amplify/backend';
import { data } from './data/resource';
import { storage } from './storage/resource.ts';

export const backend = defineBackend({
  data,
  storage
});
