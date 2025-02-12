import { generateClient } from 'aws-amplify/api';
import { uploadData } from 'aws-amplify/storage';

const client = generateClient();

export async function uploadFile(file) {
  try {
    const result = await uploadData({
      key: `uploads/${Date.now()}-${file.name}`,
      data: file,
      options: {
        contentType: file.type,
        progressCallback: (progress) => {
          const percentUploaded = (progress.loaded / progress.total) * 100;
          updateUploadProgress(percentUploaded);
        },
      },
    });
    return result.key;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}

export async function submitForm(formData) {
  try {
    const mutation = `
      mutation CreateTranslation($input: CreateTranslationInput!) {
        createTranslation(input: $input) {
          id
          status
        }
      }
    `;

    const variables = {
      input: {
        fileKey: formData.fileKey,
        inputLanguage: formData.inputLanguage,
        outputLanguage: formData.outputLanguage,
        pages: parseInt(formData.pages),
        documentType: formData.documentType,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        notes: formData.notes,
        status: 'PENDING'
      }
    };

    const response = await client.graphql({
      query: mutation,
      variables: variables
    });

    return response.data.createTranslation;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
}