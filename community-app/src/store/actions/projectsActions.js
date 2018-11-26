// Types
export const GET_PROJECTS = 'GET_PROJECTS';
export const PROJECTS_RECEIVED = 'PROJECTS_RECEIVED';
export const GET_PROJECT = 'GET_PROJECT';
export const PROJECT_RECEIVED = 'PROJECT_RECEIVED';
export const GET_PROJECT_EDIT = 'GET_PROJECT_EDIT';
export const PROJECT_EDIT_RECEIVED = 'PROJECT_EDIT_RECEIVED';
export const PUT_PROJECT = 'PUT_PROJECT';

// Action creator
export const getProjects = () => ({
  type: GET_PROJECTS,
});

export const projectsReceived = projects => ({
  type: PROJECTS_RECEIVED,
  projects,
});

export const getProject = id => ({
  type: GET_PROJECT,
  id,
});

export const projectReceived = project => ({
  type: PROJECT_RECEIVED,
  project,
});

export const getProjectEdit = id => ({
  type: GET_PROJECT_EDIT,
  id,
});

export const projectEditReceived = project => ({
  type: PROJECT_EDIT_RECEIVED,
  project,
});

export const putProject = (id, data) => ({
  type: PUT_PROJECT,
  id,
  data,
});
