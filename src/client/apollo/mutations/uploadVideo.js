import { gql, useMutation } from '@apollo/client';

const UPLOAD_VIDEO = gql`
  mutation uploadVideo($file: Upload!) {
    uploadAvatar(file : $file) {
      filename
      url
    }
  }
`;

export const getUploadVideoConfig = () => ({
  update(cache, { data: { uploadVideo } }) {
    console.log(uploadVideo);
    if(uploadVideo && uploadVideo.url) {
      cache.modify({
        fields: {
          currentUser(user, { readField }) {
            cache.modify({
              id: user,
              fields: {
                avatar() {
                  return uploadVideo.url;
                }
              }
            })
          }
        }
      });
    }
  }
});

export const useUploadVideoMutation = () => useMutation(UPLOAD_VIDEO, getUploadVideoConfig());
