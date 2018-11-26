// Types
export const GET_HOME = 'GET_HOME';
export const MEMBERS_HOME_RECEIVED = 'MEMBERS_HOME_RECEIVED';
export const PROJECTS_HOME_RECEIVED = 'PROJECTS_HOME_RECEIVED';

// Action creator
export const getHomeData = () => ({
  type: GET_HOME,
});

export const membersForHomeReceived = data => ({
  type: MEMBERS_HOME_RECEIVED,
  membersHome: data,
});

export const projectsForHomeReceived = data => ({
  type: PROJECTS_HOME_RECEIVED,
  projectsHome: data,
});
