// import
import axios from 'axios';

// Types
import {
  POST_LOGIN,
  connectMember,
  errorConnexion,
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
          localStorage.setItem('connect_token', response.data.token);
          window.location.replace('/');
          store.dispatch(connectMember());
        })
        // echec
        .catch((error) => {
          console.error('Connexion: ', error);
          console.log(store.dispatch(errorConnexion('Les identifiants ne sont pas valides')));
        });

      break;

    default:
      break;
  }

  // Passe à ton voisin
  next(action);
};


export default login;
