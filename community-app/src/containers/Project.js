// npm import
import { connect } from 'react-redux';

// local import
import Project from 'src/components/Project';

// action creators
import { getProject } from 'src/store/actions/projectsActions';

// == state ==
const mapStateToProps = state => ({
  project: state.project,
});

// == dispacth ==
const mapDispatchToProps = dispatch => ({
  getProjectWithId: (id) => {
    dispatch(getProject(id));
  },
});


// Container
const PrrojectContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Project);

// Export
export default PrrojectContainer;
