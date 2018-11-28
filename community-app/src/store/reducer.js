// initial state
import initialState from './initialState';
import { MEMBER_EDITED, GET_MEMBER } from './actions/membersActions';
import { PROJECT_EDITED, GET_PROJECT } from './actions/projectsActions';
import { TOGGLE_POPOVER, FORGOT_PASSWORD, MESSAGE_FORGOT_PASSWORD } from './actions/formActions';
// Types
// Navbar
export const GET_ISCONNECTED = 'GET_ISCONNECTED';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const ERROR_ON_SUBMIT = 'ERROR_ON_SUBMIT';

// Form
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const CHANGE_INPUT_FORM = 'CHANGE_INPUT_FORM';

// Members
export const MEMBERS_RECEIVED = 'MEMBERS_RECEIVED';
export const MEMBER_RECEIVED = 'MEMBER_RECEIVED';
export const GET_MEMBERS_SPE = 'GET_MEMBERS_SPE';
export const MEMBERS_HOME_RECEIVED = 'MEMBERS_HOME_RECEIVED';
export const MEMBER_EDIT_RECEIVED = 'MEMBER_EDIT_RECEIVED';
// export const CONNECTED_MEMBER_RECEIVED = 'CONNECTED_MEMBER_RECEIVED';

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
export const ERROR_CONNEXION = 'ERROR_CONNEXION';

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

    case ERROR_ON_SUBMIT:
      return {
        ...state,
        submitError: action.submitError,
      };

    case TOGGLE_POPOVER:
      return {
        ...state,
        popoverPassword: action.popover,
      };

    case MESSAGE_FORGOT_PASSWORD:
      return {
        ...state,
        messagePassword: action.response,
      };

    // Members
    case GET_MEMBER:
      return {
        ...state,
        slug: action.slug,
      };

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
        editFormSend: false,
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


    case MEMBER_EDITED:
      return {
        ...state,
        editFormSend: true,
      };

      // case CONNECTED_MEMBER_RECEIVED: {
      //   // localStorage.setItem('connectedMemberFirstName', action.connectedMember.firstname);
      //   // localStorage.setItem('connectedMemberLastName', action.connectedMember.lastname);
      //   // localStorage.setItem('connectedMemberSlugMember', action.connectedMember.slug);
      //   // localStorage.setItem('connectedMemberSlugProject', action.connectedMember.project.slug);
      //   return { ...state };
      // }


    // Projects
    case PROJECTS_RECEIVED:
      return {
        ...state,
        listProjects: action.projects,
        project: {},
      };

    case GET_PROJECT:
      return {
        ...state,
        slug: action.id,
      };

    case PROJECT_RECEIVED:
      return {
        ...state,
        listProjects: [],
        project: action.project,
        editFormSend: false,
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

    case PROJECT_EDITED:
      return {
        ...state,
        editFormSend: true,
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
        connectionError: '',
        messagePassword: '',
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

    case ERROR_CONNEXION:
      return {
        ...state,
        connectionError: action.connectionError,
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
