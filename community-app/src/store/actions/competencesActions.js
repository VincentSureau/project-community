// Types
export const GET_COMPETENCES = 'GET_COMPETENCES';
export const COMPETENCES_RECEIVED = 'COMPETENCES_RECEIVED';

// Action creator
export const getCompetences = () => ({
  type: GET_COMPETENCES,
});

export const competencesReceived = competences => ({
  type: COMPETENCES_RECEIVED,
  competences,
});
