// initial state
import initialState from './initialState';

// Types
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const GET_MEMBERS = 'GET_MEMBERS';
export const GET_MEMBERS_SPE = 'GET_MEMBERS_SPE';
export const MEMBERS_RECEIVED = 'MEMBERS_RECEIVED';
export const GET_MEMBER = 'GET_MEMBER';
export const MEMBER_RECEIVED = 'MEMBER_RECEIVED';
export const GET_HOME = 'GET_HOME';
export const MEMBERS_HOME_RECEIVED = 'MEMBERS_HOME_RECEIVED';
export const PROJECTS_HOME_RECEIVED = 'PROJECTS_HOME_RECEIVED';
export const GET_PROJECTS = 'GET_PROJECTS';
export const PROJECTS_RECEIVED = 'PROJECTS_RECEIVED';
export const GET_MEMBER_EDIT = 'GET_MEMBER_EDIT';
export const MEMBER_EDIT_RECEIVED = 'MEMBER_EDIT_RECEIVED';
export const CHANGE_INPUT_FORM = 'CHANGE_INPUT_FORM';
export const GET_COMPETENCES = 'GET_COMPETENCES';
export const COMPETENCES_RECEIVED = 'COMPETENCES_RECEIVED';
export const GET_PROSTATUS = 'GET_PROSTATUS';
export const PROSTATUS_RECEIVED = 'PROSTATUS_RECEIVED';
export const GET_PROJECT = 'GET_PROJECT';
export const PROJECT_RECEIVED = 'PROJECT_RECEIVED';
export const PUT_MEMBER = 'PUT_MEMBER';
export const DELETE_MEMBER = 'DELETE_MEMBER';
export const GET_PROJECT_EDIT = 'GET_PROJECT_EDIT';
export const PROJECT_EDIT_RECEIVED = 'PROJECT_EDIT_RECEIVED';
export const PUT_PROJECT = 'PUT_PROJECT';
export const GET_FILTERS_MEMBERS = 'GET_FILTERS_MEMBERS';
export const GET_FILTERS_PROJECTS = 'GET_FILTERS_PROJECTS';
export const RECEIVED_FILTER_SPE = 'RECEIVED_FILTER_SPE';
export const RECEIVED_FILTER_PROMO = 'RECEIVED_FILTER_PROMO';
export const RECEIVED_FILTER_STATUS = 'RECEIVED_FILTER_STATUS';
export const SET_FILTER = 'SET_FILTER';
export const POST_LOGIN = 'POST_LOGIN';
export const RECEIVED_TOKEN = 'RECEIVED_TOKEN';

// reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CHANGE_INPUT_FORM:
      return {
        ...state,
        value: { ...state.value, [action.name]: action.value },
      };
    case GET_MEMBERS:
      return {
        ...state,
      };
    case GET_MEMBERS_SPE: {
      return {
        ...state,
        filterSpeMembers: action.spe,
      };
    }
    case MEMBERS_RECEIVED:
      return {
        ...state,
        listMembers: action.members,
        member: {},
      };
    case GET_MEMBER:
      return {
        ...state,
      };
    case MEMBER_RECEIVED:
      return {
        ...state,
        listMembers: [],
        member: action.member,
      };
    case GET_HOME:
      return {
        ...state,
      };
    case MEMBERS_HOME_RECEIVED:
      return {
        ...state,
        membersHome: action.membersHome,
      };
    case PROJECTS_HOME_RECEIVED:
      return {
        ...state,
        projectsHome: action.projectsHome,
      };
    case GET_PROJECTS:
      return {
        ...state,
      };
    case PROJECTS_RECEIVED:
      return {
        ...state,
        listProjects: action.projects,
        project: {},
      };
    case GET_MEMBER_EDIT:
      return {
        ...state,
      };
    case MEMBER_EDIT_RECEIVED:
      return {
        ...state,
        listMembers: [],
        member: action.member,
        value: {
          city: action.member.city,
          zipcode: action.member.zipcode,
          email: action.member.email,
          phoneNumber: action.member.phoneNumber,
          linkGithub: action.member.linkGithub,
          linkLinkedin: action.member.linkLinkedin,
          linkPersonal: action.member.linkPersonal,
          description: action.member.description,
          status: action.member.professionalStatus.name,
        },
      };

    case GET_PROJECT_EDIT:
      return {
        ...state,
      };

    case PROJECT_EDIT_RECEIVED:
      return {
        ...state,
        listProjects: [],
        project: action.project,
        value: {
          linkProject: action.project.linkProject,
          linkVideo: action.project.linkVideo,
          description: action.project.description,
        },
      };

    // case GET_COMPETENCES:
    //   return {
    //     ...state,
    //   };

    case COMPETENCES_RECEIVED:
      return {
        ...state,
        competences: action.competences,
      };

    case PROSTATUS_RECEIVED:
      return {
        ...state,
        status: action.status,
      };

    case PUT_MEMBER:
      return {
        ...state,
      };

    case PUT_PROJECT:
      return {
        ...state,
      };
      
    case GET_PROJECT:
      return {
        ...state,
      };

    case PROJECT_RECEIVED:
      return {
        ...state,
        listProjects: [],
        project: action.project,
      };

    case DELETE_MEMBER:
      return {
        ...state,
      };

    case GET_FILTERS_MEMBERS:
      return {
        ...state,
      };

    case RECEIVED_FILTER_SPE:
      return {
        ...state,
        listSpe: action.data,
      };

    case RECEIVED_FILTER_PROMO:
      return {
        ...state,
        listPromo: action.data,
      };

    case RECEIVED_FILTER_STATUS:
      return {
        ...state,
        listStatus: action.data,
      };

    case GET_FILTERS_PROJECTS:
      return {
        ...state,
      };
  
    case SET_FILTER:
      return {
        ...state,
        [action.filter]: action.value,
      };

    case RECEIVED_TOKEN:
      return {
        ...state,
        token: action.token,
      };
      
    // Action non-reconnue
    default:
      return state;
  }
};


// action creator
export const changeInput = (value, name) => ({
  type: CHANGE_INPUT,
  name,
  value,
});

export const changeInputForm = (name, value) => ({
  type: CHANGE_INPUT_FORM,
  name,
  value,
});

export const getMembers = () => ({
  type: GET_MEMBERS,
});

export const getMembersSpe = spe => ({
  type: GET_MEMBERS_SPE,
  spe,
});

export const membersReceived = members => ({
  type: MEMBERS_RECEIVED,
  members,
});

export const getMember = id => ({
  type: GET_MEMBER,
  id,
});

export const memberReceived = member => ({
  type: MEMBER_RECEIVED,
  member,
});

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

export const getProjects = () => ({
  type: GET_PROJECTS,
});

export const projectsReceived = projects => ({
  type: PROJECTS_RECEIVED,
  projects,
});

export const getMemberEdit = id => ({
  type: GET_MEMBER_EDIT,
  id,
});

export const memberEditReceived = member => ({
  type: MEMBER_EDIT_RECEIVED,
  member,
});

export const getProjectEdit = id => ({
  type: GET_PROJECT_EDIT,
  id,
});

export const projectEditReceived = project => ({
  type: PROJECT_EDIT_RECEIVED,
  project,
});

export const getCompetences = () => ({
  type: GET_COMPETENCES,
});

export const competencesReceived = competences => ({
  type: COMPETENCES_RECEIVED,
  competences,
});

export const getProStatus = () => ({
  type: GET_PROSTATUS,
});

export const proStatusReceived = status => ({
  type: PROSTATUS_RECEIVED,
  status,
});

export const getProject = id => ({
  type: GET_PROJECT,
  id,
});

export const projectReceived = project => ({
  type: PROJECT_RECEIVED,
  project,
});

export const putMember = (id, data) => ({
  type: PUT_MEMBER,
  id,
  data,
});

export const putProject = (id, data) => ({
  type: PUT_PROJECT,
  id,
  data,
});

export const deleteMember = id => ({
  type: DELETE_MEMBER,
  id,
});

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

export const submitLogIn = data => ({
  type: POST_LOGIN,
  data,
});

export const receivedToken = token => ({
  type: RECEIVED_TOKEN,
  token,
});

// export
export default reducer;
