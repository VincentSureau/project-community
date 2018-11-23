// import
import axios from 'axios';
import decode from 'jwt-decode';
// Types
import {
  GET_MEMBERS,
  membersReceived,
  GET_MEMBER,
  memberReceived,
  GET_HOME,
  membersForHomeReceived,
  projectsForHomeReceived,
  GET_PROJECTS,
  projectsReceived,
  GET_MEMBER_EDIT,
  memberEditReceived,
  GET_PROJECT_EDIT,
  projectEditReceived,
  GET_COMPETENCES,
  competencesReceived,
  GET_PROSTATUS,
  proStatusReceived,
  PUT_MEMBER,
  PUT_PROJECT,
  DELETE_MEMBER,
  GET_PROJECT,
  projectReceived,
  GET_FILTERS_MEMBERS,
  filterPromoReveived,
  filterSpeReveived,
  filterStatusReveived,
  GET_FILTERS_PROJECTS,
  POST_LOGIN,
  receivedToken,
} from 'src/store/reducer';

const API_URL = 'http://127.0.0.1:8001';

/**
 * Middleware de gestion axios
 */

const ajax = store => next => (action) => {
  switch (action.type) {
    case GET_MEMBERS:
      axios({
        method: 'get',
        url: `${API_URL}/app_users/list`,
        responseType: 'json',
      })
        // succes
        .then((response) => {
          const members = response.data['hydra:member'];
          store.dispatch(membersReceived(members));
        })
        // echec
        .catch((error) => {
          console.error(error);
        });

      break;

    case GET_MEMBER:
      axios({
        method: 'get',
        url: `${API_URL}/app_users/${action.id}`,
        responseType: 'json',
      })
        // succes
        .then((response) => {
          const member = response.data;
          store.dispatch(memberReceived(member));
        })
        // echec
        .catch((error) => {
          console.error(error);
        });

      break;

    case GET_MEMBER_EDIT:
      axios({
        method: 'get',
        url: `${API_URL}/app_users/${action.id}`,
        responseType: 'json',
      })
        // succes
        .then((response) => {
          const member = response.data;
          store.dispatch(memberEditReceived(member));
        })
        // echec
        .catch((error) => {
          console.error(error);
        });

      break;

    case GET_PROJECT_EDIT:
      axios({
        method: 'get',
        url: `${API_URL}/projects?slug=${action.id}`,
        responseType: 'json',
      })
        // succes
        .then((response) => {
          const project = response.data['hydra:member'][0];
          console.log(project);
          store.dispatch(projectEditReceived(project));
        })
        // echec
        .catch((error) => {
          console.error(error);
        });

      break;

    case GET_HOME:
      axios({
        method: 'get',
        url: `${API_URL}/app_users/random_home`,
        responseType: 'json',
      })
        // succes
        .then((response) => {
          const membersForHome = response.data['hydra:member'];
          store.dispatch(membersForHomeReceived(membersForHome));
        })
        // echec
        .catch((error) => {
          console.error(error);
        });

      axios({
        method: 'get',
        url: `${API_URL}/projects/home`,
        responseType: 'json',
      })
        // succes
        .then((response) => {
          const projectForHome = response.data['hydra:member'];
          store.dispatch(projectsForHomeReceived(projectForHome));
        })
        // echec
        .catch((error) => {
          console.error(error);
        });

      break;

    case GET_PROJECTS:
      axios({
        method: 'get',
        url: `${API_URL}/projects/list`,
        responseType: 'json',
      })
        // succes
        .then((response) => {
          const projects = response.data['hydra:member'];
          store.dispatch(projectsReceived(projects));
        })
        // echec
        .catch((error) => {
          console.error(error);
        });

      break;


    case GET_COMPETENCES:
      axios({
        method: 'get',
        url: `${API_URL}/competences`,
        responseType: 'json',
      })
        // succes
        .then((response) => {
          const competences = response.data['hydra:member'];
          store.dispatch(competencesReceived(competences));
        })
        // echec
        .catch((error) => {
          console.error(error);
        });

      break;

    case GET_PROSTATUS:
      axios({
        method: 'get',
        url: `${API_URL}/professional_statuses`,
        responseType: 'json',
      })
        // succes
        .then((response) => {
          const status = response.data['hydra:member'];
          store.dispatch(proStatusReceived(status));
        })
        // echec
        .catch((error) => {
          console.error(error);
        });

      break;

    case GET_PROJECT:
      axios({
        method: 'get',
        url: `${API_URL}/projects?slug=${action.id}`,
        responseType: 'json',
      })
        // succes
        .then((response) => {
          const project = response.data['hydra:member'][0];
          store.dispatch(projectReceived(project));
        })
        // echec
        .catch((error) => {
          console.error(error);
        });

      break;

    case PUT_MEMBER:
      console.log(axios.put(`${API_URL}/app_users/${action.id}`, action.data))
        // succes
        .then((response) => {
          console.log('retour put=>>>  ', response);
        })
        // echec
        .catch((error) => {
          console.error(error);
        });

      break;

    case PUT_PROJECT:
      console.log(axios.put(`${API_URL}/projects/${action.id}`, action.data))
        // succes
        .then((response) => {
          console.log('retour put=>>>  ', response);
        })
        // echec
        .catch((error) => {
          console.error(error);
        });

      break;

    case DELETE_MEMBER:
      axios({
        method: 'delete',
        url: `${API_URL}/app_users/${action.id}`,
        responseType: 'json',
      })
        // succes
        .then((response) => {
          console.log('DeleteProfil', response);
        })
        // echec
        .catch((error) => {
          console.error(error);
        });

      break;

    case GET_FILTERS_MEMBERS:
      axios({
        method: 'get',
        url: `${API_URL}/promotions`,
        responseType: 'json',
      })
        // succes
        .then((response) => {
          const promoList = response.data['hydra:member'];
          store.dispatch(filterPromoReveived(promoList));
        })
        // echec
        .catch((error) => {
          console.error(error);
        });

      axios({
        method: 'get',
        url: `${API_URL}/specialisations`,
        responseType: 'json',
      })
        // succes
        .then((response) => {
          const speList = response.data['hydra:member'];
          store.dispatch(filterSpeReveived(speList));
        })
        // echec
        .catch((error) => {
          console.error(error);
        });

      axios({
        method: 'get',
        url: `${API_URL}/professional_statuses`,
        responseType: 'json',
      })
        // succes
        .then((response) => {
          const statusList = response.data['hydra:member'];
          store.dispatch(filterStatusReveived(statusList));
        })
        // echec
        .catch((error) => {
          console.error(error);
        });

      break;

    case GET_FILTERS_PROJECTS:
      axios({
        method: 'get',
        url: `${API_URL}/promotions`,
        responseType: 'json',
      })
        // succes
        .then((response) => {
          const promoList = response.data['hydra:member'];
          store.dispatch(filterPromoReveived(promoList));
        })
        // echec
        .catch((error) => {
          console.error(error);
        });

      axios({
        method: 'get',
        url: `${API_URL}/specialisations`,
        responseType: 'json',
      })
        // succes
        .then((response) => {
          const speList = response.data['hydra:member'];
          store.dispatch(filterSpeReveived(speList));
        })
        // echec
        .catch((error) => {
          console.error(error);
        });

      break;

    case POST_LOGIN:
      axios({
        method: 'post',
        url: `${API_URL}/login_check`,
        responseType: 'json',
        data: action.data,
      })
        // succes
        .then((response) => {
          console.log('Connexion: ', decode(response.data.token));
          store.dispatch(receivedToken(response.data.token));
        })
        // echec
        .catch((error) => {
          console.error('Connexion: ', error);
        });

      break;

    default:
      break;
  }

  // Passe à ton voisin
  next(action);
};

export default ajax;
