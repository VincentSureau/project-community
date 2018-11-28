// Types
export const POST_LOGIN = 'POST_LOGIN';
export const RECEIVED_TOKEN = 'RECEIVED_TOKEN';
export const CONNECT_MEMBER = 'CONNECT_MEMBER';
export const DISCONNECT_MEMBER = 'DISCONNECT_MEMBER';
export const ERROR_CONNEXION = 'ERROR_CONNEXION';

// Action creator
export const submitLogIn = data => ({
  type: POST_LOGIN,
  data,
});

export const receivedToken = token => ({
  type: RECEIVED_TOKEN,
  token,
});

export const connectMember = () => ({
  type: CONNECT_MEMBER,
});

export const disconnectMember = () => ({
  type: DISCONNECT_MEMBER,
});

export const errorConnexion = connectionError => ({
  type: ERROR_CONNEXION,
  connectionError,
});
