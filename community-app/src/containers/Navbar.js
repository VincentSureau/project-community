// npm import
import { connect } from 'react-redux';

// local import
import Navbar from 'src/components/Navbar';

// action creators
import { getMembersSpe } from 'src/store/reducer';

// == state ==
const mapStateToProps = state => ({
  listMembers: state.listMembers,
});

// == dispacth ==
const mapDispatchToProps = dispatch => ({
  getMembersSpe: (spe) => {
    dispatch(getMembersSpe(spe));
  },
});


// Container
const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

// Export
export default NavbarContainer;
