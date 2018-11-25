// npm import
import { connect } from 'react-redux';

// local import
import Home from 'src/components/Home';

// action creators
import { getHomeData } from 'src/store/actions/homeActions';

// == state ==
const mapStateToProps = state => ({
  members: state.membersHome,
  projects: state.projectsHome,
});

// == dispacth ==
const mapDispatchToProps = dispatch => ({
  getHomeData: () => {
    dispatch(getHomeData());
  },
});


// Container
const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

// Export
export default HomeContainer;
