// npm import
import { connect } from 'react-redux';

// local import
import Members from 'src/components/Members';

// action creators
import { getMembers, getFiltersMembers } from 'src/store/reducer';

// == state ==
const mapStateToProps = state => ({
  listMembers: state.listMembers,
  filterSpeMembers: state.filterSpeMembers,
  filterPromoMembers: state.filterPromoMembers,
  filterStatusMembers: state.filterStatusMembers,
  filterTextMembers: state.filterTextMembers,
  listSpe: state.listSpe,
  listPromo: state.listPromo,
  listStatus: state.listStatus,
});

// == dispacth ==
const mapDispatchToProps = dispatch => ({
  getMembers: () => {
    dispatch(getMembers());
  },
  getFilters: () => {
    dispatch(getFiltersMembers());
  },

});


// Container
const MembersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Members);

// Export
export default MembersContainer;
