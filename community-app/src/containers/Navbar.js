// npm import
import { connect } from 'react-redux';

// local import
import Navbar from 'src/components/Navbar';

// action creators
import { disconnectMember, connectMember } from 'src/store/actions/loginActions';

import { getConnectedMember } from 'src/store/actions/membersActions';


// == state ==
const mapStateToProps = state => ({
  isConnected: state.isConnected,
  connectedMember: localStorage.connectedMember,
  page: state.actualPage,
});

// == dispacth ==
const mapDispatchToProps = dispatch => ({
  disconnectMember: () => {
    dispatch(disconnectMember());
  },

  connectMember: () => {
    dispatch(connectMember());
  },

  getConnectedMember: (id) => {
    dispatch(getConnectedMember(id));
  },
});


// Container
const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

// Export
export default NavbarContainer;
