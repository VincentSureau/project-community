// npm import
import { connect } from 'react-redux';


// action creators
import { submitLogIn } from 'src/store/actions/loginActions';
import { changeInput, tooglePopover, forgottenPassword } from 'src/store/actions/formActions';

// composant
import Form from '../components/Login/LoginForm';

// === State ===
const mapStateToProps = state => ({
  token: state.token,
  connectionError: state.connectionError,
  popoverPassword: state.popoverPassword,
  username: state.username,
  messagePassword: state.messagePassword,
});

// == dispacth ==
const mapDispatchToProps = dispatch => ({
  onChangeInput: (value, name) => {
    const action = changeInput(value, name);
    dispatch(action);
  },

  onSubmitLogin: (data) => {
    dispatch(submitLogIn(data));
  },

  togglePopover: (popover) => {
    dispatch(tooglePopover(popover));
  },

  passwordForgotten: (email) => {
    dispatch(forgottenPassword(email));
  },
});

// Container
const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

// Export
export default FormContainer;
