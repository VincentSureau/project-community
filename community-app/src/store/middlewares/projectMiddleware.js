// import
import axios from 'axios';

// Types
import {
  GET_PROJECTS,
  projectsReceived,
  GET_PROJECT_EDIT,
  projectEditReceived,
  PUT_PROJECT,
  GET_PROJECT,
  projectReceived,
  projectEdited,
} from 'src/store/actions/projectsActions';

const API_URL = 'http://127.0.0.1:8001';

/**
 * Middleware de gestion axios
 */
const projectMiddleware = store => next => (action) => {
  switch (action.type) {
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
    case PUT_PROJECT:
      axios.put(`${API_URL}/projects/${action.id}`, action.data)
        // succes
        .then((response) => {
          store.dispatch(projectEdited());
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

export default projectMiddleware;
