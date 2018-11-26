// npm import
import { connect } from 'react-redux';

// local import
import Navbar from 'src/components/Navbar';

// action creators
import { disconnectMember } from 'src/store/actions/loginActions';

// == state ==
const mapStateToProps = state => ({
  isConnected: state.isConnected,
});

// == dispacth ==
const mapDispatchToProps = dispatch => ({
  disconnectMember: () => {
    dispatch(disconnectMember());
  },
});


// Container
const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

// Export
export default NavbarContainer;
