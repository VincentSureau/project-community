// import
import axios from 'axios';

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

    default:
      break;
  }

  // Passe à ton voisin
  next(action);
};

export default ajax;
