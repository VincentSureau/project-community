// import
import axios from 'axios';

// Types
import { GET_MEMBERS, membersReceived } from 'src/store/reducer';

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
          console.log(members);
          store.dispatch(membersReceived(members));
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
