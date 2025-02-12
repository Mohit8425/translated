import { API, graphqlOperation } from 'aws-amplify';
import { createTranslation } from '../../graphql/mutations';
import { uploadToS3 } from './upload-handler.js';

// ...existing code...

export async function submitForm(formData, fileList) {
  const fileKeys = [];
  for (const file of fileList) {
    const fileKey = await uploadToS3(file);
    fileKeys.push(fileKey);
  }
  await API.graphql(
    graphqlOperation(createTranslation, {
      input: {
        fileKey: fileKeys.join(','),
        inputLanguage: formData.inputLanguage,
        outputLanguage: formData.outputLanguage,
        pages: parseInt(formData.pages, 10),
        documentType: formData.documentType,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phoneNumber,
        notes: formData.notes,
        status: 'PENDING'
      }
    })
  );
}

// ...existing code...
