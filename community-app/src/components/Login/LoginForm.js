/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import bcrypt from 'bcryptjs';
import serialize from '../../functions/Serialize';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
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
  componentWillUnmount() {
    const { eraseMessage } = this.props;
    eraseMessage();
  }

  handleChangeEmail = (evt) => {
    const { onChangeInput } = this.props;
    onChangeInput(evt.target.value, evt.target.name);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { onSubmitLogin } = this.props;
    const data = serialize(evt.target, { hash: true });
    console.log(evt);
    onSubmitLogin(data);
  }

  toggle = () => {
    const { popoverPassword, togglePopover } = this.props;
    togglePopover(!popoverPassword);
  }

  clickPassword = () => {
    const { username, passwordForgotten } = this.props;
    passwordForgotten(username);
    this.toggle();
  }

  render() {
    const { connectionError, popoverPassword, username, messagePassword } = this.props;
    return (
      <div className="login-article-form d-flex flex-column align-self-center">
        <form onSubmit={this.handleSubmit}>
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
          />
          {connectionError !== undefined && connectionError !== ''
            && <p className="alert alert-danger">{connectionError}</p>
          }
          <button
            type="submit"
            className="btn btn-outline-white mx-3 btn-border-radius text-uppercase align-self-center mt-4"
          >
            Connexion
          </button>
        </form>
        {messagePassword === 'OK'
        && <p className="alert alert-success my-2">Mot de passe réinitialisé</p>
        }
        {messagePassword === 'NOK'
          && <p className="alert alert-danger my-2">Adresse-mail inconnue</p>
        }
        <a id="PopoverPassword" className="text-white my-2" onClick={this.toggle}>Mot de passe oublié...</a>
        <Popover className="" placement="bottom" isOpen={popoverPassword} target="PopoverPassword" toggle={this.toggle}>
          <PopoverHeader className="bg-white text-center text-login">Réinitialiser votre mot de passe</PopoverHeader>
          <PopoverBody className="bg-login-darker text-center">
            <p className="my-2">Entrer votre email afin de recevoir un nouveau mot de passe sur votre boite mail.</p>
            <input
              type="email"
              name="username"
              className="form-control login-article-form-textinput"
              id="inputEmail"
              placeholder="Adresse email"
              onChange={this.handleChangeEmail}
              defaultValue={username}
            />
            <button
              type="button"
              onClick={this.clickPassword}
              className="btn btn-outline-white mx-3 btn-border-radius text-uppercase align-self-center mt-4"
            >
            Réinitialiser
            </button>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

LoginForm.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  onSubmitLogin: PropTypes.func.isRequired,
  connectionError: PropTypes.string,
};

LoginForm.defaultProps = {
  connectionError: undefined,
};
/**
 * Export
 */
export default LoginForm;
