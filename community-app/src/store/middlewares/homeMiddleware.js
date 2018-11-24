// import
import axios from 'axios';

// Types
import {
  GET_HOME,
  membersForHomeReceived,
  projectsForHomeReceived,
} from 'src/store/actions';

const API_URL = 'http://127.0.0.1:8001';

/**
 * Middleware de gestion axios
 */
const home = store => next => (action) => {
  switch (action.type) {
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

    default:
      break;
  }

  // Passe à ton voisin
  next(action);
};

export default home;
