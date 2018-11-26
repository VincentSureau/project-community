// Types
export const POST_LOGIN = 'POST_LOGIN';
export const RECEIVED_TOKEN = 'RECEIVED_TOKEN';

// Action creator
export const submitLogIn = data => ({
  type: POST_LOGIN,
  data,
});

export const receivedToken = token => ({
  type: RECEIVED_TOKEN,
  token,
});
