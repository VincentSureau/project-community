/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Components
import SelectInput from '../SelectInput';
import TextInput from '../TextInput';
import ArrowDown from '../ArrowDown';
import ProjectItem from './ProjectItem';
// Styles
import './projects.scss';

/**
 * Code
 */
class Projects extends React.Component {
  componentDidMount() {
    const { getProjects } = this.props;
    getProjects();
  }

  render() {
    const { listProjects } = this.props;
    // console.log(listProjects);
    return (
      <div id="projects">
        <section id="projects-presentation" className="d-flex flex-column justify-content-center align-items-center bg-h-100vh bg-projects">
          <h1 className="text-uppercase">Projets</h1>
          <h3 className="text-uppercase">Des exploits fait en un mois !</h3>
          <div id="projects-form" className="row w-100">
            <SelectInput />
            <SelectInput />
            <TextInput />
          </div>
          <ArrowDown />
        </section>
        <section id="projects-list" className="bg-projects-darker justify-content-center row">
          {listProjects.map(project => (
            <ProjectItem
              key={project['@id']}
              title={project.name}
              promotion={project.promotion.name}
              images={project.images}
              id={project['@id']}
              members={project.appUsers}
            />))}
        </section>
      </div>

    );
  }
}

Projects.propTypes = {
  listProjects: PropTypes.array.isRequired,
  getProjects: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Projects;
