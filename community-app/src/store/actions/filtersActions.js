// Types
export const GET_FILTERS_MEMBERS = 'GET_FILTERS_MEMBERS';
export const GET_FILTERS_PROJECTS = 'GET_FILTERS_PROJECTS';
export const RECEIVED_FILTER_SPE = 'RECEIVED_FILTER_SPE';
export const RECEIVED_FILTER_PROMO = 'RECEIVED_FILTER_PROMO';
export const RECEIVED_FILTER_STATUS = 'RECEIVED_FILTER_STATUS';
export const SET_FILTER = 'SET_FILTER';

// Action creator
export const getFiltersMembers = () => ({
  type: GET_FILTERS_MEMBERS,
});

export const getFiltersProjects = () => ({
  type: GET_FILTERS_PROJECTS,
});

export const filterSpeReveived = data => ({
  type: RECEIVED_FILTER_SPE,
  data,
});

export const filterPromoReveived = data => ({
  type: RECEIVED_FILTER_PROMO,
  data,
});

export const filterStatusReveived = data => ({
  type: RECEIVED_FILTER_STATUS,
  data,
});

export const setFilter = (type, value) => ({
  type: SET_FILTER,
  filter: type,
  value,
});
