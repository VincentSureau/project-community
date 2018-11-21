// npm import
import { connect } from 'react-redux';

// local import
import MemberEdit from 'src/components/MemberEdit';

// action creators
import { getMemberEdit, changeInputForm, getCompetences, putMember, deleteMember } from 'src/store/reducer';

// == state ==
const mapStateToProps = state => ({
  member: state.member,
  value: state.value,
  competences: state.competences,
});

// == dispacth ==
const mapDispatchToProps = dispatch => ({
  getMemberWithId: (id) => {
    dispatch(getMemberEdit(id));
  },

  onChangeInput: (name, value) => {
    dispatch(changeInputForm(name, value));
  },

  getCompetences: () => {
    dispatch(getCompetences());
  },

  postChangeMember: (data, id) => {
    dispatch(putMember(id, data));
  },

  deleteMember: (id) => {
    dispatch(deleteMember(id));
  },

});


// Container
const MemberEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MemberEdit);

// Export
export default MemberEditContainer;
