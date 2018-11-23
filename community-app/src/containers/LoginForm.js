// npm import
import { connect } from 'react-redux';


// action creators
import { changeInput, submitLogIn } from 'src/store/reducer';

// composant
import Form from '../components/Login/LoginForm';

// === State (données) ===
const mapStateToProps = state => ({
  email: state.email,
  password: state.password,
  token: state.token,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  onChangeInput: (value, name) => {
    // Je créé l'action
    const action = changeInput(value, name); // -> {type: ..., value: value}
    // Je la dispatch(e?)
    dispatch(action);
  },

  onSubmitLogin: (data) => {
    dispatch(submitLogIn(data));
  },
});

// Container - connect(Ce que l'on veut)(Qui en a besoin)
const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

// Export
export default FormContainer;
