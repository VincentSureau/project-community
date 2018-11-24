// npm import
import { connect } from 'react-redux';


// action creators
import { changeInput, submitLogIn } from 'src/store/reducer';

// composant
import Form from '../components/Login/LoginForm';

// === State ===
const mapStateToProps = state => ({
  email: state.email,
  password: state.password,
  token: state.token,
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
});

// Container
const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

// Export
export default FormContainer;
