// initial state
import initialState from './initialState';

// Types
// Navbar
export const GET_ISCONNECTED = 'GET_ISCONNECTED';
export const CHANGE_PAGE = 'CHANGE_PAGE';

// Form
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const CHANGE_INPUT_FORM = 'CHANGE_INPUT_FORM';

// Members
export const MEMBERS_RECEIVED = 'MEMBERS_RECEIVED';
export const MEMBER_RECEIVED = 'MEMBER_RECEIVED';
export const GET_MEMBERS_SPE = 'GET_MEMBERS_SPE';
export const MEMBERS_HOME_RECEIVED = 'MEMBERS_HOME_RECEIVED';
export const MEMBER_EDIT_RECEIVED = 'MEMBER_EDIT_RECEIVED';
export const CONNECTED_MEMBER_RECEIVED = 'CONNECTED_MEMBER_RECEIVED';

// Projects
export const PROJECTS_RECEIVED = 'PROJECTS_RECEIVED';
export const PROJECT_RECEIVED = 'PROJECT_RECEIVED';
export const PROJECTS_HOME_RECEIVED = 'PROJECTS_HOME_RECEIVED';
export const PROJECT_EDIT_RECEIVED = 'PROJECT_EDIT_RECEIVED';

// Competences
export const COMPETENCES_RECEIVED = 'COMPETENCES_RECEIVED';

// Professional status
export const PROSTATUS_RECEIVED = 'PROSTATUS_RECEIVED';

// Filters
export const RECEIVED_FILTER_SPE = 'RECEIVED_FILTER_SPE';
export const RECEIVED_FILTER_PROMO = 'RECEIVED_FILTER_PROMO';
export const RECEIVED_FILTER_STATUS = 'RECEIVED_FILTER_STATUS';
export const SET_FILTER = 'SET_FILTER';

// Login
export const RECEIVED_TOKEN = 'RECEIVED_TOKEN';
export const CONNECT_MEMBER = 'CONNECT_MEMBER';
export const DISCONNECT_MEMBER = 'DISCONNECT_MEMBER';

// reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // Forms
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

    // Members
    case MEMBERS_RECEIVED:
      return {
        ...state,
        listMembers: action.members,
        member: {},
      };

    case MEMBER_RECEIVED:
      return {
        ...state,
        listMembers: [],
        member: action.member,
      };

    case GET_MEMBERS_SPE: {
      return {
        ...state,
        filterSpeMembers: action.spe,
      };
    }

    case MEMBERS_HOME_RECEIVED:
      return {
        ...state,
        membersHome: action.membersHome,
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
          status: action.member.professionalStatus,
        },
      };

    case CONNECTED_MEMBER_RECEIVED: {
      return {
        ...state,
        connectedMember: action.connectedMember,
      };
    }

    // Projects
    case PROJECTS_RECEIVED:
      return {
        ...state,
        listProjects: action.projects,
        project: {},
      };

    case PROJECT_RECEIVED:
      return {
        ...state,
        listProjects: [],
        project: action.project,
      };

    case PROJECTS_HOME_RECEIVED:
      return {
        ...state,
        projectsHome: action.projectsHome,
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

    // Competences
    case COMPETENCES_RECEIVED:
      return {
        ...state,
        competences: action.competences,
      };

    // Professional status
    case PROSTATUS_RECEIVED:
      return {
        ...state,
        status: action.status,
      };

    // Filters
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

    case SET_FILTER:
      return {
        ...state,
        [action.filter]: action.value,
      };

    // Login
    case RECEIVED_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case CONNECT_MEMBER:
      return {
        ...state,
        isConnected: true,
      };

    case DISCONNECT_MEMBER:
      return {
        ...state,
        isConnected: false,
      };

    // NavBar
    case CHANGE_PAGE:
      return {
        ...state,
        actualPage: action.pathname,
      };

    // Action non-reconnue
    default:
      return state;
  }
};

// export
export default reducer;
