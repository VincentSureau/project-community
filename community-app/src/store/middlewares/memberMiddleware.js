// import
import axios from 'axios';

// Types
import {
  GET_MEMBERS,
  membersReceived,
  GET_MEMBER,
  memberReceived,
  GET_MEMBER_EDIT,
  memberEditReceived,
  PUT_MEMBER,
  DELETE_MEMBER,
  GET_CONNECTED_MEMBER,
  // connectedMemberReceived,
} from 'src/store/actions/membersActions';

const API_URL = 'http://127.0.0.1:8001';

/**
 * Middleware de gestion axios
 */
const memberMiddleware = store => next => (action) => {
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
          store.dispatch(membersReceived(members));
        })
        // echec
        .catch((error) => {
          console.error(error);
        });

      break;

    case GET_MEMBER:
      axios({
        method: 'get',
        url: `${API_URL}/app_users/?slug=${action.slug}`,
        responseType: 'json',
      })
        // succes
        .then((response) => {
          const member = response.data['hydra:member'][0];
          store.dispatch(memberReceived(member));
        })
        // echec
        .catch((error) => {
          console.error(error);
        });

      break;

    case GET_MEMBER_EDIT:
      axios({
        method: 'get',
        url: `${API_URL}/app_users/?slug=${action.slug}`,
        responseType: 'json',
      })
        // succes
        .then((response) => {
          const member = response.data['hydra:member'][0];
          store.dispatch(memberEditReceived(member));
        })
        // echec
        .catch((error) => {
          console.error(error);
        });

      break;
    case PUT_MEMBER:
      console.log(axios.put(`${API_URL}/app_users/${action.id}`, action.data))
        // succes
        .then((response) => {
          console.log('retour put=>>>  ', response);
        })
        // echec
        .catch((error) => {
          console.error(error);
        });

      break;
    case DELETE_MEMBER:
      axios({
        method: 'delete',
        url: `${API_URL}/app_users/${action.id}`,
        responseType: 'json',
      })
        // succes
        .then((response) => {
          console.log('DeleteProfil', response);
        })
        // echec
        .catch((error) => {
          console.error(error);
        });

      break;

    case GET_CONNECTED_MEMBER:
      axios({
        method: 'get',
        url: `${API_URL}/app_users/${action.id}`,
        responseType: 'json',
      })
        // succes
        .then((response) => {
          // const connectedMember = response.data;
          localStorage.setItem('connectedMemberFirstName', response.data.firstname);
          localStorage.setItem('connectedMemberLastName', response.data.lastname);
          localStorage.setItem('connectedMemberSlugMember', response.data.slug);
          localStorage.setItem('connectedMemberSlugProject', response.data.project.slug);
          // store.dispatch(connectedMemberReceived(connectedMember));
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

export default memberMiddleware;
