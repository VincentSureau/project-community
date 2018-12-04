// import
import axios from 'axios';

// Types
import {
  GET_FILTERS_MEMBERS,
  filterPromoReveived,
  filterSpeReveived,
  filterStatusReveived,
  GET_FILTERS_PROJECTS,
} from 'src/store/actions/filtersActions';

import { API_URL } from '../../configuration';

/**
 * Middleware de gestion axios
 */
const filter = store => next => (action) => {
  switch (action.type) {
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

    default:
      break;
  }

  // Passe à ton voisin
  next(action);
};

export default filter;
