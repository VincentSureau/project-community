// npm import
import { connect } from 'react-redux';

// local import
import Navbar from 'src/components/Navbar';

// action creators
import { disconnectMember, connectMember, changePage } from 'src/store/actions/loginActions';

// == state ==
const mapStateToProps = state => ({
  isConnected: state.isConnected,
  page: state.page,
});

// == dispacth ==
const mapDispatchToProps = dispatch => ({
  disconnectMember: () => {
    dispatch(disconnectMember());
  },
  connectMember: () => {
    dispatch(connectMember());
  },
  changePage: () => {
    dispatch(changePage());
  },
});


// Container
const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

// Export
export default NavbarContainer;
