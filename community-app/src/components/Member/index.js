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

  render() {
    // const { name } = this.props.member.promotion;
    if (this.props.member !== null) {
      const { promotion } = this.props.member;
      // var { bar: { bas } } = foo; // Effectively `var bas = foo.bar.bas;`
      // const { member: {promotion: { name }} } = this.props; // Effectively `var bas = foo.bar.bas;`
      console.log(promotion);
      // console.log(promotion.name);
    }


    return (
      <div id="member">
        <section id="member-info" className="d-flex flex-column justify-content-center align-items-center bg-member">
          {/* <SingleMember /> */}
          <ContactBar />
          
        </section>
        <Biography />
        <ProjectLink />
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
