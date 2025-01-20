import instance from './base/instance';

export const doFileUpload = async (file: File) => {
  if (file) {
    const formData = new FormData();
    formData.append('file', file);

    const body = formData;
    return await instance.post('/upload', body);
  }

  return null;
};

export const doMultipleFileUpload = async (files: File[]) => {
  if (files) {
    const formData = new FormData();
    files.map(file => formData.append('files', file));

    const body = formData;
    return await instance.post('/upload/multiple', body);
  }

  return null;
};
