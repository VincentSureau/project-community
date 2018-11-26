// import
import axios from 'axios';
import decode from 'jwt-decode';

// Types
import {
  POST_LOGIN,
  receivedToken,
} from 'src/store/actions/loginActions';

const API_URL = 'http://127.0.0.1:8001';

/**
 * Middleware de gestion axios
 */
const login = store => next => (action) => {
  switch (action.type) {
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

export default login;
