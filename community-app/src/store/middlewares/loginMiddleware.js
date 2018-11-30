// import
import axios from 'axios';
import decode from 'jwt-decode';

// Types
import {
  POST_LOGIN,
  connectMember,
  errorConnexion,
} from 'src/store/actions/loginActions';
import { FORGOT_PASSWORD, messageForgotPassword } from '../actions/formActions';
import { getConnectedMember } from '../actions/membersActions';

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
          // Le token du membre connecté est stocké dans le localStorage
          localStorage.setItem('connect_token', response.data.token);
          // On récupère l'id du membre connecté
          const token = decode(response.data.token);
          const connectedMemberId = token.userId;
          // On récupère les informations du membre connecté
          store.dispatch(getConnectedMember(connectedMemberId));
        })
        // echec
        .catch((error) => {
          console.error('Connexion: ', error);
          console.log(store.dispatch(errorConnexion('Les identifiants ne sont pas valides')));
        });

      break;

    case FORGOT_PASSWORD:
      axios({
        method: 'post',
        url: `${API_URL}/forgotten-password/${action.email}`,
        responseType: 'json',
      })
        // succes
        .then((response) => {
          store.dispatch(messageForgotPassword('OK'));
        })
        // echec
        .catch((error) => {
          console.error('Connexion: ', error);
          store.dispatch(messageForgotPassword('NOK'));
        });

      break;


    default:
      break;
  }

  // Passe à ton voisin
  next(action);
};


export default login;
