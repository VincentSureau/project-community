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
      filterSpeMembers,
      filterPromoMembers,
      filterStatusMembers,
    } = this.props;
    let { listMembers } = this.props;
    if (filterSpeMembers !== "" && listMembers !== null) {
      listMembers = listMembers.filter(member => member.specialisation.name === `${filterSpeMembers}`);
    }
    if (filterPromoMembers !== "" && listMembers !== null) {
      listMembers = listMembers.filter(member => member.promotion.name === `${filterPromoMembers}`);
    }
    if (filterStatusMembers !== "" && listMembers !== null) {
      listMembers = listMembers.filter(member => member.professionalStatus.name === `${filterStatusMembers}`);
    }
    return (
      <div id="members">
        <section id="members-presentation" className="d-flex flex-column justify-content-center align-items-center bg-h-100vh bg-members">
          <h1>Étudiants</h1>
          <h3>Vous êtes prêts ? Eux oui !</h3>
          <div id="members-form" className="row w-100">
            { (listSpe !== null) ? <SelectInput type="Spécialisation" list={listSpe} page="Members" /> : <p>Loading</p> }
            { (listPromo !== null) ? <SelectInput type="Promotion" list={listPromo} page="Members" /> : <p>Loading</p> }
            { (listStatus !== null) ? <SelectInput type="Status Professionnel" list={listStatus} page="Members" /> : <p>Loading</p> }
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
