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
  id,
  members,
}) => {
  const heroImage = images.filter(projectImage => projectImage.isHero === true);

  // Get specialisations from member participating in the project
  const specialisations = members.reduce((acc, curr) => `${acc} ${curr.specialisation.name}`, []);
  // Convert into string (because some of the results are not strings)
  const speString = specialisations.toString();

  // if specialisations is a string, split the string into words and put them in an array,
  // remove first element of array (which was an empty string)
  const speArray = speString.split(' ').splice(1);

  // Function to get only unique value from array
  // https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  const uniqueSpeArray = speArray.filter(onlyUnique);

  return (
    <div id="projectitem" className="col-6">
      <NavLink activeClassName="" className="no-blue-on-link" exact to={id}>
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
  id: PropTypes.string.isRequired,
  members: PropTypes.array.isRequired,
};

/**
 * Export
 */
export default ProjectItem;
