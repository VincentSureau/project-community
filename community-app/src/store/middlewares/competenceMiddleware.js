// import
import axios from 'axios';

// Types
import {
  GET_COMPETENCES,
  competencesReceived,
} from 'src/store/actions/competencesActions';

import { API_URL } from '../../configuration';

/**
 * Middleware de gestion axios
 */
const competence = store => next => (action) => {
  switch (action.type) {
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

    default:
      break;
  }

  // Passe à ton voisin
  next(action);
};

export default competence;
