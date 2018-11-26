// Types
export const GET_PROSTATUS = 'GET_PROSTATUS';
export const PROSTATUS_RECEIVED = 'PROSTATUS_RECEIVED';

// Action creator
export const getProStatus = () => ({
  type: GET_PROSTATUS,
});

export const proStatusReceived = status => ({
  type: PROSTATUS_RECEIVED,
  status,
});
