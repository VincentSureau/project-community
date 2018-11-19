/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Components

// Styles
import './login.scss';

/**
 * Code
 */
class LoginForm extends React.Component {
  handleChange = (evt) => {
    const { onChangeInput } = this.props;
    onChangeInput(evt.target.value, evt.target.name);
  }

  render() {
    const { email, password } = this.props;
    return (
      <form className="login-article-form d-flex flex-column align-self-center">
        <input
          type="email"
          name="email"
          className="form-control login-article-form-textinput"
          id="inputEmail"
          placeholder="Adresse email"
          value={email}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          className="form-control login-article-form-textinput"
          id="inputPassword"
          placeholder="Mot de passe"
          value={password}
          onChange={this.handleChange}
        />
        <button
          type="submit"
          className="btn btn-outline-white mx-3 btn-border-radius text-uppercase align-self-center mt-4"
        >
          Connexion
        </button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default LoginForm;
