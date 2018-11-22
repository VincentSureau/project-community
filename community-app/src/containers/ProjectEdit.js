// npm import
import { connect } from 'react-redux';

// local import
import ProjectEdit from 'src/components/ProjectEdit';

// action creators
import { getProject, getCompetences } from 'src/store/reducer';

// == state ==
const mapStateToProps = state => ({
  project: state.project,
  // value: state.value,
  competences: state.competences,
});

// == dispacth ==
const mapDispatchToProps = dispatch => ({
  getProjectWithId: (id) => {
    dispatch(getProject(id));
  },

  // onChangeInput: (name, value) => {
  //   dispatch(changeInputForm(name, value));
  // },

  getCompetences: () => {
    dispatch(getCompetences());
  },

  // postChangeMember: (data, id) => {
  //   dispatch(putMember(id, data));
  // },

  // deleteMember: (id) => {
  //   dispatch(deleteMember(id));
  // },

});


// Container
const ProjectEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectEdit);

// Export
export default ProjectEditContainer;
