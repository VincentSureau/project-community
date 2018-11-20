/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Components
import SingleMember from 'src/components/SingleMember';
import ContactBar from './ContactBar';
import Biography from './Biography';
import ProjectLink from './ProjectLink';

// Styles
import './member.scss';

/**
 * Code
 */

class Member extends React.Component {
  componentDidMount() {
    const { getMemberWithId, id } = this.props;
    getMemberWithId(id);
  }

  getNestedObject = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) => (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
  };

  render() {
    const { member } = this.props;
    const promoname = this.getNestedObject(member, ['promotion', 'name']);
    const spename = this.getNestedObject(member, ['specialisation', 'name']);
    console.log(name);

    return (
      <div id="member">
        { (member != null)
          ? (
            <div>
              <section id="member-info" className="d-flex flex-column justify-content-center align-items-center bg-member">
                <SingleMember
                  firstname={member.firstname}
                  lastname={member.lastname}
                  promotion={promoname}
                  specialisation={spename}
                  profilePicture={member.profilePicture}
                />
                <ContactBar />
              </section>
              <Biography />
              <ProjectLink />
            </div>
          )
          : <p>Loading</p>
        }
      </div>
    );
  }
}

Member.propTypes = {
  promotion: PropTypes.objectOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

/**
 * Export
 */
export default Member;
