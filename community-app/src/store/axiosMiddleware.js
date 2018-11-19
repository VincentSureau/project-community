// import
import axios from 'axios';

// Types
import { GET_MEMBERS, getMembers } from 'src/store/reducer';

const API_URL = 'http://127.0.0.1:8001';

/**
 * Middleware de gestion axios
 */

const ajax = store => next => (action) => {
  switch (action.type) {
    case GET_MEMBERS: {
      const state = store.getState();
      // ...
      axios.get(`${API_URL}/app_users/list`)
        // succes
        .then((response) => {
          console.log(response);
          const members = response.data['hydra:member'];
          store.dispatch(getMembers(members));
        })
        // echec
        .catch((error) => {
          console.error(error);
        });
    }

      break;

    default:
      break;
  }

  // Passe à ton voisin
  next(action);
};

export default ajax;
