import { Storage } from 'aws-amplify';

export async function uploadToS3(file) {
  const fileKey = `${Date.now()}-${file.name}`;
  await Storage.put(fileKey, file);
  return fileKey;
}
