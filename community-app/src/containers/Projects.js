// npm import
import { connect } from 'react-redux';

// local import
import Projects from 'src/components/Projects';

// action creators
import { getProjects } from 'src/store/reducer';

// == state ==
const mapStateToProps = state => ({
  listProjects: state.listProjects,
});

// == dispacth ==
const mapDispatchToProps = dispatch => ({
  getProjects: () => {
    dispatch(getProjects());
  },
});


// Container
const ProjectsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects);

// Export
export default ProjectsContainer;
