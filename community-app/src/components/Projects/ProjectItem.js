/**
 * NPM import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
/**
 * Local import
 */
// Components

// Styles
import './projects.scss';

/**
 * Code
 */
const ProjectItem = ({
  title,
  promotion,
  images,
  members,
  slug,
}) => {
  const heroImage = images.filter(projectImage => projectImage.isHero === true);

  // Récupération de la spécialisation des membres du projet
  const specialisations = members.reduce((acc, curr) => `${acc} ${curr.specialisation.name}`, []);
  // Conversion en chaîne de caractères (quelques résultats n'étaient pas des strings)
  const speString = specialisations.toString();

  // Si le résultat est bien un string,
  // couper le string à chaque espace et les mettre dans un tableau,
  // enlever le premier élément du tableau (qui est un string vide)
  const speArray = speString.split(' ').splice(1);

  // Fonction qui permet de récupérer uniquement une fois chaque valeur d'un tableau
  // https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  const uniqueSpeArray = speArray.filter(onlyUnique);

  return (
    <div id="projectitem" className="col-6">
      <NavLink activeClassName="" className="no-blue-on-link" exact to={''.concat('/projects/', slug)}>
        <img id="projectitem-photo" src={heroImage[0].imageLink} alt="" />
        <h1 id="projectitem-title">{title}</h1>
        <p id="projectitem-prom" className="text-uppercase">{`#${promotion}`}</p>
        {uniqueSpeArray.map(specialisation => (
          <span
            key={uuid()}
            className="projectitem-tag"
          >
            {specialisation}
          </span>
        ))}
      </NavLink>
    </div>
  );
};

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  promotion: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  slug: PropTypes.string.isRequired,
  members: PropTypes.array.isRequired,
};

/**
 * Export
 */
export default ProjectItem;
