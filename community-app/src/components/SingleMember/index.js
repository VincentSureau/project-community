/**
 * NPM import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
/**
 * Local import
 */
// Components

// Styles
import './singlemember.scss';

/**
 * Code
 */
class SingleMember extends React.Component {
  getNestedObject = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) => (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
  }

  handleClick() {
    console.log('click');
    const { setMemberIDfromSM, slug, id } = this.props;
    setMemberIDfromSM(id.split('/')[1]);
    window.location.href = ''.concat('/members/', slug);
  }

  render() {
    const {
      id,
      firstname,
      lastname,
      promotion,
      specialisation,
      profilePicture,
      slug,
    } = this.props;
    return (
      <div id="singlemember" className="singlemember col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 d-flex flex-column align-items-center justify-content-center text-center">
        <button type="button" className="no-blue-on-link" onClick={this.handleClick}>
          <img src={profilePicture} className="singlemember-photo" alt="" />
          <p className="singlemember-name">{firstname}</p>
          <p className="singlemember-name name-to-disapear">{lastname}</p>
          <p className="singlemember-prom">#{promotion} #{specialisation}</p>
        </button>
      </div>
    );
  }
}

SingleMember.propTypes = {
  id: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  promotion: PropTypes.string.isRequired,
  specialisation: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  setMemberIDfromSM: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default SingleMember;
