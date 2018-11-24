// import
import axios from 'axios';

// Types
import {
  GET_PROSTATUS,
  proStatusReceived,
} from 'src/store/reducer';

const API_URL = 'http://127.0.0.1:8001';

/**
 * Middleware de gestion axios
 */
const prostatus = store => next => (action) => {
  switch (action.type) {
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

    default:
      break;
  }

  // Passe à ton voisin
  next(action);
};

export default prostatus;
