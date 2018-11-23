/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import bcrypt from 'bcryptjs';
import serialize from 'form-serialize';

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
  handleChangePassword = (evt) => {
    const { onChangeInput } = this.props;
    // const encryptedPassword = bcrypt.hashSync(evt.target.value)
    const encryptedPassword = evt.target.value;
    onChangeInput(encryptedPassword, evt.target.name);
  }

  handleChangeEmail = (evt) => {
    const { onChangeInput } = this.props;
    onChangeInput(evt.target.value, evt.target.name);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { onSubmitLogin, email, password } = this.props;
    const data = serialize(evt.target, { hash: true });
    onSubmitLogin(data);
  }

  render() {
    const { email, password } = this.props;
    return (
      <form className="login-article-form d-flex flex-column align-self-center" onSubmit={this.handleSubmit}>
        <input
          type="email"
          name="username"
          className="form-control login-article-form-textinput"
          id="inputEmail"
          placeholder="Adresse email"
          onChange={this.handleChangeEmail}
        />
        <input
          type="password"
          name="password"
          className="form-control login-article-form-textinput"
          id="inputPassword"
          placeholder="Mot de passe"
          onChange={this.handleChangePassword}
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
