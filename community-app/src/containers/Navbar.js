// npm import
import { connect } from 'react-redux';

// local import
import Navbar from 'src/components/Navbar';

// action creators
import { disconnectMember, connectMember } from 'src/store/actions/loginActions';

// == state ==
const mapStateToProps = state => ({
  isConnected: state.isConnected,
});

// == dispacth ==
const mapDispatchToProps = dispatch => ({
  disconnectMember: () => {
    dispatch(disconnectMember());
  },
  connectMember: () => {
    dispatch(connectMember());
  },
});


// Container
const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

// Export
export default NavbarContainer;
