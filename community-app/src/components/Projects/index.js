/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Components
import SelectInput from '../../containers/SelectInput';
import TextInput from '../../containers/TextInput';
import ArrowDown from '../ArrowDown';
import ProjectItem from './ProjectItem';
// Styles
import './projects.scss';

/**
 * Code
 */
class Projects extends React.Component {
  componentDidMount() {
    const { getProjects, getFilters } = this.props;
    getProjects();
    getFilters();
  }

  render() {
    const {
      listSpe,
      listPromo,
      filterSpeProjects,
      filterPromoProjects,
      filterTextProjects,
    } = this.props;
    let { listProjects } = this.props;

    // Fonction qui permet de récupérer uniquement une fois chaque valeur d'un tableau
    // https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    // Mise en place des filtres
    if (filterSpeProjects !== '' && listProjects !== null) {
      listProjects = listProjects.filter(project => project.appUsers.reduce((acc, curr) => `${acc} ${curr.specialisation.name}`, [])
        .toString()
        .split(' ').splice(1)
        .filter(onlyUnique)
        .includes(`${filterSpeProjects}`));
    }
    if (filterPromoProjects !== '' && listProjects !== null) {
      listProjects = listProjects.filter(project => project.promotion.name ===`${filterPromoProjects}`);
    }
    if (filterTextProjects !== '' && listProjects !== null) {
      listProjects = listProjects.filter(project => project.name.includes(filterTextProjects));
    }
    return (
      <div id="projects">
        <section id="projects-presentation" className="d-flex flex-column justify-content-center align-items-center bg-h-100vh bg-projects">
          <h1 className="text-uppercase">Projets</h1>
          <h3 className="text-uppercase">Des exploits fait en un mois !</h3>
          <div id="projects-form" className="row w-100">
            { (listSpe !== null) ? <SelectInput type="Spécialisation" list={listSpe} page="Projects" /> : <p>Loading</p> }
            { (listSpe !== null) ? <SelectInput type="Promotion" list={listPromo} page="Projects" /> : <p>Loading</p> }
            <TextInput type="filterTextProjects" placeholder="Titre" />
          </div>
          <ArrowDown />
        </section>
        <section id="projects-list" className="bg-projects-darker justify-content-center row">
          {listProjects.map(project => (
            <ProjectItem
              key={project['@id']}
              slug={project.slug}
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
  getFilters: PropTypes.func.isRequired,
  listSpe: PropTypes.array.isRequired,
  listPromo: PropTypes.array.isRequired,
  filterSpeProjects: PropTypes.string.isRequired,
  filterPromoProjects: PropTypes.string.isRequired,
  filterTextProjects: PropTypes.string.isRequired,
};


/**
 * Export
 */
export default Projects;
