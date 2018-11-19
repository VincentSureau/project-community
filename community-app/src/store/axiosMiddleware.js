// import
import axios from 'axios';

// Types
import { RECEIVE_MEMBERS } from 'src/store/reducer';

const API_URL = 'http://127.0.0.1:8001';

/**
 * Middleware de gestion axios
 */

const ajax = store => next => (action) => {
  switch (action.type) {
    case RECEIVE_MEMBERS: {
      const state = store.getState();
      // ...
      axios.get(`${API_URL}/app_users/list`)
        // succes
        .then((response) => {
          store.dispatch({
            type: RECEIVE_MEMBERS,
            payload: response.data,
          });
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
