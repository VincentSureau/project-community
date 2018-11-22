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
import SingleMember from '../SingleMember';

// Styles
import './members.scss';


/**
 * Code
 */
class Members extends React.Component {
  componentDidMount() {
    const { getMembers, getFilters } = this.props;
    getMembers();
    getFilters();
  }

  render() {
    const {
      listSpe,
      listPromo,
      listStatus,
      filterSpeMembers
    } = this.props;
    let { listMembers } = this.props;
    if (filterSpeMembers !== "" && listMembers !== null) {
      listMembers = listMembers.filter(member => member.specialisation.name.toLowerCase() === `${filterSpeMembers}`);
    }
    return (
      <div id="members">
        <section id="members-presentation" className="d-flex flex-column justify-content-center align-items-center bg-h-100vh bg-members">
          <h1>Étudiants</h1>
          <h3>Vous êtes prêts ? Eux oui !</h3>
          <div id="members-form" className="row w-100">
            { (listSpe !== null) ? <SelectInput type="Spécialisation" list={listSpe} /> : <p>Loading</p> }
            { (listPromo !== null) ? <SelectInput type="Promotion" list={listPromo} /> : <p>Loading</p> }
            { (listStatus !== null) ? <SelectInput type="Status Profressionel" list={listStatus} /> : <p>Loading</p> }
            {/*<TextInput />*/}
          </div>
          <ArrowDown />
        </section>
        <section id="members-list" className="bg-members-darker justify-content-center row">
          {listMembers.map(member => (
            <SingleMember
              key={member.slug}
              firstname={member.firstname}
              lastname={member.lastname}
              promotion={member.promotion.name}
              specialisation={member.specialisation.name}
              profilePicture={member.profilePicture}
              slug={member.slug}
            />))}
        </section>
      </div>
    );
  }
}

Members.propTypes = {
  listMembers: PropTypes.array.isRequired,
  getMembers: PropTypes.func.isRequired,
  filterSpe: PropTypes.string,
};

Members.defaultProps = {
  filterSpe: '',
};

/**
 * Export
 */
export default Members;
