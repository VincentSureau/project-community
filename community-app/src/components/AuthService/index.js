/**
 * NPM import
 */
import React from 'react';
import decode from 'jwt-decode';

/**
 * Local import
 */


/**
 * Code
 */
class AuthService extends React.Component {
  // Fonction qui récupère le token de connexion depuis le localStorage
  getToken = () => (localStorage.getItem('connect_token'));

  // Fonction qui efface le token de connexion dans le localStorage
  logout = () => {
    localStorage.removeItem('connect_token');
    localStorage.removeItem('connectedMemberFirstName');
    localStorage.removeItem('connectedMemberLastName');
    localStorage.removeItem('connectedMemberSlugMember');
    localStorage.removeItem('connectedMemberSlugProject');
  }

  // Fonction qui permet de décoder le token
  getProfile = () => (decode(this.getToken()))

  // Fonction qui permet de connecter un membre si un token valide existe
  loggedIn = () => {
    // Récupère le token du localStorage
    const token = this.getToken();
    // Si le token existe et qu'il n'a pas expiré --> connexion
    return !!token && !this.isTokenExpired(token);
  }

  // Fonction qui vérifie que le token est encore valide
  isTokenExpired =(token) => {
    try {
      // On décode le token
      const decoded = decode(token);
      // Si le token est encore valide on retourne true
      if (decoded.exp < Date.now() / 1000) {
        return true;
      }
      return false;
    }
    catch (err) {
      return false;
    }
  }
}

/**
 * Export
 */
export default AuthService;
